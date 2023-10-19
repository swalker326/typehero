'use client';

import { createTwoslashInlayProvider } from './twoslash';

import { type OnChange, type OnMount, type OnValidate } from '@monaco-editor/react';
import { setupTypeAcquisition } from '@typescript/ata';
import clsx from 'clsx';
import debounce from 'lodash/debounce';
import type * as monacoType from 'monaco-editor';
import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';
import ts from 'typescript';
import { CodeEditor, LIB_URI } from './code-editor';
import { useResetEditor } from './editor-hooks';
import { libSource } from './editor-types';
import { PrettierFormatProvider } from './prettier';
import { useEditorSettingsStore } from './settings-store';
import { getEventDeltas } from './utils';

function preventSelection(event: Event) {
  event.preventDefault();
}

const VimStatusBar = dynamic(() => import('./vim-mode'), {
  ssr: false,
});

const MIN_HEIGHT = 150;
const COLLAPSE_THRESHOLD = MIN_HEIGHT / 2;

export const TESTS_PATH = 'file:///tests.ts';
export const USER_CODE_PATH = 'file:///user.ts';

export interface SplitEditorProps {
  /** the classes applied to the container div */
  className?: string;
  expandTestPanel: boolean;
  setIsTestPanelExpanded: (isExpanded: boolean) => void;
  tests: string;
  userCode: string;
  onValidate?: {
    tests?: OnValidate;
    user?: OnValidate;
  };
  onMount?: {
    tests?: OnMount;
    user?: OnMount;
  };
  onChange?: {
    tests?: OnChange;
    user?: OnChange;
  };
  monaco: typeof import('monaco-editor') | undefined;
  userEditorState?: monacoType.editor.IStandaloneCodeEditor;
  isTestsReadonly?: boolean;
}

export const hasImports = (code: string) => {
  const x = code.split('\n').filter((c) => c.startsWith('import') || c.startsWith('export'));
  return x.length > 0;
};

const getActualCode = (code: string) =>
  code
    .split('\n')
    .filter((c) => !c.startsWith('import'))
    .join('\n');

// million-ignore
export default function SplitEditor({
  className,
  isTestsReadonly = true,
  expandTestPanel,
  monaco,
  onChange,
  onMount,
  onValidate,
  setIsTestPanelExpanded,
  tests,
  userCode,
  userEditorState,
}: SplitEditorProps) {
  const { settings, updateSettings } = useEditorSettingsStore();
  const { subscribe } = useResetEditor();

  const wrapper = useRef<HTMLDivElement>(null);
  const resizer = useRef<HTMLDivElement>(null);
  const testPanel = useRef<HTMLDivElement>(null);
  const monacoRef = useRef<typeof import('monaco-editor')>();
  const editorRef = useRef<monacoType.editor.IStandaloneCodeEditor>();

  useEffect(() => {
    monacoRef.current = monaco;
  }, [monaco]);
  useEffect(() => {
    editorRef.current = userEditorState;
  }, [userEditorState]);

  // i moved this into onMount to avpid the monacoRef stuff but then you can really debounce it
  const [ata] = useState(() =>
    setupTypeAcquisition({
      projectName: 'TypeHero Playground',
      typescript: ts,
      logger: console,
      delegate: {
        // NOTE: this gets cached so it wont execute if you comment out an import and uncomment it.
        // it will only be called the first time
        receivedFile: (code: string, _path: string) => {
          if (!monacoRef.current || !editorRef.current) {
            return;
          }
          const path = `file://${_path}`;
          const uri = monacoRef.current.Uri.parse(path);
          const model = monacoRef.current.editor.getModel(uri);
          if (!model) {
            monacoRef.current.languages.typescript.typescriptDefaults.addExtraLib(code, path);
            monacoRef.current.editor.createModel(code, 'typescript', uri);
          }

          const userCode = monacoRef.current.editor
            .getModel(monacoRef.current.Uri.parse(USER_CODE_PATH))!
            .getValue();

          const testCode = monacoRef.current.editor
            .getModel(monacoRef.current.Uri.parse(TESTS_PATH))!
            .getValue();

          if (hasImports(userCode)) {
            // console.log('received file: user create d ts');
            monacoRef.current.languages.typescript.typescriptDefaults.addExtraLib(
              getActualCode(userCode),
              'file:///node_modules/@types/user.d.ts',
            );
          } else {
            // console.log('received file: remove extra libs');
            // monacoRef.current.languages.typescript.typescriptDefaults.setExtraLibs([]);
          }

          if (hasImports(testCode)) {
            console.log('received file: test create d ts');
            monacoRef.current.languages.typescript.typescriptDefaults.addExtraLib(
              getActualCode(testCode),
              'file:///node_modules/@types/test.d.ts',
            );
          } else {
            // console.log('remove');
            // monacoRef.current.languages.typescript.typescriptDefaults.setExtraLibs([]);
          }

          onMount?.tests?.(editorRef.current, monacoRef.current);

          // const models = monacoRef.current.editor.getModels();
          // for (const m of models) {
          //   console.log({
          //     model: m.uri.toString(),
          //     value: m.getValue(),
          //   });
          // }
        },
      },
    }),
  );

  const debouncedUserCodeAta = useRef(debounce((code: string) => ata(code), 1000)).current;
  const debouncedTestCodeAta = useRef(debounce((code: string) => ata(code), 1000)).current;

  useEffect(() => {
    const resizerRef = resizer.current;
    const testPanelRef = testPanel.current;
    const wrapperRef = wrapper.current;

    if (!resizerRef || !testPanelRef || !wrapperRef) {
      return;
    }

    let y = 0;
    let initialHeight = testPanelRef.offsetHeight;

    const mouseMoveHandler = (e: MouseEvent | TouchEvent) => {
      // Remove transition during drag because of performance issues
      if (testPanelRef.classList.contains('transition-all')) {
        testPanelRef.classList.remove('transition-all');
      }

      document.body.style.setProperty('cursor', 'row-resize');

      const { dy } = getEventDeltas(e, { x: 0, y });

      const height = initialHeight - dy;

      if (height >= MIN_HEIGHT) {
        testPanelRef.style.height = `${Math.min(height, wrapperRef.offsetHeight)}px`;
        setIsTestPanelExpanded(true);
      } else if (height < COLLAPSE_THRESHOLD) {
        setIsTestPanelExpanded(false);
      }
    };

    const mouseDownHandler = (e: MouseEvent | TouchEvent) => {
      initialHeight = testPanelRef.offsetHeight;

      if (e instanceof MouseEvent) {
        y = e.clientY;
      } else if (e instanceof TouchEvent) {
        y = e.touches[0]?.clientY ?? 0;
      }

      if (e instanceof MouseEvent) {
        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
      } else if (e instanceof TouchEvent) {
        document.addEventListener('touchmove', mouseMoveHandler);
        document.addEventListener('touchend', mouseUpHandler);
      }

      // Prevent selection during drag
      document.addEventListener('selectstart', preventSelection);
    };

    const mouseUpHandler = function () {
      // Restore transition
      testPanelRef.classList.add('transition-all');

      document.body.style.removeProperty('cursor');

      document.removeEventListener('touchmove', mouseMoveHandler);
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('touchend', mouseUpHandler);
      document.removeEventListener('mouseup', mouseUpHandler);

      // Restore selection
      document.removeEventListener('selectstart', preventSelection);

      updateSettings({
        ...settings,
        testPanelHeight:
          testPanelRef.offsetHeight < MIN_HEIGHT ? MIN_HEIGHT : testPanelRef.offsetHeight,
      });
    };

    const resizeHandler = () => {
      if (testPanelRef.offsetHeight >= MIN_HEIGHT) {
        testPanelRef.style.height = `${Math.min(
          testPanelRef.offsetHeight,
          wrapperRef.offsetHeight,
        )}px`;
        setIsTestPanelExpanded(true);
      } else {
        setIsTestPanelExpanded(false);
      }
    };

    window.addEventListener('resize', resizeHandler);
    resizerRef.addEventListener('mousedown', mouseDownHandler);
    resizerRef.addEventListener('touchstart', mouseDownHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
      resizerRef.removeEventListener('mousedown', mouseDownHandler);
      resizerRef.removeEventListener('touchstart', mouseDownHandler);
    };
  }, [settings, updateSettings, setIsTestPanelExpanded]);

  subscribe(
    'resetCode',
    () => {
      if (monaco && userEditorState) {
        onMount?.tests?.(userEditorState, monaco);
      }
    },
    [monaco, userEditorState],
  );

  return (
    <div className={clsx('flex h-[calc(100%-_90px)] flex-col', className)} ref={wrapper}>
      <section className="h-full overflow-hidden">
        <CodeEditor
          className="overflow-hidden"
          height={userEditorState && settings.bindings === 'vim' ? 'calc(100% - 36px)' : '100%'}
          defaultPath={USER_CODE_PATH}
          onMount={async (editor, monaco) => {
            const libUri = monaco.Uri.parse(LIB_URI);

            monaco.languages.typescript.typescriptDefaults.setEagerModelSync(true);

            if (!monaco.editor.getModel(libUri)) {
              monaco.languages.typescript.javascriptDefaults.addExtraLib(libSource, LIB_URI);
              monaco.editor
                .createModel(libSource, 'typescript', libUri)
                .setEOL(monaco.editor.EndOfLineSequence.LF);
            }

            const model = monaco.editor.getModel(monaco.Uri.parse(USER_CODE_PATH))!;
            const code = model.getValue();
            debouncedUserCodeAta(code);
            monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
              ...monaco.languages.typescript.typescriptDefaults.getCompilerOptions(),
              strict: true,
              target: monaco.languages.typescript.ScriptTarget.ESNext,
              strictNullChecks: true,
              moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
              allowSyntheticDefaultImports: true,
              outDir: 'lib', // kills the override input file error
            });

            monaco.languages.registerDocumentFormattingEditProvider(
              'typescript',
              PrettierFormatProvider,
            );

            const getTsWorker = await monaco.languages.typescript.getTypeScriptWorker();
            const tsWorker = await getTsWorker(model.uri);

            monaco.languages.registerInlayHintsProvider(
              'typescript',
              createTwoslashInlayProvider(monaco, tsWorker),
            );

            if (hasImports(code)) {
              console.log('on mount user has import');
              const actualCode = code
                .split('\n')
                .filter((c) => !c.startsWith('import') && !c.startsWith('export'))
                .join('\n');
              if (actualCode) {
                monaco.languages.typescript.typescriptDefaults.setExtraLibs([
                  {
                    content: actualCode,
                    filePath: 'file:///node_modules/@types/user.d.ts',
                  },
                ]);
              }
            } else {
              console.log('on mount tests has no import');
              // monaco.languages.typescript.typescriptDefaults.setExtraLibs([]);
            }

            typeCheck(monaco);
            // this just does the typechecking so the UI can update
            onMount?.user?.(editor, monaco);
          }}
          defaultValue={userCode}
          value={userCode}
          onValidate={onValidate?.user}
          onChange={async (value, changeEvent) => {
            const code = value ?? '';
            debouncedUserCodeAta(code);
            if (hasImports(code)) {
              console.log('on change user has import');
              const actualCode = code
                .split('\n')
                .filter((c) => !c.startsWith('import') && !c.startsWith('export'))
                .join('\n');
              if (actualCode) {
                monaco?.languages.typescript.typescriptDefaults.setExtraLibs([
                  {
                    content: actualCode,
                    filePath: 'file:///node_modules/@types/user.d.ts',
                  },
                ]);
              }
              // we'll need to typecheck tests here in the event that you uncomment the same import
              // because `receivedFile` wont be called again
              setTimeout(() => {
                // send to next tick
                onMount?.tests?.(editorRef.current!, monacoRef.current!);
              });
            } else {
              console.log('on mount tests has no import');
              // we want to blow away the user.d.ts because
              // 1. its no longer needed
              // 2. so you dont get duplicate type errors if you add imports back in
              monaco?.languages.typescript.typescriptDefaults.addExtraLib(
                '',
                'file:///node_modules/@types/user.d.ts',
              );
            }
            typeCheck(monaco!);
            onChange?.user?.(value, changeEvent);
          }}
        />
        {userEditorState && settings.bindings === 'vim' && (
          <VimStatusBar editor={userEditorState} />
        )}
      </section>
      <div
        className="transition-all"
        style={{
          height: `${expandTestPanel ? settings.testPanelHeight || MIN_HEIGHT : 0}px`,
        }}
        ref={testPanel}
      >
        <div
          className="group cursor-row-resize border-y border-zinc-200 bg-zinc-100 p-2 dark:border-zinc-700 dark:bg-zinc-800"
          ref={resizer}
          onDoubleClick={() => {
            setIsTestPanelExpanded(false);
          }}
        >
          <div className="group-hover:bg-primary group-hover:dark:bg-primary group-active:bg-primary m-auto h-1 w-24 rounded-full bg-zinc-300 duration-300 dark:bg-zinc-700" />
        </div>
        <CodeEditor
          options={{
            lineNumbers: 'off',
            renderValidationDecorations: 'on',
            readOnly: isTestsReadonly,
          }}
          onMount={(editor, monaco) => {
            const testModel = monaco.editor.getModel(monaco.Uri.parse(TESTS_PATH))!;
            const testCode = testModel.getValue();
            debouncedTestCodeAta(testCode);

            if (hasImports(testCode)) {
              console.log('on mount tests has import');
              const actualCode = testCode
                .split('\n')
                .filter((c) => !c.startsWith('import'))
                .join('\n');
              if (actualCode) {
                monaco.languages.typescript.typescriptDefaults.setExtraLibs([
                  {
                    content: actualCode,
                    filePath: 'file:///node_modules/@types/test.d.ts',
                  },
                ]);
              }
            } else {
              console.log('on mount tests has no import');
              // monaco.languages.typescript.typescriptDefaults.setExtraLibs([]);
            }

            typeCheck(monaco);
            // this just does the typechecking so the UI can update
            onMount?.tests?.(editor, monaco);
          }}
          defaultPath={TESTS_PATH}
          value={tests}
          defaultValue={tests}
          onChange={async (editor, changeEvent) => {
            const code = editor ?? '';
            debouncedTestCodeAta(code);
            if (hasImports(code)) {
              console.log('on change tests has import');
              const actualCode = code
                .split('\n')
                .filter((c) => !c.startsWith('import'))
                .join('\n');
              if (actualCode) {
                monaco?.languages.typescript.typescriptDefaults.setExtraLibs([
                  {
                    content: actualCode,
                    filePath: 'file:///node_modules/@types/test.d.ts',
                  },
                ]);
              }
            } else {
              console.log('on change tests has no import');
            }

            onChange?.tests?.(editor, changeEvent);
          }}
          onValidate={onValidate?.tests}
        />
      </div>
    </div>
  );
}

async function typeCheck(monaco: typeof monacoType) {
  const models = monaco.editor.getModels();
  const getWorker = await monaco.languages.typescript.getTypeScriptWorker();

  for (const model of models) {
    const worker = await getWorker(model.uri);
    const diagnostics = (
      await Promise.all([
        worker.getSyntacticDiagnostics(model.uri.toString()),
        worker.getSemanticDiagnostics(model.uri.toString()),
      ])
    ).reduce((a, b) => a.concat(b));

    const markers = diagnostics.map((d) => {
      const start = model.getPositionAt(d.start!);
      const end = model.getPositionAt(d.start! + d.length!);

      return {
        severity: monaco.MarkerSeverity.Error,
        startLineNumber: start.lineNumber,
        endLineNumber: end.lineNumber,
        startColumn: start.column,
        endColumn: end.column,
        message: d.messageText as string,
      } satisfies monacoType.editor.IMarkerData;
    });

    // console.log({ model: model.uri.path, diagnostics });

    monaco.editor.setModelMarkers(model, model.getLanguageId(), markers);
  }
}
