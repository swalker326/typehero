/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.50.0-rc(ada2b3d6ae3e56d93f718e47f61f15f023734a14)
 * Released under the MIT license
 * https://github.com/microsoft/vscode/blob/main/LICENSE.txt
 *-----------------------------------------------------------*/ (function () {
  var J = [
      'require',
      'exports',
      'vs/editor/common/core/range',
      'vs/editor/common/core/offsetRange',
      'vs/editor/common/core/position',
      'vs/base/common/errors',
      'vs/base/common/strings',
      'vs/base/common/arrays',
      'vs/editor/common/diff/defaultLinesDiffComputer/algorithms/diffAlgorithm',
      'vs/base/common/assert',
      'vs/base/common/event',
      'vs/editor/common/core/lineRange',
      'vs/base/common/arraysFind',
      'vs/base/common/lifecycle',
      'vs/base/common/objects',
      'vs/editor/common/diff/defaultLinesDiffComputer/utils',
      'vs/editor/common/diff/rangeMapping',
      'vs/base/common/platform',
      'vs/base/common/uri',
      'vs/nls',
      'vs/base/common/functional',
      'vs/base/common/iterator',
      'vs/base/common/linkedList',
      'vs/base/common/map',
      'vs/base/common/stopwatch',
      'vs/base/common/diff/diff',
      'vs/base/common/types',
      'vs/base/common/codiconsUtil',
      'vs/base/common/uint',
      'vs/editor/common/core/characterClassifier',
      'vs/editor/common/core/textLength',
      'vs/editor/common/core/wordHelper',
      'vs/editor/common/diff/defaultLinesDiffComputer/algorithms/myersDiffAlgorithm',
      'vs/editor/common/diff/defaultLinesDiffComputer/linesSliceCharSequence',
      'vs/editor/common/diff/linesDiffComputer',
      'vs/base/common/cache',
      'vs/base/common/color',
      'vs/base/common/diff/diffChange',
      'vs/base/common/keyCodes',
      'vs/base/common/lazy',
      'vs/base/common/cancellation',
      'vs/base/common/hash',
      'vs/base/common/codiconsLibrary',
      'vs/base/common/codicons',
      'vs/editor/common/core/selection',
      'vs/editor/common/core/positionToOffset',
      'vs/editor/common/core/textEdit',
      'vs/editor/common/core/wordCharacterClassifier',
      'vs/editor/common/diff/defaultLinesDiffComputer/heuristicSequenceOptimizations',
      'vs/editor/common/diff/defaultLinesDiffComputer/lineSequence',
      'vs/editor/common/diff/defaultLinesDiffComputer/algorithms/dynamicProgrammingDiffing',
      'vs/editor/common/diff/defaultLinesDiffComputer/computeMovedLines',
      'vs/editor/common/diff/defaultLinesDiffComputer/defaultLinesDiffComputer',
      'vs/editor/common/diff/legacyLinesDiffComputer',
      'vs/editor/common/diff/linesDiffComputers',
      'vs/editor/common/languages/defaultDocumentColorsComputer',
      'vs/editor/common/languages/linkComputer',
      'vs/editor/common/languages/supports/inplaceReplaceSupport',
      'vs/editor/common/model',
      'vs/editor/common/model/prefixSumComputer',
      'vs/editor/common/model/mirrorTextModel',
      'vs/editor/common/model/textModelSearch',
      'vs/editor/common/services/findSectionHeaders',
      'vs/editor/common/services/unicodeTextModelHighlighter',
      'vs/editor/common/standalone/standaloneEnums',
      'vs/editor/common/tokenizationRegistry',
      'vs/nls!vs/base/common/platform',
      'vs/nls!vs/base/common/worker/simpleWorker',
      'vs/base/common/process',
      'vs/base/common/path',
      'vs/nls!vs/editor/common/languages',
      'vs/editor/common/languages',
      'vs/editor/common/services/editorBaseApi',
      'vs/base/common/worker/simpleWorker',
      'vs/editor/common/services/editorSimpleWorker',
    ],
    K = function (W) {
      for (var r = [], n = 0, D = W.length; n < D; n++) r[n] = J[W[n]];
      return r;
    };
  const Re = this,
    Ae = typeof global == 'object' ? global : {};
  var ue;
  (function (W) {
    W.global = Re;
    class r {
      get isWindows() {
        return this._detect(), this._isWindows;
      }
      get isNode() {
        return this._detect(), this._isNode;
      }
      get isElectronRenderer() {
        return this._detect(), this._isElectronRenderer;
      }
      get isWebWorker() {
        return this._detect(), this._isWebWorker;
      }
      get isElectronNodeIntegrationWebWorker() {
        return this._detect(), this._isElectronNodeIntegrationWebWorker;
      }
      constructor() {
        (this._detected = !1),
          (this._isWindows = !1),
          (this._isNode = !1),
          (this._isElectronRenderer = !1),
          (this._isWebWorker = !1),
          (this._isElectronNodeIntegrationWebWorker = !1);
      }
      _detect() {
        this._detected ||
          ((this._detected = !0),
          (this._isWindows = r._isWindows()),
          (this._isNode = typeof module < 'u' && !!module.exports),
          (this._isElectronRenderer =
            typeof process < 'u' &&
            typeof process.versions < 'u' &&
            typeof process.versions.electron < 'u' &&
            process.type === 'renderer'),
          (this._isWebWorker = typeof W.global.importScripts == 'function'),
          (this._isElectronNodeIntegrationWebWorker =
            this._isWebWorker &&
            typeof process < 'u' &&
            typeof process.versions < 'u' &&
            typeof process.versions.electron < 'u' &&
            process.type === 'worker'));
      }
      static _isWindows() {
        return typeof navigator < 'u' &&
          navigator.userAgent &&
          navigator.userAgent.indexOf('Windows') >= 0
          ? !0
          : typeof process < 'u'
            ? process.platform === 'win32'
            : !1;
      }
    }
    W.Environment = r;
  })(ue || (ue = {}));
  var ue;
  (function (W) {
    class r {
      constructor(b, f, p) {
        (this.type = b), (this.detail = f), (this.timestamp = p);
      }
    }
    W.LoaderEvent = r;
    class n {
      constructor(b) {
        this._events = [new r(1, '', b)];
      }
      record(b, f) {
        this._events.push(new r(b, f, W.Utilities.getHighPerformanceTimestamp()));
      }
      getEvents() {
        return this._events;
      }
    }
    W.LoaderEventRecorder = n;
    class D {
      record(b, f) {}
      getEvents() {
        return [];
      }
    }
    (D.INSTANCE = new D()), (W.NullLoaderEventRecorder = D);
  })(ue || (ue = {}));
  var ue;
  (function (W) {
    class r {
      static fileUriToFilePath(D, A) {
        if (((A = decodeURI(A).replace(/%23/g, '#')), D)) {
          if (/^file:\/\/\//.test(A)) return A.substr(8);
          if (/^file:\/\//.test(A)) return A.substr(5);
        } else if (/^file:\/\//.test(A)) return A.substr(7);
        return A;
      }
      static startsWith(D, A) {
        return D.length >= A.length && D.substr(0, A.length) === A;
      }
      static endsWith(D, A) {
        return D.length >= A.length && D.substr(D.length - A.length) === A;
      }
      static containsQueryString(D) {
        return /^[^\#]*\?/gi.test(D);
      }
      static isAbsolutePath(D) {
        return /^((http:\/\/)|(https:\/\/)|(file:\/\/)|(\/))/.test(D);
      }
      static forEachProperty(D, A) {
        if (D) {
          let b;
          for (b in D) D.hasOwnProperty(b) && A(b, D[b]);
        }
      }
      static isEmpty(D) {
        let A = !0;
        return (
          r.forEachProperty(D, () => {
            A = !1;
          }),
          A
        );
      }
      static recursiveClone(D) {
        if (
          !D ||
          typeof D != 'object' ||
          D instanceof RegExp ||
          (!Array.isArray(D) && Object.getPrototypeOf(D) !== Object.prototype)
        )
          return D;
        let A = Array.isArray(D) ? [] : {};
        return (
          r.forEachProperty(D, (b, f) => {
            f && typeof f == 'object' ? (A[b] = r.recursiveClone(f)) : (A[b] = f);
          }),
          A
        );
      }
      static generateAnonymousModule() {
        return '===anonymous' + r.NEXT_ANONYMOUS_ID++ + '===';
      }
      static isAnonymousModule(D) {
        return r.startsWith(D, '===anonymous');
      }
      static getHighPerformanceTimestamp() {
        return (
          this.PERFORMANCE_NOW_PROBED ||
            ((this.PERFORMANCE_NOW_PROBED = !0),
            (this.HAS_PERFORMANCE_NOW =
              W.global.performance && typeof W.global.performance.now == 'function')),
          this.HAS_PERFORMANCE_NOW ? W.global.performance.now() : Date.now()
        );
      }
    }
    (r.NEXT_ANONYMOUS_ID = 1),
      (r.PERFORMANCE_NOW_PROBED = !1),
      (r.HAS_PERFORMANCE_NOW = !1),
      (W.Utilities = r);
  })(ue || (ue = {}));
  var ue;
  (function (W) {
    function r(A) {
      if (A instanceof Error) return A;
      const b = new Error(A.message || String(A) || 'Unknown Error');
      return A.stack && (b.stack = A.stack), b;
    }
    W.ensureError = r;
    class n {
      static validateConfigurationOptions(b) {
        function f(p) {
          if (p.phase === 'loading') {
            console.error('Loading "' + p.moduleId + '" failed'),
              console.error(p),
              console.error('Here are the modules that depend on it:'),
              console.error(p.neededBy);
            return;
          }
          if (p.phase === 'factory') {
            console.error('The factory function of "' + p.moduleId + '" has thrown an exception'),
              console.error(p),
              console.error('Here are the modules that depend on it:'),
              console.error(p.neededBy);
            return;
          }
        }
        if (
          ((b = b || {}),
          typeof b.baseUrl != 'string' && (b.baseUrl = ''),
          typeof b.isBuild != 'boolean' && (b.isBuild = !1),
          typeof b.paths != 'object' && (b.paths = {}),
          typeof b.config != 'object' && (b.config = {}),
          typeof b.catchError > 'u' && (b.catchError = !1),
          typeof b.recordStats > 'u' && (b.recordStats = !1),
          typeof b.urlArgs != 'string' && (b.urlArgs = ''),
          typeof b.onError != 'function' && (b.onError = f),
          Array.isArray(b.ignoreDuplicateModules) || (b.ignoreDuplicateModules = []),
          b.baseUrl.length > 0 && (W.Utilities.endsWith(b.baseUrl, '/') || (b.baseUrl += '/')),
          typeof b.cspNonce != 'string' && (b.cspNonce = ''),
          typeof b.preferScriptTags > 'u' && (b.preferScriptTags = !1),
          b.nodeCachedData &&
            typeof b.nodeCachedData == 'object' &&
            (typeof b.nodeCachedData.seed != 'string' && (b.nodeCachedData.seed = 'seed'),
            (typeof b.nodeCachedData.writeDelay != 'number' || b.nodeCachedData.writeDelay < 0) &&
              (b.nodeCachedData.writeDelay = 1e3 * 7),
            !b.nodeCachedData.path || typeof b.nodeCachedData.path != 'string'))
        ) {
          const p = r(new Error("INVALID cached data configuration, 'path' MUST be set"));
          (p.phase = 'configuration'), b.onError(p), (b.nodeCachedData = void 0);
        }
        return b;
      }
      static mergeConfigurationOptions(b = null, f = null) {
        let p = W.Utilities.recursiveClone(f || {});
        return (
          W.Utilities.forEachProperty(b, (h, a) => {
            h === 'ignoreDuplicateModules' && typeof p.ignoreDuplicateModules < 'u'
              ? (p.ignoreDuplicateModules = p.ignoreDuplicateModules.concat(a))
              : h === 'paths' && typeof p.paths < 'u'
                ? W.Utilities.forEachProperty(a, (m, e) => (p.paths[m] = e))
                : h === 'config' && typeof p.config < 'u'
                  ? W.Utilities.forEachProperty(a, (m, e) => (p.config[m] = e))
                  : (p[h] = W.Utilities.recursiveClone(a));
          }),
          n.validateConfigurationOptions(p)
        );
      }
    }
    W.ConfigurationOptionsUtil = n;
    class D {
      constructor(b, f) {
        if (
          ((this._env = b),
          (this.options = n.mergeConfigurationOptions(f)),
          this._createIgnoreDuplicateModulesMap(),
          this._createSortedPathsRules(),
          this.options.baseUrl === '' &&
            this.options.nodeRequire &&
            this.options.nodeRequire.main &&
            this.options.nodeRequire.main.filename &&
            this._env.isNode)
        ) {
          let p = this.options.nodeRequire.main.filename,
            h = Math.max(p.lastIndexOf('/'), p.lastIndexOf('\\'));
          this.options.baseUrl = p.substring(0, h + 1);
        }
      }
      _createIgnoreDuplicateModulesMap() {
        this.ignoreDuplicateModulesMap = {};
        for (let b = 0; b < this.options.ignoreDuplicateModules.length; b++)
          this.ignoreDuplicateModulesMap[this.options.ignoreDuplicateModules[b]] = !0;
      }
      _createSortedPathsRules() {
        (this.sortedPathsRules = []),
          W.Utilities.forEachProperty(this.options.paths, (b, f) => {
            Array.isArray(f)
              ? this.sortedPathsRules.push({ from: b, to: f })
              : this.sortedPathsRules.push({ from: b, to: [f] });
          }),
          this.sortedPathsRules.sort((b, f) => f.from.length - b.from.length);
      }
      cloneAndMerge(b) {
        return new D(this._env, n.mergeConfigurationOptions(b, this.options));
      }
      getOptionsLiteral() {
        return this.options;
      }
      _applyPaths(b) {
        let f;
        for (let p = 0, h = this.sortedPathsRules.length; p < h; p++)
          if (((f = this.sortedPathsRules[p]), W.Utilities.startsWith(b, f.from))) {
            let a = [];
            for (let m = 0, e = f.to.length; m < e; m++) a.push(f.to[m] + b.substr(f.from.length));
            return a;
          }
        return [b];
      }
      _addUrlArgsToUrl(b) {
        return W.Utilities.containsQueryString(b)
          ? b + '&' + this.options.urlArgs
          : b + '?' + this.options.urlArgs;
      }
      _addUrlArgsIfNecessaryToUrl(b) {
        return this.options.urlArgs ? this._addUrlArgsToUrl(b) : b;
      }
      _addUrlArgsIfNecessaryToUrls(b) {
        if (this.options.urlArgs)
          for (let f = 0, p = b.length; f < p; f++) b[f] = this._addUrlArgsToUrl(b[f]);
        return b;
      }
      moduleIdToPaths(b) {
        if (
          this._env.isNode &&
          this.options.amdModulesPattern instanceof RegExp &&
          !this.options.amdModulesPattern.test(b)
        )
          return this.isBuild() ? ['empty:'] : ['node|' + b];
        let f = b,
          p;
        if (!W.Utilities.endsWith(f, '.js') && !W.Utilities.isAbsolutePath(f)) {
          p = this._applyPaths(f);
          for (let h = 0, a = p.length; h < a; h++)
            (this.isBuild() && p[h] === 'empty:') ||
              (W.Utilities.isAbsolutePath(p[h]) || (p[h] = this.options.baseUrl + p[h]),
              !W.Utilities.endsWith(p[h], '.js') &&
                !W.Utilities.containsQueryString(p[h]) &&
                (p[h] = p[h] + '.js'));
        } else
          !W.Utilities.endsWith(f, '.js') && !W.Utilities.containsQueryString(f) && (f = f + '.js'),
            (p = [f]);
        return this._addUrlArgsIfNecessaryToUrls(p);
      }
      requireToUrl(b) {
        let f = b;
        return (
          W.Utilities.isAbsolutePath(f) ||
            ((f = this._applyPaths(f)[0]),
            W.Utilities.isAbsolutePath(f) || (f = this.options.baseUrl + f)),
          this._addUrlArgsIfNecessaryToUrl(f)
        );
      }
      isBuild() {
        return this.options.isBuild;
      }
      shouldInvokeFactory(b) {
        return !!(
          !this.options.isBuild ||
          W.Utilities.isAnonymousModule(b) ||
          (this.options.buildForceInvokeFactory && this.options.buildForceInvokeFactory[b])
        );
      }
      isDuplicateMessageIgnoredFor(b) {
        return this.ignoreDuplicateModulesMap.hasOwnProperty(b);
      }
      getConfigForModule(b) {
        if (this.options.config) return this.options.config[b];
      }
      shouldCatchError() {
        return this.options.catchError;
      }
      shouldRecordStats() {
        return this.options.recordStats;
      }
      onError(b) {
        this.options.onError(b);
      }
    }
    W.Configuration = D;
  })(ue || (ue = {}));
  var ue;
  (function (W) {
    class r {
      constructor(a) {
        (this._env = a), (this._scriptLoader = null), (this._callbackMap = {});
      }
      load(a, m, e, c) {
        if (!this._scriptLoader)
          if (this._env.isWebWorker) this._scriptLoader = new A();
          else if (this._env.isElectronRenderer) {
            const { preferScriptTags: u } = a.getConfig().getOptionsLiteral();
            u ? (this._scriptLoader = new n()) : (this._scriptLoader = new b(this._env));
          } else
            this._env.isNode
              ? (this._scriptLoader = new b(this._env))
              : (this._scriptLoader = new n());
        let s = { callback: e, errorback: c };
        if (this._callbackMap.hasOwnProperty(m)) {
          this._callbackMap[m].push(s);
          return;
        }
        (this._callbackMap[m] = [s]),
          this._scriptLoader.load(
            a,
            m,
            () => this.triggerCallback(m),
            (u) => this.triggerErrorback(m, u),
          );
      }
      triggerCallback(a) {
        let m = this._callbackMap[a];
        delete this._callbackMap[a];
        for (let e = 0; e < m.length; e++) m[e].callback();
      }
      triggerErrorback(a, m) {
        let e = this._callbackMap[a];
        delete this._callbackMap[a];
        for (let c = 0; c < e.length; c++) e[c].errorback(m);
      }
    }
    class n {
      attachListeners(a, m, e) {
        let c = () => {
            a.removeEventListener('load', s), a.removeEventListener('error', u);
          },
          s = (d) => {
            c(), m();
          },
          u = (d) => {
            c(), e(d);
          };
        a.addEventListener('load', s), a.addEventListener('error', u);
      }
      load(a, m, e, c) {
        if (/^node\|/.test(m)) {
          let s = a.getConfig().getOptionsLiteral(),
            u = f(a.getRecorder(), s.nodeRequire || W.global.nodeRequire),
            d = m.split('|'),
            o = null;
          try {
            o = u(d[1]);
          } catch (_) {
            c(_);
            return;
          }
          a.enqueueDefineAnonymousModule([], () => o), e();
        } else {
          let s = document.createElement('script');
          s.setAttribute('async', 'async'),
            s.setAttribute('type', 'text/javascript'),
            this.attachListeners(s, e, c);
          const { trustedTypesPolicy: u } = a.getConfig().getOptionsLiteral();
          u && (m = u.createScriptURL(m)), s.setAttribute('src', m);
          const { cspNonce: d } = a.getConfig().getOptionsLiteral();
          d && s.setAttribute('nonce', d), document.getElementsByTagName('head')[0].appendChild(s);
        }
      }
    }
    function D(h) {
      const { trustedTypesPolicy: a } = h.getConfig().getOptionsLiteral();
      try {
        return (a ? self.eval(a.createScript('', 'true')) : new Function('true')).call(self), !0;
      } catch {
        return !1;
      }
    }
    class A {
      constructor() {
        this._cachedCanUseEval = null;
      }
      _canUseEval(a) {
        return (
          this._cachedCanUseEval === null && (this._cachedCanUseEval = D(a)), this._cachedCanUseEval
        );
      }
      load(a, m, e, c) {
        if (/^node\|/.test(m)) {
          const s = a.getConfig().getOptionsLiteral(),
            u = f(a.getRecorder(), s.nodeRequire || W.global.nodeRequire),
            d = m.split('|');
          let o = null;
          try {
            o = u(d[1]);
          } catch (_) {
            c(_);
            return;
          }
          a.enqueueDefineAnonymousModule([], function () {
            return o;
          }),
            e();
        } else {
          const { trustedTypesPolicy: s } = a.getConfig().getOptionsLiteral();
          if (
            !(
              /^((http:)|(https:)|(file:))/.test(m) &&
              m.substring(0, self.origin.length) !== self.origin
            ) &&
            this._canUseEval(a)
          ) {
            fetch(m)
              .then((d) => {
                if (d.status !== 200) throw new Error(d.statusText);
                return d.text();
              })
              .then((d) => {
                (d = `${d}
//# sourceURL=${m}`),
                  (s ? self.eval(s.createScript('', d)) : new Function(d)).call(self),
                  e();
              })
              .then(void 0, c);
            return;
          }
          try {
            s && (m = s.createScriptURL(m)), importScripts(m), e();
          } catch (d) {
            c(d);
          }
        }
      }
    }
    class b {
      constructor(a) {
        (this._env = a), (this._didInitialize = !1), (this._didPatchNodeRequire = !1);
      }
      _init(a) {
        this._didInitialize ||
          ((this._didInitialize = !0),
          (this._fs = a('fs')),
          (this._vm = a('vm')),
          (this._path = a('path')),
          (this._crypto = a('crypto')));
      }
      _initNodeRequire(a, m) {
        const { nodeCachedData: e } = m.getConfig().getOptionsLiteral();
        if (!e || this._didPatchNodeRequire) return;
        this._didPatchNodeRequire = !0;
        const c = this,
          s = a('module');
        function u(d) {
          const o = d.constructor;
          let _ = function (S) {
            try {
              return d.require(S);
            } finally {
            }
          };
          return (
            (_.resolve = function (S, R) {
              return o._resolveFilename(S, d, !1, R);
            }),
            (_.resolve.paths = function (S) {
              return o._resolveLookupPaths(S, d);
            }),
            (_.main = process.mainModule),
            (_.extensions = o._extensions),
            (_.cache = o._cache),
            _
          );
        }
        s.prototype._compile = function (d, o) {
          const _ = s.wrap(d.replace(/^#!.*/, '')),
            w = m.getRecorder(),
            S = c._getCachedDataPath(e, o),
            R = { filename: o };
          let v;
          try {
            const E = c._fs.readFileSync(S);
            (v = E.slice(0, 16)), (R.cachedData = E.slice(16)), w.record(60, S);
          } catch {
            w.record(61, S);
          }
          const i = new c._vm.Script(_, R),
            l = i.runInThisContext(R),
            g = c._path.dirname(o),
            L = u(this),
            C = [this.exports, L, this, o, g, process, Ae, Buffer],
            N = l.apply(this.exports, C);
          return (
            c._handleCachedData(i, _, S, !R.cachedData, m), c._verifyCachedData(i, _, S, v, m), N
          );
        };
      }
      load(a, m, e, c) {
        const s = a.getConfig().getOptionsLiteral(),
          u = f(a.getRecorder(), s.nodeRequire || W.global.nodeRequire),
          d =
            s.nodeInstrumenter ||
            function (_) {
              return _;
            };
        this._init(u), this._initNodeRequire(u, a);
        let o = a.getRecorder();
        if (/^node\|/.test(m)) {
          let _ = m.split('|'),
            w = null;
          try {
            w = u(_[1]);
          } catch (S) {
            c(S);
            return;
          }
          a.enqueueDefineAnonymousModule([], () => w), e();
        } else {
          m = W.Utilities.fileUriToFilePath(this._env.isWindows, m);
          const _ = this._path.normalize(m),
            w = this._getElectronRendererScriptPathOrUri(_),
            S = !!s.nodeCachedData,
            R = S ? this._getCachedDataPath(s.nodeCachedData, m) : void 0;
          this._readSourceAndCachedData(_, R, o, (v, i, l, g) => {
            if (v) {
              c(v);
              return;
            }
            let L;
            i.charCodeAt(0) === b._BOM
              ? (L = b._PREFIX + i.substring(1) + b._SUFFIX)
              : (L = b._PREFIX + i + b._SUFFIX),
              (L = d(L, _));
            const C = { filename: w, cachedData: l },
              N = this._createAndEvalScript(a, L, C, e, c);
            this._handleCachedData(N, L, R, S && !l, a), this._verifyCachedData(N, L, R, g, a);
          });
        }
      }
      _createAndEvalScript(a, m, e, c, s) {
        const u = a.getRecorder();
        u.record(31, e.filename);
        const d = new this._vm.Script(m, e),
          o = d.runInThisContext(e),
          _ = a.getGlobalAMDDefineFunc();
        let w = !1;
        const S = function () {
          return (w = !0), _.apply(null, arguments);
        };
        return (
          (S.amd = _.amd),
          o.call(
            W.global,
            a.getGlobalAMDRequireFunc(),
            S,
            e.filename,
            this._path.dirname(e.filename),
          ),
          u.record(32, e.filename),
          w ? c() : s(new Error(`Didn't receive define call in ${e.filename}!`)),
          d
        );
      }
      _getElectronRendererScriptPathOrUri(a) {
        if (!this._env.isElectronRenderer) return a;
        let m = a.match(/^([a-z])\:(.*)/i);
        return m
          ? `file:///${(m[1].toUpperCase() + ':' + m[2]).replace(/\\/g, '/')}`
          : `file://${a}`;
      }
      _getCachedDataPath(a, m) {
        const e = this._crypto
            .createHash('md5')
            .update(m, 'utf8')
            .update(a.seed, 'utf8')
            .update(process.arch, '')
            .digest('hex'),
          c = this._path.basename(m).replace(/\.js$/, '');
        return this._path.join(a.path, `${c}-${e}.code`);
      }
      _handleCachedData(a, m, e, c, s) {
        a.cachedDataRejected
          ? this._fs.unlink(e, (u) => {
              s.getRecorder().record(62, e),
                this._createAndWriteCachedData(a, m, e, s),
                u && s.getConfig().onError(u);
            })
          : c && this._createAndWriteCachedData(a, m, e, s);
      }
      _createAndWriteCachedData(a, m, e, c) {
        let s = Math.ceil(
            c.getConfig().getOptionsLiteral().nodeCachedData.writeDelay * (1 + Math.random()),
          ),
          u = -1,
          d = 0,
          o;
        const _ = () => {
          setTimeout(() => {
            o || (o = this._crypto.createHash('md5').update(m, 'utf8').digest());
            const w = a.createCachedData();
            if (!(w.length === 0 || w.length === u || d >= 5)) {
              if (w.length < u) {
                _();
                return;
              }
              (u = w.length),
                this._fs.writeFile(e, Buffer.concat([o, w]), (S) => {
                  S && c.getConfig().onError(S), c.getRecorder().record(63, e), _();
                });
            }
          }, s * Math.pow(4, d++));
        };
        _();
      }
      _readSourceAndCachedData(a, m, e, c) {
        if (!m) this._fs.readFile(a, { encoding: 'utf8' }, c);
        else {
          let s,
            u,
            d,
            o = 2;
          const _ = (w) => {
            w ? c(w) : --o === 0 && c(void 0, s, u, d);
          };
          this._fs.readFile(a, { encoding: 'utf8' }, (w, S) => {
            (s = S), _(w);
          }),
            this._fs.readFile(m, (w, S) => {
              !w && S && S.length > 0
                ? ((d = S.slice(0, 16)), (u = S.slice(16)), e.record(60, m))
                : e.record(61, m),
                _();
            });
        }
      }
      _verifyCachedData(a, m, e, c, s) {
        c &&
          (a.cachedDataRejected ||
            setTimeout(
              () => {
                const u = this._crypto.createHash('md5').update(m, 'utf8').digest();
                c.equals(u) ||
                  (s
                    .getConfig()
                    .onError(
                      new Error(
                        `FAILED TO VERIFY CACHED DATA, deleting stale '${e}' now, but a RESTART IS REQUIRED`,
                      ),
                    ),
                  this._fs.unlink(e, (d) => {
                    d && s.getConfig().onError(d);
                  }));
              },
              Math.ceil(5e3 * (1 + Math.random())),
            ));
      }
    }
    (b._BOM = 65279),
      (b._PREFIX = '(function (require, define, __filename, __dirname) { '),
      (b._SUFFIX = `
});`);
    function f(h, a) {
      if (a.__$__isRecorded) return a;
      const m = function (c) {
        h.record(33, c);
        try {
          return a(c);
        } finally {
          h.record(34, c);
        }
      };
      return (m.__$__isRecorded = !0), m;
    }
    W.ensureRecordedNodeRequire = f;
    function p(h) {
      return new r(h);
    }
    W.createScriptLoader = p;
  })(ue || (ue = {}));
  var ue;
  (function (W) {
    class r {
      constructor(h) {
        let a = h.lastIndexOf('/');
        a !== -1 ? (this.fromModulePath = h.substr(0, a + 1)) : (this.fromModulePath = '');
      }
      static _normalizeModuleId(h) {
        let a = h,
          m;
        for (m = /\/\.\//; m.test(a); ) a = a.replace(m, '/');
        for (
          a = a.replace(/^\.\//g, ''),
            m = /\/(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//;
          m.test(a);
        )
          a = a.replace(m, '/');
        return (
          (a = a.replace(
            /^(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//,
            '',
          )),
          a
        );
      }
      resolveModule(h) {
        let a = h;
        return (
          W.Utilities.isAbsolutePath(a) ||
            ((W.Utilities.startsWith(a, './') || W.Utilities.startsWith(a, '../')) &&
              (a = r._normalizeModuleId(this.fromModulePath + a))),
          a
        );
      }
    }
    (r.ROOT = new r('')), (W.ModuleIdResolver = r);
    class n {
      constructor(h, a, m, e, c, s) {
        (this.id = h),
          (this.strId = a),
          (this.dependencies = m),
          (this._callback = e),
          (this._errorback = c),
          (this.moduleIdResolver = s),
          (this.exports = {}),
          (this.error = null),
          (this.exportsPassedIn = !1),
          (this.unresolvedDependenciesCount = this.dependencies.length),
          (this._isComplete = !1);
      }
      static _safeInvokeFunction(h, a) {
        try {
          return { returnedValue: h.apply(W.global, a), producedError: null };
        } catch (m) {
          return { returnedValue: null, producedError: m };
        }
      }
      static _invokeFactory(h, a, m, e) {
        return h.shouldInvokeFactory(a)
          ? h.shouldCatchError()
            ? this._safeInvokeFunction(m, e)
            : { returnedValue: m.apply(W.global, e), producedError: null }
          : { returnedValue: null, producedError: null };
      }
      complete(h, a, m, e) {
        this._isComplete = !0;
        let c = null;
        if (this._callback)
          if (typeof this._callback == 'function') {
            h.record(21, this.strId);
            let s = n._invokeFactory(a, this.strId, this._callback, m);
            (c = s.producedError),
              h.record(22, this.strId),
              !c &&
                typeof s.returnedValue < 'u' &&
                (!this.exportsPassedIn || W.Utilities.isEmpty(this.exports)) &&
                (this.exports = s.returnedValue);
          } else this.exports = this._callback;
        if (c) {
          let s = W.ensureError(c);
          (s.phase = 'factory'),
            (s.moduleId = this.strId),
            (s.neededBy = e(this.id)),
            (this.error = s),
            a.onError(s);
        }
        (this.dependencies = null),
          (this._callback = null),
          (this._errorback = null),
          (this.moduleIdResolver = null);
      }
      onDependencyError(h) {
        return (
          (this._isComplete = !0), (this.error = h), this._errorback ? (this._errorback(h), !0) : !1
        );
      }
      isComplete() {
        return this._isComplete;
      }
    }
    W.Module = n;
    class D {
      constructor() {
        (this._nextId = 0),
          (this._strModuleIdToIntModuleId = new Map()),
          (this._intModuleIdToStrModuleId = []),
          this.getModuleId('exports'),
          this.getModuleId('module'),
          this.getModuleId('require');
      }
      getMaxModuleId() {
        return this._nextId;
      }
      getModuleId(h) {
        let a = this._strModuleIdToIntModuleId.get(h);
        return (
          typeof a > 'u' &&
            ((a = this._nextId++),
            this._strModuleIdToIntModuleId.set(h, a),
            (this._intModuleIdToStrModuleId[a] = h)),
          a
        );
      }
      getStrModuleId(h) {
        return this._intModuleIdToStrModuleId[h];
      }
    }
    class A {
      constructor(h) {
        this.id = h;
      }
    }
    (A.EXPORTS = new A(0)),
      (A.MODULE = new A(1)),
      (A.REQUIRE = new A(2)),
      (W.RegularDependency = A);
    class b {
      constructor(h, a, m) {
        (this.id = h), (this.pluginId = a), (this.pluginParam = m);
      }
    }
    W.PluginDependency = b;
    class f {
      constructor(h, a, m, e, c = 0) {
        (this._env = h),
          (this._scriptLoader = a),
          (this._loaderAvailableTimestamp = c),
          (this._defineFunc = m),
          (this._requireFunc = e),
          (this._moduleIdProvider = new D()),
          (this._config = new W.Configuration(this._env)),
          (this._hasDependencyCycle = !1),
          (this._modules2 = []),
          (this._knownModules2 = []),
          (this._inverseDependencies2 = []),
          (this._inversePluginDependencies2 = new Map()),
          (this._currentAnonymousDefineCall = null),
          (this._recorder = null),
          (this._buildInfoPath = []),
          (this._buildInfoDefineStack = []),
          (this._buildInfoDependencies = []),
          (this._requireFunc.moduleManager = this);
      }
      reset() {
        return new f(
          this._env,
          this._scriptLoader,
          this._defineFunc,
          this._requireFunc,
          this._loaderAvailableTimestamp,
        );
      }
      getGlobalAMDDefineFunc() {
        return this._defineFunc;
      }
      getGlobalAMDRequireFunc() {
        return this._requireFunc;
      }
      static _findRelevantLocationInStack(h, a) {
        let m = (s) => s.replace(/\\/g, '/'),
          e = m(h),
          c = a.split(/\n/);
        for (let s = 0; s < c.length; s++) {
          let u = c[s].match(/(.*):(\d+):(\d+)\)?$/);
          if (u) {
            let d = u[1],
              o = u[2],
              _ = u[3],
              w = Math.max(d.lastIndexOf(' ') + 1, d.lastIndexOf('(') + 1);
            if (((d = d.substr(w)), (d = m(d)), d === e)) {
              let S = { line: parseInt(o, 10), col: parseInt(_, 10) };
              return S.line === 1 && (S.col -= 53), S;
            }
          }
        }
        throw new Error('Could not correlate define call site for needle ' + h);
      }
      getBuildInfo() {
        if (!this._config.isBuild()) return null;
        let h = [],
          a = 0;
        for (let m = 0, e = this._modules2.length; m < e; m++) {
          let c = this._modules2[m];
          if (!c) continue;
          let s = this._buildInfoPath[c.id] || null,
            u = this._buildInfoDefineStack[c.id] || null,
            d = this._buildInfoDependencies[c.id];
          h[a++] = {
            id: c.strId,
            path: s,
            defineLocation: s && u ? f._findRelevantLocationInStack(s, u) : null,
            dependencies: d,
            shim: null,
            exports: c.exports,
          };
        }
        return h;
      }
      getRecorder() {
        return (
          this._recorder ||
            (this._config.shouldRecordStats()
              ? (this._recorder = new W.LoaderEventRecorder(this._loaderAvailableTimestamp))
              : (this._recorder = W.NullLoaderEventRecorder.INSTANCE)),
          this._recorder
        );
      }
      getLoaderEvents() {
        return this.getRecorder().getEvents();
      }
      enqueueDefineAnonymousModule(h, a) {
        if (this._currentAnonymousDefineCall !== null)
          throw new Error('Can only have one anonymous define call per script file');
        let m = null;
        this._config.isBuild() && (m = new Error('StackLocation').stack || null),
          (this._currentAnonymousDefineCall = { stack: m, dependencies: h, callback: a });
      }
      defineModule(h, a, m, e, c, s = new r(h)) {
        let u = this._moduleIdProvider.getModuleId(h);
        if (this._modules2[u]) {
          this._config.isDuplicateMessageIgnoredFor(h) ||
            console.warn("Duplicate definition of module '" + h + "'");
          return;
        }
        let d = new n(u, h, this._normalizeDependencies(a, s), m, e, s);
        (this._modules2[u] = d),
          this._config.isBuild() &&
            ((this._buildInfoDefineStack[u] = c),
            (this._buildInfoDependencies[u] = (d.dependencies || []).map((o) =>
              this._moduleIdProvider.getStrModuleId(o.id),
            ))),
          this._resolve(d);
      }
      _normalizeDependency(h, a) {
        if (h === 'exports') return A.EXPORTS;
        if (h === 'module') return A.MODULE;
        if (h === 'require') return A.REQUIRE;
        let m = h.indexOf('!');
        if (m >= 0) {
          let e = a.resolveModule(h.substr(0, m)),
            c = a.resolveModule(h.substr(m + 1)),
            s = this._moduleIdProvider.getModuleId(e + '!' + c),
            u = this._moduleIdProvider.getModuleId(e);
          return new b(s, u, c);
        }
        return new A(this._moduleIdProvider.getModuleId(a.resolveModule(h)));
      }
      _normalizeDependencies(h, a) {
        let m = [],
          e = 0;
        for (let c = 0, s = h.length; c < s; c++) m[e++] = this._normalizeDependency(h[c], a);
        return m;
      }
      _relativeRequire(h, a, m, e) {
        if (typeof a == 'string') return this.synchronousRequire(a, h);
        this.defineModule(W.Utilities.generateAnonymousModule(), a, m, e, null, h);
      }
      synchronousRequire(h, a = new r(h)) {
        let m = this._normalizeDependency(h, a),
          e = this._modules2[m.id];
        if (!e)
          throw new Error(
            "Check dependency list! Synchronous require cannot resolve module '" +
              h +
              "'. This is the first mention of this module!",
          );
        if (!e.isComplete())
          throw new Error(
            "Check dependency list! Synchronous require cannot resolve module '" +
              h +
              "'. This module has not been resolved completely yet.",
          );
        if (e.error) throw e.error;
        return e.exports;
      }
      configure(h, a) {
        let m = this._config.shouldRecordStats();
        a
          ? (this._config = new W.Configuration(this._env, h))
          : (this._config = this._config.cloneAndMerge(h)),
          this._config.shouldRecordStats() && !m && (this._recorder = null);
      }
      getConfig() {
        return this._config;
      }
      _onLoad(h) {
        if (this._currentAnonymousDefineCall !== null) {
          let a = this._currentAnonymousDefineCall;
          (this._currentAnonymousDefineCall = null),
            this.defineModule(
              this._moduleIdProvider.getStrModuleId(h),
              a.dependencies,
              a.callback,
              null,
              a.stack,
            );
        }
      }
      _createLoadError(h, a) {
        let m = this._moduleIdProvider.getStrModuleId(h),
          e = (this._inverseDependencies2[h] || []).map((s) =>
            this._moduleIdProvider.getStrModuleId(s),
          );
        const c = W.ensureError(a);
        return (c.phase = 'loading'), (c.moduleId = m), (c.neededBy = e), c;
      }
      _onLoadError(h, a) {
        const m = this._createLoadError(h, a);
        this._modules2[h] ||
          (this._modules2[h] = new n(
            h,
            this._moduleIdProvider.getStrModuleId(h),
            [],
            () => {},
            null,
            null,
          ));
        let e = [];
        for (let u = 0, d = this._moduleIdProvider.getMaxModuleId(); u < d; u++) e[u] = !1;
        let c = !1,
          s = [];
        for (s.push(h), e[h] = !0; s.length > 0; ) {
          let u = s.shift(),
            d = this._modules2[u];
          d && (c = d.onDependencyError(m) || c);
          let o = this._inverseDependencies2[u];
          if (o)
            for (let _ = 0, w = o.length; _ < w; _++) {
              let S = o[_];
              e[S] || (s.push(S), (e[S] = !0));
            }
        }
        c || this._config.onError(m);
      }
      _hasDependencyPath(h, a) {
        let m = this._modules2[h];
        if (!m) return !1;
        let e = [];
        for (let s = 0, u = this._moduleIdProvider.getMaxModuleId(); s < u; s++) e[s] = !1;
        let c = [];
        for (c.push(m), e[h] = !0; c.length > 0; ) {
          let u = c.shift().dependencies;
          if (u)
            for (let d = 0, o = u.length; d < o; d++) {
              let _ = u[d];
              if (_.id === a) return !0;
              let w = this._modules2[_.id];
              w && !e[_.id] && ((e[_.id] = !0), c.push(w));
            }
        }
        return !1;
      }
      _findCyclePath(h, a, m) {
        if (h === a || m === 50) return [h];
        let e = this._modules2[h];
        if (!e) return null;
        let c = e.dependencies;
        if (c)
          for (let s = 0, u = c.length; s < u; s++) {
            let d = this._findCyclePath(c[s].id, a, m + 1);
            if (d !== null) return d.push(h), d;
          }
        return null;
      }
      _createRequire(h) {
        let a = (m, e, c) => this._relativeRequire(h, m, e, c);
        return (
          (a.toUrl = (m) => this._config.requireToUrl(h.resolveModule(m))),
          (a.getStats = () => this.getLoaderEvents()),
          (a.hasDependencyCycle = () => this._hasDependencyCycle),
          (a.config = (m, e = !1) => {
            this.configure(m, e);
          }),
          (a.__$__nodeRequire = W.global.nodeRequire),
          a
        );
      }
      _loadModule(h) {
        if (this._modules2[h] || this._knownModules2[h]) return;
        this._knownModules2[h] = !0;
        let a = this._moduleIdProvider.getStrModuleId(h),
          m = this._config.moduleIdToPaths(a),
          e = /^@[^\/]+\/[^\/]+$/;
        this._env.isNode && (a.indexOf('/') === -1 || e.test(a)) && m.push('node|' + a);
        let c = -1,
          s = (u) => {
            if ((c++, c >= m.length)) this._onLoadError(h, u);
            else {
              let d = m[c],
                o = this.getRecorder();
              if (this._config.isBuild() && d === 'empty:') {
                (this._buildInfoPath[h] = d),
                  this.defineModule(this._moduleIdProvider.getStrModuleId(h), [], null, null, null),
                  this._onLoad(h);
                return;
              }
              o.record(10, d),
                this._scriptLoader.load(
                  this,
                  d,
                  () => {
                    this._config.isBuild() && (this._buildInfoPath[h] = d),
                      o.record(11, d),
                      this._onLoad(h);
                  },
                  (_) => {
                    o.record(12, d), s(_);
                  },
                );
            }
          };
        s(null);
      }
      _loadPluginDependency(h, a) {
        if (this._modules2[a.id] || this._knownModules2[a.id]) return;
        this._knownModules2[a.id] = !0;
        let m = (e) => {
          this.defineModule(this._moduleIdProvider.getStrModuleId(a.id), [], e, null, null);
        };
        (m.error = (e) => {
          this._config.onError(this._createLoadError(a.id, e));
        }),
          h.load(a.pluginParam, this._createRequire(r.ROOT), m, this._config.getOptionsLiteral());
      }
      _resolve(h) {
        let a = h.dependencies;
        if (a)
          for (let m = 0, e = a.length; m < e; m++) {
            let c = a[m];
            if (c === A.EXPORTS) {
              (h.exportsPassedIn = !0), h.unresolvedDependenciesCount--;
              continue;
            }
            if (c === A.MODULE) {
              h.unresolvedDependenciesCount--;
              continue;
            }
            if (c === A.REQUIRE) {
              h.unresolvedDependenciesCount--;
              continue;
            }
            let s = this._modules2[c.id];
            if (s && s.isComplete()) {
              if (s.error) {
                h.onDependencyError(s.error);
                return;
              }
              h.unresolvedDependenciesCount--;
              continue;
            }
            if (this._hasDependencyPath(c.id, h.id)) {
              (this._hasDependencyCycle = !0),
                console.warn(
                  "There is a dependency cycle between '" +
                    this._moduleIdProvider.getStrModuleId(c.id) +
                    "' and '" +
                    this._moduleIdProvider.getStrModuleId(h.id) +
                    "'. The cyclic path follows:",
                );
              let u = this._findCyclePath(c.id, h.id, 0) || [];
              u.reverse(),
                u.push(c.id),
                console.warn(
                  u
                    .map((d) => this._moduleIdProvider.getStrModuleId(d))
                    .join(` => 
`),
                ),
                h.unresolvedDependenciesCount--;
              continue;
            }
            if (
              ((this._inverseDependencies2[c.id] = this._inverseDependencies2[c.id] || []),
              this._inverseDependencies2[c.id].push(h.id),
              c instanceof b)
            ) {
              let u = this._modules2[c.pluginId];
              if (u && u.isComplete()) {
                this._loadPluginDependency(u.exports, c);
                continue;
              }
              let d = this._inversePluginDependencies2.get(c.pluginId);
              d || ((d = []), this._inversePluginDependencies2.set(c.pluginId, d)),
                d.push(c),
                this._loadModule(c.pluginId);
              continue;
            }
            this._loadModule(c.id);
          }
        h.unresolvedDependenciesCount === 0 && this._onModuleComplete(h);
      }
      _onModuleComplete(h) {
        let a = this.getRecorder();
        if (h.isComplete()) return;
        let m = h.dependencies,
          e = [];
        if (m)
          for (let d = 0, o = m.length; d < o; d++) {
            let _ = m[d];
            if (_ === A.EXPORTS) {
              e[d] = h.exports;
              continue;
            }
            if (_ === A.MODULE) {
              e[d] = { id: h.strId, config: () => this._config.getConfigForModule(h.strId) };
              continue;
            }
            if (_ === A.REQUIRE) {
              e[d] = this._createRequire(h.moduleIdResolver);
              continue;
            }
            let w = this._modules2[_.id];
            if (w) {
              e[d] = w.exports;
              continue;
            }
            e[d] = null;
          }
        const c = (d) =>
          (this._inverseDependencies2[d] || []).map((o) =>
            this._moduleIdProvider.getStrModuleId(o),
          );
        h.complete(a, this._config, e, c);
        let s = this._inverseDependencies2[h.id];
        if (((this._inverseDependencies2[h.id] = null), s))
          for (let d = 0, o = s.length; d < o; d++) {
            let _ = s[d],
              w = this._modules2[_];
            w.unresolvedDependenciesCount--,
              w.unresolvedDependenciesCount === 0 && this._onModuleComplete(w);
          }
        let u = this._inversePluginDependencies2.get(h.id);
        if (u) {
          this._inversePluginDependencies2.delete(h.id);
          for (let d = 0, o = u.length; d < o; d++) this._loadPluginDependency(h.exports, u[d]);
        }
      }
    }
    W.ModuleManager = f;
  })(ue || (ue = {}));
  var X, ue;
  (function (W) {
    const r = new W.Environment();
    let n = null;
    const D = function (p, h, a) {
      typeof p != 'string' && ((a = h), (h = p), (p = null)),
        (typeof h != 'object' || !Array.isArray(h)) && ((a = h), (h = null)),
        h || (h = ['require', 'exports', 'module']),
        p ? n.defineModule(p, h, a, null, null) : n.enqueueDefineAnonymousModule(h, a);
    };
    D.amd = { jQuery: !0 };
    const A = function (p, h = !1) {
        n.configure(p, h);
      },
      b = function () {
        if (arguments.length === 1) {
          if (arguments[0] instanceof Object && !Array.isArray(arguments[0])) {
            A(arguments[0]);
            return;
          }
          if (typeof arguments[0] == 'string') return n.synchronousRequire(arguments[0]);
        }
        if ((arguments.length === 2 || arguments.length === 3) && Array.isArray(arguments[0])) {
          n.defineModule(
            W.Utilities.generateAnonymousModule(),
            arguments[0],
            arguments[1],
            arguments[2],
            null,
          );
          return;
        }
        throw new Error('Unrecognized require call');
      };
    (b.config = A),
      (b.getConfig = function () {
        return n.getConfig().getOptionsLiteral();
      }),
      (b.reset = function () {
        n = n.reset();
      }),
      (b.getBuildInfo = function () {
        return n.getBuildInfo();
      }),
      (b.getStats = function () {
        return n.getLoaderEvents();
      }),
      (b.define = D);
    function f() {
      if (typeof W.global.require < 'u' || typeof require < 'u') {
        const p = W.global.require || require;
        if (typeof p == 'function' && typeof p.resolve == 'function') {
          const h = W.ensureRecordedNodeRequire(n.getRecorder(), p);
          (W.global.nodeRequire = h), (b.nodeRequire = h), (b.__$__nodeRequire = h);
        }
      }
      r.isNode && !r.isElectronRenderer && !r.isElectronNodeIntegrationWebWorker
        ? (module.exports = b)
        : (r.isElectronRenderer || (W.global.define = D), (W.global.require = b));
    }
    (W.init = f),
      (typeof W.global.define != 'function' || !W.global.define.amd) &&
        ((n = new W.ModuleManager(
          r,
          W.createScriptLoader(r),
          D,
          b,
          W.Utilities.getHighPerformanceTimestamp(),
        )),
        typeof W.global.require < 'u' &&
          typeof W.global.require != 'function' &&
          b.config(W.global.require),
        (X = function () {
          return D.apply(null, arguments);
        }),
        (X.amd = D.amd),
        typeof doNotInitLoader > 'u' && f());
  })(ue || (ue = {})),
    X(J[19], K([0, 1]), function (W, r) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.localize = m),
        (r.localize2 = e),
        (r.getConfiguredDefaultLocale = c),
        (r.setPseudoTranslation = s),
        (r.create = u),
        (r.load = d);
      let n =
        typeof document < 'u' &&
        document.location &&
        document.location.hash.indexOf('pseudo=true') >= 0;
      const D = 'i-default';
      function A(o, _) {
        let w;
        return (
          _.length === 0
            ? (w = o)
            : (w = o.replace(/\{(\d+)\}/g, (S, R) => {
                const v = R[0],
                  i = _[v];
                let l = S;
                return (
                  typeof i == 'string'
                    ? (l = i)
                    : (typeof i == 'number' ||
                        typeof i == 'boolean' ||
                        i === void 0 ||
                        i === null) &&
                      (l = String(i)),
                  l
                );
              })),
          n && (w = '\uFF3B' + w.replace(/[aouei]/g, '$&$&') + '\uFF3D'),
          w
        );
      }
      function b(o, _) {
        let w = o[_];
        return w || ((w = o['*']), w) ? w : null;
      }
      function f(o) {
        return o.charAt(o.length - 1) === '/' ? o : o + '/';
      }
      async function p(o, _, w) {
        const S = f(o) + f(_) + 'vscode/' + f(w),
          R = await fetch(S);
        if (R.ok) return await R.json();
        throw new Error(`${R.status} - ${R.statusText}`);
      }
      function h(o) {
        return function (_, w) {
          const S = Array.prototype.slice.call(arguments, 2);
          return A(o[_], S);
        };
      }
      function a(o) {
        return (_, w, ...S) => ({ value: A(o[_], S), original: A(w, S) });
      }
      function m(o, _, ...w) {
        return A(_, w);
      }
      function e(o, _, ...w) {
        const S = A(_, w);
        return { value: S, original: S };
      }
      function c(o) {}
      function s(o) {
        n = o;
      }
      function u(o, _) {
        var w;
        return {
          localize: h(_[o]),
          localize2: a(_[o]),
          getConfiguredDefaultLocale:
            (w = _.getConfiguredDefaultLocale) !== null && w !== void 0 ? w : (S) => {},
        };
      }
      function d(o, _, w, S) {
        var R;
        const v = (R = S['vs/nls']) !== null && R !== void 0 ? R : {};
        if (!o || o.length === 0)
          return w({
            localize: m,
            localize2: e,
            getConfiguredDefaultLocale: () => {
              var C;
              return (C = v.availableLanguages) === null || C === void 0 ? void 0 : C['*'];
            },
          });
        const i = v.availableLanguages ? b(v.availableLanguages, o) : null,
          l = i === null || i === D;
        let g = '.nls';
        l || (g = g + '.' + i);
        const L = (C) => {
          Array.isArray(C)
            ? ((C.localize = h(C)), (C.localize2 = a(C)))
            : ((C.localize = h(C[o])), (C.localize2 = a(C[o]))),
            (C.getConfiguredDefaultLocale = () => {
              var N;
              return (N = v.availableLanguages) === null || N === void 0 ? void 0 : N['*'];
            }),
            w(C);
        };
        typeof v.loadBundle == 'function'
          ? v.loadBundle(o, i, (C, N) => {
              C ? _([o + '.nls'], L) : L(N);
            })
          : v.translationServiceUrl && !l
            ? (async () => {
                var C;
                try {
                  const N = await p(v.translationServiceUrl, i, o);
                  return L(N);
                } catch (N) {
                  if (!i.includes('-')) return console.error(N), _([o + '.nls'], L);
                  try {
                    const E = i.split('-')[0],
                      y = await p(v.translationServiceUrl, E, o);
                    return (
                      ((C = v.availableLanguages) !== null && C !== void 0) ||
                        (v.availableLanguages = {}),
                      (v.availableLanguages['*'] = E),
                      L(y)
                    );
                  } catch (E) {
                    return console.error(E), _([o + '.nls'], L);
                  }
                }
              })()
            : _([o + g], L, (C) => {
                if (g === '.nls') {
                  console.error('Failed trying to load default language strings', C);
                  return;
                }
                console.error(
                  `Failed to load message bundle for language ${i}. Falling back to the default language:`,
                  C,
                ),
                  _([o + '.nls'], L);
              });
      }
    }),
    (function () {
      const W = globalThis.MonacoEnvironment,
        r = W && W.baseUrl ? W.baseUrl : '../../../';
      function n(m, e) {
        var c;
        if (W?.createTrustedTypesPolicy)
          try {
            return W.createTrustedTypesPolicy(m, e);
          } catch (s) {
            console.warn(s);
            return;
          }
        try {
          return (c = self.trustedTypes) === null || c === void 0 ? void 0 : c.createPolicy(m, e);
        } catch (s) {
          console.warn(s);
          return;
        }
      }
      const D = n('amdLoader', {
        createScriptURL: (m) => m,
        createScript: (m, ...e) => {
          const c = e.slice(0, -1).join(','),
            s = e.pop().toString();
          return `(function anonymous(${c}) { ${s}
})`;
        },
      });
      function A() {
        try {
          return (
            (D ? globalThis.eval(D.createScript('', 'true')) : new Function('true')).call(
              globalThis,
            ),
            !0
          );
        } catch {
          return !1;
        }
      }
      function b() {
        return new Promise((m, e) => {
          if (typeof globalThis.define == 'function' && globalThis.define.amd) return m();
          const c = r + 'vs/loader.js';
          if (
            !(
              /^((http:)|(https:)|(file:))/.test(c) &&
              c.substring(0, globalThis.origin.length) !== globalThis.origin
            ) &&
            A()
          ) {
            fetch(c)
              .then((u) => {
                if (u.status !== 200) throw new Error(u.statusText);
                return u.text();
              })
              .then((u) => {
                (u = `${u}
//# sourceURL=${c}`),
                  (D ? globalThis.eval(D.createScript('', u)) : new Function(u)).call(globalThis),
                  m();
              })
              .then(void 0, e);
            return;
          }
          D ? importScripts(D.createScriptURL(c)) : importScripts(c), m();
        });
      }
      function f() {
        require.config({
          baseUrl: r,
          catchError: !0,
          trustedTypesPolicy: D,
          amdModulesPattern: /^vs\//,
        });
      }
      function p(m) {
        b().then(() => {
          f(),
            require([m], function (e) {
              setTimeout(function () {
                const c = e.create((s, u) => {
                  globalThis.postMessage(s, u);
                }, null);
                for (globalThis.onmessage = (s) => c.onmessage(s.data, s.ports); a.length > 0; ) {
                  const s = a.shift();
                  c.onmessage(s.data, s.ports);
                }
              }, 0);
            });
        });
      }
      typeof globalThis.define == 'function' && globalThis.define.amd && f();
      let h = !0;
      const a = [];
      globalThis.onmessage = (m) => {
        if (!h) {
          a.push(m);
          return;
        }
        (h = !1), p(m.data);
      };
    })(),
    X(J[7], K([0, 1]), function (W, r) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.Permutation =
          r.CallbackIterable =
          r.ArrayQueue =
          r.booleanComparator =
          r.numberComparator =
          r.CompareResult =
            void 0),
        (r.tail = n),
        (r.tail2 = D),
        (r.equals = A),
        (r.removeFastWithoutKeepingOrder = b),
        (r.binarySearch = f),
        (r.binarySearch2 = p),
        (r.quickSelect = h),
        (r.groupBy = a),
        (r.groupAdjacentBy = m),
        (r.forEachAdjacent = e),
        (r.forEachWithNeighbors = c),
        (r.coalesce = s),
        (r.coalesceInPlace = u),
        (r.isFalsyOrEmpty = d),
        (r.isNonEmptyArray = o),
        (r.distinct = _),
        (r.firstOrDefault = w),
        (r.range = S),
        (r.arrayInsert = R),
        (r.pushToStart = v),
        (r.pushToEnd = i),
        (r.pushMany = l),
        (r.asArray = g),
        (r.insertInto = L),
        (r.splice = C),
        (r.compareBy = y),
        (r.tieBreakComparators = x),
        (r.reverseOrder = k);
      function n(T, O = 0) {
        return T[T.length - (1 + O)];
      }
      function D(T) {
        if (T.length === 0) throw new Error('Invalid tail call');
        return [T.slice(0, T.length - 1), T[T.length - 1]];
      }
      function A(T, O, B = (V, j) => V === j) {
        if (T === O) return !0;
        if (!T || !O || T.length !== O.length) return !1;
        for (let V = 0, j = T.length; V < j; V++) if (!B(T[V], O[V])) return !1;
        return !0;
      }
      function b(T, O) {
        const B = T.length - 1;
        O < B && (T[O] = T[B]), T.pop();
      }
      function f(T, O, B) {
        return p(T.length, (V) => B(T[V], O));
      }
      function p(T, O) {
        let B = 0,
          V = T - 1;
        for (; B <= V; ) {
          const j = ((B + V) / 2) | 0,
            Z = O(j);
          if (Z < 0) B = j + 1;
          else if (Z > 0) V = j - 1;
          else return j;
        }
        return -(B + 1);
      }
      function h(T, O, B) {
        if (((T = T | 0), T >= O.length)) throw new TypeError('invalid index');
        const V = O[Math.floor(O.length * Math.random())],
          j = [],
          Z = [],
          re = [];
        for (const ae of O) {
          const oe = B(ae, V);
          oe < 0 ? j.push(ae) : oe > 0 ? Z.push(ae) : re.push(ae);
        }
        return T < j.length
          ? h(T, j, B)
          : T < j.length + re.length
            ? re[0]
            : h(T - (j.length + re.length), Z, B);
      }
      function a(T, O) {
        const B = [];
        let V;
        for (const j of T.slice(0).sort(O))
          !V || O(V[0], j) !== 0 ? ((V = [j]), B.push(V)) : V.push(j);
        return B;
      }
      function* m(T, O) {
        let B, V;
        for (const j of T)
          V !== void 0 && O(V, j) ? B.push(j) : (B && (yield B), (B = [j])), (V = j);
        B && (yield B);
      }
      function e(T, O) {
        for (let B = 0; B <= T.length; B++)
          O(B === 0 ? void 0 : T[B - 1], B === T.length ? void 0 : T[B]);
      }
      function c(T, O) {
        for (let B = 0; B < T.length; B++)
          O(B === 0 ? void 0 : T[B - 1], T[B], B + 1 === T.length ? void 0 : T[B + 1]);
      }
      function s(T) {
        return T.filter((O) => !!O);
      }
      function u(T) {
        let O = 0;
        for (let B = 0; B < T.length; B++) T[B] && ((T[O] = T[B]), (O += 1));
        T.length = O;
      }
      function d(T) {
        return !Array.isArray(T) || T.length === 0;
      }
      function o(T) {
        return Array.isArray(T) && T.length > 0;
      }
      function _(T, O = (B) => B) {
        const B = new Set();
        return T.filter((V) => {
          const j = O(V);
          return B.has(j) ? !1 : (B.add(j), !0);
        });
      }
      function w(T, O) {
        return T.length > 0 ? T[0] : O;
      }
      function S(T, O) {
        let B = typeof O == 'number' ? T : 0;
        typeof O == 'number' ? (B = T) : ((B = 0), (O = T));
        const V = [];
        if (B <= O) for (let j = B; j < O; j++) V.push(j);
        else for (let j = B; j > O; j--) V.push(j);
        return V;
      }
      function R(T, O, B) {
        const V = T.slice(0, O),
          j = T.slice(O);
        return V.concat(B, j);
      }
      function v(T, O) {
        const B = T.indexOf(O);
        B > -1 && (T.splice(B, 1), T.unshift(O));
      }
      function i(T, O) {
        const B = T.indexOf(O);
        B > -1 && (T.splice(B, 1), T.push(O));
      }
      function l(T, O) {
        for (const B of O) T.push(B);
      }
      function g(T) {
        return Array.isArray(T) ? T : [T];
      }
      function L(T, O, B) {
        const V = N(T, O),
          j = T.length,
          Z = B.length;
        T.length = j + Z;
        for (let re = j - 1; re >= V; re--) T[re + Z] = T[re];
        for (let re = 0; re < Z; re++) T[re + V] = B[re];
      }
      function C(T, O, B, V) {
        const j = N(T, O);
        let Z = T.splice(j, B);
        return Z === void 0 && (Z = []), L(T, j, V), Z;
      }
      function N(T, O) {
        return O < 0 ? Math.max(O + T.length, 0) : Math.min(O, T.length);
      }
      var E;
      (function (T) {
        function O(Z) {
          return Z < 0;
        }
        T.isLessThan = O;
        function B(Z) {
          return Z <= 0;
        }
        T.isLessThanOrEqual = B;
        function V(Z) {
          return Z > 0;
        }
        T.isGreaterThan = V;
        function j(Z) {
          return Z === 0;
        }
        (T.isNeitherLessOrGreaterThan = j),
          (T.greaterThan = 1),
          (T.lessThan = -1),
          (T.neitherLessOrGreaterThan = 0);
      })(E || (r.CompareResult = E = {}));
      function y(T, O) {
        return (B, V) => O(T(B), T(V));
      }
      function x(...T) {
        return (O, B) => {
          for (const V of T) {
            const j = V(O, B);
            if (!E.isNeitherLessOrGreaterThan(j)) return j;
          }
          return E.neitherLessOrGreaterThan;
        };
      }
      const M = (T, O) => T - O;
      r.numberComparator = M;
      const I = (T, O) => (0, r.numberComparator)(T ? 1 : 0, O ? 1 : 0);
      r.booleanComparator = I;
      function k(T) {
        return (O, B) => -T(O, B);
      }
      class F {
        constructor(O) {
          (this.items = O), (this.firstIdx = 0), (this.lastIdx = this.items.length - 1);
        }
        get length() {
          return this.lastIdx - this.firstIdx + 1;
        }
        takeWhile(O) {
          let B = this.firstIdx;
          for (; B < this.items.length && O(this.items[B]); ) B++;
          const V = B === this.firstIdx ? null : this.items.slice(this.firstIdx, B);
          return (this.firstIdx = B), V;
        }
        takeFromEndWhile(O) {
          let B = this.lastIdx;
          for (; B >= 0 && O(this.items[B]); ) B--;
          const V = B === this.lastIdx ? null : this.items.slice(B + 1, this.lastIdx + 1);
          return (this.lastIdx = B), V;
        }
        peek() {
          if (this.length !== 0) return this.items[this.firstIdx];
        }
        dequeue() {
          const O = this.items[this.firstIdx];
          return this.firstIdx++, O;
        }
        takeCount(O) {
          const B = this.items.slice(this.firstIdx, this.firstIdx + O);
          return (this.firstIdx += O), B;
        }
      }
      r.ArrayQueue = F;
      class z {
        constructor(O) {
          this.iterate = O;
        }
        toArray() {
          const O = [];
          return this.iterate((B) => (O.push(B), !0)), O;
        }
        filter(O) {
          return new z((B) => this.iterate((V) => (O(V) ? B(V) : !0)));
        }
        map(O) {
          return new z((B) => this.iterate((V) => B(O(V))));
        }
        findLast(O) {
          let B;
          return this.iterate((V) => (O(V) && (B = V), !0)), B;
        }
        findLastMaxBy(O) {
          let B,
            V = !0;
          return (
            this.iterate((j) => ((V || E.isGreaterThan(O(j, B))) && ((V = !1), (B = j)), !0)), B
          );
        }
      }
      (r.CallbackIterable = z), (z.empty = new z((T) => {}));
      class $ {
        constructor(O) {
          this._indexMap = O;
        }
        static createSortPermutation(O, B) {
          const V = Array.from(O.keys()).sort((j, Z) => B(O[j], O[Z]));
          return new $(V);
        }
        apply(O) {
          return O.map((B, V) => O[this._indexMap[V]]);
        }
        inverse() {
          const O = this._indexMap.slice();
          for (let B = 0; B < this._indexMap.length; B++) O[this._indexMap[B]] = B;
          return new $(O);
        }
      }
      r.Permutation = $;
    }),
    X(J[12], K([0, 1]), function (W, r) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.MonotonousArray = void 0),
        (r.findLast = n),
        (r.findLastIdx = D),
        (r.findLastMonotonous = A),
        (r.findLastIdxMonotonous = b),
        (r.findFirstMonotonous = f),
        (r.findFirstIdxMonotonousOrArrLen = p),
        (r.findFirstMax = a),
        (r.findLastMax = m),
        (r.findFirstMin = e),
        (r.findMaxIdx = c),
        (r.mapFindFirst = s);
      function n(u, d) {
        const o = D(u, d);
        if (o !== -1) return u[o];
      }
      function D(u, d, o = u.length - 1) {
        for (let _ = o; _ >= 0; _--) {
          const w = u[_];
          if (d(w)) return _;
        }
        return -1;
      }
      function A(u, d) {
        const o = b(u, d);
        return o === -1 ? void 0 : u[o];
      }
      function b(u, d, o = 0, _ = u.length) {
        let w = o,
          S = _;
        for (; w < S; ) {
          const R = Math.floor((w + S) / 2);
          d(u[R]) ? (w = R + 1) : (S = R);
        }
        return w - 1;
      }
      function f(u, d) {
        const o = p(u, d);
        return o === u.length ? void 0 : u[o];
      }
      function p(u, d, o = 0, _ = u.length) {
        let w = o,
          S = _;
        for (; w < S; ) {
          const R = Math.floor((w + S) / 2);
          d(u[R]) ? (S = R) : (w = R + 1);
        }
        return w;
      }
      class h {
        constructor(d) {
          (this._array = d), (this._findLastMonotonousLastIdx = 0);
        }
        findLastMonotonous(d) {
          if (h.assertInvariants) {
            if (this._prevFindLastPredicate) {
              for (const _ of this._array)
                if (this._prevFindLastPredicate(_) && !d(_))
                  throw new Error(
                    'MonotonousArray: current predicate must be weaker than (or equal to) the previous predicate.',
                  );
            }
            this._prevFindLastPredicate = d;
          }
          const o = b(this._array, d, this._findLastMonotonousLastIdx);
          return (this._findLastMonotonousLastIdx = o + 1), o === -1 ? void 0 : this._array[o];
        }
      }
      (r.MonotonousArray = h), (h.assertInvariants = !1);
      function a(u, d) {
        if (u.length === 0) return;
        let o = u[0];
        for (let _ = 1; _ < u.length; _++) {
          const w = u[_];
          d(w, o) > 0 && (o = w);
        }
        return o;
      }
      function m(u, d) {
        if (u.length === 0) return;
        let o = u[0];
        for (let _ = 1; _ < u.length; _++) {
          const w = u[_];
          d(w, o) >= 0 && (o = w);
        }
        return o;
      }
      function e(u, d) {
        return a(u, (o, _) => -d(o, _));
      }
      function c(u, d) {
        if (u.length === 0) return -1;
        let o = 0;
        for (let _ = 1; _ < u.length; _++) {
          const w = u[_];
          d(w, u[o]) > 0 && (o = _);
        }
        return o;
      }
      function s(u, d) {
        for (const o of u) {
          const _ = d(o);
          if (_ !== void 0) return _;
        }
      }
    }),
    X(J[35], K([0, 1]), function (W, r) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.CachedFunction = r.LRUCachedFunction = void 0),
        (r.identity = n);
      function n(b) {
        return b;
      }
      class D {
        constructor(f, p) {
          (this.lastCache = void 0),
            (this.lastArgKey = void 0),
            typeof f == 'function'
              ? ((this._fn = f), (this._computeKey = n))
              : ((this._fn = p), (this._computeKey = f.getCacheKey));
        }
        get(f) {
          const p = this._computeKey(f);
          return (
            this.lastArgKey !== p && ((this.lastArgKey = p), (this.lastCache = this._fn(f))),
            this.lastCache
          );
        }
      }
      r.LRUCachedFunction = D;
      class A {
        get cachedValues() {
          return this._map;
        }
        constructor(f, p) {
          (this._map = new Map()),
            (this._map2 = new Map()),
            typeof f == 'function'
              ? ((this._fn = f), (this._computeKey = n))
              : ((this._fn = p), (this._computeKey = f.getCacheKey));
        }
        get(f) {
          const p = this._computeKey(f);
          if (this._map2.has(p)) return this._map2.get(p);
          const h = this._fn(f);
          return this._map.set(f, h), this._map2.set(p, h), h;
        }
      }
      r.CachedFunction = A;
    }),
    X(J[36], K([0, 1]), function (W, r) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.Color = r.HSVA = r.HSLA = r.RGBA = void 0);
      function n(p, h) {
        const a = Math.pow(10, h);
        return Math.round(p * a) / a;
      }
      class D {
        constructor(h, a, m, e = 1) {
          (this._rgbaBrand = void 0),
            (this.r = Math.min(255, Math.max(0, h)) | 0),
            (this.g = Math.min(255, Math.max(0, a)) | 0),
            (this.b = Math.min(255, Math.max(0, m)) | 0),
            (this.a = n(Math.max(Math.min(1, e), 0), 3));
        }
        static equals(h, a) {
          return h.r === a.r && h.g === a.g && h.b === a.b && h.a === a.a;
        }
      }
      r.RGBA = D;
      class A {
        constructor(h, a, m, e) {
          (this._hslaBrand = void 0),
            (this.h = Math.max(Math.min(360, h), 0) | 0),
            (this.s = n(Math.max(Math.min(1, a), 0), 3)),
            (this.l = n(Math.max(Math.min(1, m), 0), 3)),
            (this.a = n(Math.max(Math.min(1, e), 0), 3));
        }
        static equals(h, a) {
          return h.h === a.h && h.s === a.s && h.l === a.l && h.a === a.a;
        }
        static fromRGBA(h) {
          const a = h.r / 255,
            m = h.g / 255,
            e = h.b / 255,
            c = h.a,
            s = Math.max(a, m, e),
            u = Math.min(a, m, e);
          let d = 0,
            o = 0;
          const _ = (u + s) / 2,
            w = s - u;
          if (w > 0) {
            switch (((o = Math.min(_ <= 0.5 ? w / (2 * _) : w / (2 - 2 * _), 1)), s)) {
              case a:
                d = (m - e) / w + (m < e ? 6 : 0);
                break;
              case m:
                d = (e - a) / w + 2;
                break;
              case e:
                d = (a - m) / w + 4;
                break;
            }
            (d *= 60), (d = Math.round(d));
          }
          return new A(d, o, _, c);
        }
        static _hue2rgb(h, a, m) {
          return (
            m < 0 && (m += 1),
            m > 1 && (m -= 1),
            m < 1 / 6
              ? h + (a - h) * 6 * m
              : m < 1 / 2
                ? a
                : m < 2 / 3
                  ? h + (a - h) * (2 / 3 - m) * 6
                  : h
          );
        }
        static toRGBA(h) {
          const a = h.h / 360,
            { s: m, l: e, a: c } = h;
          let s, u, d;
          if (m === 0) s = u = d = e;
          else {
            const o = e < 0.5 ? e * (1 + m) : e + m - e * m,
              _ = 2 * e - o;
            (s = A._hue2rgb(_, o, a + 1 / 3)),
              (u = A._hue2rgb(_, o, a)),
              (d = A._hue2rgb(_, o, a - 1 / 3));
          }
          return new D(Math.round(s * 255), Math.round(u * 255), Math.round(d * 255), c);
        }
      }
      r.HSLA = A;
      class b {
        constructor(h, a, m, e) {
          (this._hsvaBrand = void 0),
            (this.h = Math.max(Math.min(360, h), 0) | 0),
            (this.s = n(Math.max(Math.min(1, a), 0), 3)),
            (this.v = n(Math.max(Math.min(1, m), 0), 3)),
            (this.a = n(Math.max(Math.min(1, e), 0), 3));
        }
        static equals(h, a) {
          return h.h === a.h && h.s === a.s && h.v === a.v && h.a === a.a;
        }
        static fromRGBA(h) {
          const a = h.r / 255,
            m = h.g / 255,
            e = h.b / 255,
            c = Math.max(a, m, e),
            s = Math.min(a, m, e),
            u = c - s,
            d = c === 0 ? 0 : u / c;
          let o;
          return (
            u === 0
              ? (o = 0)
              : c === a
                ? (o = ((((m - e) / u) % 6) + 6) % 6)
                : c === m
                  ? (o = (e - a) / u + 2)
                  : (o = (a - m) / u + 4),
            new b(Math.round(o * 60), d, c, h.a)
          );
        }
        static toRGBA(h) {
          const { h: a, s: m, v: e, a: c } = h,
            s = e * m,
            u = s * (1 - Math.abs(((a / 60) % 2) - 1)),
            d = e - s;
          let [o, _, w] = [0, 0, 0];
          return (
            a < 60
              ? ((o = s), (_ = u))
              : a < 120
                ? ((o = u), (_ = s))
                : a < 180
                  ? ((_ = s), (w = u))
                  : a < 240
                    ? ((_ = u), (w = s))
                    : a < 300
                      ? ((o = u), (w = s))
                      : a <= 360 && ((o = s), (w = u)),
            (o = Math.round((o + d) * 255)),
            (_ = Math.round((_ + d) * 255)),
            (w = Math.round((w + d) * 255)),
            new D(o, _, w, c)
          );
        }
      }
      r.HSVA = b;
      class f {
        static fromHex(h) {
          return f.Format.CSS.parseHex(h) || f.red;
        }
        static equals(h, a) {
          return !h && !a ? !0 : !h || !a ? !1 : h.equals(a);
        }
        get hsla() {
          return this._hsla ? this._hsla : A.fromRGBA(this.rgba);
        }
        get hsva() {
          return this._hsva ? this._hsva : b.fromRGBA(this.rgba);
        }
        constructor(h) {
          if (h)
            if (h instanceof D) this.rgba = h;
            else if (h instanceof A) (this._hsla = h), (this.rgba = A.toRGBA(h));
            else if (h instanceof b) (this._hsva = h), (this.rgba = b.toRGBA(h));
            else throw new Error('Invalid color ctor argument');
          else throw new Error('Color needs a value');
        }
        equals(h) {
          return (
            !!h &&
            D.equals(this.rgba, h.rgba) &&
            A.equals(this.hsla, h.hsla) &&
            b.equals(this.hsva, h.hsva)
          );
        }
        getRelativeLuminance() {
          const h = f._relativeLuminanceForComponent(this.rgba.r),
            a = f._relativeLuminanceForComponent(this.rgba.g),
            m = f._relativeLuminanceForComponent(this.rgba.b),
            e = 0.2126 * h + 0.7152 * a + 0.0722 * m;
          return n(e, 4);
        }
        static _relativeLuminanceForComponent(h) {
          const a = h / 255;
          return a <= 0.03928 ? a / 12.92 : Math.pow((a + 0.055) / 1.055, 2.4);
        }
        isLighter() {
          return (this.rgba.r * 299 + this.rgba.g * 587 + this.rgba.b * 114) / 1e3 >= 128;
        }
        isLighterThan(h) {
          const a = this.getRelativeLuminance(),
            m = h.getRelativeLuminance();
          return a > m;
        }
        isDarkerThan(h) {
          const a = this.getRelativeLuminance(),
            m = h.getRelativeLuminance();
          return a < m;
        }
        lighten(h) {
          return new f(new A(this.hsla.h, this.hsla.s, this.hsla.l + this.hsla.l * h, this.hsla.a));
        }
        darken(h) {
          return new f(new A(this.hsla.h, this.hsla.s, this.hsla.l - this.hsla.l * h, this.hsla.a));
        }
        transparent(h) {
          const { r: a, g: m, b: e, a: c } = this.rgba;
          return new f(new D(a, m, e, c * h));
        }
        isTransparent() {
          return this.rgba.a === 0;
        }
        isOpaque() {
          return this.rgba.a === 1;
        }
        opposite() {
          return new f(new D(255 - this.rgba.r, 255 - this.rgba.g, 255 - this.rgba.b, this.rgba.a));
        }
        makeOpaque(h) {
          if (this.isOpaque() || h.rgba.a !== 1) return this;
          const { r: a, g: m, b: e, a: c } = this.rgba;
          return new f(
            new D(
              h.rgba.r - c * (h.rgba.r - a),
              h.rgba.g - c * (h.rgba.g - m),
              h.rgba.b - c * (h.rgba.b - e),
              1,
            ),
          );
        }
        toString() {
          return this._toString || (this._toString = f.Format.CSS.format(this)), this._toString;
        }
        static getLighterColor(h, a, m) {
          if (h.isLighterThan(a)) return h;
          m = m || 0.5;
          const e = h.getRelativeLuminance(),
            c = a.getRelativeLuminance();
          return (m = (m * (c - e)) / c), h.lighten(m);
        }
        static getDarkerColor(h, a, m) {
          if (h.isDarkerThan(a)) return h;
          m = m || 0.5;
          const e = h.getRelativeLuminance(),
            c = a.getRelativeLuminance();
          return (m = (m * (e - c)) / e), h.darken(m);
        }
      }
      (r.Color = f),
        (f.white = new f(new D(255, 255, 255, 1))),
        (f.black = new f(new D(0, 0, 0, 1))),
        (f.red = new f(new D(255, 0, 0, 1))),
        (f.blue = new f(new D(0, 0, 255, 1))),
        (f.green = new f(new D(0, 255, 0, 1))),
        (f.cyan = new f(new D(0, 255, 255, 1))),
        (f.lightgrey = new f(new D(211, 211, 211, 1))),
        (f.transparent = new f(new D(0, 0, 0, 0))),
        (function (p) {
          let h;
          (function (a) {
            let m;
            (function (e) {
              function c(i) {
                return i.rgba.a === 1
                  ? `rgb(${i.rgba.r}, ${i.rgba.g}, ${i.rgba.b})`
                  : p.Format.CSS.formatRGBA(i);
              }
              e.formatRGB = c;
              function s(i) {
                return `rgba(${i.rgba.r}, ${i.rgba.g}, ${i.rgba.b}, ${+i.rgba.a.toFixed(2)})`;
              }
              e.formatRGBA = s;
              function u(i) {
                return i.hsla.a === 1
                  ? `hsl(${i.hsla.h}, ${(i.hsla.s * 100).toFixed(2)}%, ${(i.hsla.l * 100).toFixed(2)}%)`
                  : p.Format.CSS.formatHSLA(i);
              }
              e.formatHSL = u;
              function d(i) {
                return `hsla(${i.hsla.h}, ${(i.hsla.s * 100).toFixed(2)}%, ${(i.hsla.l * 100).toFixed(2)}%, ${i.hsla.a.toFixed(2)})`;
              }
              e.formatHSLA = d;
              function o(i) {
                const l = i.toString(16);
                return l.length !== 2 ? '0' + l : l;
              }
              function _(i) {
                return `#${o(i.rgba.r)}${o(i.rgba.g)}${o(i.rgba.b)}`;
              }
              e.formatHex = _;
              function w(i, l = !1) {
                return l && i.rgba.a === 1
                  ? p.Format.CSS.formatHex(i)
                  : `#${o(i.rgba.r)}${o(i.rgba.g)}${o(i.rgba.b)}${o(Math.round(i.rgba.a * 255))}`;
              }
              e.formatHexA = w;
              function S(i) {
                return i.isOpaque() ? p.Format.CSS.formatHex(i) : p.Format.CSS.formatRGBA(i);
              }
              e.format = S;
              function R(i) {
                const l = i.length;
                if (l === 0 || i.charCodeAt(0) !== 35) return null;
                if (l === 7) {
                  const g = 16 * v(i.charCodeAt(1)) + v(i.charCodeAt(2)),
                    L = 16 * v(i.charCodeAt(3)) + v(i.charCodeAt(4)),
                    C = 16 * v(i.charCodeAt(5)) + v(i.charCodeAt(6));
                  return new p(new D(g, L, C, 1));
                }
                if (l === 9) {
                  const g = 16 * v(i.charCodeAt(1)) + v(i.charCodeAt(2)),
                    L = 16 * v(i.charCodeAt(3)) + v(i.charCodeAt(4)),
                    C = 16 * v(i.charCodeAt(5)) + v(i.charCodeAt(6)),
                    N = 16 * v(i.charCodeAt(7)) + v(i.charCodeAt(8));
                  return new p(new D(g, L, C, N / 255));
                }
                if (l === 4) {
                  const g = v(i.charCodeAt(1)),
                    L = v(i.charCodeAt(2)),
                    C = v(i.charCodeAt(3));
                  return new p(new D(16 * g + g, 16 * L + L, 16 * C + C));
                }
                if (l === 5) {
                  const g = v(i.charCodeAt(1)),
                    L = v(i.charCodeAt(2)),
                    C = v(i.charCodeAt(3)),
                    N = v(i.charCodeAt(4));
                  return new p(new D(16 * g + g, 16 * L + L, 16 * C + C, (16 * N + N) / 255));
                }
                return null;
              }
              e.parseHex = R;
              function v(i) {
                switch (i) {
                  case 48:
                    return 0;
                  case 49:
                    return 1;
                  case 50:
                    return 2;
                  case 51:
                    return 3;
                  case 52:
                    return 4;
                  case 53:
                    return 5;
                  case 54:
                    return 6;
                  case 55:
                    return 7;
                  case 56:
                    return 8;
                  case 57:
                    return 9;
                  case 97:
                    return 10;
                  case 65:
                    return 10;
                  case 98:
                    return 11;
                  case 66:
                    return 11;
                  case 99:
                    return 12;
                  case 67:
                    return 12;
                  case 100:
                    return 13;
                  case 68:
                    return 13;
                  case 101:
                    return 14;
                  case 69:
                    return 14;
                  case 102:
                    return 15;
                  case 70:
                    return 15;
                }
                return 0;
              }
            })((m = a.CSS || (a.CSS = {})));
          })((h = p.Format || (p.Format = {})));
        })(f || (r.Color = f = {}));
    }),
    X(J[37], K([0, 1]), function (W, r) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.DiffChange = void 0);
      class n {
        constructor(A, b, f, p) {
          (this.originalStart = A),
            (this.originalLength = b),
            (this.modifiedStart = f),
            (this.modifiedLength = p);
        }
        getOriginalEnd() {
          return this.originalStart + this.originalLength;
        }
        getModifiedEnd() {
          return this.modifiedStart + this.modifiedLength;
        }
      }
      r.DiffChange = n;
    }),
    X(J[5], K([0, 1]), function (W, r) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.BugIndicatingError =
          r.ErrorNoTelemetry =
          r.NotSupportedError =
          r.CancellationError =
          r.errorHandler =
          r.ErrorHandler =
            void 0),
        (r.onUnexpectedError = D),
        (r.onUnexpectedExternalError = A),
        (r.transformErrorForSerialization = b),
        (r.isCancellationError = p),
        (r.canceled = a),
        (r.illegalArgument = m),
        (r.illegalState = e);
      class n {
        constructor() {
          (this.listeners = []),
            (this.unexpectedErrorHandler = function (o) {
              setTimeout(() => {
                throw o.stack
                  ? s.isErrorNoTelemetry(o)
                    ? new s(
                        o.message +
                          `

` +
                          o.stack,
                      )
                    : new Error(
                        o.message +
                          `

` +
                          o.stack,
                      )
                  : o;
              }, 0);
            });
        }
        emit(o) {
          this.listeners.forEach((_) => {
            _(o);
          });
        }
        onUnexpectedError(o) {
          this.unexpectedErrorHandler(o), this.emit(o);
        }
        onUnexpectedExternalError(o) {
          this.unexpectedErrorHandler(o);
        }
      }
      (r.ErrorHandler = n), (r.errorHandler = new n());
      function D(d) {
        p(d) || r.errorHandler.onUnexpectedError(d);
      }
      function A(d) {
        p(d) || r.errorHandler.onUnexpectedExternalError(d);
      }
      function b(d) {
        if (d instanceof Error) {
          const { name: o, message: _ } = d,
            w = d.stacktrace || d.stack;
          return {
            $isError: !0,
            name: o,
            message: _,
            stack: w,
            noTelemetry: s.isErrorNoTelemetry(d),
          };
        }
        return d;
      }
      const f = 'Canceled';
      function p(d) {
        return d instanceof h ? !0 : d instanceof Error && d.name === f && d.message === f;
      }
      class h extends Error {
        constructor() {
          super(f), (this.name = this.message);
        }
      }
      r.CancellationError = h;
      function a() {
        const d = new Error(f);
        return (d.name = d.message), d;
      }
      function m(d) {
        return d ? new Error(`Illegal argument: ${d}`) : new Error('Illegal argument');
      }
      function e(d) {
        return d ? new Error(`Illegal state: ${d}`) : new Error('Illegal state');
      }
      class c extends Error {
        constructor(o) {
          super('NotSupported'), o && (this.message = o);
        }
      }
      r.NotSupportedError = c;
      class s extends Error {
        constructor(o) {
          super(o), (this.name = 'CodeExpectedError');
        }
        static fromError(o) {
          if (o instanceof s) return o;
          const _ = new s();
          return (_.message = o.message), (_.stack = o.stack), _;
        }
        static isErrorNoTelemetry(o) {
          return o.name === 'CodeExpectedError';
        }
      }
      r.ErrorNoTelemetry = s;
      class u extends Error {
        constructor(o) {
          super(o || 'An unexpected bug occurred.'), Object.setPrototypeOf(this, u.prototype);
        }
      }
      r.BugIndicatingError = u;
    }),
    X(J[9], K([0, 1, 5]), function (W, r, n) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.ok = D),
        (r.assertNever = A),
        (r.softAssert = b),
        (r.assertFn = f),
        (r.checkAdjacentItems = p);
      function D(h, a) {
        if (!h) throw new Error(a ? `Assertion failed (${a})` : 'Assertion Failed');
      }
      function A(h, a = 'Unreachable') {
        throw new Error(a);
      }
      function b(h) {
        h || (0, n.onUnexpectedError)(new n.BugIndicatingError('Soft Assertion Failed'));
      }
      function f(h) {
        if (!h()) {
          debugger;
          h(), (0, n.onUnexpectedError)(new n.BugIndicatingError('Assertion Failed'));
        }
      }
      function p(h, a) {
        let m = 0;
        for (; m < h.length - 1; ) {
          const e = h[m],
            c = h[m + 1];
          if (!a(e, c)) return !1;
          m++;
        }
        return !0;
      }
    }),
    X(J[20], K([0, 1]), function (W, r) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.createSingleCallFunction = n);
      function n(D, A) {
        const b = this;
        let f = !1,
          p;
        return function () {
          if (f) return p;
          if (((f = !0), A))
            try {
              p = D.apply(b, arguments);
            } finally {
              A();
            }
          else p = D.apply(b, arguments);
          return p;
        };
      }
    }),
    X(J[21], K([0, 1]), function (W, r) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.Iterable = void 0);
      var n;
      (function (D) {
        function A(i) {
          return i && typeof i == 'object' && typeof i[Symbol.iterator] == 'function';
        }
        D.is = A;
        const b = Object.freeze([]);
        function f() {
          return b;
        }
        D.empty = f;
        function* p(i) {
          yield i;
        }
        D.single = p;
        function h(i) {
          return A(i) ? i : p(i);
        }
        D.wrap = h;
        function a(i) {
          return i || b;
        }
        D.from = a;
        function* m(i) {
          for (let l = i.length - 1; l >= 0; l--) yield i[l];
        }
        D.reverse = m;
        function e(i) {
          return !i || i[Symbol.iterator]().next().done === !0;
        }
        D.isEmpty = e;
        function c(i) {
          return i[Symbol.iterator]().next().value;
        }
        D.first = c;
        function s(i, l) {
          for (const g of i) if (l(g)) return !0;
          return !1;
        }
        D.some = s;
        function u(i, l) {
          for (const g of i) if (l(g)) return g;
        }
        D.find = u;
        function* d(i, l) {
          for (const g of i) l(g) && (yield g);
        }
        D.filter = d;
        function* o(i, l) {
          let g = 0;
          for (const L of i) yield l(L, g++);
        }
        D.map = o;
        function* _(...i) {
          for (const l of i) yield* l;
        }
        D.concat = _;
        function w(i, l, g) {
          let L = g;
          for (const C of i) L = l(L, C);
          return L;
        }
        D.reduce = w;
        function* S(i, l, g = i.length) {
          for (
            l < 0 && (l += i.length), g < 0 ? (g += i.length) : g > i.length && (g = i.length);
            l < g;
            l++
          )
            yield i[l];
        }
        D.slice = S;
        function R(i, l = Number.POSITIVE_INFINITY) {
          const g = [];
          if (l === 0) return [g, i];
          const L = i[Symbol.iterator]();
          for (let C = 0; C < l; C++) {
            const N = L.next();
            if (N.done) return [g, D.empty()];
            g.push(N.value);
          }
          return [
            g,
            {
              [Symbol.iterator]() {
                return L;
              },
            },
          ];
        }
        D.consume = R;
        async function v(i) {
          const l = [];
          for await (const g of i) l.push(g);
          return Promise.resolve(l);
        }
        D.asyncToArray = v;
      })(n || (r.Iterable = n = {}));
    }),
    X(J[38], K([0, 1]), function (W, r) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.KeyCodeUtils =
          r.IMMUTABLE_KEY_CODE_TO_CODE =
          r.IMMUTABLE_CODE_TO_KEY_CODE =
          r.NATIVE_WINDOWS_KEY_CODE_TO_KEY_CODE =
          r.EVENT_KEY_CODE_MAP =
            void 0),
        (r.KeyChord = m);
      class n {
        constructor() {
          (this._keyCodeToStr = []), (this._strToKeyCode = Object.create(null));
        }
        define(c, s) {
          (this._keyCodeToStr[c] = s), (this._strToKeyCode[s.toLowerCase()] = c);
        }
        keyCodeToStr(c) {
          return this._keyCodeToStr[c];
        }
        strToKeyCode(c) {
          return this._strToKeyCode[c.toLowerCase()] || 0;
        }
      }
      const D = new n(),
        A = new n(),
        b = new n();
      (r.EVENT_KEY_CODE_MAP = new Array(230)), (r.NATIVE_WINDOWS_KEY_CODE_TO_KEY_CODE = {});
      const f = [],
        p = Object.create(null),
        h = Object.create(null);
      (r.IMMUTABLE_CODE_TO_KEY_CODE = []), (r.IMMUTABLE_KEY_CODE_TO_CODE = []);
      for (let e = 0; e <= 193; e++) r.IMMUTABLE_CODE_TO_KEY_CODE[e] = -1;
      for (let e = 0; e <= 132; e++) r.IMMUTABLE_KEY_CODE_TO_CODE[e] = -1;
      (function () {
        const e = '',
          c = [
            [1, 0, 'None', 0, 'unknown', 0, 'VK_UNKNOWN', e, e],
            [1, 1, 'Hyper', 0, e, 0, e, e, e],
            [1, 2, 'Super', 0, e, 0, e, e, e],
            [1, 3, 'Fn', 0, e, 0, e, e, e],
            [1, 4, 'FnLock', 0, e, 0, e, e, e],
            [1, 5, 'Suspend', 0, e, 0, e, e, e],
            [1, 6, 'Resume', 0, e, 0, e, e, e],
            [1, 7, 'Turbo', 0, e, 0, e, e, e],
            [1, 8, 'Sleep', 0, e, 0, 'VK_SLEEP', e, e],
            [1, 9, 'WakeUp', 0, e, 0, e, e, e],
            [0, 10, 'KeyA', 31, 'A', 65, 'VK_A', e, e],
            [0, 11, 'KeyB', 32, 'B', 66, 'VK_B', e, e],
            [0, 12, 'KeyC', 33, 'C', 67, 'VK_C', e, e],
            [0, 13, 'KeyD', 34, 'D', 68, 'VK_D', e, e],
            [0, 14, 'KeyE', 35, 'E', 69, 'VK_E', e, e],
            [0, 15, 'KeyF', 36, 'F', 70, 'VK_F', e, e],
            [0, 16, 'KeyG', 37, 'G', 71, 'VK_G', e, e],
            [0, 17, 'KeyH', 38, 'H', 72, 'VK_H', e, e],
            [0, 18, 'KeyI', 39, 'I', 73, 'VK_I', e, e],
            [0, 19, 'KeyJ', 40, 'J', 74, 'VK_J', e, e],
            [0, 20, 'KeyK', 41, 'K', 75, 'VK_K', e, e],
            [0, 21, 'KeyL', 42, 'L', 76, 'VK_L', e, e],
            [0, 22, 'KeyM', 43, 'M', 77, 'VK_M', e, e],
            [0, 23, 'KeyN', 44, 'N', 78, 'VK_N', e, e],
            [0, 24, 'KeyO', 45, 'O', 79, 'VK_O', e, e],
            [0, 25, 'KeyP', 46, 'P', 80, 'VK_P', e, e],
            [0, 26, 'KeyQ', 47, 'Q', 81, 'VK_Q', e, e],
            [0, 27, 'KeyR', 48, 'R', 82, 'VK_R', e, e],
            [0, 28, 'KeyS', 49, 'S', 83, 'VK_S', e, e],
            [0, 29, 'KeyT', 50, 'T', 84, 'VK_T', e, e],
            [0, 30, 'KeyU', 51, 'U', 85, 'VK_U', e, e],
            [0, 31, 'KeyV', 52, 'V', 86, 'VK_V', e, e],
            [0, 32, 'KeyW', 53, 'W', 87, 'VK_W', e, e],
            [0, 33, 'KeyX', 54, 'X', 88, 'VK_X', e, e],
            [0, 34, 'KeyY', 55, 'Y', 89, 'VK_Y', e, e],
            [0, 35, 'KeyZ', 56, 'Z', 90, 'VK_Z', e, e],
            [0, 36, 'Digit1', 22, '1', 49, 'VK_1', e, e],
            [0, 37, 'Digit2', 23, '2', 50, 'VK_2', e, e],
            [0, 38, 'Digit3', 24, '3', 51, 'VK_3', e, e],
            [0, 39, 'Digit4', 25, '4', 52, 'VK_4', e, e],
            [0, 40, 'Digit5', 26, '5', 53, 'VK_5', e, e],
            [0, 41, 'Digit6', 27, '6', 54, 'VK_6', e, e],
            [0, 42, 'Digit7', 28, '7', 55, 'VK_7', e, e],
            [0, 43, 'Digit8', 29, '8', 56, 'VK_8', e, e],
            [0, 44, 'Digit9', 30, '9', 57, 'VK_9', e, e],
            [0, 45, 'Digit0', 21, '0', 48, 'VK_0', e, e],
            [1, 46, 'Enter', 3, 'Enter', 13, 'VK_RETURN', e, e],
            [1, 47, 'Escape', 9, 'Escape', 27, 'VK_ESCAPE', e, e],
            [1, 48, 'Backspace', 1, 'Backspace', 8, 'VK_BACK', e, e],
            [1, 49, 'Tab', 2, 'Tab', 9, 'VK_TAB', e, e],
            [1, 50, 'Space', 10, 'Space', 32, 'VK_SPACE', e, e],
            [0, 51, 'Minus', 88, '-', 189, 'VK_OEM_MINUS', '-', 'OEM_MINUS'],
            [0, 52, 'Equal', 86, '=', 187, 'VK_OEM_PLUS', '=', 'OEM_PLUS'],
            [0, 53, 'BracketLeft', 92, '[', 219, 'VK_OEM_4', '[', 'OEM_4'],
            [0, 54, 'BracketRight', 94, ']', 221, 'VK_OEM_6', ']', 'OEM_6'],
            [0, 55, 'Backslash', 93, '\\', 220, 'VK_OEM_5', '\\', 'OEM_5'],
            [0, 56, 'IntlHash', 0, e, 0, e, e, e],
            [0, 57, 'Semicolon', 85, ';', 186, 'VK_OEM_1', ';', 'OEM_1'],
            [0, 58, 'Quote', 95, "'", 222, 'VK_OEM_7', "'", 'OEM_7'],
            [0, 59, 'Backquote', 91, '`', 192, 'VK_OEM_3', '`', 'OEM_3'],
            [0, 60, 'Comma', 87, ',', 188, 'VK_OEM_COMMA', ',', 'OEM_COMMA'],
            [0, 61, 'Period', 89, '.', 190, 'VK_OEM_PERIOD', '.', 'OEM_PERIOD'],
            [0, 62, 'Slash', 90, '/', 191, 'VK_OEM_2', '/', 'OEM_2'],
            [1, 63, 'CapsLock', 8, 'CapsLock', 20, 'VK_CAPITAL', e, e],
            [1, 64, 'F1', 59, 'F1', 112, 'VK_F1', e, e],
            [1, 65, 'F2', 60, 'F2', 113, 'VK_F2', e, e],
            [1, 66, 'F3', 61, 'F3', 114, 'VK_F3', e, e],
            [1, 67, 'F4', 62, 'F4', 115, 'VK_F4', e, e],
            [1, 68, 'F5', 63, 'F5', 116, 'VK_F5', e, e],
            [1, 69, 'F6', 64, 'F6', 117, 'VK_F6', e, e],
            [1, 70, 'F7', 65, 'F7', 118, 'VK_F7', e, e],
            [1, 71, 'F8', 66, 'F8', 119, 'VK_F8', e, e],
            [1, 72, 'F9', 67, 'F9', 120, 'VK_F9', e, e],
            [1, 73, 'F10', 68, 'F10', 121, 'VK_F10', e, e],
            [1, 74, 'F11', 69, 'F11', 122, 'VK_F11', e, e],
            [1, 75, 'F12', 70, 'F12', 123, 'VK_F12', e, e],
            [1, 76, 'PrintScreen', 0, e, 0, e, e, e],
            [1, 77, 'ScrollLock', 84, 'ScrollLock', 145, 'VK_SCROLL', e, e],
            [1, 78, 'Pause', 7, 'PauseBreak', 19, 'VK_PAUSE', e, e],
            [1, 79, 'Insert', 19, 'Insert', 45, 'VK_INSERT', e, e],
            [1, 80, 'Home', 14, 'Home', 36, 'VK_HOME', e, e],
            [1, 81, 'PageUp', 11, 'PageUp', 33, 'VK_PRIOR', e, e],
            [1, 82, 'Delete', 20, 'Delete', 46, 'VK_DELETE', e, e],
            [1, 83, 'End', 13, 'End', 35, 'VK_END', e, e],
            [1, 84, 'PageDown', 12, 'PageDown', 34, 'VK_NEXT', e, e],
            [1, 85, 'ArrowRight', 17, 'RightArrow', 39, 'VK_RIGHT', 'Right', e],
            [1, 86, 'ArrowLeft', 15, 'LeftArrow', 37, 'VK_LEFT', 'Left', e],
            [1, 87, 'ArrowDown', 18, 'DownArrow', 40, 'VK_DOWN', 'Down', e],
            [1, 88, 'ArrowUp', 16, 'UpArrow', 38, 'VK_UP', 'Up', e],
            [1, 89, 'NumLock', 83, 'NumLock', 144, 'VK_NUMLOCK', e, e],
            [1, 90, 'NumpadDivide', 113, 'NumPad_Divide', 111, 'VK_DIVIDE', e, e],
            [1, 91, 'NumpadMultiply', 108, 'NumPad_Multiply', 106, 'VK_MULTIPLY', e, e],
            [1, 92, 'NumpadSubtract', 111, 'NumPad_Subtract', 109, 'VK_SUBTRACT', e, e],
            [1, 93, 'NumpadAdd', 109, 'NumPad_Add', 107, 'VK_ADD', e, e],
            [1, 94, 'NumpadEnter', 3, e, 0, e, e, e],
            [1, 95, 'Numpad1', 99, 'NumPad1', 97, 'VK_NUMPAD1', e, e],
            [1, 96, 'Numpad2', 100, 'NumPad2', 98, 'VK_NUMPAD2', e, e],
            [1, 97, 'Numpad3', 101, 'NumPad3', 99, 'VK_NUMPAD3', e, e],
            [1, 98, 'Numpad4', 102, 'NumPad4', 100, 'VK_NUMPAD4', e, e],
            [1, 99, 'Numpad5', 103, 'NumPad5', 101, 'VK_NUMPAD5', e, e],
            [1, 100, 'Numpad6', 104, 'NumPad6', 102, 'VK_NUMPAD6', e, e],
            [1, 101, 'Numpad7', 105, 'NumPad7', 103, 'VK_NUMPAD7', e, e],
            [1, 102, 'Numpad8', 106, 'NumPad8', 104, 'VK_NUMPAD8', e, e],
            [1, 103, 'Numpad9', 107, 'NumPad9', 105, 'VK_NUMPAD9', e, e],
            [1, 104, 'Numpad0', 98, 'NumPad0', 96, 'VK_NUMPAD0', e, e],
            [1, 105, 'NumpadDecimal', 112, 'NumPad_Decimal', 110, 'VK_DECIMAL', e, e],
            [0, 106, 'IntlBackslash', 97, 'OEM_102', 226, 'VK_OEM_102', e, e],
            [1, 107, 'ContextMenu', 58, 'ContextMenu', 93, e, e, e],
            [1, 108, 'Power', 0, e, 0, e, e, e],
            [1, 109, 'NumpadEqual', 0, e, 0, e, e, e],
            [1, 110, 'F13', 71, 'F13', 124, 'VK_F13', e, e],
            [1, 111, 'F14', 72, 'F14', 125, 'VK_F14', e, e],
            [1, 112, 'F15', 73, 'F15', 126, 'VK_F15', e, e],
            [1, 113, 'F16', 74, 'F16', 127, 'VK_F16', e, e],
            [1, 114, 'F17', 75, 'F17', 128, 'VK_F17', e, e],
            [1, 115, 'F18', 76, 'F18', 129, 'VK_F18', e, e],
            [1, 116, 'F19', 77, 'F19', 130, 'VK_F19', e, e],
            [1, 117, 'F20', 78, 'F20', 131, 'VK_F20', e, e],
            [1, 118, 'F21', 79, 'F21', 132, 'VK_F21', e, e],
            [1, 119, 'F22', 80, 'F22', 133, 'VK_F22', e, e],
            [1, 120, 'F23', 81, 'F23', 134, 'VK_F23', e, e],
            [1, 121, 'F24', 82, 'F24', 135, 'VK_F24', e, e],
            [1, 122, 'Open', 0, e, 0, e, e, e],
            [1, 123, 'Help', 0, e, 0, e, e, e],
            [1, 124, 'Select', 0, e, 0, e, e, e],
            [1, 125, 'Again', 0, e, 0, e, e, e],
            [1, 126, 'Undo', 0, e, 0, e, e, e],
            [1, 127, 'Cut', 0, e, 0, e, e, e],
            [1, 128, 'Copy', 0, e, 0, e, e, e],
            [1, 129, 'Paste', 0, e, 0, e, e, e],
            [1, 130, 'Find', 0, e, 0, e, e, e],
            [1, 131, 'AudioVolumeMute', 117, 'AudioVolumeMute', 173, 'VK_VOLUME_MUTE', e, e],
            [1, 132, 'AudioVolumeUp', 118, 'AudioVolumeUp', 175, 'VK_VOLUME_UP', e, e],
            [1, 133, 'AudioVolumeDown', 119, 'AudioVolumeDown', 174, 'VK_VOLUME_DOWN', e, e],
            [1, 134, 'NumpadComma', 110, 'NumPad_Separator', 108, 'VK_SEPARATOR', e, e],
            [0, 135, 'IntlRo', 115, 'ABNT_C1', 193, 'VK_ABNT_C1', e, e],
            [1, 136, 'KanaMode', 0, e, 0, e, e, e],
            [0, 137, 'IntlYen', 0, e, 0, e, e, e],
            [1, 138, 'Convert', 0, e, 0, e, e, e],
            [1, 139, 'NonConvert', 0, e, 0, e, e, e],
            [1, 140, 'Lang1', 0, e, 0, e, e, e],
            [1, 141, 'Lang2', 0, e, 0, e, e, e],
            [1, 142, 'Lang3', 0, e, 0, e, e, e],
            [1, 143, 'Lang4', 0, e, 0, e, e, e],
            [1, 144, 'Lang5', 0, e, 0, e, e, e],
            [1, 145, 'Abort', 0, e, 0, e, e, e],
            [1, 146, 'Props', 0, e, 0, e, e, e],
            [1, 147, 'NumpadParenLeft', 0, e, 0, e, e, e],
            [1, 148, 'NumpadParenRight', 0, e, 0, e, e, e],
            [1, 149, 'NumpadBackspace', 0, e, 0, e, e, e],
            [1, 150, 'NumpadMemoryStore', 0, e, 0, e, e, e],
            [1, 151, 'NumpadMemoryRecall', 0, e, 0, e, e, e],
            [1, 152, 'NumpadMemoryClear', 0, e, 0, e, e, e],
            [1, 153, 'NumpadMemoryAdd', 0, e, 0, e, e, e],
            [1, 154, 'NumpadMemorySubtract', 0, e, 0, e, e, e],
            [1, 155, 'NumpadClear', 131, 'Clear', 12, 'VK_CLEAR', e, e],
            [1, 156, 'NumpadClearEntry', 0, e, 0, e, e, e],
            [1, 0, e, 5, 'Ctrl', 17, 'VK_CONTROL', e, e],
            [1, 0, e, 4, 'Shift', 16, 'VK_SHIFT', e, e],
            [1, 0, e, 6, 'Alt', 18, 'VK_MENU', e, e],
            [1, 0, e, 57, 'Meta', 91, 'VK_COMMAND', e, e],
            [1, 157, 'ControlLeft', 5, e, 0, 'VK_LCONTROL', e, e],
            [1, 158, 'ShiftLeft', 4, e, 0, 'VK_LSHIFT', e, e],
            [1, 159, 'AltLeft', 6, e, 0, 'VK_LMENU', e, e],
            [1, 160, 'MetaLeft', 57, e, 0, 'VK_LWIN', e, e],
            [1, 161, 'ControlRight', 5, e, 0, 'VK_RCONTROL', e, e],
            [1, 162, 'ShiftRight', 4, e, 0, 'VK_RSHIFT', e, e],
            [1, 163, 'AltRight', 6, e, 0, 'VK_RMENU', e, e],
            [1, 164, 'MetaRight', 57, e, 0, 'VK_RWIN', e, e],
            [1, 165, 'BrightnessUp', 0, e, 0, e, e, e],
            [1, 166, 'BrightnessDown', 0, e, 0, e, e, e],
            [1, 167, 'MediaPlay', 0, e, 0, e, e, e],
            [1, 168, 'MediaRecord', 0, e, 0, e, e, e],
            [1, 169, 'MediaFastForward', 0, e, 0, e, e, e],
            [1, 170, 'MediaRewind', 0, e, 0, e, e, e],
            [1, 171, 'MediaTrackNext', 124, 'MediaTrackNext', 176, 'VK_MEDIA_NEXT_TRACK', e, e],
            [
              1,
              172,
              'MediaTrackPrevious',
              125,
              'MediaTrackPrevious',
              177,
              'VK_MEDIA_PREV_TRACK',
              e,
              e,
            ],
            [1, 173, 'MediaStop', 126, 'MediaStop', 178, 'VK_MEDIA_STOP', e, e],
            [1, 174, 'Eject', 0, e, 0, e, e, e],
            [1, 175, 'MediaPlayPause', 127, 'MediaPlayPause', 179, 'VK_MEDIA_PLAY_PAUSE', e, e],
            [
              1,
              176,
              'MediaSelect',
              128,
              'LaunchMediaPlayer',
              181,
              'VK_MEDIA_LAUNCH_MEDIA_SELECT',
              e,
              e,
            ],
            [1, 177, 'LaunchMail', 129, 'LaunchMail', 180, 'VK_MEDIA_LAUNCH_MAIL', e, e],
            [1, 178, 'LaunchApp2', 130, 'LaunchApp2', 183, 'VK_MEDIA_LAUNCH_APP2', e, e],
            [1, 179, 'LaunchApp1', 0, e, 0, 'VK_MEDIA_LAUNCH_APP1', e, e],
            [1, 180, 'SelectTask', 0, e, 0, e, e, e],
            [1, 181, 'LaunchScreenSaver', 0, e, 0, e, e, e],
            [1, 182, 'BrowserSearch', 120, 'BrowserSearch', 170, 'VK_BROWSER_SEARCH', e, e],
            [1, 183, 'BrowserHome', 121, 'BrowserHome', 172, 'VK_BROWSER_HOME', e, e],
            [1, 184, 'BrowserBack', 122, 'BrowserBack', 166, 'VK_BROWSER_BACK', e, e],
            [1, 185, 'BrowserForward', 123, 'BrowserForward', 167, 'VK_BROWSER_FORWARD', e, e],
            [1, 186, 'BrowserStop', 0, e, 0, 'VK_BROWSER_STOP', e, e],
            [1, 187, 'BrowserRefresh', 0, e, 0, 'VK_BROWSER_REFRESH', e, e],
            [1, 188, 'BrowserFavorites', 0, e, 0, 'VK_BROWSER_FAVORITES', e, e],
            [1, 189, 'ZoomToggle', 0, e, 0, e, e, e],
            [1, 190, 'MailReply', 0, e, 0, e, e, e],
            [1, 191, 'MailForward', 0, e, 0, e, e, e],
            [1, 192, 'MailSend', 0, e, 0, e, e, e],
            [1, 0, e, 114, 'KeyInComposition', 229, e, e, e],
            [1, 0, e, 116, 'ABNT_C2', 194, 'VK_ABNT_C2', e, e],
            [1, 0, e, 96, 'OEM_8', 223, 'VK_OEM_8', e, e],
            [1, 0, e, 0, e, 0, 'VK_KANA', e, e],
            [1, 0, e, 0, e, 0, 'VK_HANGUL', e, e],
            [1, 0, e, 0, e, 0, 'VK_JUNJA', e, e],
            [1, 0, e, 0, e, 0, 'VK_FINAL', e, e],
            [1, 0, e, 0, e, 0, 'VK_HANJA', e, e],
            [1, 0, e, 0, e, 0, 'VK_KANJI', e, e],
            [1, 0, e, 0, e, 0, 'VK_CONVERT', e, e],
            [1, 0, e, 0, e, 0, 'VK_NONCONVERT', e, e],
            [1, 0, e, 0, e, 0, 'VK_ACCEPT', e, e],
            [1, 0, e, 0, e, 0, 'VK_MODECHANGE', e, e],
            [1, 0, e, 0, e, 0, 'VK_SELECT', e, e],
            [1, 0, e, 0, e, 0, 'VK_PRINT', e, e],
            [1, 0, e, 0, e, 0, 'VK_EXECUTE', e, e],
            [1, 0, e, 0, e, 0, 'VK_SNAPSHOT', e, e],
            [1, 0, e, 0, e, 0, 'VK_HELP', e, e],
            [1, 0, e, 0, e, 0, 'VK_APPS', e, e],
            [1, 0, e, 0, e, 0, 'VK_PROCESSKEY', e, e],
            [1, 0, e, 0, e, 0, 'VK_PACKET', e, e],
            [1, 0, e, 0, e, 0, 'VK_DBE_SBCSCHAR', e, e],
            [1, 0, e, 0, e, 0, 'VK_DBE_DBCSCHAR', e, e],
            [1, 0, e, 0, e, 0, 'VK_ATTN', e, e],
            [1, 0, e, 0, e, 0, 'VK_CRSEL', e, e],
            [1, 0, e, 0, e, 0, 'VK_EXSEL', e, e],
            [1, 0, e, 0, e, 0, 'VK_EREOF', e, e],
            [1, 0, e, 0, e, 0, 'VK_PLAY', e, e],
            [1, 0, e, 0, e, 0, 'VK_ZOOM', e, e],
            [1, 0, e, 0, e, 0, 'VK_NONAME', e, e],
            [1, 0, e, 0, e, 0, 'VK_PA1', e, e],
            [1, 0, e, 0, e, 0, 'VK_OEM_CLEAR', e, e],
          ],
          s = [],
          u = [];
        for (const d of c) {
          const [o, _, w, S, R, v, i, l, g] = d;
          if (
            (u[_] ||
              ((u[_] = !0),
              (f[_] = w),
              (p[w] = _),
              (h[w.toLowerCase()] = _),
              o &&
                ((r.IMMUTABLE_CODE_TO_KEY_CODE[_] = S),
                S !== 0 &&
                  S !== 3 &&
                  S !== 5 &&
                  S !== 4 &&
                  S !== 6 &&
                  S !== 57 &&
                  (r.IMMUTABLE_KEY_CODE_TO_CODE[S] = _))),
            !s[S])
          ) {
            if (((s[S] = !0), !R))
              throw new Error(
                `String representation missing for key code ${S} around scan code ${w}`,
              );
            D.define(S, R), A.define(S, l || R), b.define(S, g || l || R);
          }
          v && (r.EVENT_KEY_CODE_MAP[v] = S), i && (r.NATIVE_WINDOWS_KEY_CODE_TO_KEY_CODE[i] = S);
        }
        r.IMMUTABLE_KEY_CODE_TO_CODE[3] = 46;
      })();
      var a;
      (function (e) {
        function c(w) {
          return D.keyCodeToStr(w);
        }
        e.toString = c;
        function s(w) {
          return D.strToKeyCode(w);
        }
        e.fromString = s;
        function u(w) {
          return A.keyCodeToStr(w);
        }
        e.toUserSettingsUS = u;
        function d(w) {
          return b.keyCodeToStr(w);
        }
        e.toUserSettingsGeneral = d;
        function o(w) {
          return A.strToKeyCode(w) || b.strToKeyCode(w);
        }
        e.fromUserSettings = o;
        function _(w) {
          if (w >= 98 && w <= 113) return null;
          switch (w) {
            case 16:
              return 'Up';
            case 18:
              return 'Down';
            case 15:
              return 'Left';
            case 17:
              return 'Right';
          }
          return D.keyCodeToStr(w);
        }
        e.toElectronAccelerator = _;
      })(a || (r.KeyCodeUtils = a = {}));
      function m(e, c) {
        const s = ((c & 65535) << 16) >>> 0;
        return (e | s) >>> 0;
      }
    }),
    X(J[39], K([0, 1]), function (W, r) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.Lazy = void 0);
      class n {
        constructor(A) {
          (this.executor = A), (this._didRun = !1);
        }
        get value() {
          if (!this._didRun)
            try {
              this._value = this.executor();
            } catch (A) {
              this._error = A;
            } finally {
              this._didRun = !0;
            }
          if (this._error) throw this._error;
          return this._value;
        }
        get rawValue() {
          return this._value;
        }
      }
      r.Lazy = n;
    }),
    X(J[13], K([0, 1, 20, 21]), function (W, r, n, D) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.DisposableMap =
          r.ImmortalReference =
          r.RefCountedDisposable =
          r.MutableDisposable =
          r.Disposable =
          r.DisposableStore =
            void 0),
        (r.setDisposableTracker = f),
        (r.trackDisposable = p),
        (r.markAsDisposed = h),
        (r.markAsSingleton = e),
        (r.isDisposable = c),
        (r.dispose = s),
        (r.combinedDisposable = u),
        (r.toDisposable = d);
      const A = !1;
      let b = null;
      function f(i) {
        b = i;
      }
      if (A) {
        const i = '__is_disposable_tracked__';
        f(
          new (class {
            trackDisposable(l) {
              const g = new Error('Potentially leaked disposable').stack;
              setTimeout(() => {
                l[i] || console.log(g);
              }, 3e3);
            }
            setParent(l, g) {
              if (l && l !== _.None)
                try {
                  l[i] = !0;
                } catch {}
            }
            markAsDisposed(l) {
              if (l && l !== _.None)
                try {
                  l[i] = !0;
                } catch {}
            }
            markAsSingleton(l) {}
          })(),
        );
      }
      function p(i) {
        return b?.trackDisposable(i), i;
      }
      function h(i) {
        b?.markAsDisposed(i);
      }
      function a(i, l) {
        b?.setParent(i, l);
      }
      function m(i, l) {
        if (b) for (const g of i) b.setParent(g, l);
      }
      function e(i) {
        return b?.markAsSingleton(i), i;
      }
      function c(i) {
        return (
          typeof i == 'object' &&
          i !== null &&
          typeof i.dispose == 'function' &&
          i.dispose.length === 0
        );
      }
      function s(i) {
        if (D.Iterable.is(i)) {
          const l = [];
          for (const g of i)
            if (g)
              try {
                g.dispose();
              } catch (L) {
                l.push(L);
              }
          if (l.length === 1) throw l[0];
          if (l.length > 1)
            throw new AggregateError(l, 'Encountered errors while disposing of store');
          return Array.isArray(i) ? [] : i;
        } else if (i) return i.dispose(), i;
      }
      function u(...i) {
        const l = d(() => s(i));
        return m(i, l), l;
      }
      function d(i) {
        const l = p({
          dispose: (0, n.createSingleCallFunction)(() => {
            h(l), i();
          }),
        });
        return l;
      }
      class o {
        constructor() {
          (this._toDispose = new Set()), (this._isDisposed = !1), p(this);
        }
        dispose() {
          this._isDisposed || (h(this), (this._isDisposed = !0), this.clear());
        }
        get isDisposed() {
          return this._isDisposed;
        }
        clear() {
          if (this._toDispose.size !== 0)
            try {
              s(this._toDispose);
            } finally {
              this._toDispose.clear();
            }
        }
        add(l) {
          if (!l) return l;
          if (l === this) throw new Error('Cannot register a disposable on itself!');
          return (
            a(l, this),
            this._isDisposed
              ? o.DISABLE_DISPOSED_WARNING ||
                console.warn(
                  new Error(
                    'Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!',
                  ).stack,
                )
              : this._toDispose.add(l),
            l
          );
        }
        deleteAndLeak(l) {
          l && this._toDispose.has(l) && (this._toDispose.delete(l), a(l, null));
        }
      }
      (r.DisposableStore = o), (o.DISABLE_DISPOSED_WARNING = !1);
      class _ {
        constructor() {
          (this._store = new o()), p(this), a(this._store, this);
        }
        dispose() {
          h(this), this._store.dispose();
        }
        _register(l) {
          if (l === this) throw new Error('Cannot register a disposable on itself!');
          return this._store.add(l);
        }
      }
      (r.Disposable = _), (_.None = Object.freeze({ dispose() {} }));
      class w {
        constructor() {
          (this._isDisposed = !1), p(this);
        }
        get value() {
          return this._isDisposed ? void 0 : this._value;
        }
        set value(l) {
          var g;
          this._isDisposed ||
            l === this._value ||
            ((g = this._value) === null || g === void 0 || g.dispose(),
            l && a(l, this),
            (this._value = l));
        }
        clear() {
          this.value = void 0;
        }
        dispose() {
          var l;
          (this._isDisposed = !0),
            h(this),
            (l = this._value) === null || l === void 0 || l.dispose(),
            (this._value = void 0);
        }
      }
      r.MutableDisposable = w;
      class S {
        constructor(l) {
          (this._disposable = l), (this._counter = 1);
        }
        acquire() {
          return this._counter++, this;
        }
        release() {
          return --this._counter === 0 && this._disposable.dispose(), this;
        }
      }
      r.RefCountedDisposable = S;
      class R {
        constructor(l) {
          this.object = l;
        }
        dispose() {}
      }
      r.ImmortalReference = R;
      class v {
        constructor() {
          (this._store = new Map()), (this._isDisposed = !1), p(this);
        }
        dispose() {
          h(this), (this._isDisposed = !0), this.clearAndDisposeAll();
        }
        clearAndDisposeAll() {
          if (this._store.size)
            try {
              s(this._store.values());
            } finally {
              this._store.clear();
            }
        }
        get(l) {
          return this._store.get(l);
        }
        set(l, g, L = !1) {
          var C;
          this._isDisposed &&
            console.warn(
              new Error(
                'Trying to add a disposable to a DisposableMap that has already been disposed of. The added object will be leaked!',
              ).stack,
            ),
            L || (C = this._store.get(l)) === null || C === void 0 || C.dispose(),
            this._store.set(l, g);
        }
        deleteAndDispose(l) {
          var g;
          (g = this._store.get(l)) === null || g === void 0 || g.dispose(), this._store.delete(l);
        }
        [Symbol.iterator]() {
          return this._store[Symbol.iterator]();
        }
      }
      r.DisposableMap = v;
    }),
    X(J[22], K([0, 1]), function (W, r) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.LinkedList = void 0);
      class n {
        constructor(b) {
          (this.element = b), (this.next = n.Undefined), (this.prev = n.Undefined);
        }
      }
      n.Undefined = new n(void 0);
      class D {
        constructor() {
          (this._first = n.Undefined), (this._last = n.Undefined), (this._size = 0);
        }
        get size() {
          return this._size;
        }
        isEmpty() {
          return this._first === n.Undefined;
        }
        clear() {
          let b = this._first;
          for (; b !== n.Undefined; ) {
            const f = b.next;
            (b.prev = n.Undefined), (b.next = n.Undefined), (b = f);
          }
          (this._first = n.Undefined), (this._last = n.Undefined), (this._size = 0);
        }
        unshift(b) {
          return this._insert(b, !1);
        }
        push(b) {
          return this._insert(b, !0);
        }
        _insert(b, f) {
          const p = new n(b);
          if (this._first === n.Undefined) (this._first = p), (this._last = p);
          else if (f) {
            const a = this._last;
            (this._last = p), (p.prev = a), (a.next = p);
          } else {
            const a = this._first;
            (this._first = p), (p.next = a), (a.prev = p);
          }
          this._size += 1;
          let h = !1;
          return () => {
            h || ((h = !0), this._remove(p));
          };
        }
        shift() {
          if (this._first !== n.Undefined) {
            const b = this._first.element;
            return this._remove(this._first), b;
          }
        }
        pop() {
          if (this._last !== n.Undefined) {
            const b = this._last.element;
            return this._remove(this._last), b;
          }
        }
        _remove(b) {
          if (b.prev !== n.Undefined && b.next !== n.Undefined) {
            const f = b.prev;
            (f.next = b.next), (b.next.prev = f);
          } else
            b.prev === n.Undefined && b.next === n.Undefined
              ? ((this._first = n.Undefined), (this._last = n.Undefined))
              : b.next === n.Undefined
                ? ((this._last = this._last.prev), (this._last.next = n.Undefined))
                : b.prev === n.Undefined &&
                  ((this._first = this._first.next), (this._first.prev = n.Undefined));
          this._size -= 1;
        }
        *[Symbol.iterator]() {
          let b = this._first;
          for (; b !== n.Undefined; ) yield b.element, (b = b.next);
        }
      }
      r.LinkedList = D;
    }),
    X(J[23], K([0, 1]), function (W, r) {
      'use strict';
      var n, D;
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.SetMap = r.BidirectionalMap = r.LRUCache = r.LinkedMap = r.ResourceMap = void 0);
      class A {
        constructor(s, u) {
          (this.uri = s), (this.value = u);
        }
      }
      function b(c) {
        return Array.isArray(c);
      }
      class f {
        constructor(s, u) {
          if (((this[n] = 'ResourceMap'), s instanceof f))
            (this.map = new Map(s.map)), (this.toKey = u ?? f.defaultToKey);
          else if (b(s)) {
            (this.map = new Map()), (this.toKey = u ?? f.defaultToKey);
            for (const [d, o] of s) this.set(d, o);
          } else (this.map = new Map()), (this.toKey = s ?? f.defaultToKey);
        }
        set(s, u) {
          return this.map.set(this.toKey(s), new A(s, u)), this;
        }
        get(s) {
          var u;
          return (u = this.map.get(this.toKey(s))) === null || u === void 0 ? void 0 : u.value;
        }
        has(s) {
          return this.map.has(this.toKey(s));
        }
        get size() {
          return this.map.size;
        }
        clear() {
          this.map.clear();
        }
        delete(s) {
          return this.map.delete(this.toKey(s));
        }
        forEach(s, u) {
          typeof u < 'u' && (s = s.bind(u));
          for (const [d, o] of this.map) s(o.value, o.uri, this);
        }
        *values() {
          for (const s of this.map.values()) yield s.value;
        }
        *keys() {
          for (const s of this.map.values()) yield s.uri;
        }
        *entries() {
          for (const s of this.map.values()) yield [s.uri, s.value];
        }
        *[((n = Symbol.toStringTag), Symbol.iterator)]() {
          for (const [, s] of this.map) yield [s.uri, s.value];
        }
      }
      (r.ResourceMap = f), (f.defaultToKey = (c) => c.toString());
      class p {
        constructor() {
          (this[D] = 'LinkedMap'),
            (this._map = new Map()),
            (this._head = void 0),
            (this._tail = void 0),
            (this._size = 0),
            (this._state = 0);
        }
        clear() {
          this._map.clear(),
            (this._head = void 0),
            (this._tail = void 0),
            (this._size = 0),
            this._state++;
        }
        isEmpty() {
          return !this._head && !this._tail;
        }
        get size() {
          return this._size;
        }
        get first() {
          var s;
          return (s = this._head) === null || s === void 0 ? void 0 : s.value;
        }
        get last() {
          var s;
          return (s = this._tail) === null || s === void 0 ? void 0 : s.value;
        }
        has(s) {
          return this._map.has(s);
        }
        get(s, u = 0) {
          const d = this._map.get(s);
          if (d) return u !== 0 && this.touch(d, u), d.value;
        }
        set(s, u, d = 0) {
          let o = this._map.get(s);
          if (o) (o.value = u), d !== 0 && this.touch(o, d);
          else {
            switch (((o = { key: s, value: u, next: void 0, previous: void 0 }), d)) {
              case 0:
                this.addItemLast(o);
                break;
              case 1:
                this.addItemFirst(o);
                break;
              case 2:
                this.addItemLast(o);
                break;
              default:
                this.addItemLast(o);
                break;
            }
            this._map.set(s, o), this._size++;
          }
          return this;
        }
        delete(s) {
          return !!this.remove(s);
        }
        remove(s) {
          const u = this._map.get(s);
          if (u) return this._map.delete(s), this.removeItem(u), this._size--, u.value;
        }
        shift() {
          if (!this._head && !this._tail) return;
          if (!this._head || !this._tail) throw new Error('Invalid list');
          const s = this._head;
          return this._map.delete(s.key), this.removeItem(s), this._size--, s.value;
        }
        forEach(s, u) {
          const d = this._state;
          let o = this._head;
          for (; o; ) {
            if ((u ? s.bind(u)(o.value, o.key, this) : s(o.value, o.key, this), this._state !== d))
              throw new Error('LinkedMap got modified during iteration.');
            o = o.next;
          }
        }
        keys() {
          const s = this,
            u = this._state;
          let d = this._head;
          const o = {
            [Symbol.iterator]() {
              return o;
            },
            next() {
              if (s._state !== u) throw new Error('LinkedMap got modified during iteration.');
              if (d) {
                const _ = { value: d.key, done: !1 };
                return (d = d.next), _;
              } else return { value: void 0, done: !0 };
            },
          };
          return o;
        }
        values() {
          const s = this,
            u = this._state;
          let d = this._head;
          const o = {
            [Symbol.iterator]() {
              return o;
            },
            next() {
              if (s._state !== u) throw new Error('LinkedMap got modified during iteration.');
              if (d) {
                const _ = { value: d.value, done: !1 };
                return (d = d.next), _;
              } else return { value: void 0, done: !0 };
            },
          };
          return o;
        }
        entries() {
          const s = this,
            u = this._state;
          let d = this._head;
          const o = {
            [Symbol.iterator]() {
              return o;
            },
            next() {
              if (s._state !== u) throw new Error('LinkedMap got modified during iteration.');
              if (d) {
                const _ = { value: [d.key, d.value], done: !1 };
                return (d = d.next), _;
              } else return { value: void 0, done: !0 };
            },
          };
          return o;
        }
        [((D = Symbol.toStringTag), Symbol.iterator)]() {
          return this.entries();
        }
        trimOld(s) {
          if (s >= this.size) return;
          if (s === 0) {
            this.clear();
            return;
          }
          let u = this._head,
            d = this.size;
          for (; u && d > s; ) this._map.delete(u.key), (u = u.next), d--;
          (this._head = u), (this._size = d), u && (u.previous = void 0), this._state++;
        }
        trimNew(s) {
          if (s >= this.size) return;
          if (s === 0) {
            this.clear();
            return;
          }
          let u = this._tail,
            d = this.size;
          for (; u && d > s; ) this._map.delete(u.key), (u = u.previous), d--;
          (this._tail = u), (this._size = d), u && (u.next = void 0), this._state++;
        }
        addItemFirst(s) {
          if (!this._head && !this._tail) this._tail = s;
          else if (this._head) (s.next = this._head), (this._head.previous = s);
          else throw new Error('Invalid list');
          (this._head = s), this._state++;
        }
        addItemLast(s) {
          if (!this._head && !this._tail) this._head = s;
          else if (this._tail) (s.previous = this._tail), (this._tail.next = s);
          else throw new Error('Invalid list');
          (this._tail = s), this._state++;
        }
        removeItem(s) {
          if (s === this._head && s === this._tail) (this._head = void 0), (this._tail = void 0);
          else if (s === this._head) {
            if (!s.next) throw new Error('Invalid list');
            (s.next.previous = void 0), (this._head = s.next);
          } else if (s === this._tail) {
            if (!s.previous) throw new Error('Invalid list');
            (s.previous.next = void 0), (this._tail = s.previous);
          } else {
            const u = s.next,
              d = s.previous;
            if (!u || !d) throw new Error('Invalid list');
            (u.previous = d), (d.next = u);
          }
          (s.next = void 0), (s.previous = void 0), this._state++;
        }
        touch(s, u) {
          if (!this._head || !this._tail) throw new Error('Invalid list');
          if (!(u !== 1 && u !== 2)) {
            if (u === 1) {
              if (s === this._head) return;
              const d = s.next,
                o = s.previous;
              s === this._tail
                ? ((o.next = void 0), (this._tail = o))
                : ((d.previous = o), (o.next = d)),
                (s.previous = void 0),
                (s.next = this._head),
                (this._head.previous = s),
                (this._head = s),
                this._state++;
            } else if (u === 2) {
              if (s === this._tail) return;
              const d = s.next,
                o = s.previous;
              s === this._head
                ? ((d.previous = void 0), (this._head = d))
                : ((d.previous = o), (o.next = d)),
                (s.next = void 0),
                (s.previous = this._tail),
                (this._tail.next = s),
                (this._tail = s),
                this._state++;
            }
          }
        }
        toJSON() {
          const s = [];
          return (
            this.forEach((u, d) => {
              s.push([d, u]);
            }),
            s
          );
        }
        fromJSON(s) {
          this.clear();
          for (const [u, d] of s) this.set(u, d);
        }
      }
      r.LinkedMap = p;
      class h extends p {
        constructor(s, u = 1) {
          super(), (this._limit = s), (this._ratio = Math.min(Math.max(0, u), 1));
        }
        get limit() {
          return this._limit;
        }
        set limit(s) {
          (this._limit = s), this.checkTrim();
        }
        get(s, u = 2) {
          return super.get(s, u);
        }
        peek(s) {
          return super.get(s, 0);
        }
        set(s, u) {
          return super.set(s, u, 2), this;
        }
        checkTrim() {
          this.size > this._limit && this.trim(Math.round(this._limit * this._ratio));
        }
      }
      class a extends h {
        constructor(s, u = 1) {
          super(s, u);
        }
        trim(s) {
          this.trimOld(s);
        }
        set(s, u) {
          return super.set(s, u), this.checkTrim(), this;
        }
      }
      r.LRUCache = a;
      class m {
        constructor(s) {
          if (((this._m1 = new Map()), (this._m2 = new Map()), s))
            for (const [u, d] of s) this.set(u, d);
        }
        clear() {
          this._m1.clear(), this._m2.clear();
        }
        set(s, u) {
          this._m1.set(s, u), this._m2.set(u, s);
        }
        get(s) {
          return this._m1.get(s);
        }
        getKey(s) {
          return this._m2.get(s);
        }
        delete(s) {
          const u = this._m1.get(s);
          return u === void 0 ? !1 : (this._m1.delete(s), this._m2.delete(u), !0);
        }
        keys() {
          return this._m1.keys();
        }
        values() {
          return this._m1.values();
        }
      }
      r.BidirectionalMap = m;
      class e {
        constructor() {
          this.map = new Map();
        }
        add(s, u) {
          let d = this.map.get(s);
          d || ((d = new Set()), this.map.set(s, d)), d.add(u);
        }
        delete(s, u) {
          const d = this.map.get(s);
          d && (d.delete(u), d.size === 0 && this.map.delete(s));
        }
        forEach(s, u) {
          const d = this.map.get(s);
          d && d.forEach(u);
        }
        get(s) {
          const u = this.map.get(s);
          return u || new Set();
        }
      }
      r.SetMap = e;
    }),
    X(J[24], K([0, 1]), function (W, r) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.StopWatch = void 0);
      const n = globalThis.performance && typeof globalThis.performance.now == 'function';
      class D {
        static create(b) {
          return new D(b);
        }
        constructor(b) {
          (this._now =
            n && b === !1 ? Date.now : globalThis.performance.now.bind(globalThis.performance)),
            (this._startTime = this._now()),
            (this._stopTime = -1);
        }
        stop() {
          this._stopTime = this._now();
        }
        reset() {
          (this._startTime = this._now()), (this._stopTime = -1);
        }
        elapsed() {
          return this._stopTime !== -1
            ? this._stopTime - this._startTime
            : this._now() - this._startTime;
        }
      }
      r.StopWatch = D;
    }),
    X(J[10], K([0, 1, 5, 20, 13, 22, 24]), function (W, r, n, D, A, b, f) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.Relay =
          r.EventBufferer =
          r.EventMultiplexer =
          r.MicrotaskEmitter =
          r.DebounceEmitter =
          r.PauseableEmitter =
          r.createEventDeliveryQueue =
          r.Emitter =
          r.ListenerRefusalError =
          r.ListenerLeakError =
          r.EventProfiling =
          r.Event =
            void 0);
      const p = !1,
        h = !1,
        a = !1;
      var m;
      (function (x) {
        x.None = () => A.Disposable.None;
        function M(te) {
          if (a) {
            const { onDidAddListener: Q } = te,
              U = u.create();
            let Y = 0;
            te.onDidAddListener = () => {
              ++Y === 2 &&
                (console.warn(
                  'snapshotted emitter LIKELY used public and SHOULD HAVE BEEN created with DisposableStore. snapshotted here',
                ),
                U.print()),
                Q?.();
            };
          }
        }
        function I(te, Q) {
          return Z(te, () => {}, 0, void 0, !0, void 0, Q);
        }
        x.defer = I;
        function k(te) {
          return (Q, U = null, Y) => {
            let ne = !1,
              P;
            return (
              (P = te(
                (q) => {
                  if (!ne) return P ? P.dispose() : (ne = !0), Q.call(U, q);
                },
                null,
                Y,
              )),
              ne && P.dispose(),
              P
            );
          };
        }
        x.once = k;
        function F(te, Q, U) {
          return V((Y, ne = null, P) => te((q) => Y.call(ne, Q(q)), null, P), U);
        }
        x.map = F;
        function z(te, Q, U) {
          return V(
            (Y, ne = null, P) =>
              te(
                (q) => {
                  Q(q), Y.call(ne, q);
                },
                null,
                P,
              ),
            U,
          );
        }
        x.forEach = z;
        function $(te, Q, U) {
          return V((Y, ne = null, P) => te((q) => Q(q) && Y.call(ne, q), null, P), U);
        }
        x.filter = $;
        function T(te) {
          return te;
        }
        x.signal = T;
        function O(...te) {
          return (Q, U = null, Y) => {
            const ne = (0, A.combinedDisposable)(...te.map((P) => P((q) => Q.call(U, q))));
            return j(ne, Y);
          };
        }
        x.any = O;
        function B(te, Q, U, Y) {
          let ne = U;
          return F(te, (P) => ((ne = Q(ne, P)), ne), Y);
        }
        x.reduce = B;
        function V(te, Q) {
          let U;
          const Y = {
            onWillAddFirstListener() {
              U = te(ne.fire, ne);
            },
            onDidRemoveLastListener() {
              U?.dispose();
            },
          };
          Q || M(Y);
          const ne = new v(Y);
          return Q?.add(ne), ne.event;
        }
        function j(te, Q) {
          return Q instanceof Array ? Q.push(te) : Q && Q.add(te), te;
        }
        function Z(te, Q, U = 100, Y = !1, ne = !1, P, q) {
          let H,
            G,
            ee,
            ie = 0,
            le;
          const ge = {
            leakWarningThreshold: P,
            onWillAddFirstListener() {
              H = te((se) => {
                ie++,
                  (G = Q(G, se)),
                  Y && !ee && (he.fire(G), (G = void 0)),
                  (le = () => {
                    const fe = G;
                    (G = void 0), (ee = void 0), (!Y || ie > 1) && he.fire(fe), (ie = 0);
                  }),
                  typeof U == 'number'
                    ? (clearTimeout(ee), (ee = setTimeout(le, U)))
                    : ee === void 0 && ((ee = 0), queueMicrotask(le));
              });
            },
            onWillRemoveListener() {
              ne && ie > 0 && le?.();
            },
            onDidRemoveLastListener() {
              (le = void 0), H.dispose();
            },
          };
          q || M(ge);
          const he = new v(ge);
          return q?.add(he), he.event;
        }
        x.debounce = Z;
        function re(te, Q = 0, U) {
          return x.debounce(te, (Y, ne) => (Y ? (Y.push(ne), Y) : [ne]), Q, void 0, !0, void 0, U);
        }
        x.accumulate = re;
        function ae(te, Q = (Y, ne) => Y === ne, U) {
          let Y = !0,
            ne;
          return $(
            te,
            (P) => {
              const q = Y || !Q(P, ne);
              return (Y = !1), (ne = P), q;
            },
            U,
          );
        }
        x.latch = ae;
        function oe(te, Q, U) {
          return [x.filter(te, Q, U), x.filter(te, (Y) => !Q(Y), U)];
        }
        x.split = oe;
        function ce(te, Q = !1, U = [], Y) {
          let ne = U.slice(),
            P = te((G) => {
              ne ? ne.push(G) : H.fire(G);
            });
          Y && Y.add(P);
          const q = () => {
              ne?.forEach((G) => H.fire(G)), (ne = null);
            },
            H = new v({
              onWillAddFirstListener() {
                P || ((P = te((G) => H.fire(G))), Y && Y.add(P));
              },
              onDidAddFirstListener() {
                ne && (Q ? setTimeout(q) : q());
              },
              onDidRemoveLastListener() {
                P && P.dispose(), (P = null);
              },
            });
          return Y && Y.add(H), H.event;
        }
        x.buffer = ce;
        function be(te, Q) {
          return (Y, ne, P) => {
            const q = Q(new ve());
            return te(
              function (H) {
                const G = q.evaluate(H);
                G !== t && Y.call(ne, G);
              },
              void 0,
              P,
            );
          };
        }
        x.chain = be;
        const t = Symbol('HaltChainable');
        class ve {
          constructor() {
            this.steps = [];
          }
          map(Q) {
            return this.steps.push(Q), this;
          }
          forEach(Q) {
            return this.steps.push((U) => (Q(U), U)), this;
          }
          filter(Q) {
            return this.steps.push((U) => (Q(U) ? U : t)), this;
          }
          reduce(Q, U) {
            let Y = U;
            return this.steps.push((ne) => ((Y = Q(Y, ne)), Y)), this;
          }
          latch(Q = (U, Y) => U === Y) {
            let U = !0,
              Y;
            return (
              this.steps.push((ne) => {
                const P = U || !Q(ne, Y);
                return (U = !1), (Y = ne), P ? ne : t;
              }),
              this
            );
          }
          evaluate(Q) {
            for (const U of this.steps) if (((Q = U(Q)), Q === t)) break;
            return Q;
          }
        }
        function Ce(te, Q, U = (Y) => Y) {
          const Y = (...H) => q.fire(U(...H)),
            ne = () => te.on(Q, Y),
            P = () => te.removeListener(Q, Y),
            q = new v({ onWillAddFirstListener: ne, onDidRemoveLastListener: P });
          return q.event;
        }
        x.fromNodeEventEmitter = Ce;
        function pe(te, Q, U = (Y) => Y) {
          const Y = (...H) => q.fire(U(...H)),
            ne = () => te.addEventListener(Q, Y),
            P = () => te.removeEventListener(Q, Y),
            q = new v({ onWillAddFirstListener: ne, onDidRemoveLastListener: P });
          return q.event;
        }
        x.fromDOMEventEmitter = pe;
        function _e(te) {
          return new Promise((Q) => k(te)(Q));
        }
        x.toPromise = _e;
        function Se(te) {
          const Q = new v();
          return (
            te
              .then(
                (U) => {
                  Q.fire(U);
                },
                () => {
                  Q.fire(void 0);
                },
              )
              .finally(() => {
                Q.dispose();
              }),
            Q.event
          );
        }
        x.fromPromise = Se;
        function ye(te, Q, U) {
          return Q(U), te((Y) => Q(Y));
        }
        x.runAndSubscribe = ye;
        class Le {
          constructor(Q, U) {
            (this._observable = Q), (this._counter = 0), (this._hasChanged = !1);
            const Y = {
              onWillAddFirstListener: () => {
                Q.addObserver(this);
              },
              onDidRemoveLastListener: () => {
                Q.removeObserver(this);
              },
            };
            U || M(Y), (this.emitter = new v(Y)), U && U.add(this.emitter);
          }
          beginUpdate(Q) {
            this._counter++;
          }
          handlePossibleChange(Q) {}
          handleChange(Q, U) {
            this._hasChanged = !0;
          }
          endUpdate(Q) {
            this._counter--,
              this._counter === 0 &&
                (this._observable.reportChanges(),
                this._hasChanged &&
                  ((this._hasChanged = !1), this.emitter.fire(this._observable.get())));
          }
        }
        function de(te, Q) {
          return new Le(te, Q).emitter.event;
        }
        x.fromObservable = de;
        function Ne(te) {
          return (Q, U, Y) => {
            let ne = 0,
              P = !1;
            const q = {
              beginUpdate() {
                ne++;
              },
              endUpdate() {
                ne--, ne === 0 && (te.reportChanges(), P && ((P = !1), Q.call(U)));
              },
              handlePossibleChange() {},
              handleChange() {
                P = !0;
              },
            };
            te.addObserver(q), te.reportChanges();
            const H = {
              dispose() {
                te.removeObserver(q);
              },
            };
            return Y instanceof A.DisposableStore ? Y.add(H) : Array.isArray(Y) && Y.push(H), H;
          };
        }
        x.fromObservableLight = Ne;
      })(m || (r.Event = m = {}));
      class e {
        constructor(M) {
          (this.listenerCount = 0),
            (this.invocationCount = 0),
            (this.elapsedOverall = 0),
            (this.durations = []),
            (this.name = `${M}_${e._idPool++}`),
            e.all.add(this);
        }
        start(M) {
          (this._stopWatch = new f.StopWatch()), (this.listenerCount = M);
        }
        stop() {
          if (this._stopWatch) {
            const M = this._stopWatch.elapsed();
            this.durations.push(M),
              (this.elapsedOverall += M),
              (this.invocationCount += 1),
              (this._stopWatch = void 0);
          }
        }
      }
      (r.EventProfiling = e), (e.all = new Set()), (e._idPool = 0);
      let c = -1;
      class s {
        constructor(M, I, k = Math.random().toString(18).slice(2, 5)) {
          (this._errorHandler = M),
            (this.threshold = I),
            (this.name = k),
            (this._warnCountdown = 0);
        }
        dispose() {
          var M;
          (M = this._stacks) === null || M === void 0 || M.clear();
        }
        check(M, I) {
          const k = this.threshold;
          if (k <= 0 || I < k) return;
          this._stacks || (this._stacks = new Map());
          const F = this._stacks.get(M.value) || 0;
          if (
            (this._stacks.set(M.value, F + 1), (this._warnCountdown -= 1), this._warnCountdown <= 0)
          ) {
            this._warnCountdown = k * 0.5;
            const [z, $] = this.getMostFrequentStack(),
              T = `[${this.name}] potential listener LEAK detected, having ${I} listeners already. MOST frequent listener (${$}):`;
            console.warn(T), console.warn(z);
            const O = new d(T, z);
            this._errorHandler(O);
          }
          return () => {
            const z = this._stacks.get(M.value) || 0;
            this._stacks.set(M.value, z - 1);
          };
        }
        getMostFrequentStack() {
          if (!this._stacks) return;
          let M,
            I = 0;
          for (const [k, F] of this._stacks) (!M || I < F) && ((M = [k, F]), (I = F));
          return M;
        }
      }
      class u {
        static create() {
          var M;
          const I = new Error();
          return new u((M = I.stack) !== null && M !== void 0 ? M : '');
        }
        constructor(M) {
          this.value = M;
        }
        print() {
          console.warn(
            this.value
              .split(`
`)
              .slice(2)
              .join(`
`),
          );
        }
      }
      class d extends Error {
        constructor(M, I) {
          super(M), (this.name = 'ListenerLeakError'), (this.stack = I);
        }
      }
      r.ListenerLeakError = d;
      class o extends Error {
        constructor(M, I) {
          super(M), (this.name = 'ListenerRefusalError'), (this.stack = I);
        }
      }
      r.ListenerRefusalError = o;
      class _ {
        constructor(M) {
          this.value = M;
        }
      }
      const w = 2,
        S = (x, M) => {
          if (x instanceof _) M(x);
          else
            for (let I = 0; I < x.length; I++) {
              const k = x[I];
              k && M(k);
            }
        },
        R = p
          ? new FinalizationRegistry((x) => {
              typeof x == 'string' &&
                (console.warn(
                  "[LEAKING LISTENER] GC'ed a listener that was NOT yet disposed. This is where is was created:",
                ),
                console.warn(x));
            })
          : void 0;
      class v {
        constructor(M) {
          var I, k, F, z, $, T;
          (this._size = 0),
            (this._options = M),
            (this._leakageMon =
              c > 0 || (!((I = this._options) === null || I === void 0) && I.leakWarningThreshold)
                ? new s(
                    (k = M?.onListenerError) !== null && k !== void 0 ? k : n.onUnexpectedError,
                    (z =
                      (F = this._options) === null || F === void 0
                        ? void 0
                        : F.leakWarningThreshold) !== null && z !== void 0
                      ? z
                      : c,
                  )
                : void 0),
            (this._perfMon =
              !(($ = this._options) === null || $ === void 0) && $._profName
                ? new e(this._options._profName)
                : void 0),
            (this._deliveryQueue =
              (T = this._options) === null || T === void 0 ? void 0 : T.deliveryQueue);
        }
        dispose() {
          var M, I, k, F;
          if (!this._disposed) {
            if (
              ((this._disposed = !0),
              ((M = this._deliveryQueue) === null || M === void 0 ? void 0 : M.current) === this &&
                this._deliveryQueue.reset(),
              this._listeners)
            ) {
              if (h) {
                const z = this._listeners;
                queueMicrotask(() => {
                  S(z, ($) => {
                    var T;
                    return (T = $.stack) === null || T === void 0 ? void 0 : T.print();
                  });
                });
              }
              (this._listeners = void 0), (this._size = 0);
            }
            (k =
              (I = this._options) === null || I === void 0 ? void 0 : I.onDidRemoveLastListener) ===
              null ||
              k === void 0 ||
              k.call(I),
              (F = this._leakageMon) === null || F === void 0 || F.dispose();
          }
        }
        get event() {
          var M;
          return (
            ((M = this._event) !== null && M !== void 0) ||
              (this._event = (I, k, F) => {
                var z, $, T, O, B, V, j;
                if (this._leakageMon && this._size > this._leakageMon.threshold ** 2) {
                  const ce = `[${this._leakageMon.name}] REFUSES to accept new listeners because it exceeded its threshold by far (${this._size} vs ${this._leakageMon.threshold})`;
                  console.warn(ce);
                  const be =
                      (z = this._leakageMon.getMostFrequentStack()) !== null && z !== void 0
                        ? z
                        : ['UNKNOWN stack', -1],
                    t = new o(
                      `${ce}. HINT: Stack shows most frequent listener (${be[1]}-times)`,
                      be[0],
                    );
                  return (
                    (
                      (($ = this._options) === null || $ === void 0 ? void 0 : $.onListenerError) ||
                      n.onUnexpectedError
                    )(t),
                    A.Disposable.None
                  );
                }
                if (this._disposed) return A.Disposable.None;
                k && (I = I.bind(k));
                const Z = new _(I);
                let re, ae;
                this._leakageMon &&
                  this._size >= Math.ceil(this._leakageMon.threshold * 0.2) &&
                  ((Z.stack = u.create()), (re = this._leakageMon.check(Z.stack, this._size + 1))),
                  h && (Z.stack = ae ?? u.create()),
                  this._listeners
                    ? this._listeners instanceof _
                      ? (((j = this._deliveryQueue) !== null && j !== void 0) ||
                          (this._deliveryQueue = new l()),
                        (this._listeners = [this._listeners, Z]))
                      : this._listeners.push(Z)
                    : ((O =
                        (T = this._options) === null || T === void 0
                          ? void 0
                          : T.onWillAddFirstListener) === null ||
                        O === void 0 ||
                        O.call(T, this),
                      (this._listeners = Z),
                      (V =
                        (B = this._options) === null || B === void 0
                          ? void 0
                          : B.onDidAddFirstListener) === null ||
                        V === void 0 ||
                        V.call(B, this)),
                  this._size++;
                const oe = (0, A.toDisposable)(() => {
                  R?.unregister(oe), re?.(), this._removeListener(Z);
                });
                if (
                  (F instanceof A.DisposableStore ? F.add(oe) : Array.isArray(F) && F.push(oe), R)
                ) {
                  const ce = new Error().stack
                    .split(`
`)
                    .slice(2)
                    .join(`
`)
                    .trim();
                  R.register(oe, ce, oe);
                }
                return oe;
              }),
            this._event
          );
        }
        _removeListener(M) {
          var I, k, F, z;
          if (
            ((k =
              (I = this._options) === null || I === void 0 ? void 0 : I.onWillRemoveListener) ===
              null ||
              k === void 0 ||
              k.call(I, this),
            !this._listeners)
          )
            return;
          if (this._size === 1) {
            (this._listeners = void 0),
              (z =
                (F = this._options) === null || F === void 0
                  ? void 0
                  : F.onDidRemoveLastListener) === null ||
                z === void 0 ||
                z.call(F, this),
              (this._size = 0);
            return;
          }
          const $ = this._listeners,
            T = $.indexOf(M);
          if (T === -1)
            throw (
              (console.log('disposed?', this._disposed),
              console.log('size?', this._size),
              console.log('arr?', JSON.stringify(this._listeners)),
              new Error('Attempted to dispose unknown listener'))
            );
          this._size--, ($[T] = void 0);
          const O = this._deliveryQueue.current === this;
          if (this._size * w <= $.length) {
            let B = 0;
            for (let V = 0; V < $.length; V++)
              $[V]
                ? ($[B++] = $[V])
                : O &&
                  (this._deliveryQueue.end--, B < this._deliveryQueue.i && this._deliveryQueue.i--);
            $.length = B;
          }
        }
        _deliver(M, I) {
          var k;
          if (!M) return;
          const F =
            ((k = this._options) === null || k === void 0 ? void 0 : k.onListenerError) ||
            n.onUnexpectedError;
          if (!F) {
            M.value(I);
            return;
          }
          try {
            M.value(I);
          } catch (z) {
            F(z);
          }
        }
        _deliverQueue(M) {
          const I = M.current._listeners;
          for (; M.i < M.end; ) this._deliver(I[M.i++], M.value);
          M.reset();
        }
        fire(M) {
          var I, k, F, z;
          if (
            (!((I = this._deliveryQueue) === null || I === void 0) &&
              I.current &&
              (this._deliverQueue(this._deliveryQueue),
              (k = this._perfMon) === null || k === void 0 || k.stop()),
            (F = this._perfMon) === null || F === void 0 || F.start(this._size),
            this._listeners)
          )
            if (this._listeners instanceof _) this._deliver(this._listeners, M);
            else {
              const $ = this._deliveryQueue;
              $.enqueue(this, M, this._listeners.length), this._deliverQueue($);
            }
          (z = this._perfMon) === null || z === void 0 || z.stop();
        }
        hasListeners() {
          return this._size > 0;
        }
      }
      r.Emitter = v;
      const i = () => new l();
      r.createEventDeliveryQueue = i;
      class l {
        constructor() {
          (this.i = -1), (this.end = 0);
        }
        enqueue(M, I, k) {
          (this.i = 0), (this.end = k), (this.current = M), (this.value = I);
        }
        reset() {
          (this.i = this.end), (this.current = void 0), (this.value = void 0);
        }
      }
      class g extends v {
        constructor(M) {
          super(M),
            (this._isPaused = 0),
            (this._eventQueue = new b.LinkedList()),
            (this._mergeFn = M?.merge);
        }
        pause() {
          this._isPaused++;
        }
        resume() {
          if (this._isPaused !== 0 && --this._isPaused === 0)
            if (this._mergeFn) {
              if (this._eventQueue.size > 0) {
                const M = Array.from(this._eventQueue);
                this._eventQueue.clear(), super.fire(this._mergeFn(M));
              }
            } else
              for (; !this._isPaused && this._eventQueue.size !== 0; )
                super.fire(this._eventQueue.shift());
        }
        fire(M) {
          this._size && (this._isPaused !== 0 ? this._eventQueue.push(M) : super.fire(M));
        }
      }
      r.PauseableEmitter = g;
      class L extends g {
        constructor(M) {
          var I;
          super(M), (this._delay = (I = M.delay) !== null && I !== void 0 ? I : 100);
        }
        fire(M) {
          this._handle ||
            (this.pause(),
            (this._handle = setTimeout(() => {
              (this._handle = void 0), this.resume();
            }, this._delay))),
            super.fire(M);
        }
      }
      r.DebounceEmitter = L;
      class C extends v {
        constructor(M) {
          super(M), (this._queuedEvents = []), (this._mergeFn = M?.merge);
        }
        fire(M) {
          this.hasListeners() &&
            (this._queuedEvents.push(M),
            this._queuedEvents.length === 1 &&
              queueMicrotask(() => {
                this._mergeFn
                  ? super.fire(this._mergeFn(this._queuedEvents))
                  : this._queuedEvents.forEach((I) => super.fire(I)),
                  (this._queuedEvents = []);
              }));
        }
      }
      r.MicrotaskEmitter = C;
      class N {
        constructor() {
          (this.hasListeners = !1),
            (this.events = []),
            (this.emitter = new v({
              onWillAddFirstListener: () => this.onFirstListenerAdd(),
              onDidRemoveLastListener: () => this.onLastListenerRemove(),
            }));
        }
        get event() {
          return this.emitter.event;
        }
        add(M) {
          const I = { event: M, listener: null };
          this.events.push(I), this.hasListeners && this.hook(I);
          const k = () => {
            this.hasListeners && this.unhook(I);
            const F = this.events.indexOf(I);
            this.events.splice(F, 1);
          };
          return (0, A.toDisposable)((0, D.createSingleCallFunction)(k));
        }
        onFirstListenerAdd() {
          (this.hasListeners = !0), this.events.forEach((M) => this.hook(M));
        }
        onLastListenerRemove() {
          (this.hasListeners = !1), this.events.forEach((M) => this.unhook(M));
        }
        hook(M) {
          M.listener = M.event((I) => this.emitter.fire(I));
        }
        unhook(M) {
          var I;
          (I = M.listener) === null || I === void 0 || I.dispose(), (M.listener = null);
        }
        dispose() {
          var M;
          this.emitter.dispose();
          for (const I of this.events) (M = I.listener) === null || M === void 0 || M.dispose();
          this.events = [];
        }
      }
      r.EventMultiplexer = N;
      class E {
        constructor() {
          this.data = [];
        }
        wrapEvent(M, I, k) {
          return (F, z, $) =>
            M(
              (T) => {
                var O;
                const B = this.data[this.data.length - 1];
                if (!I) {
                  B ? B.buffers.push(() => F.call(z, T)) : F.call(z, T);
                  return;
                }
                const V = B;
                if (!V) {
                  F.call(z, I(k, T));
                  return;
                }
                ((O = V.items) !== null && O !== void 0) || (V.items = []),
                  V.items.push(T),
                  V.buffers.length === 0 &&
                    B.buffers.push(() => {
                      var j;
                      ((j = V.reducedResult) !== null && j !== void 0) ||
                        (V.reducedResult = k ? V.items.reduce(I, k) : V.items.reduce(I)),
                        F.call(z, V.reducedResult);
                    });
              },
              void 0,
              $,
            );
        }
        bufferEvents(M) {
          const I = { buffers: new Array() };
          this.data.push(I);
          const k = M();
          return this.data.pop(), I.buffers.forEach((F) => F()), k;
        }
      }
      r.EventBufferer = E;
      class y {
        constructor() {
          (this.listening = !1),
            (this.inputEvent = m.None),
            (this.inputEventListener = A.Disposable.None),
            (this.emitter = new v({
              onDidAddFirstListener: () => {
                (this.listening = !0),
                  (this.inputEventListener = this.inputEvent(this.emitter.fire, this.emitter));
              },
              onDidRemoveLastListener: () => {
                (this.listening = !1), this.inputEventListener.dispose();
              },
            })),
            (this.event = this.emitter.event);
        }
        set input(M) {
          (this.inputEvent = M),
            this.listening &&
              (this.inputEventListener.dispose(),
              (this.inputEventListener = M(this.emitter.fire, this.emitter)));
        }
        dispose() {
          this.inputEventListener.dispose(), this.emitter.dispose();
        }
      }
      r.Relay = y;
    }),
    X(J[40], K([0, 1, 10]), function (W, r, n) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.CancellationTokenSource = r.CancellationToken = void 0),
        (r.cancelOnDispose = p);
      const D = Object.freeze(function (h, a) {
        const m = setTimeout(h.bind(a), 0);
        return {
          dispose() {
            clearTimeout(m);
          },
        };
      });
      var A;
      (function (h) {
        function a(m) {
          return m === h.None || m === h.Cancelled || m instanceof b
            ? !0
            : !m || typeof m != 'object'
              ? !1
              : typeof m.isCancellationRequested == 'boolean' &&
                typeof m.onCancellationRequested == 'function';
        }
        (h.isCancellationToken = a),
          (h.None = Object.freeze({
            isCancellationRequested: !1,
            onCancellationRequested: n.Event.None,
          })),
          (h.Cancelled = Object.freeze({
            isCancellationRequested: !0,
            onCancellationRequested: D,
          }));
      })(A || (r.CancellationToken = A = {}));
      class b {
        constructor() {
          (this._isCancelled = !1), (this._emitter = null);
        }
        cancel() {
          this._isCancelled ||
            ((this._isCancelled = !0),
            this._emitter && (this._emitter.fire(void 0), this.dispose()));
        }
        get isCancellationRequested() {
          return this._isCancelled;
        }
        get onCancellationRequested() {
          return this._isCancelled
            ? D
            : (this._emitter || (this._emitter = new n.Emitter()), this._emitter.event);
        }
        dispose() {
          this._emitter && (this._emitter.dispose(), (this._emitter = null));
        }
      }
      class f {
        constructor(a) {
          (this._token = void 0),
            (this._parentListener = void 0),
            (this._parentListener = a && a.onCancellationRequested(this.cancel, this));
        }
        get token() {
          return this._token || (this._token = new b()), this._token;
        }
        cancel() {
          this._token
            ? this._token instanceof b && this._token.cancel()
            : (this._token = A.Cancelled);
        }
        dispose(a = !1) {
          var m;
          a && this.cancel(),
            (m = this._parentListener) === null || m === void 0 || m.dispose(),
            this._token
              ? this._token instanceof b && this._token.dispose()
              : (this._token = A.None);
        }
      }
      r.CancellationTokenSource = f;
      function p(h) {
        const a = new f();
        return (
          h.add({
            dispose() {
              a.cancel();
            },
          }),
          a.token
        );
      }
    }),
    X(J[6], K([0, 1, 35, 39]), function (W, r, n, D) {
      'use strict';
      var A;
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.InvisibleCharacters =
          r.AmbiguousCharacters =
          r.noBreakWhitespace =
          r.UTF8_BOM_CHARACTER =
          r.UNUSUAL_LINE_TERMINATORS =
          r.GraphemeIterator =
          r.CodePointIterator =
            void 0),
        (r.isFalsyOrWhitespace = b),
        (r.format = p),
        (r.htmlAttributeEncodeValue = h),
        (r.escape = a),
        (r.escapeRegExpCharacters = m),
        (r.trim = e),
        (r.ltrim = c),
        (r.rtrim = s),
        (r.convertSimple2RegExpPattern = u),
        (r.stripWildcards = d),
        (r.createRegExp = o),
        (r.regExpLeadsToEndlessLoop = _),
        (r.splitLines = w),
        (r.splitLinesIncludeSeparators = S),
        (r.firstNonWhitespaceIndex = R),
        (r.getLeadingWhitespace = v),
        (r.lastNonWhitespaceIndex = i),
        (r.compare = l),
        (r.compareSubstring = g),
        (r.compareIgnoreCase = L),
        (r.compareSubstringIgnoreCase = C),
        (r.isAsciiDigit = N),
        (r.isLowerAsciiLetter = E),
        (r.isUpperAsciiLetter = y),
        (r.equalsIgnoreCase = x),
        (r.startsWithIgnoreCase = M),
        (r.commonPrefixLength = I),
        (r.commonSuffixLength = k),
        (r.isHighSurrogate = F),
        (r.isLowSurrogate = z),
        (r.computeCodePoint = $),
        (r.getNextCodePoint = T),
        (r.nextCharLength = j),
        (r.prevCharLength = Z),
        (r.getCharContainingOffset = re),
        (r.containsRTL = ce),
        (r.isBasicASCII = t),
        (r.containsUnusualLineTerminators = ve),
        (r.isFullWidthCharacter = Ce),
        (r.isEmojiImprecise = pe),
        (r.startsWithUTF8BOM = _e),
        (r.containsUppercaseCharacter = Se),
        (r.singleLetterHash = ye),
        (r.getLeftDeleteOffset = te);
      function b(P) {
        return !P || typeof P != 'string' ? !0 : P.trim().length === 0;
      }
      const f = /{(\d+)}/g;
      function p(P, ...q) {
        return q.length === 0
          ? P
          : P.replace(f, function (H, G) {
              const ee = parseInt(G, 10);
              return isNaN(ee) || ee < 0 || ee >= q.length ? H : q[ee];
            });
      }
      function h(P) {
        return P.replace(/[<>"'&]/g, (q) => {
          switch (q) {
            case '<':
              return '&lt;';
            case '>':
              return '&gt;';
            case '"':
              return '&quot;';
            case "'":
              return '&apos;';
            case '&':
              return '&amp;';
          }
          return q;
        });
      }
      function a(P) {
        return P.replace(/[<>&]/g, function (q) {
          switch (q) {
            case '<':
              return '&lt;';
            case '>':
              return '&gt;';
            case '&':
              return '&amp;';
            default:
              return q;
          }
        });
      }
      function m(P) {
        return P.replace(/[\\\{\}\*\+\?\|\^\$\.\[\]\(\)]/g, '\\$&');
      }
      function e(P, q = ' ') {
        const H = c(P, q);
        return s(H, q);
      }
      function c(P, q) {
        if (!P || !q) return P;
        const H = q.length;
        if (H === 0 || P.length === 0) return P;
        let G = 0;
        for (; P.indexOf(q, G) === G; ) G = G + H;
        return P.substring(G);
      }
      function s(P, q) {
        if (!P || !q) return P;
        const H = q.length,
          G = P.length;
        if (H === 0 || G === 0) return P;
        let ee = G,
          ie = -1;
        for (; (ie = P.lastIndexOf(q, ee - 1)), !(ie === -1 || ie + H !== ee); ) {
          if (ie === 0) return '';
          ee = ie;
        }
        return P.substring(0, ee);
      }
      function u(P) {
        return P.replace(/[\-\\\{\}\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, '\\$&').replace(/[\*]/g, '.*');
      }
      function d(P) {
        return P.replace(/\*/g, '');
      }
      function o(P, q, H = {}) {
        if (!P) throw new Error('Cannot create regex from empty string');
        q || (P = m(P)),
          H.wholeWord &&
            (/\B/.test(P.charAt(0)) || (P = '\\b' + P),
            /\B/.test(P.charAt(P.length - 1)) || (P = P + '\\b'));
        let G = '';
        return (
          H.global && (G += 'g'),
          H.matchCase || (G += 'i'),
          H.multiline && (G += 'm'),
          H.unicode && (G += 'u'),
          new RegExp(P, G)
        );
      }
      function _(P) {
        return P.source === '^' || P.source === '^$' || P.source === '$' || P.source === '^\\s*$'
          ? !1
          : !!(P.exec('') && P.lastIndex === 0);
      }
      function w(P) {
        return P.split(/\r\n|\r|\n/);
      }
      function S(P) {
        var q;
        const H = [],
          G = P.split(/(\r\n|\r|\n)/);
        for (let ee = 0; ee < Math.ceil(G.length / 2); ee++)
          H.push(G[2 * ee] + ((q = G[2 * ee + 1]) !== null && q !== void 0 ? q : ''));
        return H;
      }
      function R(P) {
        for (let q = 0, H = P.length; q < H; q++) {
          const G = P.charCodeAt(q);
          if (G !== 32 && G !== 9) return q;
        }
        return -1;
      }
      function v(P, q = 0, H = P.length) {
        for (let G = q; G < H; G++) {
          const ee = P.charCodeAt(G);
          if (ee !== 32 && ee !== 9) return P.substring(q, G);
        }
        return P.substring(q, H);
      }
      function i(P, q = P.length - 1) {
        for (let H = q; H >= 0; H--) {
          const G = P.charCodeAt(H);
          if (G !== 32 && G !== 9) return H;
        }
        return -1;
      }
      function l(P, q) {
        return P < q ? -1 : P > q ? 1 : 0;
      }
      function g(P, q, H = 0, G = P.length, ee = 0, ie = q.length) {
        for (; H < G && ee < ie; H++, ee++) {
          const he = P.charCodeAt(H),
            se = q.charCodeAt(ee);
          if (he < se) return -1;
          if (he > se) return 1;
        }
        const le = G - H,
          ge = ie - ee;
        return le < ge ? -1 : le > ge ? 1 : 0;
      }
      function L(P, q) {
        return C(P, q, 0, P.length, 0, q.length);
      }
      function C(P, q, H = 0, G = P.length, ee = 0, ie = q.length) {
        for (; H < G && ee < ie; H++, ee++) {
          let he = P.charCodeAt(H),
            se = q.charCodeAt(ee);
          if (he === se) continue;
          if (he >= 128 || se >= 128) return g(P.toLowerCase(), q.toLowerCase(), H, G, ee, ie);
          E(he) && (he -= 32), E(se) && (se -= 32);
          const fe = he - se;
          if (fe !== 0) return fe;
        }
        const le = G - H,
          ge = ie - ee;
        return le < ge ? -1 : le > ge ? 1 : 0;
      }
      function N(P) {
        return P >= 48 && P <= 57;
      }
      function E(P) {
        return P >= 97 && P <= 122;
      }
      function y(P) {
        return P >= 65 && P <= 90;
      }
      function x(P, q) {
        return P.length === q.length && C(P, q) === 0;
      }
      function M(P, q) {
        const H = q.length;
        return q.length > P.length ? !1 : C(P, q, 0, H) === 0;
      }
      function I(P, q) {
        const H = Math.min(P.length, q.length);
        let G;
        for (G = 0; G < H; G++) if (P.charCodeAt(G) !== q.charCodeAt(G)) return G;
        return H;
      }
      function k(P, q) {
        const H = Math.min(P.length, q.length);
        let G;
        const ee = P.length - 1,
          ie = q.length - 1;
        for (G = 0; G < H; G++) if (P.charCodeAt(ee - G) !== q.charCodeAt(ie - G)) return G;
        return H;
      }
      function F(P) {
        return 55296 <= P && P <= 56319;
      }
      function z(P) {
        return 56320 <= P && P <= 57343;
      }
      function $(P, q) {
        return ((P - 55296) << 10) + (q - 56320) + 65536;
      }
      function T(P, q, H) {
        const G = P.charCodeAt(H);
        if (F(G) && H + 1 < q) {
          const ee = P.charCodeAt(H + 1);
          if (z(ee)) return $(G, ee);
        }
        return G;
      }
      function O(P, q) {
        const H = P.charCodeAt(q - 1);
        if (z(H) && q > 1) {
          const G = P.charCodeAt(q - 2);
          if (F(G)) return $(G, H);
        }
        return H;
      }
      class B {
        get offset() {
          return this._offset;
        }
        constructor(q, H = 0) {
          (this._str = q), (this._len = q.length), (this._offset = H);
        }
        setOffset(q) {
          this._offset = q;
        }
        prevCodePoint() {
          const q = O(this._str, this._offset);
          return (this._offset -= q >= 65536 ? 2 : 1), q;
        }
        nextCodePoint() {
          const q = T(this._str, this._len, this._offset);
          return (this._offset += q >= 65536 ? 2 : 1), q;
        }
        eol() {
          return this._offset >= this._len;
        }
      }
      r.CodePointIterator = B;
      class V {
        get offset() {
          return this._iterator.offset;
        }
        constructor(q, H = 0) {
          this._iterator = new B(q, H);
        }
        nextGraphemeLength() {
          const q = de.getInstance(),
            H = this._iterator,
            G = H.offset;
          let ee = q.getGraphemeBreakType(H.nextCodePoint());
          for (; !H.eol(); ) {
            const ie = H.offset,
              le = q.getGraphemeBreakType(H.nextCodePoint());
            if (Le(ee, le)) {
              H.setOffset(ie);
              break;
            }
            ee = le;
          }
          return H.offset - G;
        }
        prevGraphemeLength() {
          const q = de.getInstance(),
            H = this._iterator,
            G = H.offset;
          let ee = q.getGraphemeBreakType(H.prevCodePoint());
          for (; H.offset > 0; ) {
            const ie = H.offset,
              le = q.getGraphemeBreakType(H.prevCodePoint());
            if (Le(le, ee)) {
              H.setOffset(ie);
              break;
            }
            ee = le;
          }
          return G - H.offset;
        }
        eol() {
          return this._iterator.eol();
        }
      }
      r.GraphemeIterator = V;
      function j(P, q) {
        return new V(P, q).nextGraphemeLength();
      }
      function Z(P, q) {
        return new V(P, q).prevGraphemeLength();
      }
      function re(P, q) {
        q > 0 && z(P.charCodeAt(q)) && q--;
        const H = q + j(P, q);
        return [H - Z(P, H), H];
      }
      let ae;
      function oe() {
        return /(?:[\u05BE\u05C0\u05C3\u05C6\u05D0-\u05F4\u0608\u060B\u060D\u061B-\u064A\u066D-\u066F\u0671-\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u0710\u0712-\u072F\u074D-\u07A5\u07B1-\u07EA\u07F4\u07F5\u07FA\u07FE-\u0815\u081A\u0824\u0828\u0830-\u0858\u085E-\u088E\u08A0-\u08C9\u200F\uFB1D\uFB1F-\uFB28\uFB2A-\uFD3D\uFD50-\uFDC7\uFDF0-\uFDFC\uFE70-\uFEFC]|\uD802[\uDC00-\uDD1B\uDD20-\uDE00\uDE10-\uDE35\uDE40-\uDEE4\uDEEB-\uDF35\uDF40-\uDFFF]|\uD803[\uDC00-\uDD23\uDE80-\uDEA9\uDEAD-\uDF45\uDF51-\uDF81\uDF86-\uDFF6]|\uD83A[\uDC00-\uDCCF\uDD00-\uDD43\uDD4B-\uDFFF]|\uD83B[\uDC00-\uDEBB])/;
      }
      function ce(P) {
        return ae || (ae = oe()), ae.test(P);
      }
      const be = /^[\t\n\r\x20-\x7E]*$/;
      function t(P) {
        return be.test(P);
      }
      r.UNUSUAL_LINE_TERMINATORS = /[\u2028\u2029]/;
      function ve(P) {
        return r.UNUSUAL_LINE_TERMINATORS.test(P);
      }
      function Ce(P) {
        return (
          (P >= 11904 && P <= 55215) || (P >= 63744 && P <= 64255) || (P >= 65281 && P <= 65374)
        );
      }
      function pe(P) {
        return (
          (P >= 127462 && P <= 127487) ||
          P === 8986 ||
          P === 8987 ||
          P === 9200 ||
          P === 9203 ||
          (P >= 9728 && P <= 10175) ||
          P === 11088 ||
          P === 11093 ||
          (P >= 127744 && P <= 128591) ||
          (P >= 128640 && P <= 128764) ||
          (P >= 128992 && P <= 129008) ||
          (P >= 129280 && P <= 129535) ||
          (P >= 129648 && P <= 129782)
        );
      }
      r.UTF8_BOM_CHARACTER = '\uFEFF';
      function _e(P) {
        return !!(P && P.length > 0 && P.charCodeAt(0) === 65279);
      }
      function Se(P, q = !1) {
        return P ? (q && (P = P.replace(/\\./g, '')), P.toLowerCase() !== P) : !1;
      }
      function ye(P) {
        return (
          (P = P % (2 * 26)),
          P < 26 ? String.fromCharCode(97 + P) : String.fromCharCode(65 + P - 26)
        );
      }
      function Le(P, q) {
        return P === 0
          ? q !== 5 && q !== 7
          : P === 2 && q === 3
            ? !1
            : P === 4 || P === 2 || P === 3 || q === 4 || q === 2 || q === 3
              ? !0
              : !(
                  (P === 8 && (q === 8 || q === 9 || q === 11 || q === 12)) ||
                  ((P === 11 || P === 9) && (q === 9 || q === 10)) ||
                  ((P === 12 || P === 10) && q === 10) ||
                  q === 5 ||
                  q === 13 ||
                  q === 7 ||
                  P === 1 ||
                  (P === 13 && q === 14) ||
                  (P === 6 && q === 6)
                );
      }
      class de {
        static getInstance() {
          return de._INSTANCE || (de._INSTANCE = new de()), de._INSTANCE;
        }
        constructor() {
          this._data = Ne();
        }
        getGraphemeBreakType(q) {
          if (q < 32) return q === 10 ? 3 : q === 13 ? 2 : 4;
          if (q < 127) return 0;
          const H = this._data,
            G = H.length / 3;
          let ee = 1;
          for (; ee <= G; )
            if (q < H[3 * ee]) ee = 2 * ee;
            else if (q > H[3 * ee + 1]) ee = 2 * ee + 1;
            else return H[3 * ee + 2];
          return 0;
        }
      }
      de._INSTANCE = null;
      function Ne() {
        return JSON.parse(
          '[0,0,0,51229,51255,12,44061,44087,12,127462,127487,6,7083,7085,5,47645,47671,12,54813,54839,12,128678,128678,14,3270,3270,5,9919,9923,14,45853,45879,12,49437,49463,12,53021,53047,12,71216,71218,7,128398,128399,14,129360,129374,14,2519,2519,5,4448,4519,9,9742,9742,14,12336,12336,14,44957,44983,12,46749,46775,12,48541,48567,12,50333,50359,12,52125,52151,12,53917,53943,12,69888,69890,5,73018,73018,5,127990,127990,14,128558,128559,14,128759,128760,14,129653,129655,14,2027,2035,5,2891,2892,7,3761,3761,5,6683,6683,5,8293,8293,4,9825,9826,14,9999,9999,14,43452,43453,5,44509,44535,12,45405,45431,12,46301,46327,12,47197,47223,12,48093,48119,12,48989,49015,12,49885,49911,12,50781,50807,12,51677,51703,12,52573,52599,12,53469,53495,12,54365,54391,12,65279,65279,4,70471,70472,7,72145,72147,7,119173,119179,5,127799,127818,14,128240,128244,14,128512,128512,14,128652,128652,14,128721,128722,14,129292,129292,14,129445,129450,14,129734,129743,14,1476,1477,5,2366,2368,7,2750,2752,7,3076,3076,5,3415,3415,5,4141,4144,5,6109,6109,5,6964,6964,5,7394,7400,5,9197,9198,14,9770,9770,14,9877,9877,14,9968,9969,14,10084,10084,14,43052,43052,5,43713,43713,5,44285,44311,12,44733,44759,12,45181,45207,12,45629,45655,12,46077,46103,12,46525,46551,12,46973,46999,12,47421,47447,12,47869,47895,12,48317,48343,12,48765,48791,12,49213,49239,12,49661,49687,12,50109,50135,12,50557,50583,12,51005,51031,12,51453,51479,12,51901,51927,12,52349,52375,12,52797,52823,12,53245,53271,12,53693,53719,12,54141,54167,12,54589,54615,12,55037,55063,12,69506,69509,5,70191,70193,5,70841,70841,7,71463,71467,5,72330,72342,5,94031,94031,5,123628,123631,5,127763,127765,14,127941,127941,14,128043,128062,14,128302,128317,14,128465,128467,14,128539,128539,14,128640,128640,14,128662,128662,14,128703,128703,14,128745,128745,14,129004,129007,14,129329,129330,14,129402,129402,14,129483,129483,14,129686,129704,14,130048,131069,14,173,173,4,1757,1757,1,2200,2207,5,2434,2435,7,2631,2632,5,2817,2817,5,3008,3008,5,3201,3201,5,3387,3388,5,3542,3542,5,3902,3903,7,4190,4192,5,6002,6003,5,6439,6440,5,6765,6770,7,7019,7027,5,7154,7155,7,8205,8205,13,8505,8505,14,9654,9654,14,9757,9757,14,9792,9792,14,9852,9853,14,9890,9894,14,9937,9937,14,9981,9981,14,10035,10036,14,11035,11036,14,42654,42655,5,43346,43347,7,43587,43587,5,44006,44007,7,44173,44199,12,44397,44423,12,44621,44647,12,44845,44871,12,45069,45095,12,45293,45319,12,45517,45543,12,45741,45767,12,45965,45991,12,46189,46215,12,46413,46439,12,46637,46663,12,46861,46887,12,47085,47111,12,47309,47335,12,47533,47559,12,47757,47783,12,47981,48007,12,48205,48231,12,48429,48455,12,48653,48679,12,48877,48903,12,49101,49127,12,49325,49351,12,49549,49575,12,49773,49799,12,49997,50023,12,50221,50247,12,50445,50471,12,50669,50695,12,50893,50919,12,51117,51143,12,51341,51367,12,51565,51591,12,51789,51815,12,52013,52039,12,52237,52263,12,52461,52487,12,52685,52711,12,52909,52935,12,53133,53159,12,53357,53383,12,53581,53607,12,53805,53831,12,54029,54055,12,54253,54279,12,54477,54503,12,54701,54727,12,54925,54951,12,55149,55175,12,68101,68102,5,69762,69762,7,70067,70069,7,70371,70378,5,70720,70721,7,71087,71087,5,71341,71341,5,71995,71996,5,72249,72249,7,72850,72871,5,73109,73109,5,118576,118598,5,121505,121519,5,127245,127247,14,127568,127569,14,127777,127777,14,127872,127891,14,127956,127967,14,128015,128016,14,128110,128172,14,128259,128259,14,128367,128368,14,128424,128424,14,128488,128488,14,128530,128532,14,128550,128551,14,128566,128566,14,128647,128647,14,128656,128656,14,128667,128673,14,128691,128693,14,128715,128715,14,128728,128732,14,128752,128752,14,128765,128767,14,129096,129103,14,129311,129311,14,129344,129349,14,129394,129394,14,129413,129425,14,129466,129471,14,129511,129535,14,129664,129666,14,129719,129722,14,129760,129767,14,917536,917631,5,13,13,2,1160,1161,5,1564,1564,4,1807,1807,1,2085,2087,5,2307,2307,7,2382,2383,7,2497,2500,5,2563,2563,7,2677,2677,5,2763,2764,7,2879,2879,5,2914,2915,5,3021,3021,5,3142,3144,5,3263,3263,5,3285,3286,5,3398,3400,7,3530,3530,5,3633,3633,5,3864,3865,5,3974,3975,5,4155,4156,7,4229,4230,5,5909,5909,7,6078,6085,7,6277,6278,5,6451,6456,7,6744,6750,5,6846,6846,5,6972,6972,5,7074,7077,5,7146,7148,7,7222,7223,5,7416,7417,5,8234,8238,4,8417,8417,5,9000,9000,14,9203,9203,14,9730,9731,14,9748,9749,14,9762,9763,14,9776,9783,14,9800,9811,14,9831,9831,14,9872,9873,14,9882,9882,14,9900,9903,14,9929,9933,14,9941,9960,14,9974,9974,14,9989,9989,14,10006,10006,14,10062,10062,14,10160,10160,14,11647,11647,5,12953,12953,14,43019,43019,5,43232,43249,5,43443,43443,5,43567,43568,7,43696,43696,5,43765,43765,7,44013,44013,5,44117,44143,12,44229,44255,12,44341,44367,12,44453,44479,12,44565,44591,12,44677,44703,12,44789,44815,12,44901,44927,12,45013,45039,12,45125,45151,12,45237,45263,12,45349,45375,12,45461,45487,12,45573,45599,12,45685,45711,12,45797,45823,12,45909,45935,12,46021,46047,12,46133,46159,12,46245,46271,12,46357,46383,12,46469,46495,12,46581,46607,12,46693,46719,12,46805,46831,12,46917,46943,12,47029,47055,12,47141,47167,12,47253,47279,12,47365,47391,12,47477,47503,12,47589,47615,12,47701,47727,12,47813,47839,12,47925,47951,12,48037,48063,12,48149,48175,12,48261,48287,12,48373,48399,12,48485,48511,12,48597,48623,12,48709,48735,12,48821,48847,12,48933,48959,12,49045,49071,12,49157,49183,12,49269,49295,12,49381,49407,12,49493,49519,12,49605,49631,12,49717,49743,12,49829,49855,12,49941,49967,12,50053,50079,12,50165,50191,12,50277,50303,12,50389,50415,12,50501,50527,12,50613,50639,12,50725,50751,12,50837,50863,12,50949,50975,12,51061,51087,12,51173,51199,12,51285,51311,12,51397,51423,12,51509,51535,12,51621,51647,12,51733,51759,12,51845,51871,12,51957,51983,12,52069,52095,12,52181,52207,12,52293,52319,12,52405,52431,12,52517,52543,12,52629,52655,12,52741,52767,12,52853,52879,12,52965,52991,12,53077,53103,12,53189,53215,12,53301,53327,12,53413,53439,12,53525,53551,12,53637,53663,12,53749,53775,12,53861,53887,12,53973,53999,12,54085,54111,12,54197,54223,12,54309,54335,12,54421,54447,12,54533,54559,12,54645,54671,12,54757,54783,12,54869,54895,12,54981,55007,12,55093,55119,12,55243,55291,10,66045,66045,5,68325,68326,5,69688,69702,5,69817,69818,5,69957,69958,7,70089,70092,5,70198,70199,5,70462,70462,5,70502,70508,5,70750,70750,5,70846,70846,7,71100,71101,5,71230,71230,7,71351,71351,5,71737,71738,5,72000,72000,7,72160,72160,5,72273,72278,5,72752,72758,5,72882,72883,5,73031,73031,5,73461,73462,7,94192,94193,7,119149,119149,7,121403,121452,5,122915,122916,5,126980,126980,14,127358,127359,14,127535,127535,14,127759,127759,14,127771,127771,14,127792,127793,14,127825,127867,14,127897,127899,14,127945,127945,14,127985,127986,14,128000,128007,14,128021,128021,14,128066,128100,14,128184,128235,14,128249,128252,14,128266,128276,14,128335,128335,14,128379,128390,14,128407,128419,14,128444,128444,14,128481,128481,14,128499,128499,14,128526,128526,14,128536,128536,14,128543,128543,14,128556,128556,14,128564,128564,14,128577,128580,14,128643,128645,14,128649,128649,14,128654,128654,14,128660,128660,14,128664,128664,14,128675,128675,14,128686,128689,14,128695,128696,14,128705,128709,14,128717,128719,14,128725,128725,14,128736,128741,14,128747,128748,14,128755,128755,14,128762,128762,14,128981,128991,14,129009,129023,14,129160,129167,14,129296,129304,14,129320,129327,14,129340,129342,14,129356,129356,14,129388,129392,14,129399,129400,14,129404,129407,14,129432,129442,14,129454,129455,14,129473,129474,14,129485,129487,14,129648,129651,14,129659,129660,14,129671,129679,14,129709,129711,14,129728,129730,14,129751,129753,14,129776,129782,14,917505,917505,4,917760,917999,5,10,10,3,127,159,4,768,879,5,1471,1471,5,1536,1541,1,1648,1648,5,1767,1768,5,1840,1866,5,2070,2073,5,2137,2139,5,2274,2274,1,2363,2363,7,2377,2380,7,2402,2403,5,2494,2494,5,2507,2508,7,2558,2558,5,2622,2624,7,2641,2641,5,2691,2691,7,2759,2760,5,2786,2787,5,2876,2876,5,2881,2884,5,2901,2902,5,3006,3006,5,3014,3016,7,3072,3072,5,3134,3136,5,3157,3158,5,3260,3260,5,3266,3266,5,3274,3275,7,3328,3329,5,3391,3392,7,3405,3405,5,3457,3457,5,3536,3537,7,3551,3551,5,3636,3642,5,3764,3772,5,3895,3895,5,3967,3967,7,3993,4028,5,4146,4151,5,4182,4183,7,4226,4226,5,4253,4253,5,4957,4959,5,5940,5940,7,6070,6070,7,6087,6088,7,6158,6158,4,6432,6434,5,6448,6449,7,6679,6680,5,6742,6742,5,6754,6754,5,6783,6783,5,6912,6915,5,6966,6970,5,6978,6978,5,7042,7042,7,7080,7081,5,7143,7143,7,7150,7150,7,7212,7219,5,7380,7392,5,7412,7412,5,8203,8203,4,8232,8232,4,8265,8265,14,8400,8412,5,8421,8432,5,8617,8618,14,9167,9167,14,9200,9200,14,9410,9410,14,9723,9726,14,9733,9733,14,9745,9745,14,9752,9752,14,9760,9760,14,9766,9766,14,9774,9774,14,9786,9786,14,9794,9794,14,9823,9823,14,9828,9828,14,9833,9850,14,9855,9855,14,9875,9875,14,9880,9880,14,9885,9887,14,9896,9897,14,9906,9916,14,9926,9927,14,9935,9935,14,9939,9939,14,9962,9962,14,9972,9972,14,9978,9978,14,9986,9986,14,9997,9997,14,10002,10002,14,10017,10017,14,10055,10055,14,10071,10071,14,10133,10135,14,10548,10549,14,11093,11093,14,12330,12333,5,12441,12442,5,42608,42610,5,43010,43010,5,43045,43046,5,43188,43203,7,43302,43309,5,43392,43394,5,43446,43449,5,43493,43493,5,43571,43572,7,43597,43597,7,43703,43704,5,43756,43757,5,44003,44004,7,44009,44010,7,44033,44059,12,44089,44115,12,44145,44171,12,44201,44227,12,44257,44283,12,44313,44339,12,44369,44395,12,44425,44451,12,44481,44507,12,44537,44563,12,44593,44619,12,44649,44675,12,44705,44731,12,44761,44787,12,44817,44843,12,44873,44899,12,44929,44955,12,44985,45011,12,45041,45067,12,45097,45123,12,45153,45179,12,45209,45235,12,45265,45291,12,45321,45347,12,45377,45403,12,45433,45459,12,45489,45515,12,45545,45571,12,45601,45627,12,45657,45683,12,45713,45739,12,45769,45795,12,45825,45851,12,45881,45907,12,45937,45963,12,45993,46019,12,46049,46075,12,46105,46131,12,46161,46187,12,46217,46243,12,46273,46299,12,46329,46355,12,46385,46411,12,46441,46467,12,46497,46523,12,46553,46579,12,46609,46635,12,46665,46691,12,46721,46747,12,46777,46803,12,46833,46859,12,46889,46915,12,46945,46971,12,47001,47027,12,47057,47083,12,47113,47139,12,47169,47195,12,47225,47251,12,47281,47307,12,47337,47363,12,47393,47419,12,47449,47475,12,47505,47531,12,47561,47587,12,47617,47643,12,47673,47699,12,47729,47755,12,47785,47811,12,47841,47867,12,47897,47923,12,47953,47979,12,48009,48035,12,48065,48091,12,48121,48147,12,48177,48203,12,48233,48259,12,48289,48315,12,48345,48371,12,48401,48427,12,48457,48483,12,48513,48539,12,48569,48595,12,48625,48651,12,48681,48707,12,48737,48763,12,48793,48819,12,48849,48875,12,48905,48931,12,48961,48987,12,49017,49043,12,49073,49099,12,49129,49155,12,49185,49211,12,49241,49267,12,49297,49323,12,49353,49379,12,49409,49435,12,49465,49491,12,49521,49547,12,49577,49603,12,49633,49659,12,49689,49715,12,49745,49771,12,49801,49827,12,49857,49883,12,49913,49939,12,49969,49995,12,50025,50051,12,50081,50107,12,50137,50163,12,50193,50219,12,50249,50275,12,50305,50331,12,50361,50387,12,50417,50443,12,50473,50499,12,50529,50555,12,50585,50611,12,50641,50667,12,50697,50723,12,50753,50779,12,50809,50835,12,50865,50891,12,50921,50947,12,50977,51003,12,51033,51059,12,51089,51115,12,51145,51171,12,51201,51227,12,51257,51283,12,51313,51339,12,51369,51395,12,51425,51451,12,51481,51507,12,51537,51563,12,51593,51619,12,51649,51675,12,51705,51731,12,51761,51787,12,51817,51843,12,51873,51899,12,51929,51955,12,51985,52011,12,52041,52067,12,52097,52123,12,52153,52179,12,52209,52235,12,52265,52291,12,52321,52347,12,52377,52403,12,52433,52459,12,52489,52515,12,52545,52571,12,52601,52627,12,52657,52683,12,52713,52739,12,52769,52795,12,52825,52851,12,52881,52907,12,52937,52963,12,52993,53019,12,53049,53075,12,53105,53131,12,53161,53187,12,53217,53243,12,53273,53299,12,53329,53355,12,53385,53411,12,53441,53467,12,53497,53523,12,53553,53579,12,53609,53635,12,53665,53691,12,53721,53747,12,53777,53803,12,53833,53859,12,53889,53915,12,53945,53971,12,54001,54027,12,54057,54083,12,54113,54139,12,54169,54195,12,54225,54251,12,54281,54307,12,54337,54363,12,54393,54419,12,54449,54475,12,54505,54531,12,54561,54587,12,54617,54643,12,54673,54699,12,54729,54755,12,54785,54811,12,54841,54867,12,54897,54923,12,54953,54979,12,55009,55035,12,55065,55091,12,55121,55147,12,55177,55203,12,65024,65039,5,65520,65528,4,66422,66426,5,68152,68154,5,69291,69292,5,69633,69633,5,69747,69748,5,69811,69814,5,69826,69826,5,69932,69932,7,70016,70017,5,70079,70080,7,70095,70095,5,70196,70196,5,70367,70367,5,70402,70403,7,70464,70464,5,70487,70487,5,70709,70711,7,70725,70725,7,70833,70834,7,70843,70844,7,70849,70849,7,71090,71093,5,71103,71104,5,71227,71228,7,71339,71339,5,71344,71349,5,71458,71461,5,71727,71735,5,71985,71989,7,71998,71998,5,72002,72002,7,72154,72155,5,72193,72202,5,72251,72254,5,72281,72283,5,72344,72345,5,72766,72766,7,72874,72880,5,72885,72886,5,73023,73029,5,73104,73105,5,73111,73111,5,92912,92916,5,94095,94098,5,113824,113827,4,119142,119142,7,119155,119162,4,119362,119364,5,121476,121476,5,122888,122904,5,123184,123190,5,125252,125258,5,127183,127183,14,127340,127343,14,127377,127386,14,127491,127503,14,127548,127551,14,127744,127756,14,127761,127761,14,127769,127769,14,127773,127774,14,127780,127788,14,127796,127797,14,127820,127823,14,127869,127869,14,127894,127895,14,127902,127903,14,127943,127943,14,127947,127950,14,127972,127972,14,127988,127988,14,127992,127994,14,128009,128011,14,128019,128019,14,128023,128041,14,128064,128064,14,128102,128107,14,128174,128181,14,128238,128238,14,128246,128247,14,128254,128254,14,128264,128264,14,128278,128299,14,128329,128330,14,128348,128359,14,128371,128377,14,128392,128393,14,128401,128404,14,128421,128421,14,128433,128434,14,128450,128452,14,128476,128478,14,128483,128483,14,128495,128495,14,128506,128506,14,128519,128520,14,128528,128528,14,128534,128534,14,128538,128538,14,128540,128542,14,128544,128549,14,128552,128555,14,128557,128557,14,128560,128563,14,128565,128565,14,128567,128576,14,128581,128591,14,128641,128642,14,128646,128646,14,128648,128648,14,128650,128651,14,128653,128653,14,128655,128655,14,128657,128659,14,128661,128661,14,128663,128663,14,128665,128666,14,128674,128674,14,128676,128677,14,128679,128685,14,128690,128690,14,128694,128694,14,128697,128702,14,128704,128704,14,128710,128714,14,128716,128716,14,128720,128720,14,128723,128724,14,128726,128727,14,128733,128735,14,128742,128744,14,128746,128746,14,128749,128751,14,128753,128754,14,128756,128758,14,128761,128761,14,128763,128764,14,128884,128895,14,128992,129003,14,129008,129008,14,129036,129039,14,129114,129119,14,129198,129279,14,129293,129295,14,129305,129310,14,129312,129319,14,129328,129328,14,129331,129338,14,129343,129343,14,129351,129355,14,129357,129359,14,129375,129387,14,129393,129393,14,129395,129398,14,129401,129401,14,129403,129403,14,129408,129412,14,129426,129431,14,129443,129444,14,129451,129453,14,129456,129465,14,129472,129472,14,129475,129482,14,129484,129484,14,129488,129510,14,129536,129647,14,129652,129652,14,129656,129658,14,129661,129663,14,129667,129670,14,129680,129685,14,129705,129708,14,129712,129718,14,129723,129727,14,129731,129733,14,129744,129750,14,129754,129759,14,129768,129775,14,129783,129791,14,917504,917504,4,917506,917535,4,917632,917759,4,918000,921599,4,0,9,4,11,12,4,14,31,4,169,169,14,174,174,14,1155,1159,5,1425,1469,5,1473,1474,5,1479,1479,5,1552,1562,5,1611,1631,5,1750,1756,5,1759,1764,5,1770,1773,5,1809,1809,5,1958,1968,5,2045,2045,5,2075,2083,5,2089,2093,5,2192,2193,1,2250,2273,5,2275,2306,5,2362,2362,5,2364,2364,5,2369,2376,5,2381,2381,5,2385,2391,5,2433,2433,5,2492,2492,5,2495,2496,7,2503,2504,7,2509,2509,5,2530,2531,5,2561,2562,5,2620,2620,5,2625,2626,5,2635,2637,5,2672,2673,5,2689,2690,5,2748,2748,5,2753,2757,5,2761,2761,7,2765,2765,5,2810,2815,5,2818,2819,7,2878,2878,5,2880,2880,7,2887,2888,7,2893,2893,5,2903,2903,5,2946,2946,5,3007,3007,7,3009,3010,7,3018,3020,7,3031,3031,5,3073,3075,7,3132,3132,5,3137,3140,7,3146,3149,5,3170,3171,5,3202,3203,7,3262,3262,7,3264,3265,7,3267,3268,7,3271,3272,7,3276,3277,5,3298,3299,5,3330,3331,7,3390,3390,5,3393,3396,5,3402,3404,7,3406,3406,1,3426,3427,5,3458,3459,7,3535,3535,5,3538,3540,5,3544,3550,7,3570,3571,7,3635,3635,7,3655,3662,5,3763,3763,7,3784,3789,5,3893,3893,5,3897,3897,5,3953,3966,5,3968,3972,5,3981,3991,5,4038,4038,5,4145,4145,7,4153,4154,5,4157,4158,5,4184,4185,5,4209,4212,5,4228,4228,7,4237,4237,5,4352,4447,8,4520,4607,10,5906,5908,5,5938,5939,5,5970,5971,5,6068,6069,5,6071,6077,5,6086,6086,5,6089,6099,5,6155,6157,5,6159,6159,5,6313,6313,5,6435,6438,7,6441,6443,7,6450,6450,5,6457,6459,5,6681,6682,7,6741,6741,7,6743,6743,7,6752,6752,5,6757,6764,5,6771,6780,5,6832,6845,5,6847,6862,5,6916,6916,7,6965,6965,5,6971,6971,7,6973,6977,7,6979,6980,7,7040,7041,5,7073,7073,7,7078,7079,7,7082,7082,7,7142,7142,5,7144,7145,5,7149,7149,5,7151,7153,5,7204,7211,7,7220,7221,7,7376,7378,5,7393,7393,7,7405,7405,5,7415,7415,7,7616,7679,5,8204,8204,5,8206,8207,4,8233,8233,4,8252,8252,14,8288,8292,4,8294,8303,4,8413,8416,5,8418,8420,5,8482,8482,14,8596,8601,14,8986,8987,14,9096,9096,14,9193,9196,14,9199,9199,14,9201,9202,14,9208,9210,14,9642,9643,14,9664,9664,14,9728,9729,14,9732,9732,14,9735,9741,14,9743,9744,14,9746,9746,14,9750,9751,14,9753,9756,14,9758,9759,14,9761,9761,14,9764,9765,14,9767,9769,14,9771,9773,14,9775,9775,14,9784,9785,14,9787,9791,14,9793,9793,14,9795,9799,14,9812,9822,14,9824,9824,14,9827,9827,14,9829,9830,14,9832,9832,14,9851,9851,14,9854,9854,14,9856,9861,14,9874,9874,14,9876,9876,14,9878,9879,14,9881,9881,14,9883,9884,14,9888,9889,14,9895,9895,14,9898,9899,14,9904,9905,14,9917,9918,14,9924,9925,14,9928,9928,14,9934,9934,14,9936,9936,14,9938,9938,14,9940,9940,14,9961,9961,14,9963,9967,14,9970,9971,14,9973,9973,14,9975,9977,14,9979,9980,14,9982,9985,14,9987,9988,14,9992,9996,14,9998,9998,14,10000,10001,14,10004,10004,14,10013,10013,14,10024,10024,14,10052,10052,14,10060,10060,14,10067,10069,14,10083,10083,14,10085,10087,14,10145,10145,14,10175,10175,14,11013,11015,14,11088,11088,14,11503,11505,5,11744,11775,5,12334,12335,5,12349,12349,14,12951,12951,14,42607,42607,5,42612,42621,5,42736,42737,5,43014,43014,5,43043,43044,7,43047,43047,7,43136,43137,7,43204,43205,5,43263,43263,5,43335,43345,5,43360,43388,8,43395,43395,7,43444,43445,7,43450,43451,7,43454,43456,7,43561,43566,5,43569,43570,5,43573,43574,5,43596,43596,5,43644,43644,5,43698,43700,5,43710,43711,5,43755,43755,7,43758,43759,7,43766,43766,5,44005,44005,5,44008,44008,5,44012,44012,7,44032,44032,11,44060,44060,11,44088,44088,11,44116,44116,11,44144,44144,11,44172,44172,11,44200,44200,11,44228,44228,11,44256,44256,11,44284,44284,11,44312,44312,11,44340,44340,11,44368,44368,11,44396,44396,11,44424,44424,11,44452,44452,11,44480,44480,11,44508,44508,11,44536,44536,11,44564,44564,11,44592,44592,11,44620,44620,11,44648,44648,11,44676,44676,11,44704,44704,11,44732,44732,11,44760,44760,11,44788,44788,11,44816,44816,11,44844,44844,11,44872,44872,11,44900,44900,11,44928,44928,11,44956,44956,11,44984,44984,11,45012,45012,11,45040,45040,11,45068,45068,11,45096,45096,11,45124,45124,11,45152,45152,11,45180,45180,11,45208,45208,11,45236,45236,11,45264,45264,11,45292,45292,11,45320,45320,11,45348,45348,11,45376,45376,11,45404,45404,11,45432,45432,11,45460,45460,11,45488,45488,11,45516,45516,11,45544,45544,11,45572,45572,11,45600,45600,11,45628,45628,11,45656,45656,11,45684,45684,11,45712,45712,11,45740,45740,11,45768,45768,11,45796,45796,11,45824,45824,11,45852,45852,11,45880,45880,11,45908,45908,11,45936,45936,11,45964,45964,11,45992,45992,11,46020,46020,11,46048,46048,11,46076,46076,11,46104,46104,11,46132,46132,11,46160,46160,11,46188,46188,11,46216,46216,11,46244,46244,11,46272,46272,11,46300,46300,11,46328,46328,11,46356,46356,11,46384,46384,11,46412,46412,11,46440,46440,11,46468,46468,11,46496,46496,11,46524,46524,11,46552,46552,11,46580,46580,11,46608,46608,11,46636,46636,11,46664,46664,11,46692,46692,11,46720,46720,11,46748,46748,11,46776,46776,11,46804,46804,11,46832,46832,11,46860,46860,11,46888,46888,11,46916,46916,11,46944,46944,11,46972,46972,11,47000,47000,11,47028,47028,11,47056,47056,11,47084,47084,11,47112,47112,11,47140,47140,11,47168,47168,11,47196,47196,11,47224,47224,11,47252,47252,11,47280,47280,11,47308,47308,11,47336,47336,11,47364,47364,11,47392,47392,11,47420,47420,11,47448,47448,11,47476,47476,11,47504,47504,11,47532,47532,11,47560,47560,11,47588,47588,11,47616,47616,11,47644,47644,11,47672,47672,11,47700,47700,11,47728,47728,11,47756,47756,11,47784,47784,11,47812,47812,11,47840,47840,11,47868,47868,11,47896,47896,11,47924,47924,11,47952,47952,11,47980,47980,11,48008,48008,11,48036,48036,11,48064,48064,11,48092,48092,11,48120,48120,11,48148,48148,11,48176,48176,11,48204,48204,11,48232,48232,11,48260,48260,11,48288,48288,11,48316,48316,11,48344,48344,11,48372,48372,11,48400,48400,11,48428,48428,11,48456,48456,11,48484,48484,11,48512,48512,11,48540,48540,11,48568,48568,11,48596,48596,11,48624,48624,11,48652,48652,11,48680,48680,11,48708,48708,11,48736,48736,11,48764,48764,11,48792,48792,11,48820,48820,11,48848,48848,11,48876,48876,11,48904,48904,11,48932,48932,11,48960,48960,11,48988,48988,11,49016,49016,11,49044,49044,11,49072,49072,11,49100,49100,11,49128,49128,11,49156,49156,11,49184,49184,11,49212,49212,11,49240,49240,11,49268,49268,11,49296,49296,11,49324,49324,11,49352,49352,11,49380,49380,11,49408,49408,11,49436,49436,11,49464,49464,11,49492,49492,11,49520,49520,11,49548,49548,11,49576,49576,11,49604,49604,11,49632,49632,11,49660,49660,11,49688,49688,11,49716,49716,11,49744,49744,11,49772,49772,11,49800,49800,11,49828,49828,11,49856,49856,11,49884,49884,11,49912,49912,11,49940,49940,11,49968,49968,11,49996,49996,11,50024,50024,11,50052,50052,11,50080,50080,11,50108,50108,11,50136,50136,11,50164,50164,11,50192,50192,11,50220,50220,11,50248,50248,11,50276,50276,11,50304,50304,11,50332,50332,11,50360,50360,11,50388,50388,11,50416,50416,11,50444,50444,11,50472,50472,11,50500,50500,11,50528,50528,11,50556,50556,11,50584,50584,11,50612,50612,11,50640,50640,11,50668,50668,11,50696,50696,11,50724,50724,11,50752,50752,11,50780,50780,11,50808,50808,11,50836,50836,11,50864,50864,11,50892,50892,11,50920,50920,11,50948,50948,11,50976,50976,11,51004,51004,11,51032,51032,11,51060,51060,11,51088,51088,11,51116,51116,11,51144,51144,11,51172,51172,11,51200,51200,11,51228,51228,11,51256,51256,11,51284,51284,11,51312,51312,11,51340,51340,11,51368,51368,11,51396,51396,11,51424,51424,11,51452,51452,11,51480,51480,11,51508,51508,11,51536,51536,11,51564,51564,11,51592,51592,11,51620,51620,11,51648,51648,11,51676,51676,11,51704,51704,11,51732,51732,11,51760,51760,11,51788,51788,11,51816,51816,11,51844,51844,11,51872,51872,11,51900,51900,11,51928,51928,11,51956,51956,11,51984,51984,11,52012,52012,11,52040,52040,11,52068,52068,11,52096,52096,11,52124,52124,11,52152,52152,11,52180,52180,11,52208,52208,11,52236,52236,11,52264,52264,11,52292,52292,11,52320,52320,11,52348,52348,11,52376,52376,11,52404,52404,11,52432,52432,11,52460,52460,11,52488,52488,11,52516,52516,11,52544,52544,11,52572,52572,11,52600,52600,11,52628,52628,11,52656,52656,11,52684,52684,11,52712,52712,11,52740,52740,11,52768,52768,11,52796,52796,11,52824,52824,11,52852,52852,11,52880,52880,11,52908,52908,11,52936,52936,11,52964,52964,11,52992,52992,11,53020,53020,11,53048,53048,11,53076,53076,11,53104,53104,11,53132,53132,11,53160,53160,11,53188,53188,11,53216,53216,11,53244,53244,11,53272,53272,11,53300,53300,11,53328,53328,11,53356,53356,11,53384,53384,11,53412,53412,11,53440,53440,11,53468,53468,11,53496,53496,11,53524,53524,11,53552,53552,11,53580,53580,11,53608,53608,11,53636,53636,11,53664,53664,11,53692,53692,11,53720,53720,11,53748,53748,11,53776,53776,11,53804,53804,11,53832,53832,11,53860,53860,11,53888,53888,11,53916,53916,11,53944,53944,11,53972,53972,11,54000,54000,11,54028,54028,11,54056,54056,11,54084,54084,11,54112,54112,11,54140,54140,11,54168,54168,11,54196,54196,11,54224,54224,11,54252,54252,11,54280,54280,11,54308,54308,11,54336,54336,11,54364,54364,11,54392,54392,11,54420,54420,11,54448,54448,11,54476,54476,11,54504,54504,11,54532,54532,11,54560,54560,11,54588,54588,11,54616,54616,11,54644,54644,11,54672,54672,11,54700,54700,11,54728,54728,11,54756,54756,11,54784,54784,11,54812,54812,11,54840,54840,11,54868,54868,11,54896,54896,11,54924,54924,11,54952,54952,11,54980,54980,11,55008,55008,11,55036,55036,11,55064,55064,11,55092,55092,11,55120,55120,11,55148,55148,11,55176,55176,11,55216,55238,9,64286,64286,5,65056,65071,5,65438,65439,5,65529,65531,4,66272,66272,5,68097,68099,5,68108,68111,5,68159,68159,5,68900,68903,5,69446,69456,5,69632,69632,7,69634,69634,7,69744,69744,5,69759,69761,5,69808,69810,7,69815,69816,7,69821,69821,1,69837,69837,1,69927,69931,5,69933,69940,5,70003,70003,5,70018,70018,7,70070,70078,5,70082,70083,1,70094,70094,7,70188,70190,7,70194,70195,7,70197,70197,7,70206,70206,5,70368,70370,7,70400,70401,5,70459,70460,5,70463,70463,7,70465,70468,7,70475,70477,7,70498,70499,7,70512,70516,5,70712,70719,5,70722,70724,5,70726,70726,5,70832,70832,5,70835,70840,5,70842,70842,5,70845,70845,5,70847,70848,5,70850,70851,5,71088,71089,7,71096,71099,7,71102,71102,7,71132,71133,5,71219,71226,5,71229,71229,5,71231,71232,5,71340,71340,7,71342,71343,7,71350,71350,7,71453,71455,5,71462,71462,7,71724,71726,7,71736,71736,7,71984,71984,5,71991,71992,7,71997,71997,7,71999,71999,1,72001,72001,1,72003,72003,5,72148,72151,5,72156,72159,7,72164,72164,7,72243,72248,5,72250,72250,1,72263,72263,5,72279,72280,7,72324,72329,1,72343,72343,7,72751,72751,7,72760,72765,5,72767,72767,5,72873,72873,7,72881,72881,7,72884,72884,7,73009,73014,5,73020,73021,5,73030,73030,1,73098,73102,7,73107,73108,7,73110,73110,7,73459,73460,5,78896,78904,4,92976,92982,5,94033,94087,7,94180,94180,5,113821,113822,5,118528,118573,5,119141,119141,5,119143,119145,5,119150,119154,5,119163,119170,5,119210,119213,5,121344,121398,5,121461,121461,5,121499,121503,5,122880,122886,5,122907,122913,5,122918,122922,5,123566,123566,5,125136,125142,5,126976,126979,14,126981,127182,14,127184,127231,14,127279,127279,14,127344,127345,14,127374,127374,14,127405,127461,14,127489,127490,14,127514,127514,14,127538,127546,14,127561,127567,14,127570,127743,14,127757,127758,14,127760,127760,14,127762,127762,14,127766,127768,14,127770,127770,14,127772,127772,14,127775,127776,14,127778,127779,14,127789,127791,14,127794,127795,14,127798,127798,14,127819,127819,14,127824,127824,14,127868,127868,14,127870,127871,14,127892,127893,14,127896,127896,14,127900,127901,14,127904,127940,14,127942,127942,14,127944,127944,14,127946,127946,14,127951,127955,14,127968,127971,14,127973,127984,14,127987,127987,14,127989,127989,14,127991,127991,14,127995,127999,5,128008,128008,14,128012,128014,14,128017,128018,14,128020,128020,14,128022,128022,14,128042,128042,14,128063,128063,14,128065,128065,14,128101,128101,14,128108,128109,14,128173,128173,14,128182,128183,14,128236,128237,14,128239,128239,14,128245,128245,14,128248,128248,14,128253,128253,14,128255,128258,14,128260,128263,14,128265,128265,14,128277,128277,14,128300,128301,14,128326,128328,14,128331,128334,14,128336,128347,14,128360,128366,14,128369,128370,14,128378,128378,14,128391,128391,14,128394,128397,14,128400,128400,14,128405,128406,14,128420,128420,14,128422,128423,14,128425,128432,14,128435,128443,14,128445,128449,14,128453,128464,14,128468,128475,14,128479,128480,14,128482,128482,14,128484,128487,14,128489,128494,14,128496,128498,14,128500,128505,14,128507,128511,14,128513,128518,14,128521,128525,14,128527,128527,14,128529,128529,14,128533,128533,14,128535,128535,14,128537,128537,14]',
        );
      }
      function te(P, q) {
        if (P === 0) return 0;
        const H = Q(P, q);
        if (H !== void 0) return H;
        const G = new B(q, P);
        return G.prevCodePoint(), G.offset;
      }
      function Q(P, q) {
        const H = new B(q, P);
        let G = H.prevCodePoint();
        for (; U(G) || G === 65039 || G === 8419; ) {
          if (H.offset === 0) return;
          G = H.prevCodePoint();
        }
        if (!pe(G)) return;
        let ee = H.offset;
        return ee > 0 && H.prevCodePoint() === 8205 && (ee = H.offset), ee;
      }
      function U(P) {
        return 127995 <= P && P <= 127999;
      }
      r.noBreakWhitespace = '\xA0';
      class Y {
        static getInstance(q) {
          return A.cache.get(Array.from(q));
        }
        static getLocales() {
          return A._locales.value;
        }
        constructor(q) {
          this.confusableDictionary = q;
        }
        isAmbiguous(q) {
          return this.confusableDictionary.has(q);
        }
        getPrimaryConfusable(q) {
          return this.confusableDictionary.get(q);
        }
        getConfusableCodePoints() {
          return new Set(this.confusableDictionary.keys());
        }
      }
      (r.AmbiguousCharacters = Y),
        (A = Y),
        (Y.ambiguousCharacterData = new D.Lazy(() =>
          JSON.parse(
            '{"_common":[8232,32,8233,32,5760,32,8192,32,8193,32,8194,32,8195,32,8196,32,8197,32,8198,32,8200,32,8201,32,8202,32,8287,32,8199,32,8239,32,2042,95,65101,95,65102,95,65103,95,8208,45,8209,45,8210,45,65112,45,1748,45,8259,45,727,45,8722,45,10134,45,11450,45,1549,44,1643,44,8218,44,184,44,42233,44,894,59,2307,58,2691,58,1417,58,1795,58,1796,58,5868,58,65072,58,6147,58,6153,58,8282,58,1475,58,760,58,42889,58,8758,58,720,58,42237,58,451,33,11601,33,660,63,577,63,2429,63,5038,63,42731,63,119149,46,8228,46,1793,46,1794,46,42510,46,68176,46,1632,46,1776,46,42232,46,1373,96,65287,96,8219,96,8242,96,1370,96,1523,96,8175,96,65344,96,900,96,8189,96,8125,96,8127,96,8190,96,697,96,884,96,712,96,714,96,715,96,756,96,699,96,701,96,700,96,702,96,42892,96,1497,96,2036,96,2037,96,5194,96,5836,96,94033,96,94034,96,65339,91,10088,40,10098,40,12308,40,64830,40,65341,93,10089,41,10099,41,12309,41,64831,41,10100,123,119060,123,10101,125,65342,94,8270,42,1645,42,8727,42,66335,42,5941,47,8257,47,8725,47,8260,47,9585,47,10187,47,10744,47,119354,47,12755,47,12339,47,11462,47,20031,47,12035,47,65340,92,65128,92,8726,92,10189,92,10741,92,10745,92,119311,92,119355,92,12756,92,20022,92,12034,92,42872,38,708,94,710,94,5869,43,10133,43,66203,43,8249,60,10094,60,706,60,119350,60,5176,60,5810,60,5120,61,11840,61,12448,61,42239,61,8250,62,10095,62,707,62,119351,62,5171,62,94015,62,8275,126,732,126,8128,126,8764,126,65372,124,65293,45,120784,50,120794,50,120804,50,120814,50,120824,50,130034,50,42842,50,423,50,1000,50,42564,50,5311,50,42735,50,119302,51,120785,51,120795,51,120805,51,120815,51,120825,51,130035,51,42923,51,540,51,439,51,42858,51,11468,51,1248,51,94011,51,71882,51,120786,52,120796,52,120806,52,120816,52,120826,52,130036,52,5070,52,71855,52,120787,53,120797,53,120807,53,120817,53,120827,53,130037,53,444,53,71867,53,120788,54,120798,54,120808,54,120818,54,120828,54,130038,54,11474,54,5102,54,71893,54,119314,55,120789,55,120799,55,120809,55,120819,55,120829,55,130039,55,66770,55,71878,55,2819,56,2538,56,2666,56,125131,56,120790,56,120800,56,120810,56,120820,56,120830,56,130040,56,547,56,546,56,66330,56,2663,57,2920,57,2541,57,3437,57,120791,57,120801,57,120811,57,120821,57,120831,57,130041,57,42862,57,11466,57,71884,57,71852,57,71894,57,9082,97,65345,97,119834,97,119886,97,119938,97,119990,97,120042,97,120094,97,120146,97,120198,97,120250,97,120302,97,120354,97,120406,97,120458,97,593,97,945,97,120514,97,120572,97,120630,97,120688,97,120746,97,65313,65,119808,65,119860,65,119912,65,119964,65,120016,65,120068,65,120120,65,120172,65,120224,65,120276,65,120328,65,120380,65,120432,65,913,65,120488,65,120546,65,120604,65,120662,65,120720,65,5034,65,5573,65,42222,65,94016,65,66208,65,119835,98,119887,98,119939,98,119991,98,120043,98,120095,98,120147,98,120199,98,120251,98,120303,98,120355,98,120407,98,120459,98,388,98,5071,98,5234,98,5551,98,65314,66,8492,66,119809,66,119861,66,119913,66,120017,66,120069,66,120121,66,120173,66,120225,66,120277,66,120329,66,120381,66,120433,66,42932,66,914,66,120489,66,120547,66,120605,66,120663,66,120721,66,5108,66,5623,66,42192,66,66178,66,66209,66,66305,66,65347,99,8573,99,119836,99,119888,99,119940,99,119992,99,120044,99,120096,99,120148,99,120200,99,120252,99,120304,99,120356,99,120408,99,120460,99,7428,99,1010,99,11429,99,43951,99,66621,99,128844,67,71922,67,71913,67,65315,67,8557,67,8450,67,8493,67,119810,67,119862,67,119914,67,119966,67,120018,67,120174,67,120226,67,120278,67,120330,67,120382,67,120434,67,1017,67,11428,67,5087,67,42202,67,66210,67,66306,67,66581,67,66844,67,8574,100,8518,100,119837,100,119889,100,119941,100,119993,100,120045,100,120097,100,120149,100,120201,100,120253,100,120305,100,120357,100,120409,100,120461,100,1281,100,5095,100,5231,100,42194,100,8558,68,8517,68,119811,68,119863,68,119915,68,119967,68,120019,68,120071,68,120123,68,120175,68,120227,68,120279,68,120331,68,120383,68,120435,68,5024,68,5598,68,5610,68,42195,68,8494,101,65349,101,8495,101,8519,101,119838,101,119890,101,119942,101,120046,101,120098,101,120150,101,120202,101,120254,101,120306,101,120358,101,120410,101,120462,101,43826,101,1213,101,8959,69,65317,69,8496,69,119812,69,119864,69,119916,69,120020,69,120072,69,120124,69,120176,69,120228,69,120280,69,120332,69,120384,69,120436,69,917,69,120492,69,120550,69,120608,69,120666,69,120724,69,11577,69,5036,69,42224,69,71846,69,71854,69,66182,69,119839,102,119891,102,119943,102,119995,102,120047,102,120099,102,120151,102,120203,102,120255,102,120307,102,120359,102,120411,102,120463,102,43829,102,42905,102,383,102,7837,102,1412,102,119315,70,8497,70,119813,70,119865,70,119917,70,120021,70,120073,70,120125,70,120177,70,120229,70,120281,70,120333,70,120385,70,120437,70,42904,70,988,70,120778,70,5556,70,42205,70,71874,70,71842,70,66183,70,66213,70,66853,70,65351,103,8458,103,119840,103,119892,103,119944,103,120048,103,120100,103,120152,103,120204,103,120256,103,120308,103,120360,103,120412,103,120464,103,609,103,7555,103,397,103,1409,103,119814,71,119866,71,119918,71,119970,71,120022,71,120074,71,120126,71,120178,71,120230,71,120282,71,120334,71,120386,71,120438,71,1292,71,5056,71,5107,71,42198,71,65352,104,8462,104,119841,104,119945,104,119997,104,120049,104,120101,104,120153,104,120205,104,120257,104,120309,104,120361,104,120413,104,120465,104,1211,104,1392,104,5058,104,65320,72,8459,72,8460,72,8461,72,119815,72,119867,72,119919,72,120023,72,120179,72,120231,72,120283,72,120335,72,120387,72,120439,72,919,72,120494,72,120552,72,120610,72,120668,72,120726,72,11406,72,5051,72,5500,72,42215,72,66255,72,731,105,9075,105,65353,105,8560,105,8505,105,8520,105,119842,105,119894,105,119946,105,119998,105,120050,105,120102,105,120154,105,120206,105,120258,105,120310,105,120362,105,120414,105,120466,105,120484,105,618,105,617,105,953,105,8126,105,890,105,120522,105,120580,105,120638,105,120696,105,120754,105,1110,105,42567,105,1231,105,43893,105,5029,105,71875,105,65354,106,8521,106,119843,106,119895,106,119947,106,119999,106,120051,106,120103,106,120155,106,120207,106,120259,106,120311,106,120363,106,120415,106,120467,106,1011,106,1112,106,65322,74,119817,74,119869,74,119921,74,119973,74,120025,74,120077,74,120129,74,120181,74,120233,74,120285,74,120337,74,120389,74,120441,74,42930,74,895,74,1032,74,5035,74,5261,74,42201,74,119844,107,119896,107,119948,107,120000,107,120052,107,120104,107,120156,107,120208,107,120260,107,120312,107,120364,107,120416,107,120468,107,8490,75,65323,75,119818,75,119870,75,119922,75,119974,75,120026,75,120078,75,120130,75,120182,75,120234,75,120286,75,120338,75,120390,75,120442,75,922,75,120497,75,120555,75,120613,75,120671,75,120729,75,11412,75,5094,75,5845,75,42199,75,66840,75,1472,108,8739,73,9213,73,65512,73,1633,108,1777,73,66336,108,125127,108,120783,73,120793,73,120803,73,120813,73,120823,73,130033,73,65321,73,8544,73,8464,73,8465,73,119816,73,119868,73,119920,73,120024,73,120128,73,120180,73,120232,73,120284,73,120336,73,120388,73,120440,73,65356,108,8572,73,8467,108,119845,108,119897,108,119949,108,120001,108,120053,108,120105,73,120157,73,120209,73,120261,73,120313,73,120365,73,120417,73,120469,73,448,73,120496,73,120554,73,120612,73,120670,73,120728,73,11410,73,1030,73,1216,73,1493,108,1503,108,1575,108,126464,108,126592,108,65166,108,65165,108,1994,108,11599,73,5825,73,42226,73,93992,73,66186,124,66313,124,119338,76,8556,76,8466,76,119819,76,119871,76,119923,76,120027,76,120079,76,120131,76,120183,76,120235,76,120287,76,120339,76,120391,76,120443,76,11472,76,5086,76,5290,76,42209,76,93974,76,71843,76,71858,76,66587,76,66854,76,65325,77,8559,77,8499,77,119820,77,119872,77,119924,77,120028,77,120080,77,120132,77,120184,77,120236,77,120288,77,120340,77,120392,77,120444,77,924,77,120499,77,120557,77,120615,77,120673,77,120731,77,1018,77,11416,77,5047,77,5616,77,5846,77,42207,77,66224,77,66321,77,119847,110,119899,110,119951,110,120003,110,120055,110,120107,110,120159,110,120211,110,120263,110,120315,110,120367,110,120419,110,120471,110,1400,110,1404,110,65326,78,8469,78,119821,78,119873,78,119925,78,119977,78,120029,78,120081,78,120185,78,120237,78,120289,78,120341,78,120393,78,120445,78,925,78,120500,78,120558,78,120616,78,120674,78,120732,78,11418,78,42208,78,66835,78,3074,111,3202,111,3330,111,3458,111,2406,111,2662,111,2790,111,3046,111,3174,111,3302,111,3430,111,3664,111,3792,111,4160,111,1637,111,1781,111,65359,111,8500,111,119848,111,119900,111,119952,111,120056,111,120108,111,120160,111,120212,111,120264,111,120316,111,120368,111,120420,111,120472,111,7439,111,7441,111,43837,111,959,111,120528,111,120586,111,120644,111,120702,111,120760,111,963,111,120532,111,120590,111,120648,111,120706,111,120764,111,11423,111,4351,111,1413,111,1505,111,1607,111,126500,111,126564,111,126596,111,65259,111,65260,111,65258,111,65257,111,1726,111,64428,111,64429,111,64427,111,64426,111,1729,111,64424,111,64425,111,64423,111,64422,111,1749,111,3360,111,4125,111,66794,111,71880,111,71895,111,66604,111,1984,79,2534,79,2918,79,12295,79,70864,79,71904,79,120782,79,120792,79,120802,79,120812,79,120822,79,130032,79,65327,79,119822,79,119874,79,119926,79,119978,79,120030,79,120082,79,120134,79,120186,79,120238,79,120290,79,120342,79,120394,79,120446,79,927,79,120502,79,120560,79,120618,79,120676,79,120734,79,11422,79,1365,79,11604,79,4816,79,2848,79,66754,79,42227,79,71861,79,66194,79,66219,79,66564,79,66838,79,9076,112,65360,112,119849,112,119901,112,119953,112,120005,112,120057,112,120109,112,120161,112,120213,112,120265,112,120317,112,120369,112,120421,112,120473,112,961,112,120530,112,120544,112,120588,112,120602,112,120646,112,120660,112,120704,112,120718,112,120762,112,120776,112,11427,112,65328,80,8473,80,119823,80,119875,80,119927,80,119979,80,120031,80,120083,80,120187,80,120239,80,120291,80,120343,80,120395,80,120447,80,929,80,120504,80,120562,80,120620,80,120678,80,120736,80,11426,80,5090,80,5229,80,42193,80,66197,80,119850,113,119902,113,119954,113,120006,113,120058,113,120110,113,120162,113,120214,113,120266,113,120318,113,120370,113,120422,113,120474,113,1307,113,1379,113,1382,113,8474,81,119824,81,119876,81,119928,81,119980,81,120032,81,120084,81,120188,81,120240,81,120292,81,120344,81,120396,81,120448,81,11605,81,119851,114,119903,114,119955,114,120007,114,120059,114,120111,114,120163,114,120215,114,120267,114,120319,114,120371,114,120423,114,120475,114,43847,114,43848,114,7462,114,11397,114,43905,114,119318,82,8475,82,8476,82,8477,82,119825,82,119877,82,119929,82,120033,82,120189,82,120241,82,120293,82,120345,82,120397,82,120449,82,422,82,5025,82,5074,82,66740,82,5511,82,42211,82,94005,82,65363,115,119852,115,119904,115,119956,115,120008,115,120060,115,120112,115,120164,115,120216,115,120268,115,120320,115,120372,115,120424,115,120476,115,42801,115,445,115,1109,115,43946,115,71873,115,66632,115,65331,83,119826,83,119878,83,119930,83,119982,83,120034,83,120086,83,120138,83,120190,83,120242,83,120294,83,120346,83,120398,83,120450,83,1029,83,1359,83,5077,83,5082,83,42210,83,94010,83,66198,83,66592,83,119853,116,119905,116,119957,116,120009,116,120061,116,120113,116,120165,116,120217,116,120269,116,120321,116,120373,116,120425,116,120477,116,8868,84,10201,84,128872,84,65332,84,119827,84,119879,84,119931,84,119983,84,120035,84,120087,84,120139,84,120191,84,120243,84,120295,84,120347,84,120399,84,120451,84,932,84,120507,84,120565,84,120623,84,120681,84,120739,84,11430,84,5026,84,42196,84,93962,84,71868,84,66199,84,66225,84,66325,84,119854,117,119906,117,119958,117,120010,117,120062,117,120114,117,120166,117,120218,117,120270,117,120322,117,120374,117,120426,117,120478,117,42911,117,7452,117,43854,117,43858,117,651,117,965,117,120534,117,120592,117,120650,117,120708,117,120766,117,1405,117,66806,117,71896,117,8746,85,8899,85,119828,85,119880,85,119932,85,119984,85,120036,85,120088,85,120140,85,120192,85,120244,85,120296,85,120348,85,120400,85,120452,85,1357,85,4608,85,66766,85,5196,85,42228,85,94018,85,71864,85,8744,118,8897,118,65366,118,8564,118,119855,118,119907,118,119959,118,120011,118,120063,118,120115,118,120167,118,120219,118,120271,118,120323,118,120375,118,120427,118,120479,118,7456,118,957,118,120526,118,120584,118,120642,118,120700,118,120758,118,1141,118,1496,118,71430,118,43945,118,71872,118,119309,86,1639,86,1783,86,8548,86,119829,86,119881,86,119933,86,119985,86,120037,86,120089,86,120141,86,120193,86,120245,86,120297,86,120349,86,120401,86,120453,86,1140,86,11576,86,5081,86,5167,86,42719,86,42214,86,93960,86,71840,86,66845,86,623,119,119856,119,119908,119,119960,119,120012,119,120064,119,120116,119,120168,119,120220,119,120272,119,120324,119,120376,119,120428,119,120480,119,7457,119,1121,119,1309,119,1377,119,71434,119,71438,119,71439,119,43907,119,71919,87,71910,87,119830,87,119882,87,119934,87,119986,87,120038,87,120090,87,120142,87,120194,87,120246,87,120298,87,120350,87,120402,87,120454,87,1308,87,5043,87,5076,87,42218,87,5742,120,10539,120,10540,120,10799,120,65368,120,8569,120,119857,120,119909,120,119961,120,120013,120,120065,120,120117,120,120169,120,120221,120,120273,120,120325,120,120377,120,120429,120,120481,120,5441,120,5501,120,5741,88,9587,88,66338,88,71916,88,65336,88,8553,88,119831,88,119883,88,119935,88,119987,88,120039,88,120091,88,120143,88,120195,88,120247,88,120299,88,120351,88,120403,88,120455,88,42931,88,935,88,120510,88,120568,88,120626,88,120684,88,120742,88,11436,88,11613,88,5815,88,42219,88,66192,88,66228,88,66327,88,66855,88,611,121,7564,121,65369,121,119858,121,119910,121,119962,121,120014,121,120066,121,120118,121,120170,121,120222,121,120274,121,120326,121,120378,121,120430,121,120482,121,655,121,7935,121,43866,121,947,121,8509,121,120516,121,120574,121,120632,121,120690,121,120748,121,1199,121,4327,121,71900,121,65337,89,119832,89,119884,89,119936,89,119988,89,120040,89,120092,89,120144,89,120196,89,120248,89,120300,89,120352,89,120404,89,120456,89,933,89,978,89,120508,89,120566,89,120624,89,120682,89,120740,89,11432,89,1198,89,5033,89,5053,89,42220,89,94019,89,71844,89,66226,89,119859,122,119911,122,119963,122,120015,122,120067,122,120119,122,120171,122,120223,122,120275,122,120327,122,120379,122,120431,122,120483,122,7458,122,43923,122,71876,122,66293,90,71909,90,65338,90,8484,90,8488,90,119833,90,119885,90,119937,90,119989,90,120041,90,120197,90,120249,90,120301,90,120353,90,120405,90,120457,90,918,90,120493,90,120551,90,120609,90,120667,90,120725,90,5059,90,42204,90,71849,90,65282,34,65284,36,65285,37,65286,38,65290,42,65291,43,65294,46,65295,47,65296,48,65297,49,65298,50,65299,51,65300,52,65301,53,65302,54,65303,55,65304,56,65305,57,65308,60,65309,61,65310,62,65312,64,65316,68,65318,70,65319,71,65324,76,65329,81,65330,82,65333,85,65334,86,65335,87,65343,95,65346,98,65348,100,65350,102,65355,107,65357,109,65358,110,65361,113,65362,114,65364,116,65365,117,65367,119,65370,122,65371,123,65373,125,119846,109],"_default":[160,32,8211,45,65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"cs":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"de":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"es":[8211,45,65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"fr":[65374,126,65306,58,65281,33,8216,96,8245,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"it":[160,32,8211,45,65374,126,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"ja":[8211,45,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65292,44,65307,59],"ko":[8211,45,65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"pl":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"pt-BR":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"qps-ploc":[160,32,8211,45,65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"ru":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,305,105,921,73,1009,112,215,120,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"tr":[160,32,8211,45,65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"zh-hans":[65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41],"zh-hant":[8211,45,65374,126,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65307,59]}',
          ),
        )),
        (Y.cache = new n.LRUCachedFunction({ getCacheKey: JSON.stringify }, (P) => {
          function q(se) {
            const fe = new Map();
            for (let me = 0; me < se.length; me += 2) fe.set(se[me], se[me + 1]);
            return fe;
          }
          function H(se, fe) {
            const me = new Map(se);
            for (const [we, Ee] of fe) me.set(we, Ee);
            return me;
          }
          function G(se, fe) {
            if (!se) return fe;
            const me = new Map();
            for (const [we, Ee] of se) fe.has(we) && me.set(we, Ee);
            return me;
          }
          const ee = A.ambiguousCharacterData.value;
          let ie = P.filter((se) => !se.startsWith('_') && se in ee);
          ie.length === 0 && (ie = ['_default']);
          let le;
          for (const se of ie) {
            const fe = q(ee[se]);
            le = G(le, fe);
          }
          const ge = q(ee._common),
            he = H(ge, le);
          return new A(he);
        })),
        (Y._locales = new D.Lazy(() =>
          Object.keys(A.ambiguousCharacterData.value).filter((P) => !P.startsWith('_')),
        ));
      class ne {
        static getRawData() {
          return JSON.parse(
            '[9,10,11,12,13,32,127,160,173,847,1564,4447,4448,6068,6069,6155,6156,6157,6158,7355,7356,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8203,8204,8205,8206,8207,8234,8235,8236,8237,8238,8239,8287,8288,8289,8290,8291,8292,8293,8294,8295,8296,8297,8298,8299,8300,8301,8302,8303,10240,12288,12644,65024,65025,65026,65027,65028,65029,65030,65031,65032,65033,65034,65035,65036,65037,65038,65039,65279,65440,65520,65521,65522,65523,65524,65525,65526,65527,65528,65532,78844,119155,119156,119157,119158,119159,119160,119161,119162,917504,917505,917506,917507,917508,917509,917510,917511,917512,917513,917514,917515,917516,917517,917518,917519,917520,917521,917522,917523,917524,917525,917526,917527,917528,917529,917530,917531,917532,917533,917534,917535,917536,917537,917538,917539,917540,917541,917542,917543,917544,917545,917546,917547,917548,917549,917550,917551,917552,917553,917554,917555,917556,917557,917558,917559,917560,917561,917562,917563,917564,917565,917566,917567,917568,917569,917570,917571,917572,917573,917574,917575,917576,917577,917578,917579,917580,917581,917582,917583,917584,917585,917586,917587,917588,917589,917590,917591,917592,917593,917594,917595,917596,917597,917598,917599,917600,917601,917602,917603,917604,917605,917606,917607,917608,917609,917610,917611,917612,917613,917614,917615,917616,917617,917618,917619,917620,917621,917622,917623,917624,917625,917626,917627,917628,917629,917630,917631,917760,917761,917762,917763,917764,917765,917766,917767,917768,917769,917770,917771,917772,917773,917774,917775,917776,917777,917778,917779,917780,917781,917782,917783,917784,917785,917786,917787,917788,917789,917790,917791,917792,917793,917794,917795,917796,917797,917798,917799,917800,917801,917802,917803,917804,917805,917806,917807,917808,917809,917810,917811,917812,917813,917814,917815,917816,917817,917818,917819,917820,917821,917822,917823,917824,917825,917826,917827,917828,917829,917830,917831,917832,917833,917834,917835,917836,917837,917838,917839,917840,917841,917842,917843,917844,917845,917846,917847,917848,917849,917850,917851,917852,917853,917854,917855,917856,917857,917858,917859,917860,917861,917862,917863,917864,917865,917866,917867,917868,917869,917870,917871,917872,917873,917874,917875,917876,917877,917878,917879,917880,917881,917882,917883,917884,917885,917886,917887,917888,917889,917890,917891,917892,917893,917894,917895,917896,917897,917898,917899,917900,917901,917902,917903,917904,917905,917906,917907,917908,917909,917910,917911,917912,917913,917914,917915,917916,917917,917918,917919,917920,917921,917922,917923,917924,917925,917926,917927,917928,917929,917930,917931,917932,917933,917934,917935,917936,917937,917938,917939,917940,917941,917942,917943,917944,917945,917946,917947,917948,917949,917950,917951,917952,917953,917954,917955,917956,917957,917958,917959,917960,917961,917962,917963,917964,917965,917966,917967,917968,917969,917970,917971,917972,917973,917974,917975,917976,917977,917978,917979,917980,917981,917982,917983,917984,917985,917986,917987,917988,917989,917990,917991,917992,917993,917994,917995,917996,917997,917998,917999]',
          );
        }
        static getData() {
          return this._data || (this._data = new Set(ne.getRawData())), this._data;
        }
        static isInvisibleCharacter(q) {
          return ne.getData().has(q);
        }
        static get codePoints() {
          return ne.getData();
        }
      }
      (r.InvisibleCharacters = ne), (ne._data = void 0);
    }),
    X(J[41], K([0, 1, 6]), function (W, r, n) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.StringSHA1 = void 0),
        (r.hash = D),
        (r.doHash = A),
        (r.numberHash = b),
        (r.stringHash = p),
        (r.toHexString = s);
      function D(d) {
        return A(d, 0);
      }
      function A(d, o) {
        switch (typeof d) {
          case 'object':
            return d === null ? b(349, o) : Array.isArray(d) ? h(d, o) : a(d, o);
          case 'string':
            return p(d, o);
          case 'boolean':
            return f(d, o);
          case 'number':
            return b(d, o);
          case 'undefined':
            return b(937, o);
          default:
            return b(617, o);
        }
      }
      function b(d, o) {
        return ((o << 5) - o + d) | 0;
      }
      function f(d, o) {
        return b(d ? 433 : 863, o);
      }
      function p(d, o) {
        o = b(149417, o);
        for (let _ = 0, w = d.length; _ < w; _++) o = b(d.charCodeAt(_), o);
        return o;
      }
      function h(d, o) {
        return (o = b(104579, o)), d.reduce((_, w) => A(w, _), o);
      }
      function a(d, o) {
        return (
          (o = b(181387, o)),
          Object.keys(d)
            .sort()
            .reduce((_, w) => ((_ = p(w, _)), A(d[w], _)), o)
        );
      }
      function m(d, o, _ = 32) {
        const w = _ - o,
          S = ~((1 << w) - 1);
        return ((d << o) | ((S & d) >>> w)) >>> 0;
      }
      function e(d, o = 0, _ = d.byteLength, w = 0) {
        for (let S = 0; S < _; S++) d[o + S] = w;
      }
      function c(d, o, _ = '0') {
        for (; d.length < o; ) d = _ + d;
        return d;
      }
      function s(d, o = 32) {
        return d instanceof ArrayBuffer
          ? Array.from(new Uint8Array(d))
              .map((_) => _.toString(16).padStart(2, '0'))
              .join('')
          : c((d >>> 0).toString(16), o / 4);
      }
      class u {
        constructor() {
          (this._h0 = 1732584193),
            (this._h1 = 4023233417),
            (this._h2 = 2562383102),
            (this._h3 = 271733878),
            (this._h4 = 3285377520),
            (this._buff = new Uint8Array(67)),
            (this._buffDV = new DataView(this._buff.buffer)),
            (this._buffLen = 0),
            (this._totalLen = 0),
            (this._leftoverHighSurrogate = 0),
            (this._finished = !1);
        }
        update(o) {
          const _ = o.length;
          if (_ === 0) return;
          const w = this._buff;
          let S = this._buffLen,
            R = this._leftoverHighSurrogate,
            v,
            i;
          for (R !== 0 ? ((v = R), (i = -1), (R = 0)) : ((v = o.charCodeAt(0)), (i = 0)); ; ) {
            let l = v;
            if (n.isHighSurrogate(v))
              if (i + 1 < _) {
                const g = o.charCodeAt(i + 1);
                n.isLowSurrogate(g) ? (i++, (l = n.computeCodePoint(v, g))) : (l = 65533);
              } else {
                R = v;
                break;
              }
            else n.isLowSurrogate(v) && (l = 65533);
            if (((S = this._push(w, S, l)), i++, i < _)) v = o.charCodeAt(i);
            else break;
          }
          (this._buffLen = S), (this._leftoverHighSurrogate = R);
        }
        _push(o, _, w) {
          return (
            w < 128
              ? (o[_++] = w)
              : w < 2048
                ? ((o[_++] = 192 | ((w & 1984) >>> 6)), (o[_++] = 128 | ((w & 63) >>> 0)))
                : w < 65536
                  ? ((o[_++] = 224 | ((w & 61440) >>> 12)),
                    (o[_++] = 128 | ((w & 4032) >>> 6)),
                    (o[_++] = 128 | ((w & 63) >>> 0)))
                  : ((o[_++] = 240 | ((w & 1835008) >>> 18)),
                    (o[_++] = 128 | ((w & 258048) >>> 12)),
                    (o[_++] = 128 | ((w & 4032) >>> 6)),
                    (o[_++] = 128 | ((w & 63) >>> 0))),
            _ >= 64 &&
              (this._step(),
              (_ -= 64),
              (this._totalLen += 64),
              (o[0] = o[64]),
              (o[1] = o[65]),
              (o[2] = o[66])),
            _
          );
        }
        digest() {
          return (
            this._finished ||
              ((this._finished = !0),
              this._leftoverHighSurrogate &&
                ((this._leftoverHighSurrogate = 0),
                (this._buffLen = this._push(this._buff, this._buffLen, 65533))),
              (this._totalLen += this._buffLen),
              this._wrapUp()),
            s(this._h0) + s(this._h1) + s(this._h2) + s(this._h3) + s(this._h4)
          );
        }
        _wrapUp() {
          (this._buff[this._buffLen++] = 128),
            e(this._buff, this._buffLen),
            this._buffLen > 56 && (this._step(), e(this._buff));
          const o = 8 * this._totalLen;
          this._buffDV.setUint32(56, Math.floor(o / 4294967296), !1),
            this._buffDV.setUint32(60, o % 4294967296, !1),
            this._step();
        }
        _step() {
          const o = u._bigBlock32,
            _ = this._buffDV;
          for (let C = 0; C < 64; C += 4) o.setUint32(C, _.getUint32(C, !1), !1);
          for (let C = 64; C < 320; C += 4)
            o.setUint32(
              C,
              m(
                o.getUint32(C - 12, !1) ^
                  o.getUint32(C - 32, !1) ^
                  o.getUint32(C - 56, !1) ^
                  o.getUint32(C - 64, !1),
                1,
              ),
              !1,
            );
          let w = this._h0,
            S = this._h1,
            R = this._h2,
            v = this._h3,
            i = this._h4,
            l,
            g,
            L;
          for (let C = 0; C < 80; C++)
            C < 20
              ? ((l = (S & R) | (~S & v)), (g = 1518500249))
              : C < 40
                ? ((l = S ^ R ^ v), (g = 1859775393))
                : C < 60
                  ? ((l = (S & R) | (S & v) | (R & v)), (g = 2400959708))
                  : ((l = S ^ R ^ v), (g = 3395469782)),
              (L = (m(w, 5) + l + i + g + o.getUint32(C * 4, !1)) & 4294967295),
              (i = v),
              (v = R),
              (R = m(S, 30)),
              (S = w),
              (w = L);
          (this._h0 = (this._h0 + w) & 4294967295),
            (this._h1 = (this._h1 + S) & 4294967295),
            (this._h2 = (this._h2 + R) & 4294967295),
            (this._h3 = (this._h3 + v) & 4294967295),
            (this._h4 = (this._h4 + i) & 4294967295);
        }
      }
      (r.StringSHA1 = u), (u._bigBlock32 = new DataView(new ArrayBuffer(320)));
    }),
    X(J[25], K([0, 1, 37, 41]), function (W, r, n, D) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.LcsDiff = r.StringDiffSequence = void 0),
        (r.stringDiff = b);
      class A {
        constructor(e) {
          this.source = e;
        }
        getElements() {
          const e = this.source,
            c = new Int32Array(e.length);
          for (let s = 0, u = e.length; s < u; s++) c[s] = e.charCodeAt(s);
          return c;
        }
      }
      r.StringDiffSequence = A;
      function b(m, e, c) {
        return new a(new A(m), new A(e)).ComputeDiff(c).changes;
      }
      class f {
        static Assert(e, c) {
          if (!e) throw new Error(c);
        }
      }
      class p {
        static Copy(e, c, s, u, d) {
          for (let o = 0; o < d; o++) s[u + o] = e[c + o];
        }
        static Copy2(e, c, s, u, d) {
          for (let o = 0; o < d; o++) s[u + o] = e[c + o];
        }
      }
      class h {
        constructor() {
          (this.m_changes = []),
            (this.m_originalStart = 1073741824),
            (this.m_modifiedStart = 1073741824),
            (this.m_originalCount = 0),
            (this.m_modifiedCount = 0);
        }
        MarkNextChange() {
          (this.m_originalCount > 0 || this.m_modifiedCount > 0) &&
            this.m_changes.push(
              new n.DiffChange(
                this.m_originalStart,
                this.m_originalCount,
                this.m_modifiedStart,
                this.m_modifiedCount,
              ),
            ),
            (this.m_originalCount = 0),
            (this.m_modifiedCount = 0),
            (this.m_originalStart = 1073741824),
            (this.m_modifiedStart = 1073741824);
        }
        AddOriginalElement(e, c) {
          (this.m_originalStart = Math.min(this.m_originalStart, e)),
            (this.m_modifiedStart = Math.min(this.m_modifiedStart, c)),
            this.m_originalCount++;
        }
        AddModifiedElement(e, c) {
          (this.m_originalStart = Math.min(this.m_originalStart, e)),
            (this.m_modifiedStart = Math.min(this.m_modifiedStart, c)),
            this.m_modifiedCount++;
        }
        getChanges() {
          return (
            (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.MarkNextChange(),
            this.m_changes
          );
        }
        getReverseChanges() {
          return (
            (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.MarkNextChange(),
            this.m_changes.reverse(),
            this.m_changes
          );
        }
      }
      class a {
        constructor(e, c, s = null) {
          (this.ContinueProcessingPredicate = s),
            (this._originalSequence = e),
            (this._modifiedSequence = c);
          const [u, d, o] = a._getElements(e),
            [_, w, S] = a._getElements(c);
          (this._hasStrings = o && S),
            (this._originalStringElements = u),
            (this._originalElementsOrHash = d),
            (this._modifiedStringElements = _),
            (this._modifiedElementsOrHash = w),
            (this.m_forwardHistory = []),
            (this.m_reverseHistory = []);
        }
        static _isStringArray(e) {
          return e.length > 0 && typeof e[0] == 'string';
        }
        static _getElements(e) {
          const c = e.getElements();
          if (a._isStringArray(c)) {
            const s = new Int32Array(c.length);
            for (let u = 0, d = c.length; u < d; u++) s[u] = (0, D.stringHash)(c[u], 0);
            return [c, s, !0];
          }
          return c instanceof Int32Array ? [[], c, !1] : [[], new Int32Array(c), !1];
        }
        ElementsAreEqual(e, c) {
          return this._originalElementsOrHash[e] !== this._modifiedElementsOrHash[c]
            ? !1
            : this._hasStrings
              ? this._originalStringElements[e] === this._modifiedStringElements[c]
              : !0;
        }
        ElementsAreStrictEqual(e, c) {
          if (!this.ElementsAreEqual(e, c)) return !1;
          const s = a._getStrictElement(this._originalSequence, e),
            u = a._getStrictElement(this._modifiedSequence, c);
          return s === u;
        }
        static _getStrictElement(e, c) {
          return typeof e.getStrictElement == 'function' ? e.getStrictElement(c) : null;
        }
        OriginalElementsAreEqual(e, c) {
          return this._originalElementsOrHash[e] !== this._originalElementsOrHash[c]
            ? !1
            : this._hasStrings
              ? this._originalStringElements[e] === this._originalStringElements[c]
              : !0;
        }
        ModifiedElementsAreEqual(e, c) {
          return this._modifiedElementsOrHash[e] !== this._modifiedElementsOrHash[c]
            ? !1
            : this._hasStrings
              ? this._modifiedStringElements[e] === this._modifiedStringElements[c]
              : !0;
        }
        ComputeDiff(e) {
          return this._ComputeDiff(
            0,
            this._originalElementsOrHash.length - 1,
            0,
            this._modifiedElementsOrHash.length - 1,
            e,
          );
        }
        _ComputeDiff(e, c, s, u, d) {
          const o = [!1];
          let _ = this.ComputeDiffRecursive(e, c, s, u, o);
          return d && (_ = this.PrettifyChanges(_)), { quitEarly: o[0], changes: _ };
        }
        ComputeDiffRecursive(e, c, s, u, d) {
          for (d[0] = !1; e <= c && s <= u && this.ElementsAreEqual(e, s); ) e++, s++;
          for (; c >= e && u >= s && this.ElementsAreEqual(c, u); ) c--, u--;
          if (e > c || s > u) {
            let v;
            return (
              s <= u
                ? (f.Assert(e === c + 1, 'originalStart should only be one more than originalEnd'),
                  (v = [new n.DiffChange(e, 0, s, u - s + 1)]))
                : e <= c
                  ? (f.Assert(
                      s === u + 1,
                      'modifiedStart should only be one more than modifiedEnd',
                    ),
                    (v = [new n.DiffChange(e, c - e + 1, s, 0)]))
                  : (f.Assert(
                      e === c + 1,
                      'originalStart should only be one more than originalEnd',
                    ),
                    f.Assert(s === u + 1, 'modifiedStart should only be one more than modifiedEnd'),
                    (v = [])),
              v
            );
          }
          const o = [0],
            _ = [0],
            w = this.ComputeRecursionPoint(e, c, s, u, o, _, d),
            S = o[0],
            R = _[0];
          if (w !== null) return w;
          if (!d[0]) {
            const v = this.ComputeDiffRecursive(e, S, s, R, d);
            let i = [];
            return (
              d[0]
                ? (i = [new n.DiffChange(S + 1, c - (S + 1) + 1, R + 1, u - (R + 1) + 1)])
                : (i = this.ComputeDiffRecursive(S + 1, c, R + 1, u, d)),
              this.ConcatenateChanges(v, i)
            );
          }
          return [new n.DiffChange(e, c - e + 1, s, u - s + 1)];
        }
        WALKTRACE(e, c, s, u, d, o, _, w, S, R, v, i, l, g, L, C, N, E) {
          let y = null,
            x = null,
            M = new h(),
            I = c,
            k = s,
            F = l[0] - C[0] - u,
            z = -1073741824,
            $ = this.m_forwardHistory.length - 1;
          do {
            const T = F + e;
            T === I || (T < k && S[T - 1] < S[T + 1])
              ? ((v = S[T + 1]),
                (g = v - F - u),
                v < z && M.MarkNextChange(),
                (z = v),
                M.AddModifiedElement(v + 1, g),
                (F = T + 1 - e))
              : ((v = S[T - 1] + 1),
                (g = v - F - u),
                v < z && M.MarkNextChange(),
                (z = v - 1),
                M.AddOriginalElement(v, g + 1),
                (F = T - 1 - e)),
              $ >= 0 && ((S = this.m_forwardHistory[$]), (e = S[0]), (I = 1), (k = S.length - 1));
          } while (--$ >= -1);
          if (((y = M.getReverseChanges()), E[0])) {
            let T = l[0] + 1,
              O = C[0] + 1;
            if (y !== null && y.length > 0) {
              const B = y[y.length - 1];
              (T = Math.max(T, B.getOriginalEnd())), (O = Math.max(O, B.getModifiedEnd()));
            }
            x = [new n.DiffChange(T, i - T + 1, O, L - O + 1)];
          } else {
            (M = new h()),
              (I = o),
              (k = _),
              (F = l[0] - C[0] - w),
              (z = 1073741824),
              ($ = N ? this.m_reverseHistory.length - 1 : this.m_reverseHistory.length - 2);
            do {
              const T = F + d;
              T === I || (T < k && R[T - 1] >= R[T + 1])
                ? ((v = R[T + 1] - 1),
                  (g = v - F - w),
                  v > z && M.MarkNextChange(),
                  (z = v + 1),
                  M.AddOriginalElement(v + 1, g + 1),
                  (F = T + 1 - d))
                : ((v = R[T - 1]),
                  (g = v - F - w),
                  v > z && M.MarkNextChange(),
                  (z = v),
                  M.AddModifiedElement(v + 1, g + 1),
                  (F = T - 1 - d)),
                $ >= 0 && ((R = this.m_reverseHistory[$]), (d = R[0]), (I = 1), (k = R.length - 1));
            } while (--$ >= -1);
            x = M.getChanges();
          }
          return this.ConcatenateChanges(y, x);
        }
        ComputeRecursionPoint(e, c, s, u, d, o, _) {
          let w = 0,
            S = 0,
            R = 0,
            v = 0,
            i = 0,
            l = 0;
          e--,
            s--,
            (d[0] = 0),
            (o[0] = 0),
            (this.m_forwardHistory = []),
            (this.m_reverseHistory = []);
          const g = c - e + (u - s),
            L = g + 1,
            C = new Int32Array(L),
            N = new Int32Array(L),
            E = u - s,
            y = c - e,
            x = e - s,
            M = c - u,
            k = (y - E) % 2 === 0;
          (C[E] = e), (N[y] = c), (_[0] = !1);
          for (let F = 1; F <= g / 2 + 1; F++) {
            let z = 0,
              $ = 0;
            (R = this.ClipDiagonalBound(E - F, F, E, L)),
              (v = this.ClipDiagonalBound(E + F, F, E, L));
            for (let O = R; O <= v; O += 2) {
              O === R || (O < v && C[O - 1] < C[O + 1]) ? (w = C[O + 1]) : (w = C[O - 1] + 1),
                (S = w - (O - E) - x);
              const B = w;
              for (; w < c && S < u && this.ElementsAreEqual(w + 1, S + 1); ) w++, S++;
              if (
                ((C[O] = w),
                w + S > z + $ && ((z = w), ($ = S)),
                !k && Math.abs(O - y) <= F - 1 && w >= N[O])
              )
                return (
                  (d[0] = w),
                  (o[0] = S),
                  B <= N[O] && 1447 > 0 && F <= 1448
                    ? this.WALKTRACE(E, R, v, x, y, i, l, M, C, N, w, c, d, S, u, o, k, _)
                    : null
                );
            }
            const T = (z - e + ($ - s) - F) / 2;
            if (
              this.ContinueProcessingPredicate !== null &&
              !this.ContinueProcessingPredicate(z, T)
            )
              return (
                (_[0] = !0),
                (d[0] = z),
                (o[0] = $),
                T > 0 && 1447 > 0 && F <= 1448
                  ? this.WALKTRACE(E, R, v, x, y, i, l, M, C, N, w, c, d, S, u, o, k, _)
                  : (e++, s++, [new n.DiffChange(e, c - e + 1, s, u - s + 1)])
              );
            (i = this.ClipDiagonalBound(y - F, F, y, L)),
              (l = this.ClipDiagonalBound(y + F, F, y, L));
            for (let O = i; O <= l; O += 2) {
              O === i || (O < l && N[O - 1] >= N[O + 1]) ? (w = N[O + 1] - 1) : (w = N[O - 1]),
                (S = w - (O - y) - M);
              const B = w;
              for (; w > e && S > s && this.ElementsAreEqual(w, S); ) w--, S--;
              if (((N[O] = w), k && Math.abs(O - E) <= F && w <= C[O]))
                return (
                  (d[0] = w),
                  (o[0] = S),
                  B >= C[O] && 1447 > 0 && F <= 1448
                    ? this.WALKTRACE(E, R, v, x, y, i, l, M, C, N, w, c, d, S, u, o, k, _)
                    : null
                );
            }
            if (F <= 1447) {
              let O = new Int32Array(v - R + 2);
              (O[0] = E - R + 1),
                p.Copy2(C, R, O, 1, v - R + 1),
                this.m_forwardHistory.push(O),
                (O = new Int32Array(l - i + 2)),
                (O[0] = y - i + 1),
                p.Copy2(N, i, O, 1, l - i + 1),
                this.m_reverseHistory.push(O);
            }
          }
          return this.WALKTRACE(E, R, v, x, y, i, l, M, C, N, w, c, d, S, u, o, k, _);
        }
        PrettifyChanges(e) {
          for (let c = 0; c < e.length; c++) {
            const s = e[c],
              u = c < e.length - 1 ? e[c + 1].originalStart : this._originalElementsOrHash.length,
              d = c < e.length - 1 ? e[c + 1].modifiedStart : this._modifiedElementsOrHash.length,
              o = s.originalLength > 0,
              _ = s.modifiedLength > 0;
            for (
              ;
              s.originalStart + s.originalLength < u &&
              s.modifiedStart + s.modifiedLength < d &&
              (!o ||
                this.OriginalElementsAreEqual(
                  s.originalStart,
                  s.originalStart + s.originalLength,
                )) &&
              (!_ ||
                this.ModifiedElementsAreEqual(s.modifiedStart, s.modifiedStart + s.modifiedLength));
            ) {
              const S = this.ElementsAreStrictEqual(s.originalStart, s.modifiedStart);
              if (
                this.ElementsAreStrictEqual(
                  s.originalStart + s.originalLength,
                  s.modifiedStart + s.modifiedLength,
                ) &&
                !S
              )
                break;
              s.originalStart++, s.modifiedStart++;
            }
            const w = [null];
            if (c < e.length - 1 && this.ChangesOverlap(e[c], e[c + 1], w)) {
              (e[c] = w[0]), e.splice(c + 1, 1), c--;
              continue;
            }
          }
          for (let c = e.length - 1; c >= 0; c--) {
            const s = e[c];
            let u = 0,
              d = 0;
            if (c > 0) {
              const v = e[c - 1];
              (u = v.originalStart + v.originalLength), (d = v.modifiedStart + v.modifiedLength);
            }
            const o = s.originalLength > 0,
              _ = s.modifiedLength > 0;
            let w = 0,
              S = this._boundaryScore(
                s.originalStart,
                s.originalLength,
                s.modifiedStart,
                s.modifiedLength,
              );
            for (let v = 1; ; v++) {
              const i = s.originalStart - v,
                l = s.modifiedStart - v;
              if (
                i < u ||
                l < d ||
                (o && !this.OriginalElementsAreEqual(i, i + s.originalLength)) ||
                (_ && !this.ModifiedElementsAreEqual(l, l + s.modifiedLength))
              )
                break;
              const L =
                (i === u && l === d ? 5 : 0) +
                this._boundaryScore(i, s.originalLength, l, s.modifiedLength);
              L > S && ((S = L), (w = v));
            }
            (s.originalStart -= w), (s.modifiedStart -= w);
            const R = [null];
            if (c > 0 && this.ChangesOverlap(e[c - 1], e[c], R)) {
              (e[c - 1] = R[0]), e.splice(c, 1), c++;
              continue;
            }
          }
          if (this._hasStrings)
            for (let c = 1, s = e.length; c < s; c++) {
              const u = e[c - 1],
                d = e[c],
                o = d.originalStart - u.originalStart - u.originalLength,
                _ = u.originalStart,
                w = d.originalStart + d.originalLength,
                S = w - _,
                R = u.modifiedStart,
                v = d.modifiedStart + d.modifiedLength,
                i = v - R;
              if (o < 5 && S < 20 && i < 20) {
                const l = this._findBetterContiguousSequence(_, S, R, i, o);
                if (l) {
                  const [g, L] = l;
                  (g !== u.originalStart + u.originalLength ||
                    L !== u.modifiedStart + u.modifiedLength) &&
                    ((u.originalLength = g - u.originalStart),
                    (u.modifiedLength = L - u.modifiedStart),
                    (d.originalStart = g + o),
                    (d.modifiedStart = L + o),
                    (d.originalLength = w - d.originalStart),
                    (d.modifiedLength = v - d.modifiedStart));
                }
              }
            }
          return e;
        }
        _findBetterContiguousSequence(e, c, s, u, d) {
          if (c < d || u < d) return null;
          const o = e + c - d + 1,
            _ = s + u - d + 1;
          let w = 0,
            S = 0,
            R = 0;
          for (let v = e; v < o; v++)
            for (let i = s; i < _; i++) {
              const l = this._contiguousSequenceScore(v, i, d);
              l > 0 && l > w && ((w = l), (S = v), (R = i));
            }
          return w > 0 ? [S, R] : null;
        }
        _contiguousSequenceScore(e, c, s) {
          let u = 0;
          for (let d = 0; d < s; d++) {
            if (!this.ElementsAreEqual(e + d, c + d)) return 0;
            u += this._originalStringElements[e + d].length;
          }
          return u;
        }
        _OriginalIsBoundary(e) {
          return e <= 0 || e >= this._originalElementsOrHash.length - 1
            ? !0
            : this._hasStrings && /^\s*$/.test(this._originalStringElements[e]);
        }
        _OriginalRegionIsBoundary(e, c) {
          if (this._OriginalIsBoundary(e) || this._OriginalIsBoundary(e - 1)) return !0;
          if (c > 0) {
            const s = e + c;
            if (this._OriginalIsBoundary(s - 1) || this._OriginalIsBoundary(s)) return !0;
          }
          return !1;
        }
        _ModifiedIsBoundary(e) {
          return e <= 0 || e >= this._modifiedElementsOrHash.length - 1
            ? !0
            : this._hasStrings && /^\s*$/.test(this._modifiedStringElements[e]);
        }
        _ModifiedRegionIsBoundary(e, c) {
          if (this._ModifiedIsBoundary(e) || this._ModifiedIsBoundary(e - 1)) return !0;
          if (c > 0) {
            const s = e + c;
            if (this._ModifiedIsBoundary(s - 1) || this._ModifiedIsBoundary(s)) return !0;
          }
          return !1;
        }
        _boundaryScore(e, c, s, u) {
          const d = this._OriginalRegionIsBoundary(e, c) ? 1 : 0,
            o = this._ModifiedRegionIsBoundary(s, u) ? 1 : 0;
          return d + o;
        }
        ConcatenateChanges(e, c) {
          const s = [];
          if (e.length === 0 || c.length === 0) return c.length > 0 ? c : e;
          if (this.ChangesOverlap(e[e.length - 1], c[0], s)) {
            const u = new Array(e.length + c.length - 1);
            return (
              p.Copy(e, 0, u, 0, e.length - 1),
              (u[e.length - 1] = s[0]),
              p.Copy(c, 1, u, e.length, c.length - 1),
              u
            );
          } else {
            const u = new Array(e.length + c.length);
            return p.Copy(e, 0, u, 0, e.length), p.Copy(c, 0, u, e.length, c.length), u;
          }
        }
        ChangesOverlap(e, c, s) {
          if (
            (f.Assert(
              e.originalStart <= c.originalStart,
              'Left change is not less than or equal to right change',
            ),
            f.Assert(
              e.modifiedStart <= c.modifiedStart,
              'Left change is not less than or equal to right change',
            ),
            e.originalStart + e.originalLength >= c.originalStart ||
              e.modifiedStart + e.modifiedLength >= c.modifiedStart)
          ) {
            const u = e.originalStart;
            let d = e.originalLength;
            const o = e.modifiedStart;
            let _ = e.modifiedLength;
            return (
              e.originalStart + e.originalLength >= c.originalStart &&
                (d = c.originalStart + c.originalLength - e.originalStart),
              e.modifiedStart + e.modifiedLength >= c.modifiedStart &&
                (_ = c.modifiedStart + c.modifiedLength - e.modifiedStart),
              (s[0] = new n.DiffChange(u, d, o, _)),
              !0
            );
          } else return (s[0] = null), !1;
        }
        ClipDiagonalBound(e, c, s, u) {
          if (e >= 0 && e < u) return e;
          const d = s,
            o = u - s - 1,
            _ = c % 2 === 0;
          if (e < 0) {
            const w = d % 2 === 0;
            return _ === w ? 0 : 1;
          } else {
            const w = o % 2 === 0;
            return _ === w ? u - 1 : u - 2;
          }
        }
      }
      r.LcsDiff = a;
    }),
    X(J[26], K([0, 1]), function (W, r) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.isString = n),
        (r.isObject = D),
        (r.isTypedArray = A),
        (r.isNumber = b),
        (r.isIterable = f),
        (r.isBoolean = p),
        (r.isUndefined = h),
        (r.isDefined = a),
        (r.isUndefinedOrNull = m),
        (r.assertType = e),
        (r.assertIsDefined = c),
        (r.isFunction = s),
        (r.validateConstraints = u),
        (r.validateConstraint = d);
      function n(o) {
        return typeof o == 'string';
      }
      function D(o) {
        return (
          typeof o == 'object' &&
          o !== null &&
          !Array.isArray(o) &&
          !(o instanceof RegExp) &&
          !(o instanceof Date)
        );
      }
      function A(o) {
        const _ = Object.getPrototypeOf(Uint8Array);
        return typeof o == 'object' && o instanceof _;
      }
      function b(o) {
        return typeof o == 'number' && !isNaN(o);
      }
      function f(o) {
        return !!o && typeof o[Symbol.iterator] == 'function';
      }
      function p(o) {
        return o === !0 || o === !1;
      }
      function h(o) {
        return typeof o > 'u';
      }
      function a(o) {
        return !m(o);
      }
      function m(o) {
        return h(o) || o === null;
      }
      function e(o, _) {
        if (!o) throw new Error(_ ? `Unexpected type, expected '${_}'` : 'Unexpected type');
      }
      function c(o) {
        if (m(o)) throw new Error('Assertion Failed: argument is undefined or null');
        return o;
      }
      function s(o) {
        return typeof o == 'function';
      }
      function u(o, _) {
        const w = Math.min(o.length, _.length);
        for (let S = 0; S < w; S++) d(o[S], _[S]);
      }
      function d(o, _) {
        if (n(_)) {
          if (typeof o !== _) throw new Error(`argument does not match constraint: typeof ${_}`);
        } else if (s(_)) {
          try {
            if (o instanceof _) return;
          } catch {}
          if ((!m(o) && o.constructor === _) || (_.length === 1 && _.call(void 0, o) === !0))
            return;
          throw new Error(
            'argument does not match one of these constraints: arg instanceof constraint, arg.constructor === constraint, nor constraint(arg) === true',
          );
        }
      }
    }),
    X(J[27], K([0, 1, 26]), function (W, r, n) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.register = A),
        (r.getCodiconFontCharacters = b);
      const D = Object.create(null);
      function A(f, p) {
        if ((0, n.isString)(p)) {
          const h = D[p];
          if (h === void 0) throw new Error(`${f} references an unknown codicon: ${p}`);
          p = h;
        }
        return (D[f] = p), { id: f };
      }
      function b() {
        return D;
      }
    }),
    X(J[42], K([0, 1, 27]), function (W, r, n) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.codiconsLibrary = void 0),
        (r.codiconsLibrary = {
          add: (0, n.register)('add', 6e4),
          plus: (0, n.register)('plus', 6e4),
          gistNew: (0, n.register)('gist-new', 6e4),
          repoCreate: (0, n.register)('repo-create', 6e4),
          lightbulb: (0, n.register)('lightbulb', 60001),
          lightBulb: (0, n.register)('light-bulb', 60001),
          repo: (0, n.register)('repo', 60002),
          repoDelete: (0, n.register)('repo-delete', 60002),
          gistFork: (0, n.register)('gist-fork', 60003),
          repoForked: (0, n.register)('repo-forked', 60003),
          gitPullRequest: (0, n.register)('git-pull-request', 60004),
          gitPullRequestAbandoned: (0, n.register)('git-pull-request-abandoned', 60004),
          recordKeys: (0, n.register)('record-keys', 60005),
          keyboard: (0, n.register)('keyboard', 60005),
          tag: (0, n.register)('tag', 60006),
          gitPullRequestLabel: (0, n.register)('git-pull-request-label', 60006),
          tagAdd: (0, n.register)('tag-add', 60006),
          tagRemove: (0, n.register)('tag-remove', 60006),
          person: (0, n.register)('person', 60007),
          personFollow: (0, n.register)('person-follow', 60007),
          personOutline: (0, n.register)('person-outline', 60007),
          personFilled: (0, n.register)('person-filled', 60007),
          gitBranch: (0, n.register)('git-branch', 60008),
          gitBranchCreate: (0, n.register)('git-branch-create', 60008),
          gitBranchDelete: (0, n.register)('git-branch-delete', 60008),
          sourceControl: (0, n.register)('source-control', 60008),
          mirror: (0, n.register)('mirror', 60009),
          mirrorPublic: (0, n.register)('mirror-public', 60009),
          star: (0, n.register)('star', 60010),
          starAdd: (0, n.register)('star-add', 60010),
          starDelete: (0, n.register)('star-delete', 60010),
          starEmpty: (0, n.register)('star-empty', 60010),
          comment: (0, n.register)('comment', 60011),
          commentAdd: (0, n.register)('comment-add', 60011),
          alert: (0, n.register)('alert', 60012),
          warning: (0, n.register)('warning', 60012),
          search: (0, n.register)('search', 60013),
          searchSave: (0, n.register)('search-save', 60013),
          logOut: (0, n.register)('log-out', 60014),
          signOut: (0, n.register)('sign-out', 60014),
          logIn: (0, n.register)('log-in', 60015),
          signIn: (0, n.register)('sign-in', 60015),
          eye: (0, n.register)('eye', 60016),
          eyeUnwatch: (0, n.register)('eye-unwatch', 60016),
          eyeWatch: (0, n.register)('eye-watch', 60016),
          circleFilled: (0, n.register)('circle-filled', 60017),
          primitiveDot: (0, n.register)('primitive-dot', 60017),
          closeDirty: (0, n.register)('close-dirty', 60017),
          debugBreakpoint: (0, n.register)('debug-breakpoint', 60017),
          debugBreakpointDisabled: (0, n.register)('debug-breakpoint-disabled', 60017),
          debugHint: (0, n.register)('debug-hint', 60017),
          terminalDecorationSuccess: (0, n.register)('terminal-decoration-success', 60017),
          primitiveSquare: (0, n.register)('primitive-square', 60018),
          edit: (0, n.register)('edit', 60019),
          pencil: (0, n.register)('pencil', 60019),
          info: (0, n.register)('info', 60020),
          issueOpened: (0, n.register)('issue-opened', 60020),
          gistPrivate: (0, n.register)('gist-private', 60021),
          gitForkPrivate: (0, n.register)('git-fork-private', 60021),
          lock: (0, n.register)('lock', 60021),
          mirrorPrivate: (0, n.register)('mirror-private', 60021),
          close: (0, n.register)('close', 60022),
          removeClose: (0, n.register)('remove-close', 60022),
          x: (0, n.register)('x', 60022),
          repoSync: (0, n.register)('repo-sync', 60023),
          sync: (0, n.register)('sync', 60023),
          clone: (0, n.register)('clone', 60024),
          desktopDownload: (0, n.register)('desktop-download', 60024),
          beaker: (0, n.register)('beaker', 60025),
          microscope: (0, n.register)('microscope', 60025),
          vm: (0, n.register)('vm', 60026),
          deviceDesktop: (0, n.register)('device-desktop', 60026),
          file: (0, n.register)('file', 60027),
          fileText: (0, n.register)('file-text', 60027),
          more: (0, n.register)('more', 60028),
          ellipsis: (0, n.register)('ellipsis', 60028),
          kebabHorizontal: (0, n.register)('kebab-horizontal', 60028),
          mailReply: (0, n.register)('mail-reply', 60029),
          reply: (0, n.register)('reply', 60029),
          organization: (0, n.register)('organization', 60030),
          organizationFilled: (0, n.register)('organization-filled', 60030),
          organizationOutline: (0, n.register)('organization-outline', 60030),
          newFile: (0, n.register)('new-file', 60031),
          fileAdd: (0, n.register)('file-add', 60031),
          newFolder: (0, n.register)('new-folder', 60032),
          fileDirectoryCreate: (0, n.register)('file-directory-create', 60032),
          trash: (0, n.register)('trash', 60033),
          trashcan: (0, n.register)('trashcan', 60033),
          history: (0, n.register)('history', 60034),
          clock: (0, n.register)('clock', 60034),
          folder: (0, n.register)('folder', 60035),
          fileDirectory: (0, n.register)('file-directory', 60035),
          symbolFolder: (0, n.register)('symbol-folder', 60035),
          logoGithub: (0, n.register)('logo-github', 60036),
          markGithub: (0, n.register)('mark-github', 60036),
          github: (0, n.register)('github', 60036),
          terminal: (0, n.register)('terminal', 60037),
          console: (0, n.register)('console', 60037),
          repl: (0, n.register)('repl', 60037),
          zap: (0, n.register)('zap', 60038),
          symbolEvent: (0, n.register)('symbol-event', 60038),
          error: (0, n.register)('error', 60039),
          stop: (0, n.register)('stop', 60039),
          variable: (0, n.register)('variable', 60040),
          symbolVariable: (0, n.register)('symbol-variable', 60040),
          array: (0, n.register)('array', 60042),
          symbolArray: (0, n.register)('symbol-array', 60042),
          symbolModule: (0, n.register)('symbol-module', 60043),
          symbolPackage: (0, n.register)('symbol-package', 60043),
          symbolNamespace: (0, n.register)('symbol-namespace', 60043),
          symbolObject: (0, n.register)('symbol-object', 60043),
          symbolMethod: (0, n.register)('symbol-method', 60044),
          symbolFunction: (0, n.register)('symbol-function', 60044),
          symbolConstructor: (0, n.register)('symbol-constructor', 60044),
          symbolBoolean: (0, n.register)('symbol-boolean', 60047),
          symbolNull: (0, n.register)('symbol-null', 60047),
          symbolNumeric: (0, n.register)('symbol-numeric', 60048),
          symbolNumber: (0, n.register)('symbol-number', 60048),
          symbolStructure: (0, n.register)('symbol-structure', 60049),
          symbolStruct: (0, n.register)('symbol-struct', 60049),
          symbolParameter: (0, n.register)('symbol-parameter', 60050),
          symbolTypeParameter: (0, n.register)('symbol-type-parameter', 60050),
          symbolKey: (0, n.register)('symbol-key', 60051),
          symbolText: (0, n.register)('symbol-text', 60051),
          symbolReference: (0, n.register)('symbol-reference', 60052),
          goToFile: (0, n.register)('go-to-file', 60052),
          symbolEnum: (0, n.register)('symbol-enum', 60053),
          symbolValue: (0, n.register)('symbol-value', 60053),
          symbolRuler: (0, n.register)('symbol-ruler', 60054),
          symbolUnit: (0, n.register)('symbol-unit', 60054),
          activateBreakpoints: (0, n.register)('activate-breakpoints', 60055),
          archive: (0, n.register)('archive', 60056),
          arrowBoth: (0, n.register)('arrow-both', 60057),
          arrowDown: (0, n.register)('arrow-down', 60058),
          arrowLeft: (0, n.register)('arrow-left', 60059),
          arrowRight: (0, n.register)('arrow-right', 60060),
          arrowSmallDown: (0, n.register)('arrow-small-down', 60061),
          arrowSmallLeft: (0, n.register)('arrow-small-left', 60062),
          arrowSmallRight: (0, n.register)('arrow-small-right', 60063),
          arrowSmallUp: (0, n.register)('arrow-small-up', 60064),
          arrowUp: (0, n.register)('arrow-up', 60065),
          bell: (0, n.register)('bell', 60066),
          bold: (0, n.register)('bold', 60067),
          book: (0, n.register)('book', 60068),
          bookmark: (0, n.register)('bookmark', 60069),
          debugBreakpointConditionalUnverified: (0, n.register)(
            'debug-breakpoint-conditional-unverified',
            60070,
          ),
          debugBreakpointConditional: (0, n.register)('debug-breakpoint-conditional', 60071),
          debugBreakpointConditionalDisabled: (0, n.register)(
            'debug-breakpoint-conditional-disabled',
            60071,
          ),
          debugBreakpointDataUnverified: (0, n.register)('debug-breakpoint-data-unverified', 60072),
          debugBreakpointData: (0, n.register)('debug-breakpoint-data', 60073),
          debugBreakpointDataDisabled: (0, n.register)('debug-breakpoint-data-disabled', 60073),
          debugBreakpointLogUnverified: (0, n.register)('debug-breakpoint-log-unverified', 60074),
          debugBreakpointLog: (0, n.register)('debug-breakpoint-log', 60075),
          debugBreakpointLogDisabled: (0, n.register)('debug-breakpoint-log-disabled', 60075),
          briefcase: (0, n.register)('briefcase', 60076),
          broadcast: (0, n.register)('broadcast', 60077),
          browser: (0, n.register)('browser', 60078),
          bug: (0, n.register)('bug', 60079),
          calendar: (0, n.register)('calendar', 60080),
          caseSensitive: (0, n.register)('case-sensitive', 60081),
          check: (0, n.register)('check', 60082),
          checklist: (0, n.register)('checklist', 60083),
          chevronDown: (0, n.register)('chevron-down', 60084),
          chevronLeft: (0, n.register)('chevron-left', 60085),
          chevronRight: (0, n.register)('chevron-right', 60086),
          chevronUp: (0, n.register)('chevron-up', 60087),
          chromeClose: (0, n.register)('chrome-close', 60088),
          chromeMaximize: (0, n.register)('chrome-maximize', 60089),
          chromeMinimize: (0, n.register)('chrome-minimize', 60090),
          chromeRestore: (0, n.register)('chrome-restore', 60091),
          circleOutline: (0, n.register)('circle-outline', 60092),
          circle: (0, n.register)('circle', 60092),
          debugBreakpointUnverified: (0, n.register)('debug-breakpoint-unverified', 60092),
          terminalDecorationIncomplete: (0, n.register)('terminal-decoration-incomplete', 60092),
          circleSlash: (0, n.register)('circle-slash', 60093),
          circuitBoard: (0, n.register)('circuit-board', 60094),
          clearAll: (0, n.register)('clear-all', 60095),
          clippy: (0, n.register)('clippy', 60096),
          closeAll: (0, n.register)('close-all', 60097),
          cloudDownload: (0, n.register)('cloud-download', 60098),
          cloudUpload: (0, n.register)('cloud-upload', 60099),
          code: (0, n.register)('code', 60100),
          collapseAll: (0, n.register)('collapse-all', 60101),
          colorMode: (0, n.register)('color-mode', 60102),
          commentDiscussion: (0, n.register)('comment-discussion', 60103),
          creditCard: (0, n.register)('credit-card', 60105),
          dash: (0, n.register)('dash', 60108),
          dashboard: (0, n.register)('dashboard', 60109),
          database: (0, n.register)('database', 60110),
          debugContinue: (0, n.register)('debug-continue', 60111),
          debugDisconnect: (0, n.register)('debug-disconnect', 60112),
          debugPause: (0, n.register)('debug-pause', 60113),
          debugRestart: (0, n.register)('debug-restart', 60114),
          debugStart: (0, n.register)('debug-start', 60115),
          debugStepInto: (0, n.register)('debug-step-into', 60116),
          debugStepOut: (0, n.register)('debug-step-out', 60117),
          debugStepOver: (0, n.register)('debug-step-over', 60118),
          debugStop: (0, n.register)('debug-stop', 60119),
          debug: (0, n.register)('debug', 60120),
          deviceCameraVideo: (0, n.register)('device-camera-video', 60121),
          deviceCamera: (0, n.register)('device-camera', 60122),
          deviceMobile: (0, n.register)('device-mobile', 60123),
          diffAdded: (0, n.register)('diff-added', 60124),
          diffIgnored: (0, n.register)('diff-ignored', 60125),
          diffModified: (0, n.register)('diff-modified', 60126),
          diffRemoved: (0, n.register)('diff-removed', 60127),
          diffRenamed: (0, n.register)('diff-renamed', 60128),
          diff: (0, n.register)('diff', 60129),
          diffSidebyside: (0, n.register)('diff-sidebyside', 60129),
          discard: (0, n.register)('discard', 60130),
          editorLayout: (0, n.register)('editor-layout', 60131),
          emptyWindow: (0, n.register)('empty-window', 60132),
          exclude: (0, n.register)('exclude', 60133),
          extensions: (0, n.register)('extensions', 60134),
          eyeClosed: (0, n.register)('eye-closed', 60135),
          fileBinary: (0, n.register)('file-binary', 60136),
          fileCode: (0, n.register)('file-code', 60137),
          fileMedia: (0, n.register)('file-media', 60138),
          filePdf: (0, n.register)('file-pdf', 60139),
          fileSubmodule: (0, n.register)('file-submodule', 60140),
          fileSymlinkDirectory: (0, n.register)('file-symlink-directory', 60141),
          fileSymlinkFile: (0, n.register)('file-symlink-file', 60142),
          fileZip: (0, n.register)('file-zip', 60143),
          files: (0, n.register)('files', 60144),
          filter: (0, n.register)('filter', 60145),
          flame: (0, n.register)('flame', 60146),
          foldDown: (0, n.register)('fold-down', 60147),
          foldUp: (0, n.register)('fold-up', 60148),
          fold: (0, n.register)('fold', 60149),
          folderActive: (0, n.register)('folder-active', 60150),
          folderOpened: (0, n.register)('folder-opened', 60151),
          gear: (0, n.register)('gear', 60152),
          gift: (0, n.register)('gift', 60153),
          gistSecret: (0, n.register)('gist-secret', 60154),
          gist: (0, n.register)('gist', 60155),
          gitCommit: (0, n.register)('git-commit', 60156),
          gitCompare: (0, n.register)('git-compare', 60157),
          compareChanges: (0, n.register)('compare-changes', 60157),
          gitMerge: (0, n.register)('git-merge', 60158),
          githubAction: (0, n.register)('github-action', 60159),
          githubAlt: (0, n.register)('github-alt', 60160),
          globe: (0, n.register)('globe', 60161),
          grabber: (0, n.register)('grabber', 60162),
          graph: (0, n.register)('graph', 60163),
          gripper: (0, n.register)('gripper', 60164),
          heart: (0, n.register)('heart', 60165),
          home: (0, n.register)('home', 60166),
          horizontalRule: (0, n.register)('horizontal-rule', 60167),
          hubot: (0, n.register)('hubot', 60168),
          inbox: (0, n.register)('inbox', 60169),
          issueReopened: (0, n.register)('issue-reopened', 60171),
          issues: (0, n.register)('issues', 60172),
          italic: (0, n.register)('italic', 60173),
          jersey: (0, n.register)('jersey', 60174),
          json: (0, n.register)('json', 60175),
          kebabVertical: (0, n.register)('kebab-vertical', 60176),
          key: (0, n.register)('key', 60177),
          law: (0, n.register)('law', 60178),
          lightbulbAutofix: (0, n.register)('lightbulb-autofix', 60179),
          linkExternal: (0, n.register)('link-external', 60180),
          link: (0, n.register)('link', 60181),
          listOrdered: (0, n.register)('list-ordered', 60182),
          listUnordered: (0, n.register)('list-unordered', 60183),
          liveShare: (0, n.register)('live-share', 60184),
          loading: (0, n.register)('loading', 60185),
          location: (0, n.register)('location', 60186),
          mailRead: (0, n.register)('mail-read', 60187),
          mail: (0, n.register)('mail', 60188),
          markdown: (0, n.register)('markdown', 60189),
          megaphone: (0, n.register)('megaphone', 60190),
          mention: (0, n.register)('mention', 60191),
          milestone: (0, n.register)('milestone', 60192),
          gitPullRequestMilestone: (0, n.register)('git-pull-request-milestone', 60192),
          mortarBoard: (0, n.register)('mortar-board', 60193),
          move: (0, n.register)('move', 60194),
          multipleWindows: (0, n.register)('multiple-windows', 60195),
          mute: (0, n.register)('mute', 60196),
          noNewline: (0, n.register)('no-newline', 60197),
          note: (0, n.register)('note', 60198),
          octoface: (0, n.register)('octoface', 60199),
          openPreview: (0, n.register)('open-preview', 60200),
          package: (0, n.register)('package', 60201),
          paintcan: (0, n.register)('paintcan', 60202),
          pin: (0, n.register)('pin', 60203),
          play: (0, n.register)('play', 60204),
          run: (0, n.register)('run', 60204),
          plug: (0, n.register)('plug', 60205),
          preserveCase: (0, n.register)('preserve-case', 60206),
          preview: (0, n.register)('preview', 60207),
          project: (0, n.register)('project', 60208),
          pulse: (0, n.register)('pulse', 60209),
          question: (0, n.register)('question', 60210),
          quote: (0, n.register)('quote', 60211),
          radioTower: (0, n.register)('radio-tower', 60212),
          reactions: (0, n.register)('reactions', 60213),
          references: (0, n.register)('references', 60214),
          refresh: (0, n.register)('refresh', 60215),
          regex: (0, n.register)('regex', 60216),
          remoteExplorer: (0, n.register)('remote-explorer', 60217),
          remote: (0, n.register)('remote', 60218),
          remove: (0, n.register)('remove', 60219),
          replaceAll: (0, n.register)('replace-all', 60220),
          replace: (0, n.register)('replace', 60221),
          repoClone: (0, n.register)('repo-clone', 60222),
          repoForcePush: (0, n.register)('repo-force-push', 60223),
          repoPull: (0, n.register)('repo-pull', 60224),
          repoPush: (0, n.register)('repo-push', 60225),
          report: (0, n.register)('report', 60226),
          requestChanges: (0, n.register)('request-changes', 60227),
          rocket: (0, n.register)('rocket', 60228),
          rootFolderOpened: (0, n.register)('root-folder-opened', 60229),
          rootFolder: (0, n.register)('root-folder', 60230),
          rss: (0, n.register)('rss', 60231),
          ruby: (0, n.register)('ruby', 60232),
          saveAll: (0, n.register)('save-all', 60233),
          saveAs: (0, n.register)('save-as', 60234),
          save: (0, n.register)('save', 60235),
          screenFull: (0, n.register)('screen-full', 60236),
          screenNormal: (0, n.register)('screen-normal', 60237),
          searchStop: (0, n.register)('search-stop', 60238),
          server: (0, n.register)('server', 60240),
          settingsGear: (0, n.register)('settings-gear', 60241),
          settings: (0, n.register)('settings', 60242),
          shield: (0, n.register)('shield', 60243),
          smiley: (0, n.register)('smiley', 60244),
          sortPrecedence: (0, n.register)('sort-precedence', 60245),
          splitHorizontal: (0, n.register)('split-horizontal', 60246),
          splitVertical: (0, n.register)('split-vertical', 60247),
          squirrel: (0, n.register)('squirrel', 60248),
          starFull: (0, n.register)('star-full', 60249),
          starHalf: (0, n.register)('star-half', 60250),
          symbolClass: (0, n.register)('symbol-class', 60251),
          symbolColor: (0, n.register)('symbol-color', 60252),
          symbolConstant: (0, n.register)('symbol-constant', 60253),
          symbolEnumMember: (0, n.register)('symbol-enum-member', 60254),
          symbolField: (0, n.register)('symbol-field', 60255),
          symbolFile: (0, n.register)('symbol-file', 60256),
          symbolInterface: (0, n.register)('symbol-interface', 60257),
          symbolKeyword: (0, n.register)('symbol-keyword', 60258),
          symbolMisc: (0, n.register)('symbol-misc', 60259),
          symbolOperator: (0, n.register)('symbol-operator', 60260),
          symbolProperty: (0, n.register)('symbol-property', 60261),
          wrench: (0, n.register)('wrench', 60261),
          wrenchSubaction: (0, n.register)('wrench-subaction', 60261),
          symbolSnippet: (0, n.register)('symbol-snippet', 60262),
          tasklist: (0, n.register)('tasklist', 60263),
          telescope: (0, n.register)('telescope', 60264),
          textSize: (0, n.register)('text-size', 60265),
          threeBars: (0, n.register)('three-bars', 60266),
          thumbsdown: (0, n.register)('thumbsdown', 60267),
          thumbsup: (0, n.register)('thumbsup', 60268),
          tools: (0, n.register)('tools', 60269),
          triangleDown: (0, n.register)('triangle-down', 60270),
          triangleLeft: (0, n.register)('triangle-left', 60271),
          triangleRight: (0, n.register)('triangle-right', 60272),
          triangleUp: (0, n.register)('triangle-up', 60273),
          twitter: (0, n.register)('twitter', 60274),
          unfold: (0, n.register)('unfold', 60275),
          unlock: (0, n.register)('unlock', 60276),
          unmute: (0, n.register)('unmute', 60277),
          unverified: (0, n.register)('unverified', 60278),
          verified: (0, n.register)('verified', 60279),
          versions: (0, n.register)('versions', 60280),
          vmActive: (0, n.register)('vm-active', 60281),
          vmOutline: (0, n.register)('vm-outline', 60282),
          vmRunning: (0, n.register)('vm-running', 60283),
          watch: (0, n.register)('watch', 60284),
          whitespace: (0, n.register)('whitespace', 60285),
          wholeWord: (0, n.register)('whole-word', 60286),
          window: (0, n.register)('window', 60287),
          wordWrap: (0, n.register)('word-wrap', 60288),
          zoomIn: (0, n.register)('zoom-in', 60289),
          zoomOut: (0, n.register)('zoom-out', 60290),
          listFilter: (0, n.register)('list-filter', 60291),
          listFlat: (0, n.register)('list-flat', 60292),
          listSelection: (0, n.register)('list-selection', 60293),
          selection: (0, n.register)('selection', 60293),
          listTree: (0, n.register)('list-tree', 60294),
          debugBreakpointFunctionUnverified: (0, n.register)(
            'debug-breakpoint-function-unverified',
            60295,
          ),
          debugBreakpointFunction: (0, n.register)('debug-breakpoint-function', 60296),
          debugBreakpointFunctionDisabled: (0, n.register)(
            'debug-breakpoint-function-disabled',
            60296,
          ),
          debugStackframeActive: (0, n.register)('debug-stackframe-active', 60297),
          circleSmallFilled: (0, n.register)('circle-small-filled', 60298),
          debugStackframeDot: (0, n.register)('debug-stackframe-dot', 60298),
          terminalDecorationMark: (0, n.register)('terminal-decoration-mark', 60298),
          debugStackframe: (0, n.register)('debug-stackframe', 60299),
          debugStackframeFocused: (0, n.register)('debug-stackframe-focused', 60299),
          debugBreakpointUnsupported: (0, n.register)('debug-breakpoint-unsupported', 60300),
          symbolString: (0, n.register)('symbol-string', 60301),
          debugReverseContinue: (0, n.register)('debug-reverse-continue', 60302),
          debugStepBack: (0, n.register)('debug-step-back', 60303),
          debugRestartFrame: (0, n.register)('debug-restart-frame', 60304),
          debugAlt: (0, n.register)('debug-alt', 60305),
          callIncoming: (0, n.register)('call-incoming', 60306),
          callOutgoing: (0, n.register)('call-outgoing', 60307),
          menu: (0, n.register)('menu', 60308),
          expandAll: (0, n.register)('expand-all', 60309),
          feedback: (0, n.register)('feedback', 60310),
          gitPullRequestReviewer: (0, n.register)('git-pull-request-reviewer', 60310),
          groupByRefType: (0, n.register)('group-by-ref-type', 60311),
          ungroupByRefType: (0, n.register)('ungroup-by-ref-type', 60312),
          account: (0, n.register)('account', 60313),
          gitPullRequestAssignee: (0, n.register)('git-pull-request-assignee', 60313),
          bellDot: (0, n.register)('bell-dot', 60314),
          debugConsole: (0, n.register)('debug-console', 60315),
          library: (0, n.register)('library', 60316),
          output: (0, n.register)('output', 60317),
          runAll: (0, n.register)('run-all', 60318),
          syncIgnored: (0, n.register)('sync-ignored', 60319),
          pinned: (0, n.register)('pinned', 60320),
          githubInverted: (0, n.register)('github-inverted', 60321),
          serverProcess: (0, n.register)('server-process', 60322),
          serverEnvironment: (0, n.register)('server-environment', 60323),
          pass: (0, n.register)('pass', 60324),
          issueClosed: (0, n.register)('issue-closed', 60324),
          stopCircle: (0, n.register)('stop-circle', 60325),
          playCircle: (0, n.register)('play-circle', 60326),
          record: (0, n.register)('record', 60327),
          debugAltSmall: (0, n.register)('debug-alt-small', 60328),
          vmConnect: (0, n.register)('vm-connect', 60329),
          cloud: (0, n.register)('cloud', 60330),
          merge: (0, n.register)('merge', 60331),
          export: (0, n.register)('export', 60332),
          graphLeft: (0, n.register)('graph-left', 60333),
          magnet: (0, n.register)('magnet', 60334),
          notebook: (0, n.register)('notebook', 60335),
          redo: (0, n.register)('redo', 60336),
          checkAll: (0, n.register)('check-all', 60337),
          pinnedDirty: (0, n.register)('pinned-dirty', 60338),
          passFilled: (0, n.register)('pass-filled', 60339),
          circleLargeFilled: (0, n.register)('circle-large-filled', 60340),
          circleLarge: (0, n.register)('circle-large', 60341),
          circleLargeOutline: (0, n.register)('circle-large-outline', 60341),
          combine: (0, n.register)('combine', 60342),
          gather: (0, n.register)('gather', 60342),
          table: (0, n.register)('table', 60343),
          variableGroup: (0, n.register)('variable-group', 60344),
          typeHierarchy: (0, n.register)('type-hierarchy', 60345),
          typeHierarchySub: (0, n.register)('type-hierarchy-sub', 60346),
          typeHierarchySuper: (0, n.register)('type-hierarchy-super', 60347),
          gitPullRequestCreate: (0, n.register)('git-pull-request-create', 60348),
          runAbove: (0, n.register)('run-above', 60349),
          runBelow: (0, n.register)('run-below', 60350),
          notebookTemplate: (0, n.register)('notebook-template', 60351),
          debugRerun: (0, n.register)('debug-rerun', 60352),
          workspaceTrusted: (0, n.register)('workspace-trusted', 60353),
          workspaceUntrusted: (0, n.register)('workspace-untrusted', 60354),
          workspaceUnknown: (0, n.register)('workspace-unknown', 60355),
          terminalCmd: (0, n.register)('terminal-cmd', 60356),
          terminalDebian: (0, n.register)('terminal-debian', 60357),
          terminalLinux: (0, n.register)('terminal-linux', 60358),
          terminalPowershell: (0, n.register)('terminal-powershell', 60359),
          terminalTmux: (0, n.register)('terminal-tmux', 60360),
          terminalUbuntu: (0, n.register)('terminal-ubuntu', 60361),
          terminalBash: (0, n.register)('terminal-bash', 60362),
          arrowSwap: (0, n.register)('arrow-swap', 60363),
          copy: (0, n.register)('copy', 60364),
          personAdd: (0, n.register)('person-add', 60365),
          filterFilled: (0, n.register)('filter-filled', 60366),
          wand: (0, n.register)('wand', 60367),
          debugLineByLine: (0, n.register)('debug-line-by-line', 60368),
          inspect: (0, n.register)('inspect', 60369),
          layers: (0, n.register)('layers', 60370),
          layersDot: (0, n.register)('layers-dot', 60371),
          layersActive: (0, n.register)('layers-active', 60372),
          compass: (0, n.register)('compass', 60373),
          compassDot: (0, n.register)('compass-dot', 60374),
          compassActive: (0, n.register)('compass-active', 60375),
          azure: (0, n.register)('azure', 60376),
          issueDraft: (0, n.register)('issue-draft', 60377),
          gitPullRequestClosed: (0, n.register)('git-pull-request-closed', 60378),
          gitPullRequestDraft: (0, n.register)('git-pull-request-draft', 60379),
          debugAll: (0, n.register)('debug-all', 60380),
          debugCoverage: (0, n.register)('debug-coverage', 60381),
          runErrors: (0, n.register)('run-errors', 60382),
          folderLibrary: (0, n.register)('folder-library', 60383),
          debugContinueSmall: (0, n.register)('debug-continue-small', 60384),
          beakerStop: (0, n.register)('beaker-stop', 60385),
          graphLine: (0, n.register)('graph-line', 60386),
          graphScatter: (0, n.register)('graph-scatter', 60387),
          pieChart: (0, n.register)('pie-chart', 60388),
          bracket: (0, n.register)('bracket', 60175),
          bracketDot: (0, n.register)('bracket-dot', 60389),
          bracketError: (0, n.register)('bracket-error', 60390),
          lockSmall: (0, n.register)('lock-small', 60391),
          azureDevops: (0, n.register)('azure-devops', 60392),
          verifiedFilled: (0, n.register)('verified-filled', 60393),
          newline: (0, n.register)('newline', 60394),
          layout: (0, n.register)('layout', 60395),
          layoutActivitybarLeft: (0, n.register)('layout-activitybar-left', 60396),
          layoutActivitybarRight: (0, n.register)('layout-activitybar-right', 60397),
          layoutPanelLeft: (0, n.register)('layout-panel-left', 60398),
          layoutPanelCenter: (0, n.register)('layout-panel-center', 60399),
          layoutPanelJustify: (0, n.register)('layout-panel-justify', 60400),
          layoutPanelRight: (0, n.register)('layout-panel-right', 60401),
          layoutPanel: (0, n.register)('layout-panel', 60402),
          layoutSidebarLeft: (0, n.register)('layout-sidebar-left', 60403),
          layoutSidebarRight: (0, n.register)('layout-sidebar-right', 60404),
          layoutStatusbar: (0, n.register)('layout-statusbar', 60405),
          layoutMenubar: (0, n.register)('layout-menubar', 60406),
          layoutCentered: (0, n.register)('layout-centered', 60407),
          target: (0, n.register)('target', 60408),
          indent: (0, n.register)('indent', 60409),
          recordSmall: (0, n.register)('record-small', 60410),
          errorSmall: (0, n.register)('error-small', 60411),
          terminalDecorationError: (0, n.register)('terminal-decoration-error', 60411),
          arrowCircleDown: (0, n.register)('arrow-circle-down', 60412),
          arrowCircleLeft: (0, n.register)('arrow-circle-left', 60413),
          arrowCircleRight: (0, n.register)('arrow-circle-right', 60414),
          arrowCircleUp: (0, n.register)('arrow-circle-up', 60415),
          layoutSidebarRightOff: (0, n.register)('layout-sidebar-right-off', 60416),
          layoutPanelOff: (0, n.register)('layout-panel-off', 60417),
          layoutSidebarLeftOff: (0, n.register)('layout-sidebar-left-off', 60418),
          blank: (0, n.register)('blank', 60419),
          heartFilled: (0, n.register)('heart-filled', 60420),
          map: (0, n.register)('map', 60421),
          mapHorizontal: (0, n.register)('map-horizontal', 60421),
          foldHorizontal: (0, n.register)('fold-horizontal', 60421),
          mapFilled: (0, n.register)('map-filled', 60422),
          mapHorizontalFilled: (0, n.register)('map-horizontal-filled', 60422),
          foldHorizontalFilled: (0, n.register)('fold-horizontal-filled', 60422),
          circleSmall: (0, n.register)('circle-small', 60423),
          bellSlash: (0, n.register)('bell-slash', 60424),
          bellSlashDot: (0, n.register)('bell-slash-dot', 60425),
          commentUnresolved: (0, n.register)('comment-unresolved', 60426),
          gitPullRequestGoToChanges: (0, n.register)('git-pull-request-go-to-changes', 60427),
          gitPullRequestNewChanges: (0, n.register)('git-pull-request-new-changes', 60428),
          searchFuzzy: (0, n.register)('search-fuzzy', 60429),
          commentDraft: (0, n.register)('comment-draft', 60430),
          send: (0, n.register)('send', 60431),
          sparkle: (0, n.register)('sparkle', 60432),
          insert: (0, n.register)('insert', 60433),
          mic: (0, n.register)('mic', 60434),
          thumbsdownFilled: (0, n.register)('thumbsdown-filled', 60435),
          thumbsupFilled: (0, n.register)('thumbsup-filled', 60436),
          coffee: (0, n.register)('coffee', 60437),
          snake: (0, n.register)('snake', 60438),
          game: (0, n.register)('game', 60439),
          vr: (0, n.register)('vr', 60440),
          chip: (0, n.register)('chip', 60441),
          piano: (0, n.register)('piano', 60442),
          music: (0, n.register)('music', 60443),
          micFilled: (0, n.register)('mic-filled', 60444),
          repoFetch: (0, n.register)('repo-fetch', 60445),
          copilot: (0, n.register)('copilot', 60446),
          lightbulbSparkle: (0, n.register)('lightbulb-sparkle', 60447),
          robot: (0, n.register)('robot', 60448),
          sparkleFilled: (0, n.register)('sparkle-filled', 60449),
          diffSingle: (0, n.register)('diff-single', 60450),
          diffMultiple: (0, n.register)('diff-multiple', 60451),
          surroundWith: (0, n.register)('surround-with', 60452),
          share: (0, n.register)('share', 60453),
          gitStash: (0, n.register)('git-stash', 60454),
          gitStashApply: (0, n.register)('git-stash-apply', 60455),
          gitStashPop: (0, n.register)('git-stash-pop', 60456),
          vscode: (0, n.register)('vscode', 60457),
          vscodeInsiders: (0, n.register)('vscode-insiders', 60458),
          codeOss: (0, n.register)('code-oss', 60459),
          runCoverage: (0, n.register)('run-coverage', 60460),
          runAllCoverage: (0, n.register)('run-all-coverage', 60461),
          coverage: (0, n.register)('coverage', 60462),
          githubProject: (0, n.register)('github-project', 60463),
          mapVertical: (0, n.register)('map-vertical', 60464),
          foldVertical: (0, n.register)('fold-vertical', 60464),
          mapVerticalFilled: (0, n.register)('map-vertical-filled', 60465),
          foldVerticalFilled: (0, n.register)('fold-vertical-filled', 60465),
          goToSearch: (0, n.register)('go-to-search', 60466),
          percentage: (0, n.register)('percentage', 60467),
          sortPercentage: (0, n.register)('sort-percentage', 60467),
          attach: (0, n.register)('attach', 60468),
        });
    }),
    X(J[43], K([0, 1, 27, 42]), function (W, r, n, D) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.Codicon = r.codiconsDerived = void 0),
        (r.codiconsDerived = {
          dialogError: (0, n.register)('dialog-error', 'error'),
          dialogWarning: (0, n.register)('dialog-warning', 'warning'),
          dialogInfo: (0, n.register)('dialog-info', 'info'),
          dialogClose: (0, n.register)('dialog-close', 'close'),
          treeItemExpanded: (0, n.register)('tree-item-expanded', 'chevron-down'),
          treeFilterOnTypeOn: (0, n.register)('tree-filter-on-type-on', 'list-filter'),
          treeFilterOnTypeOff: (0, n.register)('tree-filter-on-type-off', 'list-selection'),
          treeFilterClear: (0, n.register)('tree-filter-clear', 'close'),
          treeItemLoading: (0, n.register)('tree-item-loading', 'loading'),
          menuSelection: (0, n.register)('menu-selection', 'check'),
          menuSubmenu: (0, n.register)('menu-submenu', 'chevron-right'),
          menuBarMore: (0, n.register)('menubar-more', 'more'),
          scrollbarButtonLeft: (0, n.register)('scrollbar-button-left', 'triangle-left'),
          scrollbarButtonRight: (0, n.register)('scrollbar-button-right', 'triangle-right'),
          scrollbarButtonUp: (0, n.register)('scrollbar-button-up', 'triangle-up'),
          scrollbarButtonDown: (0, n.register)('scrollbar-button-down', 'triangle-down'),
          toolBarMore: (0, n.register)('toolbar-more', 'more'),
          quickInputBack: (0, n.register)('quick-input-back', 'arrow-left'),
          dropDownButton: (0, n.register)('drop-down-button', 60084),
          symbolCustomColor: (0, n.register)('symbol-customcolor', 60252),
          exportIcon: (0, n.register)('export', 60332),
          workspaceUnspecified: (0, n.register)('workspace-unspecified', 60355),
          newLine: (0, n.register)('newline', 60394),
          thumbsDownFilled: (0, n.register)('thumbsdown-filled', 60435),
          thumbsUpFilled: (0, n.register)('thumbsup-filled', 60436),
          gitFetch: (0, n.register)('git-fetch', 60445),
          lightbulbSparkleAutofix: (0, n.register)('lightbulb-sparkle-autofix', 60447),
          debugBreakpointPending: (0, n.register)('debug-breakpoint-pending', 60377),
        }),
        (r.Codicon = { ...D.codiconsLibrary, ...r.codiconsDerived });
    }),
    X(J[14], K([0, 1, 26]), function (W, r, n) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.deepClone = D),
        (r.deepFreeze = A),
        (r.cloneAndChange = f),
        (r.mixin = h),
        (r.equals = a),
        (r.getAllPropertyNames = m),
        (r.getAllMethodNames = e),
        (r.createProxyObject = c);
      function D(s) {
        if (!s || typeof s != 'object' || s instanceof RegExp) return s;
        const u = Array.isArray(s) ? [] : {};
        return (
          Object.entries(s).forEach(([d, o]) => {
            u[d] = o && typeof o == 'object' ? D(o) : o;
          }),
          u
        );
      }
      function A(s) {
        if (!s || typeof s != 'object') return s;
        const u = [s];
        for (; u.length > 0; ) {
          const d = u.shift();
          Object.freeze(d);
          for (const o in d)
            if (b.call(d, o)) {
              const _ = d[o];
              typeof _ == 'object' && !Object.isFrozen(_) && !(0, n.isTypedArray)(_) && u.push(_);
            }
        }
        return s;
      }
      const b = Object.prototype.hasOwnProperty;
      function f(s, u) {
        return p(s, u, new Set());
      }
      function p(s, u, d) {
        if ((0, n.isUndefinedOrNull)(s)) return s;
        const o = u(s);
        if (typeof o < 'u') return o;
        if (Array.isArray(s)) {
          const _ = [];
          for (const w of s) _.push(p(w, u, d));
          return _;
        }
        if ((0, n.isObject)(s)) {
          if (d.has(s)) throw new Error('Cannot clone recursive data-structure');
          d.add(s);
          const _ = {};
          for (const w in s) b.call(s, w) && (_[w] = p(s[w], u, d));
          return d.delete(s), _;
        }
        return s;
      }
      function h(s, u, d = !0) {
        return (0, n.isObject)(s)
          ? ((0, n.isObject)(u) &&
              Object.keys(u).forEach((o) => {
                o in s
                  ? d &&
                    ((0, n.isObject)(s[o]) && (0, n.isObject)(u[o])
                      ? h(s[o], u[o], d)
                      : (s[o] = u[o]))
                  : (s[o] = u[o]);
              }),
            s)
          : u;
      }
      function a(s, u) {
        if (s === u) return !0;
        if (
          s == null ||
          u === null ||
          u === void 0 ||
          typeof s != typeof u ||
          typeof s != 'object' ||
          Array.isArray(s) !== Array.isArray(u)
        )
          return !1;
        let d, o;
        if (Array.isArray(s)) {
          if (s.length !== u.length) return !1;
          for (d = 0; d < s.length; d++) if (!a(s[d], u[d])) return !1;
        } else {
          const _ = [];
          for (o in s) _.push(o);
          _.sort();
          const w = [];
          for (o in u) w.push(o);
          if ((w.sort(), !a(_, w))) return !1;
          for (d = 0; d < _.length; d++) if (!a(s[_[d]], u[_[d]])) return !1;
        }
        return !0;
      }
      function m(s) {
        let u = [];
        for (; Object.prototype !== s; )
          (u = u.concat(Object.getOwnPropertyNames(s))), (s = Object.getPrototypeOf(s));
        return u;
      }
      function e(s) {
        const u = [];
        for (const d of m(s)) typeof s[d] == 'function' && u.push(d);
        return u;
      }
      function c(s, u) {
        const d = (_) =>
            function () {
              const w = Array.prototype.slice.call(arguments, 0);
              return u(_, w);
            },
          o = {};
        for (const _ of s) o[_] = d(_);
        return o;
      }
    }),
    X(J[28], K([0, 1]), function (W, r) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.toUint8 = n), (r.toUint32 = D);
      function n(A) {
        return A < 0 ? 0 : A > 255 ? 255 : A | 0;
      }
      function D(A) {
        return A < 0 ? 0 : A > 4294967295 ? 4294967295 : A | 0;
      }
    }),
    X(J[29], K([0, 1, 28]), function (W, r, n) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.CharacterSet = r.CharacterClassifier = void 0);
      class D {
        constructor(f) {
          const p = (0, n.toUint8)(f);
          (this._defaultValue = p),
            (this._asciiMap = D._createAsciiMap(p)),
            (this._map = new Map());
        }
        static _createAsciiMap(f) {
          const p = new Uint8Array(256);
          return p.fill(f), p;
        }
        set(f, p) {
          const h = (0, n.toUint8)(p);
          f >= 0 && f < 256 ? (this._asciiMap[f] = h) : this._map.set(f, h);
        }
        get(f) {
          return f >= 0 && f < 256 ? this._asciiMap[f] : this._map.get(f) || this._defaultValue;
        }
        clear() {
          this._asciiMap.fill(this._defaultValue), this._map.clear();
        }
      }
      r.CharacterClassifier = D;
      class A {
        constructor() {
          this._actual = new D(0);
        }
        add(f) {
          this._actual.set(f, 1);
        }
        has(f) {
          return this._actual.get(f) === 1;
        }
        clear() {
          return this._actual.clear();
        }
      }
      r.CharacterSet = A;
    }),
    X(J[3], K([0, 1, 5]), function (W, r, n) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.OffsetRangeSet = r.OffsetRange = void 0);
      class D {
        static addRange(f, p) {
          let h = 0;
          for (; h < p.length && p[h].endExclusive < f.start; ) h++;
          let a = h;
          for (; a < p.length && p[a].start <= f.endExclusive; ) a++;
          if (h === a) p.splice(h, 0, f);
          else {
            const m = Math.min(f.start, p[h].start),
              e = Math.max(f.endExclusive, p[a - 1].endExclusive);
            p.splice(h, a - h, new D(m, e));
          }
        }
        static tryCreate(f, p) {
          if (!(f > p)) return new D(f, p);
        }
        static ofLength(f) {
          return new D(0, f);
        }
        static ofStartAndLength(f, p) {
          return new D(f, f + p);
        }
        constructor(f, p) {
          if (((this.start = f), (this.endExclusive = p), f > p))
            throw new n.BugIndicatingError(`Invalid range: ${this.toString()}`);
        }
        get isEmpty() {
          return this.start === this.endExclusive;
        }
        delta(f) {
          return new D(this.start + f, this.endExclusive + f);
        }
        deltaStart(f) {
          return new D(this.start + f, this.endExclusive);
        }
        deltaEnd(f) {
          return new D(this.start, this.endExclusive + f);
        }
        get length() {
          return this.endExclusive - this.start;
        }
        toString() {
          return `[${this.start}, ${this.endExclusive})`;
        }
        contains(f) {
          return this.start <= f && f < this.endExclusive;
        }
        join(f) {
          return new D(Math.min(this.start, f.start), Math.max(this.endExclusive, f.endExclusive));
        }
        intersect(f) {
          const p = Math.max(this.start, f.start),
            h = Math.min(this.endExclusive, f.endExclusive);
          if (p <= h) return new D(p, h);
        }
        intersects(f) {
          const p = Math.max(this.start, f.start),
            h = Math.min(this.endExclusive, f.endExclusive);
          return p < h;
        }
        isBefore(f) {
          return this.endExclusive <= f.start;
        }
        isAfter(f) {
          return this.start >= f.endExclusive;
        }
        slice(f) {
          return f.slice(this.start, this.endExclusive);
        }
        substring(f) {
          return f.substring(this.start, this.endExclusive);
        }
        clip(f) {
          if (this.isEmpty)
            throw new n.BugIndicatingError(`Invalid clipping range: ${this.toString()}`);
          return Math.max(this.start, Math.min(this.endExclusive - 1, f));
        }
        clipCyclic(f) {
          if (this.isEmpty)
            throw new n.BugIndicatingError(`Invalid clipping range: ${this.toString()}`);
          return f < this.start
            ? this.endExclusive - ((this.start - f) % this.length)
            : f >= this.endExclusive
              ? this.start + ((f - this.start) % this.length)
              : f;
        }
        forEach(f) {
          for (let p = this.start; p < this.endExclusive; p++) f(p);
        }
      }
      r.OffsetRange = D;
      class A {
        constructor() {
          this._sortedRanges = [];
        }
        addRange(f) {
          let p = 0;
          for (; p < this._sortedRanges.length && this._sortedRanges[p].endExclusive < f.start; )
            p++;
          let h = p;
          for (; h < this._sortedRanges.length && this._sortedRanges[h].start <= f.endExclusive; )
            h++;
          if (p === h) this._sortedRanges.splice(p, 0, f);
          else {
            const a = Math.min(f.start, this._sortedRanges[p].start),
              m = Math.max(f.endExclusive, this._sortedRanges[h - 1].endExclusive);
            this._sortedRanges.splice(p, h - p, new D(a, m));
          }
        }
        toString() {
          return this._sortedRanges.map((f) => f.toString()).join(', ');
        }
        intersectsStrict(f) {
          let p = 0;
          for (; p < this._sortedRanges.length && this._sortedRanges[p].endExclusive <= f.start; )
            p++;
          return p < this._sortedRanges.length && this._sortedRanges[p].start < f.endExclusive;
        }
        intersectWithRange(f) {
          const p = new A();
          for (const h of this._sortedRanges) {
            const a = h.intersect(f);
            a && p.addRange(a);
          }
          return p;
        }
        intersectWithRangeLength(f) {
          return this.intersectWithRange(f).length;
        }
        get length() {
          return this._sortedRanges.reduce((f, p) => f + p.length, 0);
        }
      }
      r.OffsetRangeSet = A;
    }),
    X(J[4], K([0, 1]), function (W, r) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.Position = void 0);
      class n {
        constructor(A, b) {
          (this.lineNumber = A), (this.column = b);
        }
        with(A = this.lineNumber, b = this.column) {
          return A === this.lineNumber && b === this.column ? this : new n(A, b);
        }
        delta(A = 0, b = 0) {
          return this.with(this.lineNumber + A, this.column + b);
        }
        equals(A) {
          return n.equals(this, A);
        }
        static equals(A, b) {
          return !A && !b
            ? !0
            : !!A && !!b && A.lineNumber === b.lineNumber && A.column === b.column;
        }
        isBefore(A) {
          return n.isBefore(this, A);
        }
        static isBefore(A, b) {
          return A.lineNumber < b.lineNumber
            ? !0
            : b.lineNumber < A.lineNumber
              ? !1
              : A.column < b.column;
        }
        isBeforeOrEqual(A) {
          return n.isBeforeOrEqual(this, A);
        }
        static isBeforeOrEqual(A, b) {
          return A.lineNumber < b.lineNumber
            ? !0
            : b.lineNumber < A.lineNumber
              ? !1
              : A.column <= b.column;
        }
        static compare(A, b) {
          const f = A.lineNumber | 0,
            p = b.lineNumber | 0;
          if (f === p) {
            const h = A.column | 0,
              a = b.column | 0;
            return h - a;
          }
          return f - p;
        }
        clone() {
          return new n(this.lineNumber, this.column);
        }
        toString() {
          return '(' + this.lineNumber + ',' + this.column + ')';
        }
        static lift(A) {
          return new n(A.lineNumber, A.column);
        }
        static isIPosition(A) {
          return A && typeof A.lineNumber == 'number' && typeof A.column == 'number';
        }
        toJSON() {
          return { lineNumber: this.lineNumber, column: this.column };
        }
      }
      r.Position = n;
    }),
    X(J[2], K([0, 1, 4]), function (W, r, n) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.Range = void 0);
      class D {
        constructor(b, f, p, h) {
          b > p || (b === p && f > h)
            ? ((this.startLineNumber = p),
              (this.startColumn = h),
              (this.endLineNumber = b),
              (this.endColumn = f))
            : ((this.startLineNumber = b),
              (this.startColumn = f),
              (this.endLineNumber = p),
              (this.endColumn = h));
        }
        isEmpty() {
          return D.isEmpty(this);
        }
        static isEmpty(b) {
          return b.startLineNumber === b.endLineNumber && b.startColumn === b.endColumn;
        }
        containsPosition(b) {
          return D.containsPosition(this, b);
        }
        static containsPosition(b, f) {
          return !(
            f.lineNumber < b.startLineNumber ||
            f.lineNumber > b.endLineNumber ||
            (f.lineNumber === b.startLineNumber && f.column < b.startColumn) ||
            (f.lineNumber === b.endLineNumber && f.column > b.endColumn)
          );
        }
        static strictContainsPosition(b, f) {
          return !(
            f.lineNumber < b.startLineNumber ||
            f.lineNumber > b.endLineNumber ||
            (f.lineNumber === b.startLineNumber && f.column <= b.startColumn) ||
            (f.lineNumber === b.endLineNumber && f.column >= b.endColumn)
          );
        }
        containsRange(b) {
          return D.containsRange(this, b);
        }
        static containsRange(b, f) {
          return !(
            f.startLineNumber < b.startLineNumber ||
            f.endLineNumber < b.startLineNumber ||
            f.startLineNumber > b.endLineNumber ||
            f.endLineNumber > b.endLineNumber ||
            (f.startLineNumber === b.startLineNumber && f.startColumn < b.startColumn) ||
            (f.endLineNumber === b.endLineNumber && f.endColumn > b.endColumn)
          );
        }
        strictContainsRange(b) {
          return D.strictContainsRange(this, b);
        }
        static strictContainsRange(b, f) {
          return !(
            f.startLineNumber < b.startLineNumber ||
            f.endLineNumber < b.startLineNumber ||
            f.startLineNumber > b.endLineNumber ||
            f.endLineNumber > b.endLineNumber ||
            (f.startLineNumber === b.startLineNumber && f.startColumn <= b.startColumn) ||
            (f.endLineNumber === b.endLineNumber && f.endColumn >= b.endColumn)
          );
        }
        plusRange(b) {
          return D.plusRange(this, b);
        }
        static plusRange(b, f) {
          let p, h, a, m;
          return (
            f.startLineNumber < b.startLineNumber
              ? ((p = f.startLineNumber), (h = f.startColumn))
              : f.startLineNumber === b.startLineNumber
                ? ((p = f.startLineNumber), (h = Math.min(f.startColumn, b.startColumn)))
                : ((p = b.startLineNumber), (h = b.startColumn)),
            f.endLineNumber > b.endLineNumber
              ? ((a = f.endLineNumber), (m = f.endColumn))
              : f.endLineNumber === b.endLineNumber
                ? ((a = f.endLineNumber), (m = Math.max(f.endColumn, b.endColumn)))
                : ((a = b.endLineNumber), (m = b.endColumn)),
            new D(p, h, a, m)
          );
        }
        intersectRanges(b) {
          return D.intersectRanges(this, b);
        }
        static intersectRanges(b, f) {
          let p = b.startLineNumber,
            h = b.startColumn,
            a = b.endLineNumber,
            m = b.endColumn;
          const e = f.startLineNumber,
            c = f.startColumn,
            s = f.endLineNumber,
            u = f.endColumn;
          return (
            p < e ? ((p = e), (h = c)) : p === e && (h = Math.max(h, c)),
            a > s ? ((a = s), (m = u)) : a === s && (m = Math.min(m, u)),
            p > a || (p === a && h > m) ? null : new D(p, h, a, m)
          );
        }
        equalsRange(b) {
          return D.equalsRange(this, b);
        }
        static equalsRange(b, f) {
          return !b && !f
            ? !0
            : !!b &&
                !!f &&
                b.startLineNumber === f.startLineNumber &&
                b.startColumn === f.startColumn &&
                b.endLineNumber === f.endLineNumber &&
                b.endColumn === f.endColumn;
        }
        getEndPosition() {
          return D.getEndPosition(this);
        }
        static getEndPosition(b) {
          return new n.Position(b.endLineNumber, b.endColumn);
        }
        getStartPosition() {
          return D.getStartPosition(this);
        }
        static getStartPosition(b) {
          return new n.Position(b.startLineNumber, b.startColumn);
        }
        toString() {
          return (
            '[' +
            this.startLineNumber +
            ',' +
            this.startColumn +
            ' -> ' +
            this.endLineNumber +
            ',' +
            this.endColumn +
            ']'
          );
        }
        setEndPosition(b, f) {
          return new D(this.startLineNumber, this.startColumn, b, f);
        }
        setStartPosition(b, f) {
          return new D(b, f, this.endLineNumber, this.endColumn);
        }
        collapseToStart() {
          return D.collapseToStart(this);
        }
        static collapseToStart(b) {
          return new D(b.startLineNumber, b.startColumn, b.startLineNumber, b.startColumn);
        }
        collapseToEnd() {
          return D.collapseToEnd(this);
        }
        static collapseToEnd(b) {
          return new D(b.endLineNumber, b.endColumn, b.endLineNumber, b.endColumn);
        }
        delta(b) {
          return new D(
            this.startLineNumber + b,
            this.startColumn,
            this.endLineNumber + b,
            this.endColumn,
          );
        }
        static fromPositions(b, f = b) {
          return new D(b.lineNumber, b.column, f.lineNumber, f.column);
        }
        static lift(b) {
          return b ? new D(b.startLineNumber, b.startColumn, b.endLineNumber, b.endColumn) : null;
        }
        static isIRange(b) {
          return (
            b &&
            typeof b.startLineNumber == 'number' &&
            typeof b.startColumn == 'number' &&
            typeof b.endLineNumber == 'number' &&
            typeof b.endColumn == 'number'
          );
        }
        static areIntersectingOrTouching(b, f) {
          return !(
            b.endLineNumber < f.startLineNumber ||
            (b.endLineNumber === f.startLineNumber && b.endColumn < f.startColumn) ||
            f.endLineNumber < b.startLineNumber ||
            (f.endLineNumber === b.startLineNumber && f.endColumn < b.startColumn)
          );
        }
        static areIntersecting(b, f) {
          return !(
            b.endLineNumber < f.startLineNumber ||
            (b.endLineNumber === f.startLineNumber && b.endColumn <= f.startColumn) ||
            f.endLineNumber < b.startLineNumber ||
            (f.endLineNumber === b.startLineNumber && f.endColumn <= b.startColumn)
          );
        }
        static compareRangesUsingStarts(b, f) {
          if (b && f) {
            const a = b.startLineNumber | 0,
              m = f.startLineNumber | 0;
            if (a === m) {
              const e = b.startColumn | 0,
                c = f.startColumn | 0;
              if (e === c) {
                const s = b.endLineNumber | 0,
                  u = f.endLineNumber | 0;
                if (s === u) {
                  const d = b.endColumn | 0,
                    o = f.endColumn | 0;
                  return d - o;
                }
                return s - u;
              }
              return e - c;
            }
            return a - m;
          }
          return (b ? 1 : 0) - (f ? 1 : 0);
        }
        static compareRangesUsingEnds(b, f) {
          return b.endLineNumber === f.endLineNumber
            ? b.endColumn === f.endColumn
              ? b.startLineNumber === f.startLineNumber
                ? b.startColumn - f.startColumn
                : b.startLineNumber - f.startLineNumber
              : b.endColumn - f.endColumn
            : b.endLineNumber - f.endLineNumber;
        }
        static spansMultipleLines(b) {
          return b.endLineNumber > b.startLineNumber;
        }
        toJSON() {
          return this;
        }
      }
      r.Range = D;
    }),
    X(J[11], K([0, 1, 5, 3, 2, 12]), function (W, r, n, D, A, b) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.LineRangeSet = r.LineRange = void 0);
      class f {
        static fromRangeInclusive(a) {
          return new f(a.startLineNumber, a.endLineNumber + 1);
        }
        static joinMany(a) {
          if (a.length === 0) return [];
          let m = new p(a[0].slice());
          for (let e = 1; e < a.length; e++) m = m.getUnion(new p(a[e].slice()));
          return m.ranges;
        }
        static join(a) {
          if (a.length === 0) throw new n.BugIndicatingError('lineRanges cannot be empty');
          let m = a[0].startLineNumber,
            e = a[0].endLineNumberExclusive;
          for (let c = 1; c < a.length; c++)
            (m = Math.min(m, a[c].startLineNumber)), (e = Math.max(e, a[c].endLineNumberExclusive));
          return new f(m, e);
        }
        static ofLength(a, m) {
          return new f(a, a + m);
        }
        static deserialize(a) {
          return new f(a[0], a[1]);
        }
        constructor(a, m) {
          if (a > m)
            throw new n.BugIndicatingError(
              `startLineNumber ${a} cannot be after endLineNumberExclusive ${m}`,
            );
          (this.startLineNumber = a), (this.endLineNumberExclusive = m);
        }
        contains(a) {
          return this.startLineNumber <= a && a < this.endLineNumberExclusive;
        }
        get isEmpty() {
          return this.startLineNumber === this.endLineNumberExclusive;
        }
        delta(a) {
          return new f(this.startLineNumber + a, this.endLineNumberExclusive + a);
        }
        deltaLength(a) {
          return new f(this.startLineNumber, this.endLineNumberExclusive + a);
        }
        get length() {
          return this.endLineNumberExclusive - this.startLineNumber;
        }
        join(a) {
          return new f(
            Math.min(this.startLineNumber, a.startLineNumber),
            Math.max(this.endLineNumberExclusive, a.endLineNumberExclusive),
          );
        }
        toString() {
          return `[${this.startLineNumber},${this.endLineNumberExclusive})`;
        }
        intersect(a) {
          const m = Math.max(this.startLineNumber, a.startLineNumber),
            e = Math.min(this.endLineNumberExclusive, a.endLineNumberExclusive);
          if (m <= e) return new f(m, e);
        }
        intersectsStrict(a) {
          return (
            this.startLineNumber < a.endLineNumberExclusive &&
            a.startLineNumber < this.endLineNumberExclusive
          );
        }
        overlapOrTouch(a) {
          return (
            this.startLineNumber <= a.endLineNumberExclusive &&
            a.startLineNumber <= this.endLineNumberExclusive
          );
        }
        equals(a) {
          return (
            this.startLineNumber === a.startLineNumber &&
            this.endLineNumberExclusive === a.endLineNumberExclusive
          );
        }
        toInclusiveRange() {
          return this.isEmpty
            ? null
            : new A.Range(
                this.startLineNumber,
                1,
                this.endLineNumberExclusive - 1,
                Number.MAX_SAFE_INTEGER,
              );
        }
        toExclusiveRange() {
          return new A.Range(this.startLineNumber, 1, this.endLineNumberExclusive, 1);
        }
        mapToLineArray(a) {
          const m = [];
          for (let e = this.startLineNumber; e < this.endLineNumberExclusive; e++) m.push(a(e));
          return m;
        }
        forEach(a) {
          for (let m = this.startLineNumber; m < this.endLineNumberExclusive; m++) a(m);
        }
        serialize() {
          return [this.startLineNumber, this.endLineNumberExclusive];
        }
        includes(a) {
          return this.startLineNumber <= a && a < this.endLineNumberExclusive;
        }
        toOffsetRange() {
          return new D.OffsetRange(this.startLineNumber - 1, this.endLineNumberExclusive - 1);
        }
      }
      r.LineRange = f;
      class p {
        constructor(a = []) {
          this._normalizedRanges = a;
        }
        get ranges() {
          return this._normalizedRanges;
        }
        addRange(a) {
          if (a.length === 0) return;
          const m = (0, b.findFirstIdxMonotonousOrArrLen)(
              this._normalizedRanges,
              (c) => c.endLineNumberExclusive >= a.startLineNumber,
            ),
            e =
              (0, b.findLastIdxMonotonous)(
                this._normalizedRanges,
                (c) => c.startLineNumber <= a.endLineNumberExclusive,
              ) + 1;
          if (m === e) this._normalizedRanges.splice(m, 0, a);
          else if (m === e - 1) {
            const c = this._normalizedRanges[m];
            this._normalizedRanges[m] = c.join(a);
          } else {
            const c = this._normalizedRanges[m].join(this._normalizedRanges[e - 1]).join(a);
            this._normalizedRanges.splice(m, e - m, c);
          }
        }
        contains(a) {
          const m = (0, b.findLastMonotonous)(
            this._normalizedRanges,
            (e) => e.startLineNumber <= a,
          );
          return !!m && m.endLineNumberExclusive > a;
        }
        intersects(a) {
          const m = (0, b.findLastMonotonous)(
            this._normalizedRanges,
            (e) => e.startLineNumber < a.endLineNumberExclusive,
          );
          return !!m && m.endLineNumberExclusive > a.startLineNumber;
        }
        getUnion(a) {
          if (this._normalizedRanges.length === 0) return a;
          if (a._normalizedRanges.length === 0) return this;
          const m = [];
          let e = 0,
            c = 0,
            s = null;
          for (; e < this._normalizedRanges.length || c < a._normalizedRanges.length; ) {
            let u = null;
            if (e < this._normalizedRanges.length && c < a._normalizedRanges.length) {
              const d = this._normalizedRanges[e],
                o = a._normalizedRanges[c];
              d.startLineNumber < o.startLineNumber ? ((u = d), e++) : ((u = o), c++);
            } else
              e < this._normalizedRanges.length
                ? ((u = this._normalizedRanges[e]), e++)
                : ((u = a._normalizedRanges[c]), c++);
            s === null
              ? (s = u)
              : s.endLineNumberExclusive >= u.startLineNumber
                ? (s = new f(
                    s.startLineNumber,
                    Math.max(s.endLineNumberExclusive, u.endLineNumberExclusive),
                  ))
                : (m.push(s), (s = u));
          }
          return s !== null && m.push(s), new p(m);
        }
        subtractFrom(a) {
          const m = (0, b.findFirstIdxMonotonousOrArrLen)(
              this._normalizedRanges,
              (u) => u.endLineNumberExclusive >= a.startLineNumber,
            ),
            e =
              (0, b.findLastIdxMonotonous)(
                this._normalizedRanges,
                (u) => u.startLineNumber <= a.endLineNumberExclusive,
              ) + 1;
          if (m === e) return new p([a]);
          const c = [];
          let s = a.startLineNumber;
          for (let u = m; u < e; u++) {
            const d = this._normalizedRanges[u];
            d.startLineNumber > s && c.push(new f(s, d.startLineNumber)),
              (s = d.endLineNumberExclusive);
          }
          return (
            s < a.endLineNumberExclusive && c.push(new f(s, a.endLineNumberExclusive)), new p(c)
          );
        }
        toString() {
          return this._normalizedRanges.map((a) => a.toString()).join(', ');
        }
        getIntersection(a) {
          const m = [];
          let e = 0,
            c = 0;
          for (; e < this._normalizedRanges.length && c < a._normalizedRanges.length; ) {
            const s = this._normalizedRanges[e],
              u = a._normalizedRanges[c],
              d = s.intersect(u);
            d && !d.isEmpty && m.push(d),
              s.endLineNumberExclusive < u.endLineNumberExclusive ? e++ : c++;
          }
          return new p(m);
        }
        getWithDelta(a) {
          return new p(this._normalizedRanges.map((m) => m.delta(a)));
        }
      }
      r.LineRangeSet = p;
    }),
    X(J[44], K([0, 1, 4, 2]), function (W, r, n, D) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.Selection = void 0);
      class A extends D.Range {
        constructor(f, p, h, a) {
          super(f, p, h, a),
            (this.selectionStartLineNumber = f),
            (this.selectionStartColumn = p),
            (this.positionLineNumber = h),
            (this.positionColumn = a);
        }
        toString() {
          return (
            '[' +
            this.selectionStartLineNumber +
            ',' +
            this.selectionStartColumn +
            ' -> ' +
            this.positionLineNumber +
            ',' +
            this.positionColumn +
            ']'
          );
        }
        equalsSelection(f) {
          return A.selectionsEqual(this, f);
        }
        static selectionsEqual(f, p) {
          return (
            f.selectionStartLineNumber === p.selectionStartLineNumber &&
            f.selectionStartColumn === p.selectionStartColumn &&
            f.positionLineNumber === p.positionLineNumber &&
            f.positionColumn === p.positionColumn
          );
        }
        getDirection() {
          return this.selectionStartLineNumber === this.startLineNumber &&
            this.selectionStartColumn === this.startColumn
            ? 0
            : 1;
        }
        setEndPosition(f, p) {
          return this.getDirection() === 0
            ? new A(this.startLineNumber, this.startColumn, f, p)
            : new A(f, p, this.startLineNumber, this.startColumn);
        }
        getPosition() {
          return new n.Position(this.positionLineNumber, this.positionColumn);
        }
        getSelectionStart() {
          return new n.Position(this.selectionStartLineNumber, this.selectionStartColumn);
        }
        setStartPosition(f, p) {
          return this.getDirection() === 0
            ? new A(f, p, this.endLineNumber, this.endColumn)
            : new A(this.endLineNumber, this.endColumn, f, p);
        }
        static fromPositions(f, p = f) {
          return new A(f.lineNumber, f.column, p.lineNumber, p.column);
        }
        static fromRange(f, p) {
          return p === 0
            ? new A(f.startLineNumber, f.startColumn, f.endLineNumber, f.endColumn)
            : new A(f.endLineNumber, f.endColumn, f.startLineNumber, f.startColumn);
        }
        static liftSelection(f) {
          return new A(
            f.selectionStartLineNumber,
            f.selectionStartColumn,
            f.positionLineNumber,
            f.positionColumn,
          );
        }
        static selectionsArrEqual(f, p) {
          if ((f && !p) || (!f && p)) return !1;
          if (!f && !p) return !0;
          if (f.length !== p.length) return !1;
          for (let h = 0, a = f.length; h < a; h++)
            if (!this.selectionsEqual(f[h], p[h])) return !1;
          return !0;
        }
        static isISelection(f) {
          return (
            f &&
            typeof f.selectionStartLineNumber == 'number' &&
            typeof f.selectionStartColumn == 'number' &&
            typeof f.positionLineNumber == 'number' &&
            typeof f.positionColumn == 'number'
          );
        }
        static createWithDirection(f, p, h, a, m) {
          return m === 0 ? new A(f, p, h, a) : new A(h, a, f, p);
        }
      }
      r.Selection = A;
    }),
    X(J[30], K([0, 1, 4, 2]), function (W, r, n, D) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.TextLength = void 0);
      class A {
        static betweenPositions(f, p) {
          return f.lineNumber === p.lineNumber
            ? new A(0, p.column - f.column)
            : new A(p.lineNumber - f.lineNumber, p.column - 1);
        }
        static ofRange(f) {
          return A.betweenPositions(f.getStartPosition(), f.getEndPosition());
        }
        static ofText(f) {
          let p = 0,
            h = 0;
          for (const a of f)
            a ===
            `
`
              ? (p++, (h = 0))
              : h++;
          return new A(p, h);
        }
        constructor(f, p) {
          (this.lineCount = f), (this.columnCount = p);
        }
        isGreaterThanOrEqualTo(f) {
          return this.lineCount !== f.lineCount
            ? this.lineCount > f.lineCount
            : this.columnCount >= f.columnCount;
        }
        createRange(f) {
          return this.lineCount === 0
            ? new D.Range(f.lineNumber, f.column, f.lineNumber, f.column + this.columnCount)
            : new D.Range(
                f.lineNumber,
                f.column,
                f.lineNumber + this.lineCount,
                this.columnCount + 1,
              );
        }
        addToPosition(f) {
          return this.lineCount === 0
            ? new n.Position(f.lineNumber, f.column + this.columnCount)
            : new n.Position(f.lineNumber + this.lineCount, this.columnCount + 1);
        }
        toString() {
          return `${this.lineCount},${this.columnCount}`;
        }
      }
      (r.TextLength = A), (A.zero = new A(0, 0));
    }),
    X(J[45], K([0, 1, 3, 30]), function (W, r, n, D) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.PositionOffsetTransformer = void 0);
      class A {
        constructor(f) {
          (this.text = f),
            (this.lineStartOffsetByLineIdx = []),
            this.lineStartOffsetByLineIdx.push(0);
          for (let p = 0; p < f.length; p++)
            f.charAt(p) ===
              `
` && this.lineStartOffsetByLineIdx.push(p + 1);
        }
        getOffset(f) {
          return this.lineStartOffsetByLineIdx[f.lineNumber - 1] + f.column - 1;
        }
        getOffsetRange(f) {
          return new n.OffsetRange(
            this.getOffset(f.getStartPosition()),
            this.getOffset(f.getEndPosition()),
          );
        }
        get textLength() {
          const f = this.lineStartOffsetByLineIdx.length - 1;
          return new D.TextLength(f, this.text.length - this.lineStartOffsetByLineIdx[f]);
        }
      }
      r.PositionOffsetTransformer = A;
    }),
    X(J[46], K([0, 1, 9, 5, 4, 45, 2, 30]), function (W, r, n, D, A, b, f, p) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.StringText = r.AbstractText = r.SingleTextEdit = r.TextEdit = void 0);
      class h {
        constructor(u) {
          (this.edits = u),
            (0, n.assertFn)(() =>
              (0, n.checkAdjacentItems)(u, (d, o) =>
                d.range.getEndPosition().isBeforeOrEqual(o.range.getStartPosition()),
              ),
            );
        }
        apply(u) {
          let d = '',
            o = new A.Position(1, 1);
          for (const w of this.edits) {
            const S = w.range,
              R = S.getStartPosition(),
              v = S.getEndPosition(),
              i = m(o, R);
            i.isEmpty() || (d += u.getValueOfRange(i)), (d += w.text), (o = v);
          }
          const _ = m(o, u.endPositionExclusive);
          return _.isEmpty() || (d += u.getValueOfRange(_)), d;
        }
        applyToString(u) {
          const d = new c(u);
          return this.apply(d);
        }
        getNewRanges() {
          const u = [];
          let d = 0,
            o = 0,
            _ = 0;
          for (const w of this.edits) {
            const S = p.TextLength.ofText(w.text),
              R = A.Position.lift({
                lineNumber: w.range.startLineNumber + o,
                column: w.range.startColumn + (w.range.startLineNumber === d ? _ : 0),
              }),
              v = S.createRange(R);
            u.push(v),
              (o = v.endLineNumber - w.range.endLineNumber),
              (_ = v.endColumn - w.range.endColumn),
              (d = w.range.endLineNumber);
          }
          return u;
        }
      }
      r.TextEdit = h;
      class a {
        constructor(u, d) {
          (this.range = u), (this.text = d);
        }
      }
      r.SingleTextEdit = a;
      function m(s, u) {
        if (s.lineNumber === u.lineNumber && s.column === Number.MAX_SAFE_INTEGER)
          return f.Range.fromPositions(u, u);
        if (!s.isBeforeOrEqual(u)) throw new D.BugIndicatingError('start must be before end');
        return new f.Range(s.lineNumber, s.column, u.lineNumber, u.column);
      }
      class e {
        get endPositionExclusive() {
          return this.length.addToPosition(new A.Position(1, 1));
        }
      }
      r.AbstractText = e;
      class c extends e {
        constructor(u) {
          super(), (this.value = u), (this._t = new b.PositionOffsetTransformer(this.value));
        }
        getValueOfRange(u) {
          return this._t.getOffsetRange(u).substring(this.value);
        }
        get length() {
          return this._t.textLength;
        }
      }
      r.StringText = c;
    }),
    X(J[47], K([0, 1, 23, 29]), function (W, r, n, D) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.WordCharacterClassifier = void 0),
        (r.getMapForWordSeparators = f);
      class A extends D.CharacterClassifier {
        constructor(h, a) {
          super(0),
            (this._segmenter = null),
            (this._cachedLine = null),
            (this._cachedSegments = []),
            (this.intlSegmenterLocales = a),
            this.intlSegmenterLocales.length > 0
              ? (this._segmenter = new Intl.Segmenter(this.intlSegmenterLocales, {
                  granularity: 'word',
                }))
              : (this._segmenter = null);
          for (let m = 0, e = h.length; m < e; m++) this.set(h.charCodeAt(m), 2);
          this.set(32, 1), this.set(9, 1);
        }
        findPrevIntlWordBeforeOrAtOffset(h, a) {
          let m = null;
          for (const e of this._getIntlSegmenterWordsOnLine(h)) {
            if (e.index > a) break;
            m = e;
          }
          return m;
        }
        findNextIntlWordAtOrAfterOffset(h, a) {
          for (const m of this._getIntlSegmenterWordsOnLine(h)) if (!(m.index < a)) return m;
          return null;
        }
        _getIntlSegmenterWordsOnLine(h) {
          return this._segmenter
            ? this._cachedLine === h
              ? this._cachedSegments
              : ((this._cachedLine = h),
                (this._cachedSegments = this._filterWordSegments(this._segmenter.segment(h))),
                this._cachedSegments)
            : [];
        }
        _filterWordSegments(h) {
          const a = [];
          for (const m of h) this._isWordLike(m) && a.push(m);
          return a;
        }
        _isWordLike(h) {
          return !!h.isWordLike;
        }
      }
      r.WordCharacterClassifier = A;
      const b = new n.LRUCache(10);
      function f(p, h) {
        const a = `${p}/${h.join(',')}`;
        let m = b.get(a);
        return m || ((m = new A(p, h)), b.set(a, m)), m;
      }
    }),
    X(J[31], K([0, 1, 21, 22]), function (W, r, n, D) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.DEFAULT_WORD_REGEXP = r.USUAL_WORD_SEPARATORS = void 0),
        (r.ensureValidWordDefinition = b),
        (r.getWordAtText = p),
        (r.USUAL_WORD_SEPARATORS = '`~!@#$%^&*()-=+[{]}\\|;:\'",.<>/?');
      function A(a = '') {
        let m = '(-?\\d*\\.\\d\\w*)|([^';
        for (const e of r.USUAL_WORD_SEPARATORS) a.indexOf(e) >= 0 || (m += '\\' + e);
        return (m += '\\s]+)'), new RegExp(m, 'g');
      }
      r.DEFAULT_WORD_REGEXP = A();
      function b(a) {
        let m = r.DEFAULT_WORD_REGEXP;
        if (a && a instanceof RegExp)
          if (a.global) m = a;
          else {
            let e = 'g';
            a.ignoreCase && (e += 'i'),
              a.multiline && (e += 'm'),
              a.unicode && (e += 'u'),
              (m = new RegExp(a.source, e));
          }
        return (m.lastIndex = 0), m;
      }
      const f = new D.LinkedList();
      f.unshift({ maxLen: 1e3, windowSize: 15, timeBudget: 150 });
      function p(a, m, e, c, s) {
        if (((m = b(m)), s || (s = n.Iterable.first(f)), e.length > s.maxLen)) {
          let w = a - s.maxLen / 2;
          return (
            w < 0 ? (w = 0) : (c += w), (e = e.substring(w, a + s.maxLen / 2)), p(a, m, e, c, s)
          );
        }
        const u = Date.now(),
          d = a - 1 - c;
        let o = -1,
          _ = null;
        for (let w = 1; !(Date.now() - u >= s.timeBudget); w++) {
          const S = d - s.windowSize * w;
          m.lastIndex = Math.max(0, S);
          const R = h(m, e, d, o);
          if ((!R && _) || ((_ = R), S <= 0)) break;
          o = S;
        }
        if (_) {
          const w = {
            word: _[0],
            startColumn: c + 1 + _.index,
            endColumn: c + 1 + _.index + _[0].length,
          };
          return (m.lastIndex = 0), w;
        }
        return null;
      }
      function h(a, m, e, c) {
        let s;
        for (; (s = a.exec(m)); ) {
          const u = s.index || 0;
          if (u <= e && a.lastIndex >= e) return s;
          if (c > 0 && u > c) return null;
        }
        return null;
      }
    }),
    X(J[8], K([0, 1, 7, 5, 3]), function (W, r, n, D, A) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.DateTimeout =
          r.InfiniteTimeout =
          r.OffsetPair =
          r.SequenceDiff =
          r.DiffAlgorithmResult =
            void 0);
      class b {
        static trivial(e, c) {
          return new b(
            [new f(A.OffsetRange.ofLength(e.length), A.OffsetRange.ofLength(c.length))],
            !1,
          );
        }
        static trivialTimedOut(e, c) {
          return new b(
            [new f(A.OffsetRange.ofLength(e.length), A.OffsetRange.ofLength(c.length))],
            !0,
          );
        }
        constructor(e, c) {
          (this.diffs = e), (this.hitTimeout = c);
        }
      }
      r.DiffAlgorithmResult = b;
      class f {
        static invert(e, c) {
          const s = [];
          return (
            (0, n.forEachAdjacent)(e, (u, d) => {
              s.push(
                f.fromOffsetPairs(
                  u ? u.getEndExclusives() : p.zero,
                  d
                    ? d.getStarts()
                    : new p(c, (u ? u.seq2Range.endExclusive - u.seq1Range.endExclusive : 0) + c),
                ),
              );
            }),
            s
          );
        }
        static fromOffsetPairs(e, c) {
          return new f(
            new A.OffsetRange(e.offset1, c.offset1),
            new A.OffsetRange(e.offset2, c.offset2),
          );
        }
        constructor(e, c) {
          (this.seq1Range = e), (this.seq2Range = c);
        }
        swap() {
          return new f(this.seq2Range, this.seq1Range);
        }
        toString() {
          return `${this.seq1Range} <-> ${this.seq2Range}`;
        }
        join(e) {
          return new f(this.seq1Range.join(e.seq1Range), this.seq2Range.join(e.seq2Range));
        }
        delta(e) {
          return e === 0 ? this : new f(this.seq1Range.delta(e), this.seq2Range.delta(e));
        }
        deltaStart(e) {
          return e === 0 ? this : new f(this.seq1Range.deltaStart(e), this.seq2Range.deltaStart(e));
        }
        deltaEnd(e) {
          return e === 0 ? this : new f(this.seq1Range.deltaEnd(e), this.seq2Range.deltaEnd(e));
        }
        intersect(e) {
          const c = this.seq1Range.intersect(e.seq1Range),
            s = this.seq2Range.intersect(e.seq2Range);
          if (!(!c || !s)) return new f(c, s);
        }
        getStarts() {
          return new p(this.seq1Range.start, this.seq2Range.start);
        }
        getEndExclusives() {
          return new p(this.seq1Range.endExclusive, this.seq2Range.endExclusive);
        }
      }
      r.SequenceDiff = f;
      class p {
        constructor(e, c) {
          (this.offset1 = e), (this.offset2 = c);
        }
        toString() {
          return `${this.offset1} <-> ${this.offset2}`;
        }
        delta(e) {
          return e === 0 ? this : new p(this.offset1 + e, this.offset2 + e);
        }
        equals(e) {
          return this.offset1 === e.offset1 && this.offset2 === e.offset2;
        }
      }
      (r.OffsetPair = p),
        (p.zero = new p(0, 0)),
        (p.max = new p(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER));
      class h {
        isValid() {
          return !0;
        }
      }
      (r.InfiniteTimeout = h), (h.instance = new h());
      class a {
        constructor(e) {
          if (((this.timeout = e), (this.startTime = Date.now()), (this.valid = !0), e <= 0))
            throw new D.BugIndicatingError('timeout must be positive');
        }
        isValid() {
          if (!(Date.now() - this.startTime < this.timeout) && this.valid) {
            this.valid = !1;
            debugger;
          }
          return this.valid;
        }
      }
      r.DateTimeout = a;
    }),
    X(J[32], K([0, 1, 3, 8]), function (W, r, n, D) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.MyersDiffAlgorithm = void 0);
      class A {
        compute(a, m, e = D.InfiniteTimeout.instance) {
          if (a.length === 0 || m.length === 0) return D.DiffAlgorithmResult.trivial(a, m);
          const c = a,
            s = m;
          function u(l, g) {
            for (; l < c.length && g < s.length && c.getElement(l) === s.getElement(g); ) l++, g++;
            return l;
          }
          let d = 0;
          const o = new f();
          o.set(0, u(0, 0));
          const _ = new p();
          _.set(0, o.get(0) === 0 ? null : new b(null, 0, 0, o.get(0)));
          let w = 0;
          e: for (;;) {
            if ((d++, !e.isValid())) return D.DiffAlgorithmResult.trivialTimedOut(c, s);
            const l = -Math.min(d, s.length + (d % 2)),
              g = Math.min(d, c.length + (d % 2));
            for (w = l; w <= g; w += 2) {
              let L = 0;
              const C = w === g ? -1 : o.get(w + 1),
                N = w === l ? -1 : o.get(w - 1) + 1;
              L++;
              const E = Math.min(Math.max(C, N), c.length),
                y = E - w;
              if ((L++, E > c.length || y > s.length)) continue;
              const x = u(E, y);
              o.set(w, x);
              const M = E === C ? _.get(w + 1) : _.get(w - 1);
              if (
                (_.set(w, x !== E ? new b(M, E, y, x - E) : M),
                o.get(w) === c.length && o.get(w) - w === s.length)
              )
                break e;
            }
          }
          let S = _.get(w);
          const R = [];
          let v = c.length,
            i = s.length;
          for (;;) {
            const l = S ? S.x + S.length : 0,
              g = S ? S.y + S.length : 0;
            if (
              ((l !== v || g !== i) &&
                R.push(new D.SequenceDiff(new n.OffsetRange(l, v), new n.OffsetRange(g, i))),
              !S)
            )
              break;
            (v = S.x), (i = S.y), (S = S.prev);
          }
          return R.reverse(), new D.DiffAlgorithmResult(R, !1);
        }
      }
      r.MyersDiffAlgorithm = A;
      class b {
        constructor(a, m, e, c) {
          (this.prev = a), (this.x = m), (this.y = e), (this.length = c);
        }
      }
      class f {
        constructor() {
          (this.positiveArr = new Int32Array(10)), (this.negativeArr = new Int32Array(10));
        }
        get(a) {
          return a < 0 ? ((a = -a - 1), this.negativeArr[a]) : this.positiveArr[a];
        }
        set(a, m) {
          if (a < 0) {
            if (((a = -a - 1), a >= this.negativeArr.length)) {
              const e = this.negativeArr;
              (this.negativeArr = new Int32Array(e.length * 2)), this.negativeArr.set(e);
            }
            this.negativeArr[a] = m;
          } else {
            if (a >= this.positiveArr.length) {
              const e = this.positiveArr;
              (this.positiveArr = new Int32Array(e.length * 2)), this.positiveArr.set(e);
            }
            this.positiveArr[a] = m;
          }
        }
      }
      class p {
        constructor() {
          (this.positiveArr = []), (this.negativeArr = []);
        }
        get(a) {
          return a < 0 ? ((a = -a - 1), this.negativeArr[a]) : this.positiveArr[a];
        }
        set(a, m) {
          a < 0 ? ((a = -a - 1), (this.negativeArr[a] = m)) : (this.positiveArr[a] = m);
        }
      }
    }),
    X(J[48], K([0, 1, 7, 3, 8]), function (W, r, n, D, A) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.optimizeSequenceDiffs = b),
        (r.removeShortMatches = a),
        (r.extendDiffsToEntireWordIfAppropriate = m),
        (r.removeVeryShortMatchingLinesBetweenDiffs = c),
        (r.removeVeryShortMatchingTextBetweenLongDiffs = s);
      function b(u, d, o) {
        let _ = o;
        return (_ = f(u, d, _)), (_ = f(u, d, _)), (_ = p(u, d, _)), _;
      }
      function f(u, d, o) {
        if (o.length === 0) return o;
        const _ = [];
        _.push(o[0]);
        for (let S = 1; S < o.length; S++) {
          const R = _[_.length - 1];
          let v = o[S];
          if (v.seq1Range.isEmpty || v.seq2Range.isEmpty) {
            const i = v.seq1Range.start - R.seq1Range.endExclusive;
            let l;
            for (
              l = 1;
              l <= i &&
              !(
                u.getElement(v.seq1Range.start - l) !==
                  u.getElement(v.seq1Range.endExclusive - l) ||
                d.getElement(v.seq2Range.start - l) !== d.getElement(v.seq2Range.endExclusive - l)
              );
              l++
            );
            if ((l--, l === i)) {
              _[_.length - 1] = new A.SequenceDiff(
                new D.OffsetRange(R.seq1Range.start, v.seq1Range.endExclusive - i),
                new D.OffsetRange(R.seq2Range.start, v.seq2Range.endExclusive - i),
              );
              continue;
            }
            v = v.delta(-l);
          }
          _.push(v);
        }
        const w = [];
        for (let S = 0; S < _.length - 1; S++) {
          const R = _[S + 1];
          let v = _[S];
          if (v.seq1Range.isEmpty || v.seq2Range.isEmpty) {
            const i = R.seq1Range.start - v.seq1Range.endExclusive;
            let l;
            for (
              l = 0;
              l < i &&
              !(
                !u.isStronglyEqual(v.seq1Range.start + l, v.seq1Range.endExclusive + l) ||
                !d.isStronglyEqual(v.seq2Range.start + l, v.seq2Range.endExclusive + l)
              );
              l++
            );
            if (l === i) {
              _[S + 1] = new A.SequenceDiff(
                new D.OffsetRange(v.seq1Range.start + i, R.seq1Range.endExclusive),
                new D.OffsetRange(v.seq2Range.start + i, R.seq2Range.endExclusive),
              );
              continue;
            }
            l > 0 && (v = v.delta(l));
          }
          w.push(v);
        }
        return _.length > 0 && w.push(_[_.length - 1]), w;
      }
      function p(u, d, o) {
        if (!u.getBoundaryScore || !d.getBoundaryScore) return o;
        for (let _ = 0; _ < o.length; _++) {
          const w = _ > 0 ? o[_ - 1] : void 0,
            S = o[_],
            R = _ + 1 < o.length ? o[_ + 1] : void 0,
            v = new D.OffsetRange(
              w ? w.seq1Range.endExclusive + 1 : 0,
              R ? R.seq1Range.start - 1 : u.length,
            ),
            i = new D.OffsetRange(
              w ? w.seq2Range.endExclusive + 1 : 0,
              R ? R.seq2Range.start - 1 : d.length,
            );
          S.seq1Range.isEmpty
            ? (o[_] = h(S, u, d, v, i))
            : S.seq2Range.isEmpty && (o[_] = h(S.swap(), d, u, i, v).swap());
        }
        return o;
      }
      function h(u, d, o, _, w) {
        let R = 1;
        for (
          ;
          u.seq1Range.start - R >= _.start &&
          u.seq2Range.start - R >= w.start &&
          o.isStronglyEqual(u.seq2Range.start - R, u.seq2Range.endExclusive - R) &&
          R < 100;
        )
          R++;
        R--;
        let v = 0;
        for (
          ;
          u.seq1Range.start + v < _.endExclusive &&
          u.seq2Range.endExclusive + v < w.endExclusive &&
          o.isStronglyEqual(u.seq2Range.start + v, u.seq2Range.endExclusive + v) &&
          v < 100;
        )
          v++;
        if (R === 0 && v === 0) return u;
        let i = 0,
          l = -1;
        for (let g = -R; g <= v; g++) {
          const L = u.seq2Range.start + g,
            C = u.seq2Range.endExclusive + g,
            N = u.seq1Range.start + g,
            E = d.getBoundaryScore(N) + o.getBoundaryScore(L) + o.getBoundaryScore(C);
          E > l && ((l = E), (i = g));
        }
        return u.delta(i);
      }
      function a(u, d, o) {
        const _ = [];
        for (const w of o) {
          const S = _[_.length - 1];
          if (!S) {
            _.push(w);
            continue;
          }
          w.seq1Range.start - S.seq1Range.endExclusive <= 2 ||
          w.seq2Range.start - S.seq2Range.endExclusive <= 2
            ? (_[_.length - 1] = new A.SequenceDiff(
                S.seq1Range.join(w.seq1Range),
                S.seq2Range.join(w.seq2Range),
              ))
            : _.push(w);
        }
        return _;
      }
      function m(u, d, o) {
        const _ = A.SequenceDiff.invert(o, u.length),
          w = [];
        let S = new A.OffsetPair(0, 0);
        function R(i, l) {
          if (i.offset1 < S.offset1 || i.offset2 < S.offset2) return;
          const g = u.findWordContaining(i.offset1),
            L = d.findWordContaining(i.offset2);
          if (!g || !L) return;
          let C = new A.SequenceDiff(g, L);
          const N = C.intersect(l);
          let E = N.seq1Range.length,
            y = N.seq2Range.length;
          for (; _.length > 0; ) {
            const x = _[0];
            if (!(x.seq1Range.intersects(C.seq1Range) || x.seq2Range.intersects(C.seq2Range)))
              break;
            const I = u.findWordContaining(x.seq1Range.start),
              k = d.findWordContaining(x.seq2Range.start),
              F = new A.SequenceDiff(I, k),
              z = F.intersect(x);
            if (
              ((E += z.seq1Range.length),
              (y += z.seq2Range.length),
              (C = C.join(F)),
              C.seq1Range.endExclusive >= x.seq1Range.endExclusive)
            )
              _.shift();
            else break;
          }
          E + y < ((C.seq1Range.length + C.seq2Range.length) * 2) / 3 && w.push(C),
            (S = C.getEndExclusives());
        }
        for (; _.length > 0; ) {
          const i = _.shift();
          i.seq1Range.isEmpty || (R(i.getStarts(), i), R(i.getEndExclusives().delta(-1), i));
        }
        return e(o, w);
      }
      function e(u, d) {
        const o = [];
        for (; u.length > 0 || d.length > 0; ) {
          const _ = u[0],
            w = d[0];
          let S;
          _ && (!w || _.seq1Range.start < w.seq1Range.start) ? (S = u.shift()) : (S = d.shift()),
            o.length > 0 && o[o.length - 1].seq1Range.endExclusive >= S.seq1Range.start
              ? (o[o.length - 1] = o[o.length - 1].join(S))
              : o.push(S);
        }
        return o;
      }
      function c(u, d, o) {
        let _ = o;
        if (_.length === 0) return _;
        let w = 0,
          S;
        do {
          S = !1;
          const R = [_[0]];
          for (let v = 1; v < _.length; v++) {
            let g = function (C, N) {
              const E = new D.OffsetRange(l.seq1Range.endExclusive, i.seq1Range.start);
              return (
                u.getText(E).replace(/\s/g, '').length <= 4 &&
                (C.seq1Range.length + C.seq2Range.length > 5 ||
                  N.seq1Range.length + N.seq2Range.length > 5)
              );
            };
            const i = _[v],
              l = R[R.length - 1];
            g(l, i) ? ((S = !0), (R[R.length - 1] = R[R.length - 1].join(i))) : R.push(i);
          }
          _ = R;
        } while (w++ < 10 && S);
        return _;
      }
      function s(u, d, o) {
        let _ = o;
        if (_.length === 0) return _;
        let w = 0,
          S;
        do {
          S = !1;
          const v = [_[0]];
          for (let i = 1; i < _.length; i++) {
            let L = function (N, E) {
              const y = new D.OffsetRange(g.seq1Range.endExclusive, l.seq1Range.start);
              if (u.countLinesIn(y) > 5 || y.length > 500) return !1;
              const M = u.getText(y).trim();
              if (M.length > 20 || M.split(/\r\n|\r|\n/).length > 1) return !1;
              const I = u.countLinesIn(N.seq1Range),
                k = N.seq1Range.length,
                F = d.countLinesIn(N.seq2Range),
                z = N.seq2Range.length,
                $ = u.countLinesIn(E.seq1Range),
                T = E.seq1Range.length,
                O = d.countLinesIn(E.seq2Range),
                B = E.seq2Range.length,
                V = 2 * 40 + 50;
              function j(Z) {
                return Math.min(Z, V);
              }
              return (
                Math.pow(Math.pow(j(I * 40 + k), 1.5) + Math.pow(j(F * 40 + z), 1.5), 1.5) +
                  Math.pow(Math.pow(j($ * 40 + T), 1.5) + Math.pow(j(O * 40 + B), 1.5), 1.5) >
                (V ** 1.5) ** 1.5 * 1.3
              );
            };
            const l = _[i],
              g = v[v.length - 1];
            L(g, l) ? ((S = !0), (v[v.length - 1] = v[v.length - 1].join(l))) : v.push(l);
          }
          _ = v;
        } while (w++ < 10 && S);
        const R = [];
        return (
          (0, n.forEachWithNeighbors)(_, (v, i, l) => {
            let g = i;
            function L(M) {
              return (
                M.length > 0 &&
                M.trim().length <= 3 &&
                i.seq1Range.length + i.seq2Range.length > 100
              );
            }
            const C = u.extendToFullLines(i.seq1Range),
              N = u.getText(new D.OffsetRange(C.start, i.seq1Range.start));
            L(N) && (g = g.deltaStart(-N.length));
            const E = u.getText(new D.OffsetRange(i.seq1Range.endExclusive, C.endExclusive));
            L(E) && (g = g.deltaEnd(E.length));
            const y = A.SequenceDiff.fromOffsetPairs(
                v ? v.getEndExclusives() : A.OffsetPair.zero,
                l ? l.getStarts() : A.OffsetPair.max,
              ),
              x = g.intersect(y);
            R.length > 0 && x.getStarts().equals(R[R.length - 1].getEndExclusives())
              ? (R[R.length - 1] = R[R.length - 1].join(x))
              : R.push(x);
          }),
          R
        );
      }
    }),
    X(J[49], K([0, 1]), function (W, r) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.LineSequence = void 0);
      class n {
        constructor(b, f) {
          (this.trimmedHash = b), (this.lines = f);
        }
        getElement(b) {
          return this.trimmedHash[b];
        }
        get length() {
          return this.trimmedHash.length;
        }
        getBoundaryScore(b) {
          const f = b === 0 ? 0 : D(this.lines[b - 1]),
            p = b === this.lines.length ? 0 : D(this.lines[b]);
          return 1e3 - (f + p);
        }
        getText(b) {
          return this.lines.slice(b.start, b.endExclusive).join(`
`);
        }
        isStronglyEqual(b, f) {
          return this.lines[b] === this.lines[f];
        }
      }
      r.LineSequence = n;
      function D(A) {
        let b = 0;
        for (; b < A.length && (A.charCodeAt(b) === 32 || A.charCodeAt(b) === 9); ) b++;
        return b;
      }
    }),
    X(J[15], K([0, 1]), function (W, r) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.LineRangeFragment = r.Array2D = void 0),
        (r.isSpace = D);
      class n {
        constructor(f, p) {
          (this.width = f), (this.height = p), (this.array = []), (this.array = new Array(f * p));
        }
        get(f, p) {
          return this.array[f + p * this.width];
        }
        set(f, p, h) {
          this.array[f + p * this.width] = h;
        }
      }
      r.Array2D = n;
      function D(b) {
        return b === 32 || b === 9;
      }
      class A {
        static getKey(f) {
          let p = this.chrKeys.get(f);
          return p === void 0 && ((p = this.chrKeys.size), this.chrKeys.set(f, p)), p;
        }
        constructor(f, p, h) {
          (this.range = f), (this.lines = p), (this.source = h), (this.histogram = []);
          let a = 0;
          for (let m = f.startLineNumber - 1; m < f.endLineNumberExclusive - 1; m++) {
            const e = p[m];
            for (let s = 0; s < e.length; s++) {
              a++;
              const u = e[s],
                d = A.getKey(u);
              this.histogram[d] = (this.histogram[d] || 0) + 1;
            }
            a++;
            const c = A.getKey(`
`);
            this.histogram[c] = (this.histogram[c] || 0) + 1;
          }
          this.totalCount = a;
        }
        computeSimilarity(f) {
          var p, h;
          let a = 0;
          const m = Math.max(this.histogram.length, f.histogram.length);
          for (let e = 0; e < m; e++)
            a += Math.abs(
              ((p = this.histogram[e]) !== null && p !== void 0 ? p : 0) -
                ((h = f.histogram[e]) !== null && h !== void 0 ? h : 0),
            );
          return 1 - a / (this.totalCount + f.totalCount);
        }
      }
      (r.LineRangeFragment = A), (A.chrKeys = new Map());
    }),
    X(J[50], K([0, 1, 3, 8, 15]), function (W, r, n, D, A) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.DynamicProgrammingDiffing = void 0);
      class b {
        compute(p, h, a = D.InfiniteTimeout.instance, m) {
          if (p.length === 0 || h.length === 0) return D.DiffAlgorithmResult.trivial(p, h);
          const e = new A.Array2D(p.length, h.length),
            c = new A.Array2D(p.length, h.length),
            s = new A.Array2D(p.length, h.length);
          for (let R = 0; R < p.length; R++)
            for (let v = 0; v < h.length; v++) {
              if (!a.isValid()) return D.DiffAlgorithmResult.trivialTimedOut(p, h);
              const i = R === 0 ? 0 : e.get(R - 1, v),
                l = v === 0 ? 0 : e.get(R, v - 1);
              let g;
              p.getElement(R) === h.getElement(v)
                ? (R === 0 || v === 0 ? (g = 0) : (g = e.get(R - 1, v - 1)),
                  R > 0 && v > 0 && c.get(R - 1, v - 1) === 3 && (g += s.get(R - 1, v - 1)),
                  (g += m ? m(R, v) : 1))
                : (g = -1);
              const L = Math.max(i, l, g);
              if (L === g) {
                const C = R > 0 && v > 0 ? s.get(R - 1, v - 1) : 0;
                s.set(R, v, C + 1), c.set(R, v, 3);
              } else
                L === i
                  ? (s.set(R, v, 0), c.set(R, v, 1))
                  : L === l && (s.set(R, v, 0), c.set(R, v, 2));
              e.set(R, v, L);
            }
          const u = [];
          let d = p.length,
            o = h.length;
          function _(R, v) {
            (R + 1 !== d || v + 1 !== o) &&
              u.push(new D.SequenceDiff(new n.OffsetRange(R + 1, d), new n.OffsetRange(v + 1, o))),
              (d = R),
              (o = v);
          }
          let w = p.length - 1,
            S = h.length - 1;
          for (; w >= 0 && S >= 0; )
            c.get(w, S) === 3 ? (_(w, S), w--, S--) : c.get(w, S) === 1 ? w-- : S--;
          return _(-1, -1), u.reverse(), new D.DiffAlgorithmResult(u, !1);
        }
      }
      r.DynamicProgrammingDiffing = b;
    }),
    X(J[33], K([0, 1, 12, 3, 4, 2, 15]), function (W, r, n, D, A, b, f) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.LinesSliceCharSequence = void 0);
      class p {
        constructor(s, u, d) {
          (this.lines = s),
            (this.considerWhitespaceChanges = d),
            (this.elements = []),
            (this.firstCharOffsetByLine = []),
            (this.additionalOffsetByLine = []);
          let o = !1;
          u.start > 0 &&
            u.endExclusive >= s.length &&
            ((u = new D.OffsetRange(u.start - 1, u.endExclusive)), (o = !0)),
            (this.lineRange = u),
            (this.firstCharOffsetByLine[0] = 0);
          for (let _ = this.lineRange.start; _ < this.lineRange.endExclusive; _++) {
            let w = s[_],
              S = 0;
            if (o) (S = w.length), (w = ''), (o = !1);
            else if (!d) {
              const R = w.trimStart();
              (S = w.length - R.length), (w = R.trimEnd());
            }
            this.additionalOffsetByLine.push(S);
            for (let R = 0; R < w.length; R++) this.elements.push(w.charCodeAt(R));
            _ < s.length - 1 &&
              (this.elements.push(10),
              (this.firstCharOffsetByLine[_ - this.lineRange.start + 1] = this.elements.length));
          }
          this.additionalOffsetByLine.push(0);
        }
        toString() {
          return `Slice: "${this.text}"`;
        }
        get text() {
          return this.getText(new D.OffsetRange(0, this.length));
        }
        getText(s) {
          return this.elements
            .slice(s.start, s.endExclusive)
            .map((u) => String.fromCharCode(u))
            .join('');
        }
        getElement(s) {
          return this.elements[s];
        }
        get length() {
          return this.elements.length;
        }
        getBoundaryScore(s) {
          const u = e(s > 0 ? this.elements[s - 1] : -1),
            d = e(s < this.elements.length ? this.elements[s] : -1);
          if (u === 7 && d === 8) return 0;
          if (u === 8) return 150;
          let o = 0;
          return (
            u !== d && ((o += 10), u === 0 && d === 1 && (o += 1)), (o += m(u)), (o += m(d)), o
          );
        }
        translateOffset(s) {
          if (this.lineRange.isEmpty) return new A.Position(this.lineRange.start + 1, 1);
          const u = (0, n.findLastIdxMonotonous)(this.firstCharOffsetByLine, (d) => d <= s);
          return new A.Position(
            this.lineRange.start + u + 1,
            s - this.firstCharOffsetByLine[u] + this.additionalOffsetByLine[u] + 1,
          );
        }
        translateRange(s) {
          return b.Range.fromPositions(
            this.translateOffset(s.start),
            this.translateOffset(s.endExclusive),
          );
        }
        findWordContaining(s) {
          if (s < 0 || s >= this.elements.length || !h(this.elements[s])) return;
          let u = s;
          for (; u > 0 && h(this.elements[u - 1]); ) u--;
          let d = s;
          for (; d < this.elements.length && h(this.elements[d]); ) d++;
          return new D.OffsetRange(u, d);
        }
        countLinesIn(s) {
          return (
            this.translateOffset(s.endExclusive).lineNumber -
            this.translateOffset(s.start).lineNumber
          );
        }
        isStronglyEqual(s, u) {
          return this.elements[s] === this.elements[u];
        }
        extendToFullLines(s) {
          var u, d;
          const o =
              (u = (0, n.findLastMonotonous)(this.firstCharOffsetByLine, (w) => w <= s.start)) !==
                null && u !== void 0
                ? u
                : 0,
            _ =
              (d = (0, n.findFirstMonotonous)(
                this.firstCharOffsetByLine,
                (w) => s.endExclusive <= w,
              )) !== null && d !== void 0
                ? d
                : this.elements.length;
          return new D.OffsetRange(o, _);
        }
      }
      r.LinesSliceCharSequence = p;
      function h(c) {
        return (c >= 97 && c <= 122) || (c >= 65 && c <= 90) || (c >= 48 && c <= 57);
      }
      const a = { 0: 0, 1: 0, 2: 0, 3: 10, 4: 2, 5: 30, 6: 3, 7: 10, 8: 10 };
      function m(c) {
        return a[c];
      }
      function e(c) {
        return c === 10
          ? 8
          : c === 13
            ? 7
            : (0, f.isSpace)(c)
              ? 6
              : c >= 97 && c <= 122
                ? 0
                : c >= 65 && c <= 90
                  ? 1
                  : c >= 48 && c <= 57
                    ? 2
                    : c === -1
                      ? 3
                      : c === 44 || c === 59
                        ? 5
                        : 4;
      }
    }),
    X(J[34], K([0, 1]), function (W, r) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.MovedText = r.LinesDiff = void 0);
      class n {
        constructor(b, f, p) {
          (this.changes = b), (this.moves = f), (this.hitTimeout = p);
        }
      }
      r.LinesDiff = n;
      class D {
        constructor(b, f) {
          (this.lineRangeMapping = b), (this.changes = f);
        }
      }
      r.MovedText = D;
    }),
    X(J[16], K([0, 1, 5, 11, 2, 46]), function (W, r, n, D, A, b) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.RangeMapping = r.DetailedLineRangeMapping = r.LineRangeMapping = void 0);
      class f {
        static inverse(m, e, c) {
          const s = [];
          let u = 1,
            d = 1;
          for (const _ of m) {
            const w = new f(
              new D.LineRange(u, _.original.startLineNumber),
              new D.LineRange(d, _.modified.startLineNumber),
            );
            w.modified.isEmpty || s.push(w),
              (u = _.original.endLineNumberExclusive),
              (d = _.modified.endLineNumberExclusive);
          }
          const o = new f(new D.LineRange(u, e + 1), new D.LineRange(d, c + 1));
          return o.modified.isEmpty || s.push(o), s;
        }
        static clip(m, e, c) {
          const s = [];
          for (const u of m) {
            const d = u.original.intersect(e),
              o = u.modified.intersect(c);
            d && !d.isEmpty && o && !o.isEmpty && s.push(new f(d, o));
          }
          return s;
        }
        constructor(m, e) {
          (this.original = m), (this.modified = e);
        }
        toString() {
          return `{${this.original.toString()}->${this.modified.toString()}}`;
        }
        flip() {
          return new f(this.modified, this.original);
        }
        join(m) {
          return new f(this.original.join(m.original), this.modified.join(m.modified));
        }
        toRangeMapping() {
          const m = this.original.toInclusiveRange(),
            e = this.modified.toInclusiveRange();
          if (m && e) return new h(m, e);
          if (this.original.startLineNumber === 1 || this.modified.startLineNumber === 1) {
            if (!(this.modified.startLineNumber === 1 && this.original.startLineNumber === 1))
              throw new n.BugIndicatingError('not a valid diff');
            return new h(
              new A.Range(
                this.original.startLineNumber,
                1,
                this.original.endLineNumberExclusive,
                1,
              ),
              new A.Range(
                this.modified.startLineNumber,
                1,
                this.modified.endLineNumberExclusive,
                1,
              ),
            );
          } else
            return new h(
              new A.Range(
                this.original.startLineNumber - 1,
                Number.MAX_SAFE_INTEGER,
                this.original.endLineNumberExclusive - 1,
                Number.MAX_SAFE_INTEGER,
              ),
              new A.Range(
                this.modified.startLineNumber - 1,
                Number.MAX_SAFE_INTEGER,
                this.modified.endLineNumberExclusive - 1,
                Number.MAX_SAFE_INTEGER,
              ),
            );
        }
      }
      r.LineRangeMapping = f;
      class p extends f {
        static fromRangeMappings(m) {
          const e = D.LineRange.join(m.map((s) => D.LineRange.fromRangeInclusive(s.originalRange))),
            c = D.LineRange.join(m.map((s) => D.LineRange.fromRangeInclusive(s.modifiedRange)));
          return new p(e, c, m);
        }
        constructor(m, e, c) {
          super(m, e), (this.innerChanges = c);
        }
        flip() {
          var m;
          return new p(
            this.modified,
            this.original,
            (m = this.innerChanges) === null || m === void 0 ? void 0 : m.map((e) => e.flip()),
          );
        }
        withInnerChangesFromLineRanges() {
          return new p(this.original, this.modified, [this.toRangeMapping()]);
        }
      }
      r.DetailedLineRangeMapping = p;
      class h {
        constructor(m, e) {
          (this.originalRange = m), (this.modifiedRange = e);
        }
        toString() {
          return `{${this.originalRange.toString()}->${this.modifiedRange.toString()}}`;
        }
        flip() {
          return new h(this.modifiedRange, this.originalRange);
        }
        toTextEdit(m) {
          const e = m.getValueOfRange(this.modifiedRange);
          return new b.SingleTextEdit(this.originalRange, e);
        }
      }
      r.RangeMapping = h;
    }),
    X(
      J[51],
      K([0, 1, 8, 16, 7, 12, 23, 11, 3, 33, 15, 32]),
      function (W, r, n, D, A, b, f, p, h, a, m, e) {
        'use strict';
        Object.defineProperty(r, '__esModule', { value: !0 }), (r.computeMovedLines = c);
        function c(S, R, v, i, l, g) {
          let { moves: L, excludedChanges: C } = u(S, R, v, g);
          if (!g.isValid()) return [];
          const N = S.filter((y) => !C.has(y)),
            E = d(N, i, l, R, v, g);
          return (
            (0, A.pushMany)(L, E),
            (L = _(L)),
            (L = L.filter((y) => {
              const x = y.original
                .toOffsetRange()
                .slice(R)
                .map((I) => I.trim());
              return (
                x.join(`
`).length >= 15 && s(x, (I) => I.length >= 2) >= 2
              );
            })),
            (L = w(S, L)),
            L
          );
        }
        function s(S, R) {
          let v = 0;
          for (const i of S) R(i) && v++;
          return v;
        }
        function u(S, R, v, i) {
          const l = [],
            g = S.filter((N) => N.modified.isEmpty && N.original.length >= 3).map(
              (N) => new m.LineRangeFragment(N.original, R, N),
            ),
            L = new Set(
              S.filter((N) => N.original.isEmpty && N.modified.length >= 3).map(
                (N) => new m.LineRangeFragment(N.modified, v, N),
              ),
            ),
            C = new Set();
          for (const N of g) {
            let E = -1,
              y;
            for (const x of L) {
              const M = N.computeSimilarity(x);
              M > E && ((E = M), (y = x));
            }
            if (
              (E > 0.9 &&
                y &&
                (L.delete(y),
                l.push(new D.LineRangeMapping(N.range, y.range)),
                C.add(N.source),
                C.add(y.source)),
              !i.isValid())
            )
              return { moves: l, excludedChanges: C };
          }
          return { moves: l, excludedChanges: C };
        }
        function d(S, R, v, i, l, g) {
          const L = [],
            C = new f.SetMap();
          for (const M of S)
            for (
              let I = M.original.startLineNumber;
              I < M.original.endLineNumberExclusive - 2;
              I++
            ) {
              const k = `${R[I - 1]}:${R[I + 1 - 1]}:${R[I + 2 - 1]}`;
              C.add(k, { range: new p.LineRange(I, I + 3) });
            }
          const N = [];
          S.sort((0, A.compareBy)((M) => M.modified.startLineNumber, A.numberComparator));
          for (const M of S) {
            let I = [];
            for (
              let k = M.modified.startLineNumber;
              k < M.modified.endLineNumberExclusive - 2;
              k++
            ) {
              const F = `${v[k - 1]}:${v[k + 1 - 1]}:${v[k + 2 - 1]}`,
                z = new p.LineRange(k, k + 3),
                $ = [];
              C.forEach(F, ({ range: T }) => {
                for (const B of I)
                  if (
                    B.originalLineRange.endLineNumberExclusive + 1 === T.endLineNumberExclusive &&
                    B.modifiedLineRange.endLineNumberExclusive + 1 === z.endLineNumberExclusive
                  ) {
                    (B.originalLineRange = new p.LineRange(
                      B.originalLineRange.startLineNumber,
                      T.endLineNumberExclusive,
                    )),
                      (B.modifiedLineRange = new p.LineRange(
                        B.modifiedLineRange.startLineNumber,
                        z.endLineNumberExclusive,
                      )),
                      $.push(B);
                    return;
                  }
                const O = { modifiedLineRange: z, originalLineRange: T };
                N.push(O), $.push(O);
              }),
                (I = $);
            }
            if (!g.isValid()) return [];
          }
          N.sort(
            (0, A.reverseOrder)(
              (0, A.compareBy)((M) => M.modifiedLineRange.length, A.numberComparator),
            ),
          );
          const E = new p.LineRangeSet(),
            y = new p.LineRangeSet();
          for (const M of N) {
            const I = M.modifiedLineRange.startLineNumber - M.originalLineRange.startLineNumber,
              k = E.subtractFrom(M.modifiedLineRange),
              F = y.subtractFrom(M.originalLineRange).getWithDelta(I),
              z = k.getIntersection(F);
            for (const $ of z.ranges) {
              if ($.length < 3) continue;
              const T = $,
                O = $.delta(-I);
              L.push(new D.LineRangeMapping(O, T)), E.addRange(T), y.addRange(O);
            }
          }
          L.sort((0, A.compareBy)((M) => M.original.startLineNumber, A.numberComparator));
          const x = new b.MonotonousArray(S);
          for (let M = 0; M < L.length; M++) {
            const I = L[M],
              k = x.findLastMonotonous(
                (j) => j.original.startLineNumber <= I.original.startLineNumber,
              ),
              F = (0, b.findLastMonotonous)(
                S,
                (j) => j.modified.startLineNumber <= I.modified.startLineNumber,
              ),
              z = Math.max(
                I.original.startLineNumber - k.original.startLineNumber,
                I.modified.startLineNumber - F.modified.startLineNumber,
              ),
              $ = x.findLastMonotonous(
                (j) => j.original.startLineNumber < I.original.endLineNumberExclusive,
              ),
              T = (0, b.findLastMonotonous)(
                S,
                (j) => j.modified.startLineNumber < I.modified.endLineNumberExclusive,
              ),
              O = Math.max(
                $.original.endLineNumberExclusive - I.original.endLineNumberExclusive,
                T.modified.endLineNumberExclusive - I.modified.endLineNumberExclusive,
              );
            let B;
            for (B = 0; B < z; B++) {
              const j = I.original.startLineNumber - B - 1,
                Z = I.modified.startLineNumber - B - 1;
              if (
                j > i.length ||
                Z > l.length ||
                E.contains(Z) ||
                y.contains(j) ||
                !o(i[j - 1], l[Z - 1], g)
              )
                break;
            }
            B > 0 &&
              (y.addRange(
                new p.LineRange(I.original.startLineNumber - B, I.original.startLineNumber),
              ),
              E.addRange(
                new p.LineRange(I.modified.startLineNumber - B, I.modified.startLineNumber),
              ));
            let V;
            for (V = 0; V < O; V++) {
              const j = I.original.endLineNumberExclusive + V,
                Z = I.modified.endLineNumberExclusive + V;
              if (
                j > i.length ||
                Z > l.length ||
                E.contains(Z) ||
                y.contains(j) ||
                !o(i[j - 1], l[Z - 1], g)
              )
                break;
            }
            V > 0 &&
              (y.addRange(
                new p.LineRange(
                  I.original.endLineNumberExclusive,
                  I.original.endLineNumberExclusive + V,
                ),
              ),
              E.addRange(
                new p.LineRange(
                  I.modified.endLineNumberExclusive,
                  I.modified.endLineNumberExclusive + V,
                ),
              )),
              (B > 0 || V > 0) &&
                (L[M] = new D.LineRangeMapping(
                  new p.LineRange(
                    I.original.startLineNumber - B,
                    I.original.endLineNumberExclusive + V,
                  ),
                  new p.LineRange(
                    I.modified.startLineNumber - B,
                    I.modified.endLineNumberExclusive + V,
                  ),
                ));
          }
          return L;
        }
        function o(S, R, v) {
          if (S.trim() === R.trim()) return !0;
          if (S.length > 300 && R.length > 300) return !1;
          const l = new e.MyersDiffAlgorithm().compute(
            new a.LinesSliceCharSequence([S], new h.OffsetRange(0, 1), !1),
            new a.LinesSliceCharSequence([R], new h.OffsetRange(0, 1), !1),
            v,
          );
          let g = 0;
          const L = n.SequenceDiff.invert(l.diffs, S.length);
          for (const y of L)
            y.seq1Range.forEach((x) => {
              (0, m.isSpace)(S.charCodeAt(x)) || g++;
            });
          function C(y) {
            let x = 0;
            for (let M = 0; M < S.length; M++) (0, m.isSpace)(y.charCodeAt(M)) || x++;
            return x;
          }
          const N = C(S.length > R.length ? S : R);
          return g / N > 0.6 && N > 10;
        }
        function _(S) {
          if (S.length === 0) return S;
          S.sort((0, A.compareBy)((v) => v.original.startLineNumber, A.numberComparator));
          const R = [S[0]];
          for (let v = 1; v < S.length; v++) {
            const i = R[R.length - 1],
              l = S[v],
              g = l.original.startLineNumber - i.original.endLineNumberExclusive,
              L = l.modified.startLineNumber - i.modified.endLineNumberExclusive;
            if (g >= 0 && L >= 0 && g + L <= 2) {
              R[R.length - 1] = i.join(l);
              continue;
            }
            R.push(l);
          }
          return R;
        }
        function w(S, R) {
          const v = new b.MonotonousArray(S);
          return (
            (R = R.filter((i) => {
              const l =
                  v.findLastMonotonous(
                    (C) => C.original.startLineNumber < i.original.endLineNumberExclusive,
                  ) || new D.LineRangeMapping(new p.LineRange(1, 1), new p.LineRange(1, 1)),
                g = (0, b.findLastMonotonous)(
                  S,
                  (C) => C.modified.startLineNumber < i.modified.endLineNumberExclusive,
                );
              return l !== g;
            })),
            R
          );
        }
      },
    ),
    X(
      J[52],
      K([0, 1, 7, 9, 11, 3, 2, 8, 50, 32, 51, 48, 49, 33, 34, 16]),
      function (W, r, n, D, A, b, f, p, h, a, m, e, c, s, u, d) {
        'use strict';
        Object.defineProperty(r, '__esModule', { value: !0 }),
          (r.DefaultLinesDiffComputer = void 0),
          (r.lineRangeMappingFromRangeMappings = _),
          (r.getLineRangeMapping = w);
        class o {
          constructor() {
            (this.dynamicProgrammingDiffing = new h.DynamicProgrammingDiffing()),
              (this.myersDiffingAlgorithm = new a.MyersDiffAlgorithm());
          }
          computeDiff(R, v, i) {
            if (R.length <= 1 && (0, n.equals)(R, v, (V, j) => V === j))
              return new u.LinesDiff([], [], !1);
            if ((R.length === 1 && R[0].length === 0) || (v.length === 1 && v[0].length === 0))
              return new u.LinesDiff(
                [
                  new d.DetailedLineRangeMapping(
                    new A.LineRange(1, R.length + 1),
                    new A.LineRange(1, v.length + 1),
                    [
                      new d.RangeMapping(
                        new f.Range(1, 1, R.length, R[R.length - 1].length + 1),
                        new f.Range(1, 1, v.length, v[v.length - 1].length + 1),
                      ),
                    ],
                  ),
                ],
                [],
                !1,
              );
            const l =
                i.maxComputationTimeMs === 0
                  ? p.InfiniteTimeout.instance
                  : new p.DateTimeout(i.maxComputationTimeMs),
              g = !i.ignoreTrimWhitespace,
              L = new Map();
            function C(V) {
              let j = L.get(V);
              return j === void 0 && ((j = L.size), L.set(V, j)), j;
            }
            const N = R.map((V) => C(V.trim())),
              E = v.map((V) => C(V.trim())),
              y = new c.LineSequence(N, R),
              x = new c.LineSequence(E, v),
              M =
                y.length + x.length < 1700
                  ? this.dynamicProgrammingDiffing.compute(y, x, l, (V, j) =>
                      R[V] === v[j]
                        ? v[j].length === 0
                          ? 0.1
                          : 1 + Math.log(1 + v[j].length)
                        : 0.99,
                    )
                  : this.myersDiffingAlgorithm.compute(y, x, l);
            let I = M.diffs,
              k = M.hitTimeout;
            (I = (0, e.optimizeSequenceDiffs)(y, x, I)),
              (I = (0, e.removeVeryShortMatchingLinesBetweenDiffs)(y, x, I));
            const F = [],
              z = (V) => {
                if (g)
                  for (let j = 0; j < V; j++) {
                    const Z = $ + j,
                      re = T + j;
                    if (R[Z] !== v[re]) {
                      const ae = this.refineDiff(
                        R,
                        v,
                        new p.SequenceDiff(
                          new b.OffsetRange(Z, Z + 1),
                          new b.OffsetRange(re, re + 1),
                        ),
                        l,
                        g,
                      );
                      for (const oe of ae.mappings) F.push(oe);
                      ae.hitTimeout && (k = !0);
                    }
                  }
              };
            let $ = 0,
              T = 0;
            for (const V of I) {
              (0, D.assertFn)(() => V.seq1Range.start - $ === V.seq2Range.start - T);
              const j = V.seq1Range.start - $;
              z(j), ($ = V.seq1Range.endExclusive), (T = V.seq2Range.endExclusive);
              const Z = this.refineDiff(R, v, V, l, g);
              Z.hitTimeout && (k = !0);
              for (const re of Z.mappings) F.push(re);
            }
            z(R.length - $);
            const O = _(F, R, v);
            let B = [];
            return (
              i.computeMoves && (B = this.computeMoves(O, R, v, N, E, l, g)),
              (0, D.assertFn)(() => {
                function V(Z, re) {
                  if (Z.lineNumber < 1 || Z.lineNumber > re.length) return !1;
                  const ae = re[Z.lineNumber - 1];
                  return !(Z.column < 1 || Z.column > ae.length + 1);
                }
                function j(Z, re) {
                  return !(
                    Z.startLineNumber < 1 ||
                    Z.startLineNumber > re.length + 1 ||
                    Z.endLineNumberExclusive < 1 ||
                    Z.endLineNumberExclusive > re.length + 1
                  );
                }
                for (const Z of O) {
                  if (!Z.innerChanges) return !1;
                  for (const re of Z.innerChanges)
                    if (
                      !(
                        V(re.modifiedRange.getStartPosition(), v) &&
                        V(re.modifiedRange.getEndPosition(), v) &&
                        V(re.originalRange.getStartPosition(), R) &&
                        V(re.originalRange.getEndPosition(), R)
                      )
                    )
                      return !1;
                  if (!j(Z.modified, v) || !j(Z.original, R)) return !1;
                }
                return !0;
              }),
              new u.LinesDiff(O, B, k)
            );
          }
          computeMoves(R, v, i, l, g, L, C) {
            return (0, m.computeMovedLines)(R, v, i, l, g, L).map((y) => {
              const x = this.refineDiff(
                  v,
                  i,
                  new p.SequenceDiff(y.original.toOffsetRange(), y.modified.toOffsetRange()),
                  L,
                  C,
                ),
                M = _(x.mappings, v, i, !0);
              return new u.MovedText(y, M);
            });
          }
          refineDiff(R, v, i, l, g) {
            const L = new s.LinesSliceCharSequence(R, i.seq1Range, g),
              C = new s.LinesSliceCharSequence(v, i.seq2Range, g),
              N =
                L.length + C.length < 500
                  ? this.dynamicProgrammingDiffing.compute(L, C, l)
                  : this.myersDiffingAlgorithm.compute(L, C, l);
            let E = N.diffs;
            return (
              (E = (0, e.optimizeSequenceDiffs)(L, C, E)),
              (E = (0, e.extendDiffsToEntireWordIfAppropriate)(L, C, E)),
              (E = (0, e.removeShortMatches)(L, C, E)),
              (E = (0, e.removeVeryShortMatchingTextBetweenLongDiffs)(L, C, E)),
              {
                mappings: E.map(
                  (x) =>
                    new d.RangeMapping(
                      L.translateRange(x.seq1Range),
                      C.translateRange(x.seq2Range),
                    ),
                ),
                hitTimeout: N.hitTimeout,
              }
            );
          }
        }
        r.DefaultLinesDiffComputer = o;
        function _(S, R, v, i = !1) {
          const l = [];
          for (const g of (0, n.groupAdjacentBy)(
            S.map((L) => w(L, R, v)),
            (L, C) =>
              L.original.overlapOrTouch(C.original) || L.modified.overlapOrTouch(C.modified),
          )) {
            const L = g[0],
              C = g[g.length - 1];
            l.push(
              new d.DetailedLineRangeMapping(
                L.original.join(C.original),
                L.modified.join(C.modified),
                g.map((N) => N.innerChanges[0]),
              ),
            );
          }
          return (
            (0, D.assertFn)(() =>
              !i &&
              l.length > 0 &&
              (l[0].modified.startLineNumber !== l[0].original.startLineNumber ||
                v.length - l[l.length - 1].modified.endLineNumberExclusive !==
                  R.length - l[l.length - 1].original.endLineNumberExclusive)
                ? !1
                : (0, D.checkAdjacentItems)(
                    l,
                    (g, L) =>
                      L.original.startLineNumber - g.original.endLineNumberExclusive ===
                        L.modified.startLineNumber - g.modified.endLineNumberExclusive &&
                      g.original.endLineNumberExclusive < L.original.startLineNumber &&
                      g.modified.endLineNumberExclusive < L.modified.startLineNumber,
                  ),
            ),
            l
          );
        }
        function w(S, R, v) {
          let i = 0,
            l = 0;
          S.modifiedRange.endColumn === 1 &&
            S.originalRange.endColumn === 1 &&
            S.originalRange.startLineNumber + i <= S.originalRange.endLineNumber &&
            S.modifiedRange.startLineNumber + i <= S.modifiedRange.endLineNumber &&
            (l = -1),
            S.modifiedRange.startColumn - 1 >= v[S.modifiedRange.startLineNumber - 1].length &&
              S.originalRange.startColumn - 1 >= R[S.originalRange.startLineNumber - 1].length &&
              S.originalRange.startLineNumber <= S.originalRange.endLineNumber + l &&
              S.modifiedRange.startLineNumber <= S.modifiedRange.endLineNumber + l &&
              (i = 1);
          const g = new A.LineRange(
              S.originalRange.startLineNumber + i,
              S.originalRange.endLineNumber + 1 + l,
            ),
            L = new A.LineRange(
              S.modifiedRange.startLineNumber + i,
              S.modifiedRange.endLineNumber + 1 + l,
            );
          return new d.DetailedLineRangeMapping(g, L, [S]);
        }
      },
    ),
    X(J[53], K([0, 1, 25, 34, 16, 6, 2, 9, 11]), function (W, r, n, D, A, b, f, p, h) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.DiffComputer = r.LegacyLinesDiffComputer = void 0);
      const a = 3;
      class m {
        computeDiff(i, l, g) {
          var L;
          const N = new _(i, l, {
              maxComputationTime: g.maxComputationTimeMs,
              shouldIgnoreTrimWhitespace: g.ignoreTrimWhitespace,
              shouldComputeCharChanges: !0,
              shouldMakePrettyDiff: !0,
              shouldPostProcessCharChanges: !0,
            }).computeDiff(),
            E = [];
          let y = null;
          for (const x of N.changes) {
            let M;
            x.originalEndLineNumber === 0
              ? (M = new h.LineRange(x.originalStartLineNumber + 1, x.originalStartLineNumber + 1))
              : (M = new h.LineRange(x.originalStartLineNumber, x.originalEndLineNumber + 1));
            let I;
            x.modifiedEndLineNumber === 0
              ? (I = new h.LineRange(x.modifiedStartLineNumber + 1, x.modifiedStartLineNumber + 1))
              : (I = new h.LineRange(x.modifiedStartLineNumber, x.modifiedEndLineNumber + 1));
            let k = new A.DetailedLineRangeMapping(
              M,
              I,
              (L = x.charChanges) === null || L === void 0
                ? void 0
                : L.map(
                    (F) =>
                      new A.RangeMapping(
                        new f.Range(
                          F.originalStartLineNumber,
                          F.originalStartColumn,
                          F.originalEndLineNumber,
                          F.originalEndColumn,
                        ),
                        new f.Range(
                          F.modifiedStartLineNumber,
                          F.modifiedStartColumn,
                          F.modifiedEndLineNumber,
                          F.modifiedEndColumn,
                        ),
                      ),
                  ),
            );
            y &&
              (y.modified.endLineNumberExclusive === k.modified.startLineNumber ||
                y.original.endLineNumberExclusive === k.original.startLineNumber) &&
              ((k = new A.DetailedLineRangeMapping(
                y.original.join(k.original),
                y.modified.join(k.modified),
                y.innerChanges && k.innerChanges ? y.innerChanges.concat(k.innerChanges) : void 0,
              )),
              E.pop()),
              E.push(k),
              (y = k);
          }
          return (
            (0, p.assertFn)(() =>
              (0, p.checkAdjacentItems)(
                E,
                (x, M) =>
                  M.original.startLineNumber - x.original.endLineNumberExclusive ===
                    M.modified.startLineNumber - x.modified.endLineNumberExclusive &&
                  x.original.endLineNumberExclusive < M.original.startLineNumber &&
                  x.modified.endLineNumberExclusive < M.modified.startLineNumber,
              ),
            ),
            new D.LinesDiff(E, [], N.quitEarly)
          );
        }
      }
      r.LegacyLinesDiffComputer = m;
      function e(v, i, l, g) {
        return new n.LcsDiff(v, i, l).ComputeDiff(g);
      }
      class c {
        constructor(i) {
          const l = [],
            g = [];
          for (let L = 0, C = i.length; L < C; L++) (l[L] = w(i[L], 1)), (g[L] = S(i[L], 1));
          (this.lines = i), (this._startColumns = l), (this._endColumns = g);
        }
        getElements() {
          const i = [];
          for (let l = 0, g = this.lines.length; l < g; l++)
            i[l] = this.lines[l].substring(this._startColumns[l] - 1, this._endColumns[l] - 1);
          return i;
        }
        getStrictElement(i) {
          return this.lines[i];
        }
        getStartLineNumber(i) {
          return i + 1;
        }
        getEndLineNumber(i) {
          return i + 1;
        }
        createCharSequence(i, l, g) {
          const L = [],
            C = [],
            N = [];
          let E = 0;
          for (let y = l; y <= g; y++) {
            const x = this.lines[y],
              M = i ? this._startColumns[y] : 1,
              I = i ? this._endColumns[y] : x.length + 1;
            for (let k = M; k < I; k++)
              (L[E] = x.charCodeAt(k - 1)), (C[E] = y + 1), (N[E] = k), E++;
            !i && y < g && ((L[E] = 10), (C[E] = y + 1), (N[E] = x.length + 1), E++);
          }
          return new s(L, C, N);
        }
      }
      class s {
        constructor(i, l, g) {
          (this._charCodes = i), (this._lineNumbers = l), (this._columns = g);
        }
        toString() {
          return (
            '[' +
            this._charCodes
              .map(
                (i, l) =>
                  (i === 10 ? '\\n' : String.fromCharCode(i)) +
                  `-(${this._lineNumbers[l]},${this._columns[l]})`,
              )
              .join(', ') +
            ']'
          );
        }
        _assertIndex(i, l) {
          if (i < 0 || i >= l.length) throw new Error('Illegal index');
        }
        getElements() {
          return this._charCodes;
        }
        getStartLineNumber(i) {
          return i > 0 && i === this._lineNumbers.length
            ? this.getEndLineNumber(i - 1)
            : (this._assertIndex(i, this._lineNumbers), this._lineNumbers[i]);
        }
        getEndLineNumber(i) {
          return i === -1
            ? this.getStartLineNumber(i + 1)
            : (this._assertIndex(i, this._lineNumbers),
              this._charCodes[i] === 10 ? this._lineNumbers[i] + 1 : this._lineNumbers[i]);
        }
        getStartColumn(i) {
          return i > 0 && i === this._columns.length
            ? this.getEndColumn(i - 1)
            : (this._assertIndex(i, this._columns), this._columns[i]);
        }
        getEndColumn(i) {
          return i === -1
            ? this.getStartColumn(i + 1)
            : (this._assertIndex(i, this._columns),
              this._charCodes[i] === 10 ? 1 : this._columns[i] + 1);
        }
      }
      class u {
        constructor(i, l, g, L, C, N, E, y) {
          (this.originalStartLineNumber = i),
            (this.originalStartColumn = l),
            (this.originalEndLineNumber = g),
            (this.originalEndColumn = L),
            (this.modifiedStartLineNumber = C),
            (this.modifiedStartColumn = N),
            (this.modifiedEndLineNumber = E),
            (this.modifiedEndColumn = y);
        }
        static createFromDiffChange(i, l, g) {
          const L = l.getStartLineNumber(i.originalStart),
            C = l.getStartColumn(i.originalStart),
            N = l.getEndLineNumber(i.originalStart + i.originalLength - 1),
            E = l.getEndColumn(i.originalStart + i.originalLength - 1),
            y = g.getStartLineNumber(i.modifiedStart),
            x = g.getStartColumn(i.modifiedStart),
            M = g.getEndLineNumber(i.modifiedStart + i.modifiedLength - 1),
            I = g.getEndColumn(i.modifiedStart + i.modifiedLength - 1);
          return new u(L, C, N, E, y, x, M, I);
        }
      }
      function d(v) {
        if (v.length <= 1) return v;
        const i = [v[0]];
        let l = i[0];
        for (let g = 1, L = v.length; g < L; g++) {
          const C = v[g],
            N = C.originalStart - (l.originalStart + l.originalLength),
            E = C.modifiedStart - (l.modifiedStart + l.modifiedLength);
          Math.min(N, E) < a
            ? ((l.originalLength = C.originalStart + C.originalLength - l.originalStart),
              (l.modifiedLength = C.modifiedStart + C.modifiedLength - l.modifiedStart))
            : (i.push(C), (l = C));
        }
        return i;
      }
      class o {
        constructor(i, l, g, L, C) {
          (this.originalStartLineNumber = i),
            (this.originalEndLineNumber = l),
            (this.modifiedStartLineNumber = g),
            (this.modifiedEndLineNumber = L),
            (this.charChanges = C);
        }
        static createFromDiffResult(i, l, g, L, C, N, E) {
          let y, x, M, I, k;
          if (
            (l.originalLength === 0
              ? ((y = g.getStartLineNumber(l.originalStart) - 1), (x = 0))
              : ((y = g.getStartLineNumber(l.originalStart)),
                (x = g.getEndLineNumber(l.originalStart + l.originalLength - 1))),
            l.modifiedLength === 0
              ? ((M = L.getStartLineNumber(l.modifiedStart) - 1), (I = 0))
              : ((M = L.getStartLineNumber(l.modifiedStart)),
                (I = L.getEndLineNumber(l.modifiedStart + l.modifiedLength - 1))),
            N &&
              l.originalLength > 0 &&
              l.originalLength < 20 &&
              l.modifiedLength > 0 &&
              l.modifiedLength < 20 &&
              C())
          ) {
            const F = g.createCharSequence(
                i,
                l.originalStart,
                l.originalStart + l.originalLength - 1,
              ),
              z = L.createCharSequence(i, l.modifiedStart, l.modifiedStart + l.modifiedLength - 1);
            if (F.getElements().length > 0 && z.getElements().length > 0) {
              let $ = e(F, z, C, !0).changes;
              E && ($ = d($)), (k = []);
              for (let T = 0, O = $.length; T < O; T++) k.push(u.createFromDiffChange($[T], F, z));
            }
          }
          return new o(y, x, M, I, k);
        }
      }
      class _ {
        constructor(i, l, g) {
          (this.shouldComputeCharChanges = g.shouldComputeCharChanges),
            (this.shouldPostProcessCharChanges = g.shouldPostProcessCharChanges),
            (this.shouldIgnoreTrimWhitespace = g.shouldIgnoreTrimWhitespace),
            (this.shouldMakePrettyDiff = g.shouldMakePrettyDiff),
            (this.originalLines = i),
            (this.modifiedLines = l),
            (this.original = new c(i)),
            (this.modified = new c(l)),
            (this.continueLineDiff = R(g.maxComputationTime)),
            (this.continueCharDiff = R(
              g.maxComputationTime === 0 ? 0 : Math.min(g.maxComputationTime, 5e3),
            ));
        }
        computeDiff() {
          if (this.original.lines.length === 1 && this.original.lines[0].length === 0)
            return this.modified.lines.length === 1 && this.modified.lines[0].length === 0
              ? { quitEarly: !1, changes: [] }
              : {
                  quitEarly: !1,
                  changes: [
                    {
                      originalStartLineNumber: 1,
                      originalEndLineNumber: 1,
                      modifiedStartLineNumber: 1,
                      modifiedEndLineNumber: this.modified.lines.length,
                      charChanges: void 0,
                    },
                  ],
                };
          if (this.modified.lines.length === 1 && this.modified.lines[0].length === 0)
            return {
              quitEarly: !1,
              changes: [
                {
                  originalStartLineNumber: 1,
                  originalEndLineNumber: this.original.lines.length,
                  modifiedStartLineNumber: 1,
                  modifiedEndLineNumber: 1,
                  charChanges: void 0,
                },
              ],
            };
          const i = e(
              this.original,
              this.modified,
              this.continueLineDiff,
              this.shouldMakePrettyDiff,
            ),
            l = i.changes,
            g = i.quitEarly;
          if (this.shouldIgnoreTrimWhitespace) {
            const E = [];
            for (let y = 0, x = l.length; y < x; y++)
              E.push(
                o.createFromDiffResult(
                  this.shouldIgnoreTrimWhitespace,
                  l[y],
                  this.original,
                  this.modified,
                  this.continueCharDiff,
                  this.shouldComputeCharChanges,
                  this.shouldPostProcessCharChanges,
                ),
              );
            return { quitEarly: g, changes: E };
          }
          const L = [];
          let C = 0,
            N = 0;
          for (let E = -1, y = l.length; E < y; E++) {
            const x = E + 1 < y ? l[E + 1] : null,
              M = x ? x.originalStart : this.originalLines.length,
              I = x ? x.modifiedStart : this.modifiedLines.length;
            for (; C < M && N < I; ) {
              const k = this.originalLines[C],
                F = this.modifiedLines[N];
              if (k !== F) {
                {
                  let z = w(k, 1),
                    $ = w(F, 1);
                  for (; z > 1 && $ > 1; ) {
                    const T = k.charCodeAt(z - 2),
                      O = F.charCodeAt($ - 2);
                    if (T !== O) break;
                    z--, $--;
                  }
                  (z > 1 || $ > 1) &&
                    this._pushTrimWhitespaceCharChange(L, C + 1, 1, z, N + 1, 1, $);
                }
                {
                  let z = S(k, 1),
                    $ = S(F, 1);
                  const T = k.length + 1,
                    O = F.length + 1;
                  for (; z < T && $ < O; ) {
                    const B = k.charCodeAt(z - 1),
                      V = k.charCodeAt($ - 1);
                    if (B !== V) break;
                    z++, $++;
                  }
                  (z < T || $ < O) &&
                    this._pushTrimWhitespaceCharChange(L, C + 1, z, T, N + 1, $, O);
                }
              }
              C++, N++;
            }
            x &&
              (L.push(
                o.createFromDiffResult(
                  this.shouldIgnoreTrimWhitespace,
                  x,
                  this.original,
                  this.modified,
                  this.continueCharDiff,
                  this.shouldComputeCharChanges,
                  this.shouldPostProcessCharChanges,
                ),
              ),
              (C += x.originalLength),
              (N += x.modifiedLength));
          }
          return { quitEarly: g, changes: L };
        }
        _pushTrimWhitespaceCharChange(i, l, g, L, C, N, E) {
          if (this._mergeTrimWhitespaceCharChange(i, l, g, L, C, N, E)) return;
          let y;
          this.shouldComputeCharChanges && (y = [new u(l, g, l, L, C, N, C, E)]),
            i.push(new o(l, l, C, C, y));
        }
        _mergeTrimWhitespaceCharChange(i, l, g, L, C, N, E) {
          const y = i.length;
          if (y === 0) return !1;
          const x = i[y - 1];
          return x.originalEndLineNumber === 0 || x.modifiedEndLineNumber === 0
            ? !1
            : x.originalEndLineNumber === l && x.modifiedEndLineNumber === C
              ? (this.shouldComputeCharChanges &&
                  x.charChanges &&
                  x.charChanges.push(new u(l, g, l, L, C, N, C, E)),
                !0)
              : x.originalEndLineNumber + 1 === l && x.modifiedEndLineNumber + 1 === C
                ? ((x.originalEndLineNumber = l),
                  (x.modifiedEndLineNumber = C),
                  this.shouldComputeCharChanges &&
                    x.charChanges &&
                    x.charChanges.push(new u(l, g, l, L, C, N, C, E)),
                  !0)
                : !1;
        }
      }
      r.DiffComputer = _;
      function w(v, i) {
        const l = b.firstNonWhitespaceIndex(v);
        return l === -1 ? i : l + 1;
      }
      function S(v, i) {
        const l = b.lastNonWhitespaceIndex(v);
        return l === -1 ? i : l + 2;
      }
      function R(v) {
        if (v === 0) return () => !0;
        const i = Date.now();
        return () => Date.now() - i < v;
      }
    }),
    X(J[54], K([0, 1, 53, 52]), function (W, r, n, D) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.linesDiffComputers = void 0),
        (r.linesDiffComputers = {
          getLegacy: () => new n.LegacyLinesDiffComputer(),
          getDefault: () => new D.DefaultLinesDiffComputer(),
        });
    }),
    X(J[55], K([0, 1, 36]), function (W, r, n) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.computeDefaultDocumentColors = e);
      function D(c) {
        const s = [];
        for (const u of c) {
          const d = Number(u);
          (d || (d === 0 && u.replace(/\s/g, '') !== '')) && s.push(d);
        }
        return s;
      }
      function A(c, s, u, d) {
        return { red: c / 255, blue: u / 255, green: s / 255, alpha: d };
      }
      function b(c, s) {
        const u = s.index,
          d = s[0].length;
        if (!u) return;
        const o = c.positionAt(u);
        return {
          startLineNumber: o.lineNumber,
          startColumn: o.column,
          endLineNumber: o.lineNumber,
          endColumn: o.column + d,
        };
      }
      function f(c, s) {
        if (!c) return;
        const u = n.Color.Format.CSS.parseHex(s);
        if (u) return { range: c, color: A(u.rgba.r, u.rgba.g, u.rgba.b, u.rgba.a) };
      }
      function p(c, s, u) {
        if (!c || s.length !== 1) return;
        const o = s[0].values(),
          _ = D(o);
        return { range: c, color: A(_[0], _[1], _[2], u ? _[3] : 1) };
      }
      function h(c, s, u) {
        if (!c || s.length !== 1) return;
        const o = s[0].values(),
          _ = D(o),
          w = new n.Color(new n.HSLA(_[0], _[1] / 100, _[2] / 100, u ? _[3] : 1));
        return { range: c, color: A(w.rgba.r, w.rgba.g, w.rgba.b, w.rgba.a) };
      }
      function a(c, s) {
        return typeof c == 'string' ? [...c.matchAll(s)] : c.findMatches(s);
      }
      function m(c) {
        const s = [],
          d = a(
            c,
            /\b(rgb|rgba|hsl|hsla)(\([0-9\s,.\%]*\))|(#)([A-Fa-f0-9]{3})\b|(#)([A-Fa-f0-9]{4})\b|(#)([A-Fa-f0-9]{6})\b|(#)([A-Fa-f0-9]{8})\b/gm,
          );
        if (d.length > 0)
          for (const o of d) {
            const _ = o.filter((v) => v !== void 0),
              w = _[1],
              S = _[2];
            if (!S) continue;
            let R;
            if (w === 'rgb') {
              const v =
                /^\(\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*\)$/gm;
              R = p(b(c, o), a(S, v), !1);
            } else if (w === 'rgba') {
              const v =
                /^\(\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(0[.][0-9]+|[.][0-9]+|[01][.]|[01])\s*\)$/gm;
              R = p(b(c, o), a(S, v), !0);
            } else if (w === 'hsl') {
              const v =
                /^\(\s*(36[0]|3[0-5][0-9]|[12][0-9][0-9]|[1-9]?[0-9])\s*,\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*,\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*\)$/gm;
              R = h(b(c, o), a(S, v), !1);
            } else if (w === 'hsla') {
              const v =
                /^\(\s*(36[0]|3[0-5][0-9]|[12][0-9][0-9]|[1-9]?[0-9])\s*,\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*,\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*,\s*(0[.][0-9]+|[.][0-9]+|[01][.]|[01])\s*\)$/gm;
              R = h(b(c, o), a(S, v), !0);
            } else w === '#' && (R = f(b(c, o), w + S));
            R && s.push(R);
          }
        return s;
      }
      function e(c) {
        return !c || typeof c.getValue != 'function' || typeof c.positionAt != 'function'
          ? []
          : m(c);
      }
    }),
    X(J[56], K([0, 1, 29]), function (W, r, n) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.LinkComputer = r.StateMachine = void 0),
        (r.computeLinks = m);
      class D {
        constructor(c, s, u) {
          const d = new Uint8Array(c * s);
          for (let o = 0, _ = c * s; o < _; o++) d[o] = u;
          (this._data = d), (this.rows = c), (this.cols = s);
        }
        get(c, s) {
          return this._data[c * this.cols + s];
        }
        set(c, s, u) {
          this._data[c * this.cols + s] = u;
        }
      }
      class A {
        constructor(c) {
          let s = 0,
            u = 0;
          for (let o = 0, _ = c.length; o < _; o++) {
            const [w, S, R] = c[o];
            S > s && (s = S), w > u && (u = w), R > u && (u = R);
          }
          s++, u++;
          const d = new D(u, s, 0);
          for (let o = 0, _ = c.length; o < _; o++) {
            const [w, S, R] = c[o];
            d.set(w, S, R);
          }
          (this._states = d), (this._maxCharCode = s);
        }
        nextState(c, s) {
          return s < 0 || s >= this._maxCharCode ? 0 : this._states.get(c, s);
        }
      }
      r.StateMachine = A;
      let b = null;
      function f() {
        return (
          b === null &&
            (b = new A([
              [1, 104, 2],
              [1, 72, 2],
              [1, 102, 6],
              [1, 70, 6],
              [2, 116, 3],
              [2, 84, 3],
              [3, 116, 4],
              [3, 84, 4],
              [4, 112, 5],
              [4, 80, 5],
              [5, 115, 9],
              [5, 83, 9],
              [5, 58, 10],
              [6, 105, 7],
              [6, 73, 7],
              [7, 108, 8],
              [7, 76, 8],
              [8, 101, 9],
              [8, 69, 9],
              [9, 58, 10],
              [10, 47, 11],
              [11, 47, 12],
            ])),
          b
        );
      }
      let p = null;
      function h() {
        if (p === null) {
          p = new n.CharacterClassifier(0);
          const e = ` 	<>'"\u3001\u3002\uFF61\uFF64\uFF0C\uFF0E\uFF1A\uFF1B\u2018\u3008\u300C\u300E\u3014\uFF08\uFF3B\uFF5B\uFF62\uFF63\uFF5D\uFF3D\uFF09\u3015\u300F\u300D\u3009\u2019\uFF40\uFF5E\u2026`;
          for (let s = 0; s < e.length; s++) p.set(e.charCodeAt(s), 1);
          const c = '.,;:';
          for (let s = 0; s < c.length; s++) p.set(c.charCodeAt(s), 2);
        }
        return p;
      }
      class a {
        static _createLink(c, s, u, d, o) {
          let _ = o - 1;
          do {
            const w = s.charCodeAt(_);
            if (c.get(w) !== 2) break;
            _--;
          } while (_ > d);
          if (d > 0) {
            const w = s.charCodeAt(d - 1),
              S = s.charCodeAt(_);
            ((w === 40 && S === 41) || (w === 91 && S === 93) || (w === 123 && S === 125)) && _--;
          }
          return {
            range: { startLineNumber: u, startColumn: d + 1, endLineNumber: u, endColumn: _ + 2 },
            url: s.substring(d, _ + 1),
          };
        }
        static computeLinks(c, s = f()) {
          const u = h(),
            d = [];
          for (let o = 1, _ = c.getLineCount(); o <= _; o++) {
            const w = c.getLineContent(o),
              S = w.length;
            let R = 0,
              v = 0,
              i = 0,
              l = 1,
              g = !1,
              L = !1,
              C = !1,
              N = !1;
            for (; R < S; ) {
              let E = !1;
              const y = w.charCodeAt(R);
              if (l === 13) {
                let x;
                switch (y) {
                  case 40:
                    (g = !0), (x = 0);
                    break;
                  case 41:
                    x = g ? 0 : 1;
                    break;
                  case 91:
                    (C = !0), (L = !0), (x = 0);
                    break;
                  case 93:
                    (C = !1), (x = L ? 0 : 1);
                    break;
                  case 123:
                    (N = !0), (x = 0);
                    break;
                  case 125:
                    x = N ? 0 : 1;
                    break;
                  case 39:
                  case 34:
                  case 96:
                    i === y ? (x = 1) : i === 39 || i === 34 || i === 96 ? (x = 0) : (x = 1);
                    break;
                  case 42:
                    x = i === 42 ? 1 : 0;
                    break;
                  case 124:
                    x = i === 124 ? 1 : 0;
                    break;
                  case 32:
                    x = C ? 0 : 1;
                    break;
                  default:
                    x = u.get(y);
                }
                x === 1 && (d.push(a._createLink(u, w, o, v, R)), (E = !0));
              } else if (l === 12) {
                let x;
                y === 91 ? ((L = !0), (x = 0)) : (x = u.get(y)), x === 1 ? (E = !0) : (l = 13);
              } else (l = s.nextState(l, y)), l === 0 && (E = !0);
              E && ((l = 1), (g = !1), (L = !1), (N = !1), (v = R + 1), (i = y)), R++;
            }
            l === 13 && d.push(a._createLink(u, w, o, v, S));
          }
          return d;
        }
      }
      r.LinkComputer = a;
      function m(e) {
        return !e || typeof e.getLineCount != 'function' || typeof e.getLineContent != 'function'
          ? []
          : a.computeLinks(e);
      }
    }),
    X(J[57], K([0, 1]), function (W, r) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.BasicInplaceReplace = void 0);
      class n {
        constructor() {
          this._defaultValueSet = [
            ['true', 'false'],
            ['True', 'False'],
            ['Private', 'Public', 'Friend', 'ReadOnly', 'Partial', 'Protected', 'WriteOnly'],
            ['public', 'protected', 'private'],
          ];
        }
        navigateValueSet(A, b, f, p, h) {
          if (A && b) {
            const a = this.doNavigateValueSet(b, h);
            if (a) return { range: A, value: a };
          }
          if (f && p) {
            const a = this.doNavigateValueSet(p, h);
            if (a) return { range: f, value: a };
          }
          return null;
        }
        doNavigateValueSet(A, b) {
          const f = this.numberReplace(A, b);
          return f !== null ? f : this.textReplace(A, b);
        }
        numberReplace(A, b) {
          const f = Math.pow(10, A.length - (A.lastIndexOf('.') + 1));
          let p = Number(A);
          const h = parseFloat(A);
          return !isNaN(p) && !isNaN(h) && p === h
            ? p === 0 && !b
              ? null
              : ((p = Math.floor(p * f)), (p += b ? f : -f), String(p / f))
            : null;
        }
        textReplace(A, b) {
          return this.valueSetsReplace(this._defaultValueSet, A, b);
        }
        valueSetsReplace(A, b, f) {
          let p = null;
          for (let h = 0, a = A.length; p === null && h < a; h++)
            p = this.valueSetReplace(A[h], b, f);
          return p;
        }
        valueSetReplace(A, b, f) {
          let p = A.indexOf(b);
          return p >= 0
            ? ((p += f ? 1 : -1), p < 0 ? (p = A.length - 1) : (p %= A.length), A[p])
            : null;
        }
      }
      (r.BasicInplaceReplace = n), (n.INSTANCE = new n());
    }),
    X(J[58], K([0, 1, 14]), function (W, r, n) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.ApplyEditsResult =
          r.SearchData =
          r.ValidAnnotatedEditOperation =
          r.FindMatch =
          r.TextModelResolvedOptions =
          r.InjectedTextCursorStops =
          r.GlyphMarginLane =
          r.OverviewRulerLane =
            void 0),
        (r.isITextSnapshot = h),
        (r.shouldSynchronizeModel = c);
      var D;
      (function (s) {
        (s[(s.Left = 1)] = 'Left'),
          (s[(s.Center = 2)] = 'Center'),
          (s[(s.Right = 4)] = 'Right'),
          (s[(s.Full = 7)] = 'Full');
      })(D || (r.OverviewRulerLane = D = {}));
      var A;
      (function (s) {
        (s[(s.Left = 1)] = 'Left'), (s[(s.Center = 2)] = 'Center'), (s[(s.Right = 3)] = 'Right');
      })(A || (r.GlyphMarginLane = A = {}));
      var b;
      (function (s) {
        (s[(s.Both = 0)] = 'Both'),
          (s[(s.Right = 1)] = 'Right'),
          (s[(s.Left = 2)] = 'Left'),
          (s[(s.None = 3)] = 'None');
      })(b || (r.InjectedTextCursorStops = b = {}));
      class f {
        get originalIndentSize() {
          return this._indentSizeIsTabSize ? 'tabSize' : this.indentSize;
        }
        constructor(u) {
          (this._textModelResolvedOptionsBrand = void 0),
            (this.tabSize = Math.max(1, u.tabSize | 0)),
            u.indentSize === 'tabSize'
              ? ((this.indentSize = this.tabSize), (this._indentSizeIsTabSize = !0))
              : ((this.indentSize = Math.max(1, u.indentSize | 0)),
                (this._indentSizeIsTabSize = !1)),
            (this.insertSpaces = !!u.insertSpaces),
            (this.defaultEOL = u.defaultEOL | 0),
            (this.trimAutoWhitespace = !!u.trimAutoWhitespace),
            (this.bracketPairColorizationOptions = u.bracketPairColorizationOptions);
        }
        equals(u) {
          return (
            this.tabSize === u.tabSize &&
            this._indentSizeIsTabSize === u._indentSizeIsTabSize &&
            this.indentSize === u.indentSize &&
            this.insertSpaces === u.insertSpaces &&
            this.defaultEOL === u.defaultEOL &&
            this.trimAutoWhitespace === u.trimAutoWhitespace &&
            (0, n.equals)(this.bracketPairColorizationOptions, u.bracketPairColorizationOptions)
          );
        }
        createChangeEvent(u) {
          return {
            tabSize: this.tabSize !== u.tabSize,
            indentSize: this.indentSize !== u.indentSize,
            insertSpaces: this.insertSpaces !== u.insertSpaces,
            trimAutoWhitespace: this.trimAutoWhitespace !== u.trimAutoWhitespace,
          };
        }
      }
      r.TextModelResolvedOptions = f;
      class p {
        constructor(u, d) {
          (this._findMatchBrand = void 0), (this.range = u), (this.matches = d);
        }
      }
      r.FindMatch = p;
      function h(s) {
        return s && typeof s.read == 'function';
      }
      class a {
        constructor(u, d, o, _, w, S) {
          (this.identifier = u),
            (this.range = d),
            (this.text = o),
            (this.forceMoveMarkers = _),
            (this.isAutoWhitespaceEdit = w),
            (this._isTracked = S);
        }
      }
      r.ValidAnnotatedEditOperation = a;
      class m {
        constructor(u, d, o) {
          (this.regex = u), (this.wordSeparators = d), (this.simpleSearch = o);
        }
      }
      r.SearchData = m;
      class e {
        constructor(u, d, o) {
          (this.reverseEdits = u), (this.changes = d), (this.trimAutoWhitespaceLineNumbers = o);
        }
      }
      r.ApplyEditsResult = e;
      function c(s) {
        return !s.isTooLargeForSyncing() && !s.isForSimpleWidget;
      }
    }),
    X(J[59], K([0, 1, 7, 28]), function (W, r, n, D) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.PrefixSumIndexOfResult = r.ConstantTimePrefixSumComputer = r.PrefixSumComputer = void 0);
      class A {
        constructor(h) {
          (this.values = h),
            (this.prefixSum = new Uint32Array(h.length)),
            (this.prefixSumValidIndex = new Int32Array(1)),
            (this.prefixSumValidIndex[0] = -1);
        }
        insertValues(h, a) {
          h = (0, D.toUint32)(h);
          const m = this.values,
            e = this.prefixSum,
            c = a.length;
          return c === 0
            ? !1
            : ((this.values = new Uint32Array(m.length + c)),
              this.values.set(m.subarray(0, h), 0),
              this.values.set(m.subarray(h), h + c),
              this.values.set(a, h),
              h - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = h - 1),
              (this.prefixSum = new Uint32Array(this.values.length)),
              this.prefixSumValidIndex[0] >= 0 &&
                this.prefixSum.set(e.subarray(0, this.prefixSumValidIndex[0] + 1)),
              !0);
        }
        setValue(h, a) {
          return (
            (h = (0, D.toUint32)(h)),
            (a = (0, D.toUint32)(a)),
            this.values[h] === a
              ? !1
              : ((this.values[h] = a),
                h - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = h - 1),
                !0)
          );
        }
        removeValues(h, a) {
          (h = (0, D.toUint32)(h)), (a = (0, D.toUint32)(a));
          const m = this.values,
            e = this.prefixSum;
          if (h >= m.length) return !1;
          const c = m.length - h;
          return (
            a >= c && (a = c),
            a === 0
              ? !1
              : ((this.values = new Uint32Array(m.length - a)),
                this.values.set(m.subarray(0, h), 0),
                this.values.set(m.subarray(h + a), h),
                (this.prefixSum = new Uint32Array(this.values.length)),
                h - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = h - 1),
                this.prefixSumValidIndex[0] >= 0 &&
                  this.prefixSum.set(e.subarray(0, this.prefixSumValidIndex[0] + 1)),
                !0)
          );
        }
        getTotalSum() {
          return this.values.length === 0 ? 0 : this._getPrefixSum(this.values.length - 1);
        }
        getPrefixSum(h) {
          return h < 0 ? 0 : ((h = (0, D.toUint32)(h)), this._getPrefixSum(h));
        }
        _getPrefixSum(h) {
          if (h <= this.prefixSumValidIndex[0]) return this.prefixSum[h];
          let a = this.prefixSumValidIndex[0] + 1;
          a === 0 && ((this.prefixSum[0] = this.values[0]), a++),
            h >= this.values.length && (h = this.values.length - 1);
          for (let m = a; m <= h; m++) this.prefixSum[m] = this.prefixSum[m - 1] + this.values[m];
          return (
            (this.prefixSumValidIndex[0] = Math.max(this.prefixSumValidIndex[0], h)),
            this.prefixSum[h]
          );
        }
        getIndexOf(h) {
          (h = Math.floor(h)), this.getTotalSum();
          let a = 0,
            m = this.values.length - 1,
            e = 0,
            c = 0,
            s = 0;
          for (; a <= m; )
            if (
              ((e = (a + (m - a) / 2) | 0),
              (c = this.prefixSum[e]),
              (s = c - this.values[e]),
              h < s)
            )
              m = e - 1;
            else if (h >= c) a = e + 1;
            else break;
          return new f(e, h - s);
        }
      }
      r.PrefixSumComputer = A;
      class b {
        constructor(h) {
          (this._values = h),
            (this._isValid = !1),
            (this._validEndIndex = -1),
            (this._prefixSum = []),
            (this._indexBySum = []);
        }
        getTotalSum() {
          return this._ensureValid(), this._indexBySum.length;
        }
        getPrefixSum(h) {
          return this._ensureValid(), h === 0 ? 0 : this._prefixSum[h - 1];
        }
        getIndexOf(h) {
          this._ensureValid();
          const a = this._indexBySum[h],
            m = a > 0 ? this._prefixSum[a - 1] : 0;
          return new f(a, h - m);
        }
        removeValues(h, a) {
          this._values.splice(h, a), this._invalidate(h);
        }
        insertValues(h, a) {
          (this._values = (0, n.arrayInsert)(this._values, h, a)), this._invalidate(h);
        }
        _invalidate(h) {
          (this._isValid = !1), (this._validEndIndex = Math.min(this._validEndIndex, h - 1));
        }
        _ensureValid() {
          if (!this._isValid) {
            for (let h = this._validEndIndex + 1, a = this._values.length; h < a; h++) {
              const m = this._values[h],
                e = h > 0 ? this._prefixSum[h - 1] : 0;
              this._prefixSum[h] = e + m;
              for (let c = 0; c < m; c++) this._indexBySum[e + c] = h;
            }
            (this._prefixSum.length = this._values.length),
              (this._indexBySum.length = this._prefixSum[this._prefixSum.length - 1]),
              (this._isValid = !0),
              (this._validEndIndex = this._values.length - 1);
          }
        }
        setValue(h, a) {
          this._values[h] !== a && ((this._values[h] = a), this._invalidate(h));
        }
      }
      r.ConstantTimePrefixSumComputer = b;
      class f {
        constructor(h, a) {
          (this.index = h),
            (this.remainder = a),
            (this._prefixSumIndexOfResultBrand = void 0),
            (this.index = h),
            (this.remainder = a);
        }
      }
      r.PrefixSumIndexOfResult = f;
    }),
    X(J[60], K([0, 1, 6, 4, 59]), function (W, r, n, D, A) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.MirrorTextModel = void 0);
      class b {
        constructor(p, h, a, m) {
          (this._uri = p),
            (this._lines = h),
            (this._eol = a),
            (this._versionId = m),
            (this._lineStarts = null),
            (this._cachedTextValue = null);
        }
        dispose() {
          this._lines.length = 0;
        }
        get version() {
          return this._versionId;
        }
        getText() {
          return (
            this._cachedTextValue === null && (this._cachedTextValue = this._lines.join(this._eol)),
            this._cachedTextValue
          );
        }
        onEvents(p) {
          p.eol && p.eol !== this._eol && ((this._eol = p.eol), (this._lineStarts = null));
          const h = p.changes;
          for (const a of h)
            this._acceptDeleteRange(a.range),
              this._acceptInsertText(
                new D.Position(a.range.startLineNumber, a.range.startColumn),
                a.text,
              );
          (this._versionId = p.versionId), (this._cachedTextValue = null);
        }
        _ensureLineStarts() {
          if (!this._lineStarts) {
            const p = this._eol.length,
              h = this._lines.length,
              a = new Uint32Array(h);
            for (let m = 0; m < h; m++) a[m] = this._lines[m].length + p;
            this._lineStarts = new A.PrefixSumComputer(a);
          }
        }
        _setLineText(p, h) {
          (this._lines[p] = h),
            this._lineStarts &&
              this._lineStarts.setValue(p, this._lines[p].length + this._eol.length);
        }
        _acceptDeleteRange(p) {
          if (p.startLineNumber === p.endLineNumber) {
            if (p.startColumn === p.endColumn) return;
            this._setLineText(
              p.startLineNumber - 1,
              this._lines[p.startLineNumber - 1].substring(0, p.startColumn - 1) +
                this._lines[p.startLineNumber - 1].substring(p.endColumn - 1),
            );
            return;
          }
          this._setLineText(
            p.startLineNumber - 1,
            this._lines[p.startLineNumber - 1].substring(0, p.startColumn - 1) +
              this._lines[p.endLineNumber - 1].substring(p.endColumn - 1),
          ),
            this._lines.splice(p.startLineNumber, p.endLineNumber - p.startLineNumber),
            this._lineStarts &&
              this._lineStarts.removeValues(p.startLineNumber, p.endLineNumber - p.startLineNumber);
        }
        _acceptInsertText(p, h) {
          if (h.length === 0) return;
          const a = (0, n.splitLines)(h);
          if (a.length === 1) {
            this._setLineText(
              p.lineNumber - 1,
              this._lines[p.lineNumber - 1].substring(0, p.column - 1) +
                a[0] +
                this._lines[p.lineNumber - 1].substring(p.column - 1),
            );
            return;
          }
          (a[a.length - 1] += this._lines[p.lineNumber - 1].substring(p.column - 1)),
            this._setLineText(
              p.lineNumber - 1,
              this._lines[p.lineNumber - 1].substring(0, p.column - 1) + a[0],
            );
          const m = new Uint32Array(a.length - 1);
          for (let e = 1; e < a.length; e++)
            this._lines.splice(p.lineNumber + e - 1, 0, a[e]),
              (m[e - 1] = a[e].length + this._eol.length);
          this._lineStarts && this._lineStarts.insertValues(p.lineNumber, m);
        }
      }
      r.MirrorTextModel = b;
    }),
    X(J[61], K([0, 1, 6, 47, 4, 2, 58]), function (W, r, n, D, A, b, f) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.Searcher = r.TextModelSearch = r.SearchParams = void 0),
        (r.isMultilineRegexSource = a),
        (r.createFindMatch = m),
        (r.isValidMatch = d);
      const p = 999;
      class h {
        constructor(w, S, R, v) {
          (this.searchString = w),
            (this.isRegex = S),
            (this.matchCase = R),
            (this.wordSeparators = v);
        }
        parseSearchRequest() {
          if (this.searchString === '') return null;
          let w;
          this.isRegex
            ? (w = a(this.searchString))
            : (w =
                this.searchString.indexOf(`
`) >= 0);
          let S = null;
          try {
            S = n.createRegExp(this.searchString, this.isRegex, {
              matchCase: this.matchCase,
              wholeWord: !1,
              multiline: w,
              global: !0,
              unicode: !0,
            });
          } catch {
            return null;
          }
          if (!S) return null;
          let R = !this.isRegex && !w;
          return (
            R &&
              this.searchString.toLowerCase() !== this.searchString.toUpperCase() &&
              (R = this.matchCase),
            new f.SearchData(
              S,
              this.wordSeparators ? (0, D.getMapForWordSeparators)(this.wordSeparators, []) : null,
              R ? this.searchString : null,
            )
          );
        }
      }
      r.SearchParams = h;
      function a(_) {
        if (!_ || _.length === 0) return !1;
        for (let w = 0, S = _.length; w < S; w++) {
          const R = _.charCodeAt(w);
          if (R === 10) return !0;
          if (R === 92) {
            if ((w++, w >= S)) break;
            const v = _.charCodeAt(w);
            if (v === 110 || v === 114 || v === 87) return !0;
          }
        }
        return !1;
      }
      function m(_, w, S) {
        if (!S) return new f.FindMatch(_, null);
        const R = [];
        for (let v = 0, i = w.length; v < i; v++) R[v] = w[v];
        return new f.FindMatch(_, R);
      }
      class e {
        constructor(w) {
          const S = [];
          let R = 0;
          for (let v = 0, i = w.length; v < i; v++) w.charCodeAt(v) === 10 && (S[R++] = v);
          this._lineFeedsOffsets = S;
        }
        findLineFeedCountBeforeOffset(w) {
          const S = this._lineFeedsOffsets;
          let R = 0,
            v = S.length - 1;
          if (v === -1 || w <= S[0]) return 0;
          for (; R < v; ) {
            const i = R + (((v - R) / 2) >> 0);
            S[i] >= w ? (v = i - 1) : S[i + 1] >= w ? ((R = i), (v = i)) : (R = i + 1);
          }
          return R + 1;
        }
      }
      class c {
        static findMatches(w, S, R, v, i) {
          const l = S.parseSearchRequest();
          return l
            ? l.regex.multiline
              ? this._doFindMatchesMultiline(w, R, new o(l.wordSeparators, l.regex), v, i)
              : this._doFindMatchesLineByLine(w, R, l, v, i)
            : [];
        }
        static _getMultilineMatchRange(w, S, R, v, i, l) {
          let g,
            L = 0;
          v ? ((L = v.findLineFeedCountBeforeOffset(i)), (g = S + i + L)) : (g = S + i);
          let C;
          if (v) {
            const x = v.findLineFeedCountBeforeOffset(i + l.length) - L;
            C = g + l.length + x;
          } else C = g + l.length;
          const N = w.getPositionAt(g),
            E = w.getPositionAt(C);
          return new b.Range(N.lineNumber, N.column, E.lineNumber, E.column);
        }
        static _doFindMatchesMultiline(w, S, R, v, i) {
          const l = w.getOffsetAt(S.getStartPosition()),
            g = w.getValueInRange(S, 1),
            L =
              w.getEOL() ===
              `\r
`
                ? new e(g)
                : null,
            C = [];
          let N = 0,
            E;
          for (R.reset(0); (E = R.next(g)); )
            if (
              ((C[N++] = m(this._getMultilineMatchRange(w, l, g, L, E.index, E[0]), E, v)), N >= i)
            )
              return C;
          return C;
        }
        static _doFindMatchesLineByLine(w, S, R, v, i) {
          const l = [];
          let g = 0;
          if (S.startLineNumber === S.endLineNumber) {
            const C = w
              .getLineContent(S.startLineNumber)
              .substring(S.startColumn - 1, S.endColumn - 1);
            return (
              (g = this._findMatchesInLine(R, C, S.startLineNumber, S.startColumn - 1, g, l, v, i)),
              l
            );
          }
          const L = w.getLineContent(S.startLineNumber).substring(S.startColumn - 1);
          g = this._findMatchesInLine(R, L, S.startLineNumber, S.startColumn - 1, g, l, v, i);
          for (let C = S.startLineNumber + 1; C < S.endLineNumber && g < i; C++)
            g = this._findMatchesInLine(R, w.getLineContent(C), C, 0, g, l, v, i);
          if (g < i) {
            const C = w.getLineContent(S.endLineNumber).substring(0, S.endColumn - 1);
            g = this._findMatchesInLine(R, C, S.endLineNumber, 0, g, l, v, i);
          }
          return l;
        }
        static _findMatchesInLine(w, S, R, v, i, l, g, L) {
          const C = w.wordSeparators;
          if (!g && w.simpleSearch) {
            const y = w.simpleSearch,
              x = y.length,
              M = S.length;
            let I = -x;
            for (; (I = S.indexOf(y, I + x)) !== -1; )
              if (
                (!C || d(C, S, M, I, x)) &&
                ((l[i++] = new f.FindMatch(new b.Range(R, I + 1 + v, R, I + 1 + x + v), null)),
                i >= L)
              )
                return i;
            return i;
          }
          const N = new o(w.wordSeparators, w.regex);
          let E;
          N.reset(0);
          do
            if (
              ((E = N.next(S)),
              E &&
                ((l[i++] = m(
                  new b.Range(R, E.index + 1 + v, R, E.index + 1 + E[0].length + v),
                  E,
                  g,
                )),
                i >= L))
            )
              return i;
          while (E);
          return i;
        }
        static findNextMatch(w, S, R, v) {
          const i = S.parseSearchRequest();
          if (!i) return null;
          const l = new o(i.wordSeparators, i.regex);
          return i.regex.multiline
            ? this._doFindNextMatchMultiline(w, R, l, v)
            : this._doFindNextMatchLineByLine(w, R, l, v);
        }
        static _doFindNextMatchMultiline(w, S, R, v) {
          const i = new A.Position(S.lineNumber, 1),
            l = w.getOffsetAt(i),
            g = w.getLineCount(),
            L = w.getValueInRange(new b.Range(i.lineNumber, i.column, g, w.getLineMaxColumn(g)), 1),
            C =
              w.getEOL() ===
              `\r
`
                ? new e(L)
                : null;
          R.reset(S.column - 1);
          const N = R.next(L);
          return N
            ? m(this._getMultilineMatchRange(w, l, L, C, N.index, N[0]), N, v)
            : S.lineNumber !== 1 || S.column !== 1
              ? this._doFindNextMatchMultiline(w, new A.Position(1, 1), R, v)
              : null;
        }
        static _doFindNextMatchLineByLine(w, S, R, v) {
          const i = w.getLineCount(),
            l = S.lineNumber,
            g = w.getLineContent(l),
            L = this._findFirstMatchInLine(R, g, l, S.column, v);
          if (L) return L;
          for (let C = 1; C <= i; C++) {
            const N = (l + C - 1) % i,
              E = w.getLineContent(N + 1),
              y = this._findFirstMatchInLine(R, E, N + 1, 1, v);
            if (y) return y;
          }
          return null;
        }
        static _findFirstMatchInLine(w, S, R, v, i) {
          w.reset(v - 1);
          const l = w.next(S);
          return l ? m(new b.Range(R, l.index + 1, R, l.index + 1 + l[0].length), l, i) : null;
        }
        static findPreviousMatch(w, S, R, v) {
          const i = S.parseSearchRequest();
          if (!i) return null;
          const l = new o(i.wordSeparators, i.regex);
          return i.regex.multiline
            ? this._doFindPreviousMatchMultiline(w, R, l, v)
            : this._doFindPreviousMatchLineByLine(w, R, l, v);
        }
        static _doFindPreviousMatchMultiline(w, S, R, v) {
          const i = this._doFindMatchesMultiline(
            w,
            new b.Range(1, 1, S.lineNumber, S.column),
            R,
            v,
            10 * p,
          );
          if (i.length > 0) return i[i.length - 1];
          const l = w.getLineCount();
          return S.lineNumber !== l || S.column !== w.getLineMaxColumn(l)
            ? this._doFindPreviousMatchMultiline(w, new A.Position(l, w.getLineMaxColumn(l)), R, v)
            : null;
        }
        static _doFindPreviousMatchLineByLine(w, S, R, v) {
          const i = w.getLineCount(),
            l = S.lineNumber,
            g = w.getLineContent(l).substring(0, S.column - 1),
            L = this._findLastMatchInLine(R, g, l, v);
          if (L) return L;
          for (let C = 1; C <= i; C++) {
            const N = (i + l - C - 1) % i,
              E = w.getLineContent(N + 1),
              y = this._findLastMatchInLine(R, E, N + 1, v);
            if (y) return y;
          }
          return null;
        }
        static _findLastMatchInLine(w, S, R, v) {
          let i = null,
            l;
          for (w.reset(0); (l = w.next(S)); )
            i = m(new b.Range(R, l.index + 1, R, l.index + 1 + l[0].length), l, v);
          return i;
        }
      }
      r.TextModelSearch = c;
      function s(_, w, S, R, v) {
        if (R === 0) return !0;
        const i = w.charCodeAt(R - 1);
        if (_.get(i) !== 0 || i === 13 || i === 10) return !0;
        if (v > 0) {
          const l = w.charCodeAt(R);
          if (_.get(l) !== 0) return !0;
        }
        return !1;
      }
      function u(_, w, S, R, v) {
        if (R + v === S) return !0;
        const i = w.charCodeAt(R + v);
        if (_.get(i) !== 0 || i === 13 || i === 10) return !0;
        if (v > 0) {
          const l = w.charCodeAt(R + v - 1);
          if (_.get(l) !== 0) return !0;
        }
        return !1;
      }
      function d(_, w, S, R, v) {
        return s(_, w, S, R, v) && u(_, w, S, R, v);
      }
      class o {
        constructor(w, S) {
          (this._wordSeparators = w),
            (this._searchRegex = S),
            (this._prevMatchStartIndex = -1),
            (this._prevMatchLength = 0);
        }
        reset(w) {
          (this._searchRegex.lastIndex = w),
            (this._prevMatchStartIndex = -1),
            (this._prevMatchLength = 0);
        }
        next(w) {
          const S = w.length;
          let R;
          do {
            if (
              this._prevMatchStartIndex + this._prevMatchLength === S ||
              ((R = this._searchRegex.exec(w)), !R)
            )
              return null;
            const v = R.index,
              i = R[0].length;
            if (v === this._prevMatchStartIndex && i === this._prevMatchLength) {
              if (i === 0) {
                n.getNextCodePoint(w, S, this._searchRegex.lastIndex) > 65535
                  ? (this._searchRegex.lastIndex += 2)
                  : (this._searchRegex.lastIndex += 1);
                continue;
              }
              return null;
            }
            if (
              ((this._prevMatchStartIndex = v),
              (this._prevMatchLength = i),
              !this._wordSeparators || d(this._wordSeparators, w, S, v, i))
            )
              return R;
          } while (R);
          return null;
        }
      }
      r.Searcher = o;
    }),
    X(J[62], K([0, 1]), function (W, r) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.findSectionHeaders = A);
      const n = new RegExp('\\bMARK:\\s*(.*)$', 'd'),
        D = /^-+|-+$/g;
      function A(a, m) {
        var e;
        let c = [];
        if (
          m.findRegionSectionHeaders &&
          !((e = m.foldingRules) === null || e === void 0) &&
          e.markers
        ) {
          const s = b(a, m);
          c = c.concat(s);
        }
        if (m.findMarkSectionHeaders) {
          const s = f(a);
          c = c.concat(s);
        }
        return c;
      }
      function b(a, m) {
        const e = [],
          c = a.getLineCount();
        for (let s = 1; s <= c; s++) {
          const u = a.getLineContent(s),
            d = u.match(m.foldingRules.markers.start);
          if (d) {
            const o = {
              startLineNumber: s,
              startColumn: d[0].length + 1,
              endLineNumber: s,
              endColumn: u.length + 1,
            };
            if (o.endColumn > o.startColumn) {
              const _ = { range: o, ...h(u.substring(d[0].length)), shouldBeInComments: !1 };
              (_.text || _.hasSeparatorLine) && e.push(_);
            }
          }
        }
        return e;
      }
      function f(a) {
        const m = [],
          e = a.getLineCount();
        for (let c = 1; c <= e; c++) {
          const s = a.getLineContent(c);
          p(s, c, m);
        }
        return m;
      }
      function p(a, m, e) {
        n.lastIndex = 0;
        const c = n.exec(a);
        if (c) {
          const s = c.indices[1][0] + 1,
            u = c.indices[1][1] + 1,
            d = { startLineNumber: m, startColumn: s, endLineNumber: m, endColumn: u };
          if (d.endColumn > d.startColumn) {
            const o = { range: d, ...h(c[1]), shouldBeInComments: !0 };
            (o.text || o.hasSeparatorLine) && e.push(o);
          }
        }
      }
      function h(a) {
        a = a.trim();
        const m = a.startsWith('-');
        return (a = a.replace(D, '')), { text: a, hasSeparatorLine: m };
      }
    }),
    X(J[63], K([0, 1, 2, 61, 6, 9, 31]), function (W, r, n, D, A, b, f) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.UnicodeTextModelHighlighter = void 0);
      class p {
        static computeUnicodeHighlights(c, s, u) {
          const d = u ? u.startLineNumber : 1,
            o = u ? u.endLineNumber : c.getLineCount(),
            _ = new a(s),
            w = _.getCandidateCodePoints();
          let S;
          w === 'allNonBasicAscii'
            ? (S = new RegExp('[^\\t\\n\\r\\x20-\\x7E]', 'g'))
            : (S = new RegExp(`${h(Array.from(w))}`, 'g'));
          const R = new D.Searcher(null, S),
            v = [];
          let i = !1,
            l,
            g = 0,
            L = 0,
            C = 0;
          e: for (let N = d, E = o; N <= E; N++) {
            const y = c.getLineContent(N),
              x = y.length;
            R.reset(0);
            do
              if (((l = R.next(y)), l)) {
                let M = l.index,
                  I = l.index + l[0].length;
                if (M > 0) {
                  const $ = y.charCodeAt(M - 1);
                  A.isHighSurrogate($) && M--;
                }
                if (I + 1 < x) {
                  const $ = y.charCodeAt(I - 1);
                  A.isHighSurrogate($) && I++;
                }
                const k = y.substring(M, I);
                let F = (0, f.getWordAtText)(M + 1, f.DEFAULT_WORD_REGEXP, y, 0);
                F && F.endColumn <= M + 1 && (F = null);
                const z = _.shouldHighlightNonBasicASCII(k, F ? F.word : null);
                if (z !== 0) {
                  if (
                    (z === 3 ? g++ : z === 2 ? L++ : z === 1 ? C++ : (0, b.assertNever)(z),
                    v.length >= 1e3)
                  ) {
                    i = !0;
                    break e;
                  }
                  v.push(new n.Range(N, M + 1, N, I + 1));
                }
              }
            while (l);
          }
          return {
            ranges: v,
            hasMore: i,
            ambiguousCharacterCount: g,
            invisibleCharacterCount: L,
            nonBasicAsciiCharacterCount: C,
          };
        }
        static computeUnicodeHighlightReason(c, s) {
          const u = new a(s);
          switch (u.shouldHighlightNonBasicASCII(c, null)) {
            case 0:
              return null;
            case 2:
              return { kind: 1 };
            case 3: {
              const o = c.codePointAt(0),
                _ = u.ambiguousCharacters.getPrimaryConfusable(o),
                w = A.AmbiguousCharacters.getLocales().filter(
                  (S) =>
                    !A.AmbiguousCharacters.getInstance(
                      new Set([...s.allowedLocales, S]),
                    ).isAmbiguous(o),
                );
              return { kind: 0, confusableWith: String.fromCodePoint(_), notAmbiguousInLocales: w };
            }
            case 1:
              return { kind: 2 };
          }
        }
      }
      r.UnicodeTextModelHighlighter = p;
      function h(e, c) {
        return `[${A.escapeRegExpCharacters(e.map((u) => String.fromCodePoint(u)).join(''))}]`;
      }
      class a {
        constructor(c) {
          (this.options = c),
            (this.allowedCodePoints = new Set(c.allowedCodePoints)),
            (this.ambiguousCharacters = A.AmbiguousCharacters.getInstance(
              new Set(c.allowedLocales),
            ));
        }
        getCandidateCodePoints() {
          if (this.options.nonBasicASCII) return 'allNonBasicAscii';
          const c = new Set();
          if (this.options.invisibleCharacters)
            for (const s of A.InvisibleCharacters.codePoints)
              m(String.fromCodePoint(s)) || c.add(s);
          if (this.options.ambiguousCharacters)
            for (const s of this.ambiguousCharacters.getConfusableCodePoints()) c.add(s);
          for (const s of this.allowedCodePoints) c.delete(s);
          return c;
        }
        shouldHighlightNonBasicASCII(c, s) {
          const u = c.codePointAt(0);
          if (this.allowedCodePoints.has(u)) return 0;
          if (this.options.nonBasicASCII) return 1;
          let d = !1,
            o = !1;
          if (s)
            for (const _ of s) {
              const w = _.codePointAt(0),
                S = A.isBasicASCII(_);
              (d = d || S),
                !S &&
                  !this.ambiguousCharacters.isAmbiguous(w) &&
                  !A.InvisibleCharacters.isInvisibleCharacter(w) &&
                  (o = !0);
            }
          return !d && o
            ? 0
            : this.options.invisibleCharacters &&
                !m(c) &&
                A.InvisibleCharacters.isInvisibleCharacter(u)
              ? 2
              : this.options.ambiguousCharacters && this.ambiguousCharacters.isAmbiguous(u)
                ? 3
                : 0;
        }
      }
      function m(e) {
        return (
          e === ' ' ||
          e ===
            `
` ||
          e === '	'
        );
      }
    }),
    X(J[64], K([0, 1]), function (W, r) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.WrappingIndent =
          r.TrackedRangeStickiness =
          r.TextEditorCursorStyle =
          r.TextEditorCursorBlinkingStyle =
          r.SymbolTag =
          r.SymbolKind =
          r.SignatureHelpTriggerKind =
          r.ShowLightbulbIconMode =
          r.SelectionDirection =
          r.ScrollbarVisibility =
          r.ScrollType =
          r.RenderMinimap =
          r.RenderLineNumbersType =
          r.PositionAffinity =
          r.PartialAcceptTriggerKind =
          r.OverviewRulerLane =
          r.OverlayWidgetPositionPreference =
          r.NewSymbolNameTriggerKind =
          r.NewSymbolNameTag =
          r.MouseTargetType =
          r.MinimapSectionHeaderStyle =
          r.MinimapPosition =
          r.MarkerTag =
          r.MarkerSeverity =
          r.KeyCode =
          r.InlineEditTriggerKind =
          r.InlineCompletionTriggerKind =
          r.InlayHintKind =
          r.InjectedTextCursorStops =
          r.IndentAction =
          r.HoverVerbosityAction =
          r.GlyphMarginLane =
          r.EndOfLineSequence =
          r.EndOfLinePreference =
          r.EditorOption =
          r.EditorAutoIndentStrategy =
          r.DocumentHighlightKind =
          r.DefaultEndOfLine =
          r.CursorChangeReason =
          r.ContentWidgetPositionPreference =
          r.CompletionTriggerKind =
          r.CompletionItemTag =
          r.CompletionItemKind =
          r.CompletionItemInsertTextRule =
          r.CodeActionTriggerType =
          r.AccessibilitySupport =
            void 0);
      var n;
      (function (t) {
        (t[(t.Unknown = 0)] = 'Unknown'),
          (t[(t.Disabled = 1)] = 'Disabled'),
          (t[(t.Enabled = 2)] = 'Enabled');
      })(n || (r.AccessibilitySupport = n = {}));
      var D;
      (function (t) {
        (t[(t.Invoke = 1)] = 'Invoke'), (t[(t.Auto = 2)] = 'Auto');
      })(D || (r.CodeActionTriggerType = D = {}));
      var A;
      (function (t) {
        (t[(t.None = 0)] = 'None'),
          (t[(t.KeepWhitespace = 1)] = 'KeepWhitespace'),
          (t[(t.InsertAsSnippet = 4)] = 'InsertAsSnippet');
      })(A || (r.CompletionItemInsertTextRule = A = {}));
      var b;
      (function (t) {
        (t[(t.Method = 0)] = 'Method'),
          (t[(t.Function = 1)] = 'Function'),
          (t[(t.Constructor = 2)] = 'Constructor'),
          (t[(t.Field = 3)] = 'Field'),
          (t[(t.Variable = 4)] = 'Variable'),
          (t[(t.Class = 5)] = 'Class'),
          (t[(t.Struct = 6)] = 'Struct'),
          (t[(t.Interface = 7)] = 'Interface'),
          (t[(t.Module = 8)] = 'Module'),
          (t[(t.Property = 9)] = 'Property'),
          (t[(t.Event = 10)] = 'Event'),
          (t[(t.Operator = 11)] = 'Operator'),
          (t[(t.Unit = 12)] = 'Unit'),
          (t[(t.Value = 13)] = 'Value'),
          (t[(t.Constant = 14)] = 'Constant'),
          (t[(t.Enum = 15)] = 'Enum'),
          (t[(t.EnumMember = 16)] = 'EnumMember'),
          (t[(t.Keyword = 17)] = 'Keyword'),
          (t[(t.Text = 18)] = 'Text'),
          (t[(t.Color = 19)] = 'Color'),
          (t[(t.File = 20)] = 'File'),
          (t[(t.Reference = 21)] = 'Reference'),
          (t[(t.Customcolor = 22)] = 'Customcolor'),
          (t[(t.Folder = 23)] = 'Folder'),
          (t[(t.TypeParameter = 24)] = 'TypeParameter'),
          (t[(t.User = 25)] = 'User'),
          (t[(t.Issue = 26)] = 'Issue'),
          (t[(t.Snippet = 27)] = 'Snippet');
      })(b || (r.CompletionItemKind = b = {}));
      var f;
      (function (t) {
        t[(t.Deprecated = 1)] = 'Deprecated';
      })(f || (r.CompletionItemTag = f = {}));
      var p;
      (function (t) {
        (t[(t.Invoke = 0)] = 'Invoke'),
          (t[(t.TriggerCharacter = 1)] = 'TriggerCharacter'),
          (t[(t.TriggerForIncompleteCompletions = 2)] = 'TriggerForIncompleteCompletions');
      })(p || (r.CompletionTriggerKind = p = {}));
      var h;
      (function (t) {
        (t[(t.EXACT = 0)] = 'EXACT'), (t[(t.ABOVE = 1)] = 'ABOVE'), (t[(t.BELOW = 2)] = 'BELOW');
      })(h || (r.ContentWidgetPositionPreference = h = {}));
      var a;
      (function (t) {
        (t[(t.NotSet = 0)] = 'NotSet'),
          (t[(t.ContentFlush = 1)] = 'ContentFlush'),
          (t[(t.RecoverFromMarkers = 2)] = 'RecoverFromMarkers'),
          (t[(t.Explicit = 3)] = 'Explicit'),
          (t[(t.Paste = 4)] = 'Paste'),
          (t[(t.Undo = 5)] = 'Undo'),
          (t[(t.Redo = 6)] = 'Redo');
      })(a || (r.CursorChangeReason = a = {}));
      var m;
      (function (t) {
        (t[(t.LF = 1)] = 'LF'), (t[(t.CRLF = 2)] = 'CRLF');
      })(m || (r.DefaultEndOfLine = m = {}));
      var e;
      (function (t) {
        (t[(t.Text = 0)] = 'Text'), (t[(t.Read = 1)] = 'Read'), (t[(t.Write = 2)] = 'Write');
      })(e || (r.DocumentHighlightKind = e = {}));
      var c;
      (function (t) {
        (t[(t.None = 0)] = 'None'),
          (t[(t.Keep = 1)] = 'Keep'),
          (t[(t.Brackets = 2)] = 'Brackets'),
          (t[(t.Advanced = 3)] = 'Advanced'),
          (t[(t.Full = 4)] = 'Full');
      })(c || (r.EditorAutoIndentStrategy = c = {}));
      var s;
      (function (t) {
        (t[(t.acceptSuggestionOnCommitCharacter = 0)] = 'acceptSuggestionOnCommitCharacter'),
          (t[(t.acceptSuggestionOnEnter = 1)] = 'acceptSuggestionOnEnter'),
          (t[(t.accessibilitySupport = 2)] = 'accessibilitySupport'),
          (t[(t.accessibilityPageSize = 3)] = 'accessibilityPageSize'),
          (t[(t.ariaLabel = 4)] = 'ariaLabel'),
          (t[(t.ariaRequired = 5)] = 'ariaRequired'),
          (t[(t.autoClosingBrackets = 6)] = 'autoClosingBrackets'),
          (t[(t.autoClosingComments = 7)] = 'autoClosingComments'),
          (t[(t.screenReaderAnnounceInlineSuggestion = 8)] =
            'screenReaderAnnounceInlineSuggestion'),
          (t[(t.autoClosingDelete = 9)] = 'autoClosingDelete'),
          (t[(t.autoClosingOvertype = 10)] = 'autoClosingOvertype'),
          (t[(t.autoClosingQuotes = 11)] = 'autoClosingQuotes'),
          (t[(t.autoIndent = 12)] = 'autoIndent'),
          (t[(t.automaticLayout = 13)] = 'automaticLayout'),
          (t[(t.autoSurround = 14)] = 'autoSurround'),
          (t[(t.bracketPairColorization = 15)] = 'bracketPairColorization'),
          (t[(t.guides = 16)] = 'guides'),
          (t[(t.codeLens = 17)] = 'codeLens'),
          (t[(t.codeLensFontFamily = 18)] = 'codeLensFontFamily'),
          (t[(t.codeLensFontSize = 19)] = 'codeLensFontSize'),
          (t[(t.colorDecorators = 20)] = 'colorDecorators'),
          (t[(t.colorDecoratorsLimit = 21)] = 'colorDecoratorsLimit'),
          (t[(t.columnSelection = 22)] = 'columnSelection'),
          (t[(t.comments = 23)] = 'comments'),
          (t[(t.contextmenu = 24)] = 'contextmenu'),
          (t[(t.copyWithSyntaxHighlighting = 25)] = 'copyWithSyntaxHighlighting'),
          (t[(t.cursorBlinking = 26)] = 'cursorBlinking'),
          (t[(t.cursorSmoothCaretAnimation = 27)] = 'cursorSmoothCaretAnimation'),
          (t[(t.cursorStyle = 28)] = 'cursorStyle'),
          (t[(t.cursorSurroundingLines = 29)] = 'cursorSurroundingLines'),
          (t[(t.cursorSurroundingLinesStyle = 30)] = 'cursorSurroundingLinesStyle'),
          (t[(t.cursorWidth = 31)] = 'cursorWidth'),
          (t[(t.disableLayerHinting = 32)] = 'disableLayerHinting'),
          (t[(t.disableMonospaceOptimizations = 33)] = 'disableMonospaceOptimizations'),
          (t[(t.domReadOnly = 34)] = 'domReadOnly'),
          (t[(t.dragAndDrop = 35)] = 'dragAndDrop'),
          (t[(t.dropIntoEditor = 36)] = 'dropIntoEditor'),
          (t[(t.emptySelectionClipboard = 37)] = 'emptySelectionClipboard'),
          (t[(t.experimentalWhitespaceRendering = 38)] = 'experimentalWhitespaceRendering'),
          (t[(t.extraEditorClassName = 39)] = 'extraEditorClassName'),
          (t[(t.fastScrollSensitivity = 40)] = 'fastScrollSensitivity'),
          (t[(t.find = 41)] = 'find'),
          (t[(t.fixedOverflowWidgets = 42)] = 'fixedOverflowWidgets'),
          (t[(t.folding = 43)] = 'folding'),
          (t[(t.foldingStrategy = 44)] = 'foldingStrategy'),
          (t[(t.foldingHighlight = 45)] = 'foldingHighlight'),
          (t[(t.foldingImportsByDefault = 46)] = 'foldingImportsByDefault'),
          (t[(t.foldingMaximumRegions = 47)] = 'foldingMaximumRegions'),
          (t[(t.unfoldOnClickAfterEndOfLine = 48)] = 'unfoldOnClickAfterEndOfLine'),
          (t[(t.fontFamily = 49)] = 'fontFamily'),
          (t[(t.fontInfo = 50)] = 'fontInfo'),
          (t[(t.fontLigatures = 51)] = 'fontLigatures'),
          (t[(t.fontSize = 52)] = 'fontSize'),
          (t[(t.fontWeight = 53)] = 'fontWeight'),
          (t[(t.fontVariations = 54)] = 'fontVariations'),
          (t[(t.formatOnPaste = 55)] = 'formatOnPaste'),
          (t[(t.formatOnType = 56)] = 'formatOnType'),
          (t[(t.glyphMargin = 57)] = 'glyphMargin'),
          (t[(t.gotoLocation = 58)] = 'gotoLocation'),
          (t[(t.hideCursorInOverviewRuler = 59)] = 'hideCursorInOverviewRuler'),
          (t[(t.hover = 60)] = 'hover'),
          (t[(t.inDiffEditor = 61)] = 'inDiffEditor'),
          (t[(t.inlineSuggest = 62)] = 'inlineSuggest'),
          (t[(t.inlineEdit = 63)] = 'inlineEdit'),
          (t[(t.letterSpacing = 64)] = 'letterSpacing'),
          (t[(t.lightbulb = 65)] = 'lightbulb'),
          (t[(t.lineDecorationsWidth = 66)] = 'lineDecorationsWidth'),
          (t[(t.lineHeight = 67)] = 'lineHeight'),
          (t[(t.lineNumbers = 68)] = 'lineNumbers'),
          (t[(t.lineNumbersMinChars = 69)] = 'lineNumbersMinChars'),
          (t[(t.linkedEditing = 70)] = 'linkedEditing'),
          (t[(t.links = 71)] = 'links'),
          (t[(t.matchBrackets = 72)] = 'matchBrackets'),
          (t[(t.minimap = 73)] = 'minimap'),
          (t[(t.mouseStyle = 74)] = 'mouseStyle'),
          (t[(t.mouseWheelScrollSensitivity = 75)] = 'mouseWheelScrollSensitivity'),
          (t[(t.mouseWheelZoom = 76)] = 'mouseWheelZoom'),
          (t[(t.multiCursorMergeOverlapping = 77)] = 'multiCursorMergeOverlapping'),
          (t[(t.multiCursorModifier = 78)] = 'multiCursorModifier'),
          (t[(t.multiCursorPaste = 79)] = 'multiCursorPaste'),
          (t[(t.multiCursorLimit = 80)] = 'multiCursorLimit'),
          (t[(t.occurrencesHighlight = 81)] = 'occurrencesHighlight'),
          (t[(t.overviewRulerBorder = 82)] = 'overviewRulerBorder'),
          (t[(t.overviewRulerLanes = 83)] = 'overviewRulerLanes'),
          (t[(t.padding = 84)] = 'padding'),
          (t[(t.pasteAs = 85)] = 'pasteAs'),
          (t[(t.parameterHints = 86)] = 'parameterHints'),
          (t[(t.peekWidgetDefaultFocus = 87)] = 'peekWidgetDefaultFocus'),
          (t[(t.definitionLinkOpensInPeek = 88)] = 'definitionLinkOpensInPeek'),
          (t[(t.quickSuggestions = 89)] = 'quickSuggestions'),
          (t[(t.quickSuggestionsDelay = 90)] = 'quickSuggestionsDelay'),
          (t[(t.readOnly = 91)] = 'readOnly'),
          (t[(t.readOnlyMessage = 92)] = 'readOnlyMessage'),
          (t[(t.renameOnType = 93)] = 'renameOnType'),
          (t[(t.renderControlCharacters = 94)] = 'renderControlCharacters'),
          (t[(t.renderFinalNewline = 95)] = 'renderFinalNewline'),
          (t[(t.renderLineHighlight = 96)] = 'renderLineHighlight'),
          (t[(t.renderLineHighlightOnlyWhenFocus = 97)] = 'renderLineHighlightOnlyWhenFocus'),
          (t[(t.renderValidationDecorations = 98)] = 'renderValidationDecorations'),
          (t[(t.renderWhitespace = 99)] = 'renderWhitespace'),
          (t[(t.revealHorizontalRightPadding = 100)] = 'revealHorizontalRightPadding'),
          (t[(t.roundedSelection = 101)] = 'roundedSelection'),
          (t[(t.rulers = 102)] = 'rulers'),
          (t[(t.scrollbar = 103)] = 'scrollbar'),
          (t[(t.scrollBeyondLastColumn = 104)] = 'scrollBeyondLastColumn'),
          (t[(t.scrollBeyondLastLine = 105)] = 'scrollBeyondLastLine'),
          (t[(t.scrollPredominantAxis = 106)] = 'scrollPredominantAxis'),
          (t[(t.selectionClipboard = 107)] = 'selectionClipboard'),
          (t[(t.selectionHighlight = 108)] = 'selectionHighlight'),
          (t[(t.selectOnLineNumbers = 109)] = 'selectOnLineNumbers'),
          (t[(t.showFoldingControls = 110)] = 'showFoldingControls'),
          (t[(t.showUnused = 111)] = 'showUnused'),
          (t[(t.snippetSuggestions = 112)] = 'snippetSuggestions'),
          (t[(t.smartSelect = 113)] = 'smartSelect'),
          (t[(t.smoothScrolling = 114)] = 'smoothScrolling'),
          (t[(t.stickyScroll = 115)] = 'stickyScroll'),
          (t[(t.stickyTabStops = 116)] = 'stickyTabStops'),
          (t[(t.stopRenderingLineAfter = 117)] = 'stopRenderingLineAfter'),
          (t[(t.suggest = 118)] = 'suggest'),
          (t[(t.suggestFontSize = 119)] = 'suggestFontSize'),
          (t[(t.suggestLineHeight = 120)] = 'suggestLineHeight'),
          (t[(t.suggestOnTriggerCharacters = 121)] = 'suggestOnTriggerCharacters'),
          (t[(t.suggestSelection = 122)] = 'suggestSelection'),
          (t[(t.tabCompletion = 123)] = 'tabCompletion'),
          (t[(t.tabIndex = 124)] = 'tabIndex'),
          (t[(t.unicodeHighlighting = 125)] = 'unicodeHighlighting'),
          (t[(t.unusualLineTerminators = 126)] = 'unusualLineTerminators'),
          (t[(t.useShadowDOM = 127)] = 'useShadowDOM'),
          (t[(t.useTabStops = 128)] = 'useTabStops'),
          (t[(t.wordBreak = 129)] = 'wordBreak'),
          (t[(t.wordSegmenterLocales = 130)] = 'wordSegmenterLocales'),
          (t[(t.wordSeparators = 131)] = 'wordSeparators'),
          (t[(t.wordWrap = 132)] = 'wordWrap'),
          (t[(t.wordWrapBreakAfterCharacters = 133)] = 'wordWrapBreakAfterCharacters'),
          (t[(t.wordWrapBreakBeforeCharacters = 134)] = 'wordWrapBreakBeforeCharacters'),
          (t[(t.wordWrapColumn = 135)] = 'wordWrapColumn'),
          (t[(t.wordWrapOverride1 = 136)] = 'wordWrapOverride1'),
          (t[(t.wordWrapOverride2 = 137)] = 'wordWrapOverride2'),
          (t[(t.wrappingIndent = 138)] = 'wrappingIndent'),
          (t[(t.wrappingStrategy = 139)] = 'wrappingStrategy'),
          (t[(t.showDeprecated = 140)] = 'showDeprecated'),
          (t[(t.inlayHints = 141)] = 'inlayHints'),
          (t[(t.editorClassName = 142)] = 'editorClassName'),
          (t[(t.pixelRatio = 143)] = 'pixelRatio'),
          (t[(t.tabFocusMode = 144)] = 'tabFocusMode'),
          (t[(t.layoutInfo = 145)] = 'layoutInfo'),
          (t[(t.wrappingInfo = 146)] = 'wrappingInfo'),
          (t[(t.defaultColorDecorators = 147)] = 'defaultColorDecorators'),
          (t[(t.colorDecoratorsActivatedOn = 148)] = 'colorDecoratorsActivatedOn'),
          (t[(t.inlineCompletionsAccessibilityVerbose = 149)] =
            'inlineCompletionsAccessibilityVerbose');
      })(s || (r.EditorOption = s = {}));
      var u;
      (function (t) {
        (t[(t.TextDefined = 0)] = 'TextDefined'),
          (t[(t.LF = 1)] = 'LF'),
          (t[(t.CRLF = 2)] = 'CRLF');
      })(u || (r.EndOfLinePreference = u = {}));
      var d;
      (function (t) {
        (t[(t.LF = 0)] = 'LF'), (t[(t.CRLF = 1)] = 'CRLF');
      })(d || (r.EndOfLineSequence = d = {}));
      var o;
      (function (t) {
        (t[(t.Left = 1)] = 'Left'), (t[(t.Center = 2)] = 'Center'), (t[(t.Right = 3)] = 'Right');
      })(o || (r.GlyphMarginLane = o = {}));
      var _;
      (function (t) {
        (t[(t.Increase = 0)] = 'Increase'), (t[(t.Decrease = 1)] = 'Decrease');
      })(_ || (r.HoverVerbosityAction = _ = {}));
      var w;
      (function (t) {
        (t[(t.None = 0)] = 'None'),
          (t[(t.Indent = 1)] = 'Indent'),
          (t[(t.IndentOutdent = 2)] = 'IndentOutdent'),
          (t[(t.Outdent = 3)] = 'Outdent');
      })(w || (r.IndentAction = w = {}));
      var S;
      (function (t) {
        (t[(t.Both = 0)] = 'Both'),
          (t[(t.Right = 1)] = 'Right'),
          (t[(t.Left = 2)] = 'Left'),
          (t[(t.None = 3)] = 'None');
      })(S || (r.InjectedTextCursorStops = S = {}));
      var R;
      (function (t) {
        (t[(t.Type = 1)] = 'Type'), (t[(t.Parameter = 2)] = 'Parameter');
      })(R || (r.InlayHintKind = R = {}));
      var v;
      (function (t) {
        (t[(t.Automatic = 0)] = 'Automatic'), (t[(t.Explicit = 1)] = 'Explicit');
      })(v || (r.InlineCompletionTriggerKind = v = {}));
      var i;
      (function (t) {
        (t[(t.Invoke = 0)] = 'Invoke'), (t[(t.Automatic = 1)] = 'Automatic');
      })(i || (r.InlineEditTriggerKind = i = {}));
      var l;
      (function (t) {
        (t[(t.DependsOnKbLayout = -1)] = 'DependsOnKbLayout'),
          (t[(t.Unknown = 0)] = 'Unknown'),
          (t[(t.Backspace = 1)] = 'Backspace'),
          (t[(t.Tab = 2)] = 'Tab'),
          (t[(t.Enter = 3)] = 'Enter'),
          (t[(t.Shift = 4)] = 'Shift'),
          (t[(t.Ctrl = 5)] = 'Ctrl'),
          (t[(t.Alt = 6)] = 'Alt'),
          (t[(t.PauseBreak = 7)] = 'PauseBreak'),
          (t[(t.CapsLock = 8)] = 'CapsLock'),
          (t[(t.Escape = 9)] = 'Escape'),
          (t[(t.Space = 10)] = 'Space'),
          (t[(t.PageUp = 11)] = 'PageUp'),
          (t[(t.PageDown = 12)] = 'PageDown'),
          (t[(t.End = 13)] = 'End'),
          (t[(t.Home = 14)] = 'Home'),
          (t[(t.LeftArrow = 15)] = 'LeftArrow'),
          (t[(t.UpArrow = 16)] = 'UpArrow'),
          (t[(t.RightArrow = 17)] = 'RightArrow'),
          (t[(t.DownArrow = 18)] = 'DownArrow'),
          (t[(t.Insert = 19)] = 'Insert'),
          (t[(t.Delete = 20)] = 'Delete'),
          (t[(t.Digit0 = 21)] = 'Digit0'),
          (t[(t.Digit1 = 22)] = 'Digit1'),
          (t[(t.Digit2 = 23)] = 'Digit2'),
          (t[(t.Digit3 = 24)] = 'Digit3'),
          (t[(t.Digit4 = 25)] = 'Digit4'),
          (t[(t.Digit5 = 26)] = 'Digit5'),
          (t[(t.Digit6 = 27)] = 'Digit6'),
          (t[(t.Digit7 = 28)] = 'Digit7'),
          (t[(t.Digit8 = 29)] = 'Digit8'),
          (t[(t.Digit9 = 30)] = 'Digit9'),
          (t[(t.KeyA = 31)] = 'KeyA'),
          (t[(t.KeyB = 32)] = 'KeyB'),
          (t[(t.KeyC = 33)] = 'KeyC'),
          (t[(t.KeyD = 34)] = 'KeyD'),
          (t[(t.KeyE = 35)] = 'KeyE'),
          (t[(t.KeyF = 36)] = 'KeyF'),
          (t[(t.KeyG = 37)] = 'KeyG'),
          (t[(t.KeyH = 38)] = 'KeyH'),
          (t[(t.KeyI = 39)] = 'KeyI'),
          (t[(t.KeyJ = 40)] = 'KeyJ'),
          (t[(t.KeyK = 41)] = 'KeyK'),
          (t[(t.KeyL = 42)] = 'KeyL'),
          (t[(t.KeyM = 43)] = 'KeyM'),
          (t[(t.KeyN = 44)] = 'KeyN'),
          (t[(t.KeyO = 45)] = 'KeyO'),
          (t[(t.KeyP = 46)] = 'KeyP'),
          (t[(t.KeyQ = 47)] = 'KeyQ'),
          (t[(t.KeyR = 48)] = 'KeyR'),
          (t[(t.KeyS = 49)] = 'KeyS'),
          (t[(t.KeyT = 50)] = 'KeyT'),
          (t[(t.KeyU = 51)] = 'KeyU'),
          (t[(t.KeyV = 52)] = 'KeyV'),
          (t[(t.KeyW = 53)] = 'KeyW'),
          (t[(t.KeyX = 54)] = 'KeyX'),
          (t[(t.KeyY = 55)] = 'KeyY'),
          (t[(t.KeyZ = 56)] = 'KeyZ'),
          (t[(t.Meta = 57)] = 'Meta'),
          (t[(t.ContextMenu = 58)] = 'ContextMenu'),
          (t[(t.F1 = 59)] = 'F1'),
          (t[(t.F2 = 60)] = 'F2'),
          (t[(t.F3 = 61)] = 'F3'),
          (t[(t.F4 = 62)] = 'F4'),
          (t[(t.F5 = 63)] = 'F5'),
          (t[(t.F6 = 64)] = 'F6'),
          (t[(t.F7 = 65)] = 'F7'),
          (t[(t.F8 = 66)] = 'F8'),
          (t[(t.F9 = 67)] = 'F9'),
          (t[(t.F10 = 68)] = 'F10'),
          (t[(t.F11 = 69)] = 'F11'),
          (t[(t.F12 = 70)] = 'F12'),
          (t[(t.F13 = 71)] = 'F13'),
          (t[(t.F14 = 72)] = 'F14'),
          (t[(t.F15 = 73)] = 'F15'),
          (t[(t.F16 = 74)] = 'F16'),
          (t[(t.F17 = 75)] = 'F17'),
          (t[(t.F18 = 76)] = 'F18'),
          (t[(t.F19 = 77)] = 'F19'),
          (t[(t.F20 = 78)] = 'F20'),
          (t[(t.F21 = 79)] = 'F21'),
          (t[(t.F22 = 80)] = 'F22'),
          (t[(t.F23 = 81)] = 'F23'),
          (t[(t.F24 = 82)] = 'F24'),
          (t[(t.NumLock = 83)] = 'NumLock'),
          (t[(t.ScrollLock = 84)] = 'ScrollLock'),
          (t[(t.Semicolon = 85)] = 'Semicolon'),
          (t[(t.Equal = 86)] = 'Equal'),
          (t[(t.Comma = 87)] = 'Comma'),
          (t[(t.Minus = 88)] = 'Minus'),
          (t[(t.Period = 89)] = 'Period'),
          (t[(t.Slash = 90)] = 'Slash'),
          (t[(t.Backquote = 91)] = 'Backquote'),
          (t[(t.BracketLeft = 92)] = 'BracketLeft'),
          (t[(t.Backslash = 93)] = 'Backslash'),
          (t[(t.BracketRight = 94)] = 'BracketRight'),
          (t[(t.Quote = 95)] = 'Quote'),
          (t[(t.OEM_8 = 96)] = 'OEM_8'),
          (t[(t.IntlBackslash = 97)] = 'IntlBackslash'),
          (t[(t.Numpad0 = 98)] = 'Numpad0'),
          (t[(t.Numpad1 = 99)] = 'Numpad1'),
          (t[(t.Numpad2 = 100)] = 'Numpad2'),
          (t[(t.Numpad3 = 101)] = 'Numpad3'),
          (t[(t.Numpad4 = 102)] = 'Numpad4'),
          (t[(t.Numpad5 = 103)] = 'Numpad5'),
          (t[(t.Numpad6 = 104)] = 'Numpad6'),
          (t[(t.Numpad7 = 105)] = 'Numpad7'),
          (t[(t.Numpad8 = 106)] = 'Numpad8'),
          (t[(t.Numpad9 = 107)] = 'Numpad9'),
          (t[(t.NumpadMultiply = 108)] = 'NumpadMultiply'),
          (t[(t.NumpadAdd = 109)] = 'NumpadAdd'),
          (t[(t.NUMPAD_SEPARATOR = 110)] = 'NUMPAD_SEPARATOR'),
          (t[(t.NumpadSubtract = 111)] = 'NumpadSubtract'),
          (t[(t.NumpadDecimal = 112)] = 'NumpadDecimal'),
          (t[(t.NumpadDivide = 113)] = 'NumpadDivide'),
          (t[(t.KEY_IN_COMPOSITION = 114)] = 'KEY_IN_COMPOSITION'),
          (t[(t.ABNT_C1 = 115)] = 'ABNT_C1'),
          (t[(t.ABNT_C2 = 116)] = 'ABNT_C2'),
          (t[(t.AudioVolumeMute = 117)] = 'AudioVolumeMute'),
          (t[(t.AudioVolumeUp = 118)] = 'AudioVolumeUp'),
          (t[(t.AudioVolumeDown = 119)] = 'AudioVolumeDown'),
          (t[(t.BrowserSearch = 120)] = 'BrowserSearch'),
          (t[(t.BrowserHome = 121)] = 'BrowserHome'),
          (t[(t.BrowserBack = 122)] = 'BrowserBack'),
          (t[(t.BrowserForward = 123)] = 'BrowserForward'),
          (t[(t.MediaTrackNext = 124)] = 'MediaTrackNext'),
          (t[(t.MediaTrackPrevious = 125)] = 'MediaTrackPrevious'),
          (t[(t.MediaStop = 126)] = 'MediaStop'),
          (t[(t.MediaPlayPause = 127)] = 'MediaPlayPause'),
          (t[(t.LaunchMediaPlayer = 128)] = 'LaunchMediaPlayer'),
          (t[(t.LaunchMail = 129)] = 'LaunchMail'),
          (t[(t.LaunchApp2 = 130)] = 'LaunchApp2'),
          (t[(t.Clear = 131)] = 'Clear'),
          (t[(t.MAX_VALUE = 132)] = 'MAX_VALUE');
      })(l || (r.KeyCode = l = {}));
      var g;
      (function (t) {
        (t[(t.Hint = 1)] = 'Hint'),
          (t[(t.Info = 2)] = 'Info'),
          (t[(t.Warning = 4)] = 'Warning'),
          (t[(t.Error = 8)] = 'Error');
      })(g || (r.MarkerSeverity = g = {}));
      var L;
      (function (t) {
        (t[(t.Unnecessary = 1)] = 'Unnecessary'), (t[(t.Deprecated = 2)] = 'Deprecated');
      })(L || (r.MarkerTag = L = {}));
      var C;
      (function (t) {
        (t[(t.Inline = 1)] = 'Inline'), (t[(t.Gutter = 2)] = 'Gutter');
      })(C || (r.MinimapPosition = C = {}));
      var N;
      (function (t) {
        (t[(t.Normal = 1)] = 'Normal'), (t[(t.Underlined = 2)] = 'Underlined');
      })(N || (r.MinimapSectionHeaderStyle = N = {}));
      var E;
      (function (t) {
        (t[(t.UNKNOWN = 0)] = 'UNKNOWN'),
          (t[(t.TEXTAREA = 1)] = 'TEXTAREA'),
          (t[(t.GUTTER_GLYPH_MARGIN = 2)] = 'GUTTER_GLYPH_MARGIN'),
          (t[(t.GUTTER_LINE_NUMBERS = 3)] = 'GUTTER_LINE_NUMBERS'),
          (t[(t.GUTTER_LINE_DECORATIONS = 4)] = 'GUTTER_LINE_DECORATIONS'),
          (t[(t.GUTTER_VIEW_ZONE = 5)] = 'GUTTER_VIEW_ZONE'),
          (t[(t.CONTENT_TEXT = 6)] = 'CONTENT_TEXT'),
          (t[(t.CONTENT_EMPTY = 7)] = 'CONTENT_EMPTY'),
          (t[(t.CONTENT_VIEW_ZONE = 8)] = 'CONTENT_VIEW_ZONE'),
          (t[(t.CONTENT_WIDGET = 9)] = 'CONTENT_WIDGET'),
          (t[(t.OVERVIEW_RULER = 10)] = 'OVERVIEW_RULER'),
          (t[(t.SCROLLBAR = 11)] = 'SCROLLBAR'),
          (t[(t.OVERLAY_WIDGET = 12)] = 'OVERLAY_WIDGET'),
          (t[(t.OUTSIDE_EDITOR = 13)] = 'OUTSIDE_EDITOR');
      })(E || (r.MouseTargetType = E = {}));
      var y;
      (function (t) {
        t[(t.AIGenerated = 1)] = 'AIGenerated';
      })(y || (r.NewSymbolNameTag = y = {}));
      var x;
      (function (t) {
        (t[(t.Invoke = 0)] = 'Invoke'), (t[(t.Automatic = 1)] = 'Automatic');
      })(x || (r.NewSymbolNameTriggerKind = x = {}));
      var M;
      (function (t) {
        (t[(t.TOP_RIGHT_CORNER = 0)] = 'TOP_RIGHT_CORNER'),
          (t[(t.BOTTOM_RIGHT_CORNER = 1)] = 'BOTTOM_RIGHT_CORNER'),
          (t[(t.TOP_CENTER = 2)] = 'TOP_CENTER');
      })(M || (r.OverlayWidgetPositionPreference = M = {}));
      var I;
      (function (t) {
        (t[(t.Left = 1)] = 'Left'),
          (t[(t.Center = 2)] = 'Center'),
          (t[(t.Right = 4)] = 'Right'),
          (t[(t.Full = 7)] = 'Full');
      })(I || (r.OverviewRulerLane = I = {}));
      var k;
      (function (t) {
        (t[(t.Word = 0)] = 'Word'), (t[(t.Line = 1)] = 'Line'), (t[(t.Suggest = 2)] = 'Suggest');
      })(k || (r.PartialAcceptTriggerKind = k = {}));
      var F;
      (function (t) {
        (t[(t.Left = 0)] = 'Left'),
          (t[(t.Right = 1)] = 'Right'),
          (t[(t.None = 2)] = 'None'),
          (t[(t.LeftOfInjectedText = 3)] = 'LeftOfInjectedText'),
          (t[(t.RightOfInjectedText = 4)] = 'RightOfInjectedText');
      })(F || (r.PositionAffinity = F = {}));
      var z;
      (function (t) {
        (t[(t.Off = 0)] = 'Off'),
          (t[(t.On = 1)] = 'On'),
          (t[(t.Relative = 2)] = 'Relative'),
          (t[(t.Interval = 3)] = 'Interval'),
          (t[(t.Custom = 4)] = 'Custom');
      })(z || (r.RenderLineNumbersType = z = {}));
      var $;
      (function (t) {
        (t[(t.None = 0)] = 'None'), (t[(t.Text = 1)] = 'Text'), (t[(t.Blocks = 2)] = 'Blocks');
      })($ || (r.RenderMinimap = $ = {}));
      var T;
      (function (t) {
        (t[(t.Smooth = 0)] = 'Smooth'), (t[(t.Immediate = 1)] = 'Immediate');
      })(T || (r.ScrollType = T = {}));
      var O;
      (function (t) {
        (t[(t.Auto = 1)] = 'Auto'),
          (t[(t.Hidden = 2)] = 'Hidden'),
          (t[(t.Visible = 3)] = 'Visible');
      })(O || (r.ScrollbarVisibility = O = {}));
      var B;
      (function (t) {
        (t[(t.LTR = 0)] = 'LTR'), (t[(t.RTL = 1)] = 'RTL');
      })(B || (r.SelectionDirection = B = {}));
      var V;
      (function (t) {
        (t.Off = 'off'), (t.OnCode = 'onCode'), (t.On = 'on');
      })(V || (r.ShowLightbulbIconMode = V = {}));
      var j;
      (function (t) {
        (t[(t.Invoke = 1)] = 'Invoke'),
          (t[(t.TriggerCharacter = 2)] = 'TriggerCharacter'),
          (t[(t.ContentChange = 3)] = 'ContentChange');
      })(j || (r.SignatureHelpTriggerKind = j = {}));
      var Z;
      (function (t) {
        (t[(t.File = 0)] = 'File'),
          (t[(t.Module = 1)] = 'Module'),
          (t[(t.Namespace = 2)] = 'Namespace'),
          (t[(t.Package = 3)] = 'Package'),
          (t[(t.Class = 4)] = 'Class'),
          (t[(t.Method = 5)] = 'Method'),
          (t[(t.Property = 6)] = 'Property'),
          (t[(t.Field = 7)] = 'Field'),
          (t[(t.Constructor = 8)] = 'Constructor'),
          (t[(t.Enum = 9)] = 'Enum'),
          (t[(t.Interface = 10)] = 'Interface'),
          (t[(t.Function = 11)] = 'Function'),
          (t[(t.Variable = 12)] = 'Variable'),
          (t[(t.Constant = 13)] = 'Constant'),
          (t[(t.String = 14)] = 'String'),
          (t[(t.Number = 15)] = 'Number'),
          (t[(t.Boolean = 16)] = 'Boolean'),
          (t[(t.Array = 17)] = 'Array'),
          (t[(t.Object = 18)] = 'Object'),
          (t[(t.Key = 19)] = 'Key'),
          (t[(t.Null = 20)] = 'Null'),
          (t[(t.EnumMember = 21)] = 'EnumMember'),
          (t[(t.Struct = 22)] = 'Struct'),
          (t[(t.Event = 23)] = 'Event'),
          (t[(t.Operator = 24)] = 'Operator'),
          (t[(t.TypeParameter = 25)] = 'TypeParameter');
      })(Z || (r.SymbolKind = Z = {}));
      var re;
      (function (t) {
        t[(t.Deprecated = 1)] = 'Deprecated';
      })(re || (r.SymbolTag = re = {}));
      var ae;
      (function (t) {
        (t[(t.Hidden = 0)] = 'Hidden'),
          (t[(t.Blink = 1)] = 'Blink'),
          (t[(t.Smooth = 2)] = 'Smooth'),
          (t[(t.Phase = 3)] = 'Phase'),
          (t[(t.Expand = 4)] = 'Expand'),
          (t[(t.Solid = 5)] = 'Solid');
      })(ae || (r.TextEditorCursorBlinkingStyle = ae = {}));
      var oe;
      (function (t) {
        (t[(t.Line = 1)] = 'Line'),
          (t[(t.Block = 2)] = 'Block'),
          (t[(t.Underline = 3)] = 'Underline'),
          (t[(t.LineThin = 4)] = 'LineThin'),
          (t[(t.BlockOutline = 5)] = 'BlockOutline'),
          (t[(t.UnderlineThin = 6)] = 'UnderlineThin');
      })(oe || (r.TextEditorCursorStyle = oe = {}));
      var ce;
      (function (t) {
        (t[(t.AlwaysGrowsWhenTypingAtEdges = 0)] = 'AlwaysGrowsWhenTypingAtEdges'),
          (t[(t.NeverGrowsWhenTypingAtEdges = 1)] = 'NeverGrowsWhenTypingAtEdges'),
          (t[(t.GrowsOnlyWhenTypingBefore = 2)] = 'GrowsOnlyWhenTypingBefore'),
          (t[(t.GrowsOnlyWhenTypingAfter = 3)] = 'GrowsOnlyWhenTypingAfter');
      })(ce || (r.TrackedRangeStickiness = ce = {}));
      var be;
      (function (t) {
        (t[(t.None = 0)] = 'None'),
          (t[(t.Same = 1)] = 'Same'),
          (t[(t.Indent = 2)] = 'Indent'),
          (t[(t.DeepIndent = 3)] = 'DeepIndent');
      })(be || (r.WrappingIndent = be = {}));
    }),
    X(J[65], K([0, 1, 10, 13]), function (W, r, n, D) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.TokenizationRegistry = void 0);
      class A {
        constructor() {
          (this._tokenizationSupports = new Map()),
            (this._factories = new Map()),
            (this._onDidChange = new n.Emitter()),
            (this.onDidChange = this._onDidChange.event),
            (this._colorMap = null);
        }
        handleChange(p) {
          this._onDidChange.fire({ changedLanguages: p, changedColorMap: !1 });
        }
        register(p, h) {
          return (
            this._tokenizationSupports.set(p, h),
            this.handleChange([p]),
            (0, D.toDisposable)(() => {
              this._tokenizationSupports.get(p) === h &&
                (this._tokenizationSupports.delete(p), this.handleChange([p]));
            })
          );
        }
        get(p) {
          return this._tokenizationSupports.get(p) || null;
        }
        registerFactory(p, h) {
          var a;
          (a = this._factories.get(p)) === null || a === void 0 || a.dispose();
          const m = new b(this, p, h);
          return (
            this._factories.set(p, m),
            (0, D.toDisposable)(() => {
              const e = this._factories.get(p);
              !e || e !== m || (this._factories.delete(p), e.dispose());
            })
          );
        }
        async getOrCreate(p) {
          const h = this.get(p);
          if (h) return h;
          const a = this._factories.get(p);
          return !a || a.isResolved ? null : (await a.resolve(), this.get(p));
        }
        isResolved(p) {
          if (this.get(p)) return !0;
          const a = this._factories.get(p);
          return !!(!a || a.isResolved);
        }
        setColorMap(p) {
          (this._colorMap = p),
            this._onDidChange.fire({
              changedLanguages: Array.from(this._tokenizationSupports.keys()),
              changedColorMap: !0,
            });
        }
        getColorMap() {
          return this._colorMap;
        }
        getDefaultBackground() {
          return this._colorMap && this._colorMap.length > 2 ? this._colorMap[2] : null;
        }
      }
      r.TokenizationRegistry = A;
      class b extends D.Disposable {
        get isResolved() {
          return this._isResolved;
        }
        constructor(p, h, a) {
          super(),
            (this._registry = p),
            (this._languageId = h),
            (this._factory = a),
            (this._isDisposed = !1),
            (this._resolvePromise = null),
            (this._isResolved = !1);
        }
        dispose() {
          (this._isDisposed = !0), super.dispose();
        }
        async resolve() {
          return (
            this._resolvePromise || (this._resolvePromise = this._create()), this._resolvePromise
          );
        }
        async _create() {
          const p = await this._factory.tokenizationSupport;
          (this._isResolved = !0),
            p && !this._isDisposed && this._register(this._registry.register(this._languageId, p));
        }
      }
    }),
    X(J[66], K([19, 67]), function (W, r) {
      return W.create('vs/base/common/platform', r);
    }),
    X(J[17], K([0, 1, 66]), function (W, r, n) {
      'use strict';
      var D, A;
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.isAndroid =
          r.isEdge =
          r.isSafari =
          r.isFirefox =
          r.isChrome =
          r.OS =
          r.setTimeout0 =
          r.setTimeout0IsFaster =
          r.language =
          r.userAgent =
          r.isMobile =
          r.isIOS =
          r.webWorkerOrigin =
          r.isWebWorker =
          r.isWeb =
          r.isNative =
          r.isLinux =
          r.isMacintosh =
          r.isWindows =
          r.LANGUAGE_DEFAULT =
            void 0),
        (r.isLittleEndian = N),
        (r.LANGUAGE_DEFAULT = 'en');
      let b = !1,
        f = !1,
        p = !1,
        h = !1,
        a = !1,
        m = !1,
        e = !1,
        c = !1,
        s = !1,
        u = !1,
        d,
        o = r.LANGUAGE_DEFAULT,
        _ = r.LANGUAGE_DEFAULT,
        w,
        S;
      const R = globalThis;
      let v;
      typeof R.vscode < 'u' && typeof R.vscode.process < 'u'
        ? (v = R.vscode.process)
        : typeof process < 'u' &&
          typeof ((D = process == null ? void 0 : process.versions) === null || D === void 0
            ? void 0
            : D.node) == 'string' &&
          (v = process);
      const i =
          typeof ((A = v?.versions) === null || A === void 0 ? void 0 : A.electron) == 'string',
        l = i && v?.type === 'renderer';
      if (typeof v == 'object') {
        (b = v.platform === 'win32'),
          (f = v.platform === 'darwin'),
          (p = v.platform === 'linux'),
          (h = p && !!v.env.SNAP && !!v.env.SNAP_REVISION),
          (e = i),
          (s = !!v.env.CI || !!v.env.BUILD_ARTIFACTSTAGINGDIRECTORY),
          (d = r.LANGUAGE_DEFAULT),
          (o = r.LANGUAGE_DEFAULT);
        const E = v.env.VSCODE_NLS_CONFIG;
        if (E)
          try {
            const y = JSON.parse(E),
              x = y.availableLanguages['*'];
            (d = y.locale),
              (_ = y.osLocale),
              (o = x || r.LANGUAGE_DEFAULT),
              (w = y._translationsConfigFile);
          } catch {}
        a = !0;
      } else
        typeof navigator == 'object' && !l
          ? ((S = navigator.userAgent),
            (b = S.indexOf('Windows') >= 0),
            (f = S.indexOf('Macintosh') >= 0),
            (c =
              (S.indexOf('Macintosh') >= 0 || S.indexOf('iPad') >= 0 || S.indexOf('iPhone') >= 0) &&
              !!navigator.maxTouchPoints &&
              navigator.maxTouchPoints > 0),
            (p = S.indexOf('Linux') >= 0),
            (u = S?.indexOf('Mobi') >= 0),
            (m = !0),
            (d = n.getConfiguredDefaultLocale(n.localize(0, null)) || r.LANGUAGE_DEFAULT),
            (o = d),
            (_ = navigator.language))
          : console.error('Unable to resolve platform.');
      let g = 0;
      f ? (g = 1) : b ? (g = 3) : p && (g = 2),
        (r.isWindows = b),
        (r.isMacintosh = f),
        (r.isLinux = p),
        (r.isNative = a),
        (r.isWeb = m),
        (r.isWebWorker = m && typeof R.importScripts == 'function'),
        (r.webWorkerOrigin = r.isWebWorker ? R.origin : void 0),
        (r.isIOS = c),
        (r.isMobile = u),
        (r.userAgent = S),
        (r.language = o),
        (r.setTimeout0IsFaster = typeof R.postMessage == 'function' && !R.importScripts),
        (r.setTimeout0 = (() => {
          if (r.setTimeout0IsFaster) {
            const E = [];
            R.addEventListener('message', (x) => {
              if (x.data && x.data.vscodeScheduleAsyncWork)
                for (let M = 0, I = E.length; M < I; M++) {
                  const k = E[M];
                  if (k.id === x.data.vscodeScheduleAsyncWork) {
                    E.splice(M, 1), k.callback();
                    return;
                  }
                }
            });
            let y = 0;
            return (x) => {
              const M = ++y;
              E.push({ id: M, callback: x }), R.postMessage({ vscodeScheduleAsyncWork: M }, '*');
            };
          }
          return (E) => setTimeout(E);
        })()),
        (r.OS = f || c ? 2 : b ? 1 : 3);
      let L = !0,
        C = !1;
      function N() {
        if (!C) {
          C = !0;
          const E = new Uint8Array(2);
          (E[0] = 1), (E[1] = 2), (L = new Uint16Array(E.buffer)[0] === 513);
        }
        return L;
      }
      (r.isChrome = !!(r.userAgent && r.userAgent.indexOf('Chrome') >= 0)),
        (r.isFirefox = !!(r.userAgent && r.userAgent.indexOf('Firefox') >= 0)),
        (r.isSafari = !!(!r.isChrome && r.userAgent && r.userAgent.indexOf('Safari') >= 0)),
        (r.isEdge = !!(r.userAgent && r.userAgent.indexOf('Edg/') >= 0)),
        (r.isAndroid = !!(r.userAgent && r.userAgent.indexOf('Android') >= 0));
    }),
    X(J[68], K([0, 1, 17]), function (W, r, n) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.platform = r.env = r.cwd = void 0);
      let D;
      const A = globalThis.vscode;
      if (typeof A < 'u' && typeof A.process < 'u') {
        const b = A.process;
        D = {
          get platform() {
            return b.platform;
          },
          get arch() {
            return b.arch;
          },
          get env() {
            return b.env;
          },
          cwd() {
            return b.cwd();
          },
        };
      } else
        typeof process < 'u'
          ? (D = {
              get platform() {
                return process.platform;
              },
              get arch() {
                return process.arch;
              },
              get env() {
                return process.env;
              },
              cwd() {
                return process.env.VSCODE_CWD || process.cwd();
              },
            })
          : (D = {
              get platform() {
                return n.isWindows ? 'win32' : n.isMacintosh ? 'darwin' : 'linux';
              },
              get arch() {},
              get env() {
                return {};
              },
              cwd() {
                return '/';
              },
            });
      (r.cwd = D.cwd), (r.env = D.env), (r.platform = D.platform);
    }),
    X(J[69], K([0, 1, 68]), function (W, r, n) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.sep =
          r.extname =
          r.basename =
          r.dirname =
          r.relative =
          r.resolve =
          r.normalize =
          r.posix =
          r.win32 =
            void 0);
      const D = 65,
        A = 97,
        b = 90,
        f = 122,
        p = 46,
        h = 47,
        a = 92,
        m = 58,
        e = 63;
      class c extends Error {
        constructor(l, g, L) {
          let C;
          typeof g == 'string' && g.indexOf('not ') === 0
            ? ((C = 'must not be'), (g = g.replace(/^not /, '')))
            : (C = 'must be');
          const N = l.indexOf('.') !== -1 ? 'property' : 'argument';
          let E = `The "${l}" ${N} ${C} of type ${g}`;
          (E += `. Received type ${typeof L}`), super(E), (this.code = 'ERR_INVALID_ARG_TYPE');
        }
      }
      function s(i, l) {
        if (i === null || typeof i != 'object') throw new c(l, 'Object', i);
      }
      function u(i, l) {
        if (typeof i != 'string') throw new c(l, 'string', i);
      }
      const d = n.platform === 'win32';
      function o(i) {
        return i === h || i === a;
      }
      function _(i) {
        return i === h;
      }
      function w(i) {
        return (i >= D && i <= b) || (i >= A && i <= f);
      }
      function S(i, l, g, L) {
        let C = '',
          N = 0,
          E = -1,
          y = 0,
          x = 0;
        for (let M = 0; M <= i.length; ++M) {
          if (M < i.length) x = i.charCodeAt(M);
          else {
            if (L(x)) break;
            x = h;
          }
          if (L(x)) {
            if (!(E === M - 1 || y === 1))
              if (y === 2) {
                if (
                  C.length < 2 ||
                  N !== 2 ||
                  C.charCodeAt(C.length - 1) !== p ||
                  C.charCodeAt(C.length - 2) !== p
                ) {
                  if (C.length > 2) {
                    const I = C.lastIndexOf(g);
                    I === -1
                      ? ((C = ''), (N = 0))
                      : ((C = C.slice(0, I)), (N = C.length - 1 - C.lastIndexOf(g))),
                      (E = M),
                      (y = 0);
                    continue;
                  } else if (C.length !== 0) {
                    (C = ''), (N = 0), (E = M), (y = 0);
                    continue;
                  }
                }
                l && ((C += C.length > 0 ? `${g}..` : '..'), (N = 2));
              } else
                C.length > 0 ? (C += `${g}${i.slice(E + 1, M)}`) : (C = i.slice(E + 1, M)),
                  (N = M - E - 1);
            (E = M), (y = 0);
          } else x === p && y !== -1 ? ++y : (y = -1);
        }
        return C;
      }
      function R(i, l) {
        s(l, 'pathObject');
        const g = l.dir || l.root,
          L = l.base || `${l.name || ''}${l.ext || ''}`;
        return g ? (g === l.root ? `${g}${L}` : `${g}${i}${L}`) : L;
      }
      r.win32 = {
        resolve(...i) {
          let l = '',
            g = '',
            L = !1;
          for (let C = i.length - 1; C >= -1; C--) {
            let N;
            if (C >= 0) {
              if (((N = i[C]), u(N, 'path'), N.length === 0)) continue;
            } else
              l.length === 0
                ? (N = n.cwd())
                : ((N = n.env[`=${l}`] || n.cwd()),
                  (N === void 0 ||
                    (N.slice(0, 2).toLowerCase() !== l.toLowerCase() && N.charCodeAt(2) === a)) &&
                    (N = `${l}\\`));
            const E = N.length;
            let y = 0,
              x = '',
              M = !1;
            const I = N.charCodeAt(0);
            if (E === 1) o(I) && ((y = 1), (M = !0));
            else if (o(I))
              if (((M = !0), o(N.charCodeAt(1)))) {
                let k = 2,
                  F = k;
                for (; k < E && !o(N.charCodeAt(k)); ) k++;
                if (k < E && k !== F) {
                  const z = N.slice(F, k);
                  for (F = k; k < E && o(N.charCodeAt(k)); ) k++;
                  if (k < E && k !== F) {
                    for (F = k; k < E && !o(N.charCodeAt(k)); ) k++;
                    (k === E || k !== F) && ((x = `\\\\${z}\\${N.slice(F, k)}`), (y = k));
                  }
                }
              } else y = 1;
            else
              w(I) &&
                N.charCodeAt(1) === m &&
                ((x = N.slice(0, 2)), (y = 2), E > 2 && o(N.charCodeAt(2)) && ((M = !0), (y = 3)));
            if (x.length > 0)
              if (l.length > 0) {
                if (x.toLowerCase() !== l.toLowerCase()) continue;
              } else l = x;
            if (L) {
              if (l.length > 0) break;
            } else if (((g = `${N.slice(y)}\\${g}`), (L = M), M && l.length > 0)) break;
          }
          return (g = S(g, !L, '\\', o)), L ? `${l}\\${g}` : `${l}${g}` || '.';
        },
        normalize(i) {
          u(i, 'path');
          const l = i.length;
          if (l === 0) return '.';
          let g = 0,
            L,
            C = !1;
          const N = i.charCodeAt(0);
          if (l === 1) return _(N) ? '\\' : i;
          if (o(N))
            if (((C = !0), o(i.charCodeAt(1)))) {
              let y = 2,
                x = y;
              for (; y < l && !o(i.charCodeAt(y)); ) y++;
              if (y < l && y !== x) {
                const M = i.slice(x, y);
                for (x = y; y < l && o(i.charCodeAt(y)); ) y++;
                if (y < l && y !== x) {
                  for (x = y; y < l && !o(i.charCodeAt(y)); ) y++;
                  if (y === l) return `\\\\${M}\\${i.slice(x)}\\`;
                  y !== x && ((L = `\\\\${M}\\${i.slice(x, y)}`), (g = y));
                }
              }
            } else g = 1;
          else
            w(N) &&
              i.charCodeAt(1) === m &&
              ((L = i.slice(0, 2)), (g = 2), l > 2 && o(i.charCodeAt(2)) && ((C = !0), (g = 3)));
          let E = g < l ? S(i.slice(g), !C, '\\', o) : '';
          return (
            E.length === 0 && !C && (E = '.'),
            E.length > 0 && o(i.charCodeAt(l - 1)) && (E += '\\'),
            L === void 0 ? (C ? `\\${E}` : E) : C ? `${L}\\${E}` : `${L}${E}`
          );
        },
        isAbsolute(i) {
          u(i, 'path');
          const l = i.length;
          if (l === 0) return !1;
          const g = i.charCodeAt(0);
          return o(g) || (l > 2 && w(g) && i.charCodeAt(1) === m && o(i.charCodeAt(2)));
        },
        join(...i) {
          if (i.length === 0) return '.';
          let l, g;
          for (let N = 0; N < i.length; ++N) {
            const E = i[N];
            u(E, 'path'), E.length > 0 && (l === void 0 ? (l = g = E) : (l += `\\${E}`));
          }
          if (l === void 0) return '.';
          let L = !0,
            C = 0;
          if (typeof g == 'string' && o(g.charCodeAt(0))) {
            ++C;
            const N = g.length;
            N > 1 && o(g.charCodeAt(1)) && (++C, N > 2 && (o(g.charCodeAt(2)) ? ++C : (L = !1)));
          }
          if (L) {
            for (; C < l.length && o(l.charCodeAt(C)); ) C++;
            C >= 2 && (l = `\\${l.slice(C)}`);
          }
          return r.win32.normalize(l);
        },
        relative(i, l) {
          if ((u(i, 'from'), u(l, 'to'), i === l)) return '';
          const g = r.win32.resolve(i),
            L = r.win32.resolve(l);
          if (g === L || ((i = g.toLowerCase()), (l = L.toLowerCase()), i === l)) return '';
          let C = 0;
          for (; C < i.length && i.charCodeAt(C) === a; ) C++;
          let N = i.length;
          for (; N - 1 > C && i.charCodeAt(N - 1) === a; ) N--;
          const E = N - C;
          let y = 0;
          for (; y < l.length && l.charCodeAt(y) === a; ) y++;
          let x = l.length;
          for (; x - 1 > y && l.charCodeAt(x - 1) === a; ) x--;
          const M = x - y,
            I = E < M ? E : M;
          let k = -1,
            F = 0;
          for (; F < I; F++) {
            const $ = i.charCodeAt(C + F);
            if ($ !== l.charCodeAt(y + F)) break;
            $ === a && (k = F);
          }
          if (F !== I) {
            if (k === -1) return L;
          } else {
            if (M > I) {
              if (l.charCodeAt(y + F) === a) return L.slice(y + F + 1);
              if (F === 2) return L.slice(y + F);
            }
            E > I && (i.charCodeAt(C + F) === a ? (k = F) : F === 2 && (k = 3)),
              k === -1 && (k = 0);
          }
          let z = '';
          for (F = C + k + 1; F <= N; ++F)
            (F === N || i.charCodeAt(F) === a) && (z += z.length === 0 ? '..' : '\\..');
          return (
            (y += k),
            z.length > 0 ? `${z}${L.slice(y, x)}` : (L.charCodeAt(y) === a && ++y, L.slice(y, x))
          );
        },
        toNamespacedPath(i) {
          if (typeof i != 'string' || i.length === 0) return i;
          const l = r.win32.resolve(i);
          if (l.length <= 2) return i;
          if (l.charCodeAt(0) === a) {
            if (l.charCodeAt(1) === a) {
              const g = l.charCodeAt(2);
              if (g !== e && g !== p) return `\\\\?\\UNC\\${l.slice(2)}`;
            }
          } else if (w(l.charCodeAt(0)) && l.charCodeAt(1) === m && l.charCodeAt(2) === a)
            return `\\\\?\\${l}`;
          return i;
        },
        dirname(i) {
          u(i, 'path');
          const l = i.length;
          if (l === 0) return '.';
          let g = -1,
            L = 0;
          const C = i.charCodeAt(0);
          if (l === 1) return o(C) ? i : '.';
          if (o(C)) {
            if (((g = L = 1), o(i.charCodeAt(1)))) {
              let y = 2,
                x = y;
              for (; y < l && !o(i.charCodeAt(y)); ) y++;
              if (y < l && y !== x) {
                for (x = y; y < l && o(i.charCodeAt(y)); ) y++;
                if (y < l && y !== x) {
                  for (x = y; y < l && !o(i.charCodeAt(y)); ) y++;
                  if (y === l) return i;
                  y !== x && (g = L = y + 1);
                }
              }
            }
          } else
            w(C) && i.charCodeAt(1) === m && ((g = l > 2 && o(i.charCodeAt(2)) ? 3 : 2), (L = g));
          let N = -1,
            E = !0;
          for (let y = l - 1; y >= L; --y)
            if (o(i.charCodeAt(y))) {
              if (!E) {
                N = y;
                break;
              }
            } else E = !1;
          if (N === -1) {
            if (g === -1) return '.';
            N = g;
          }
          return i.slice(0, N);
        },
        basename(i, l) {
          l !== void 0 && u(l, 'ext'), u(i, 'path');
          let g = 0,
            L = -1,
            C = !0,
            N;
          if (
            (i.length >= 2 && w(i.charCodeAt(0)) && i.charCodeAt(1) === m && (g = 2),
            l !== void 0 && l.length > 0 && l.length <= i.length)
          ) {
            if (l === i) return '';
            let E = l.length - 1,
              y = -1;
            for (N = i.length - 1; N >= g; --N) {
              const x = i.charCodeAt(N);
              if (o(x)) {
                if (!C) {
                  g = N + 1;
                  break;
                }
              } else
                y === -1 && ((C = !1), (y = N + 1)),
                  E >= 0 && (x === l.charCodeAt(E) ? --E === -1 && (L = N) : ((E = -1), (L = y)));
            }
            return g === L ? (L = y) : L === -1 && (L = i.length), i.slice(g, L);
          }
          for (N = i.length - 1; N >= g; --N)
            if (o(i.charCodeAt(N))) {
              if (!C) {
                g = N + 1;
                break;
              }
            } else L === -1 && ((C = !1), (L = N + 1));
          return L === -1 ? '' : i.slice(g, L);
        },
        extname(i) {
          u(i, 'path');
          let l = 0,
            g = -1,
            L = 0,
            C = -1,
            N = !0,
            E = 0;
          i.length >= 2 && i.charCodeAt(1) === m && w(i.charCodeAt(0)) && (l = L = 2);
          for (let y = i.length - 1; y >= l; --y) {
            const x = i.charCodeAt(y);
            if (o(x)) {
              if (!N) {
                L = y + 1;
                break;
              }
              continue;
            }
            C === -1 && ((N = !1), (C = y + 1)),
              x === p ? (g === -1 ? (g = y) : E !== 1 && (E = 1)) : g !== -1 && (E = -1);
          }
          return g === -1 || C === -1 || E === 0 || (E === 1 && g === C - 1 && g === L + 1)
            ? ''
            : i.slice(g, C);
        },
        format: R.bind(null, '\\'),
        parse(i) {
          u(i, 'path');
          const l = { root: '', dir: '', base: '', ext: '', name: '' };
          if (i.length === 0) return l;
          const g = i.length;
          let L = 0,
            C = i.charCodeAt(0);
          if (g === 1) return o(C) ? ((l.root = l.dir = i), l) : ((l.base = l.name = i), l);
          if (o(C)) {
            if (((L = 1), o(i.charCodeAt(1)))) {
              let k = 2,
                F = k;
              for (; k < g && !o(i.charCodeAt(k)); ) k++;
              if (k < g && k !== F) {
                for (F = k; k < g && o(i.charCodeAt(k)); ) k++;
                if (k < g && k !== F) {
                  for (F = k; k < g && !o(i.charCodeAt(k)); ) k++;
                  k === g ? (L = k) : k !== F && (L = k + 1);
                }
              }
            }
          } else if (w(C) && i.charCodeAt(1) === m) {
            if (g <= 2) return (l.root = l.dir = i), l;
            if (((L = 2), o(i.charCodeAt(2)))) {
              if (g === 3) return (l.root = l.dir = i), l;
              L = 3;
            }
          }
          L > 0 && (l.root = i.slice(0, L));
          let N = -1,
            E = L,
            y = -1,
            x = !0,
            M = i.length - 1,
            I = 0;
          for (; M >= L; --M) {
            if (((C = i.charCodeAt(M)), o(C))) {
              if (!x) {
                E = M + 1;
                break;
              }
              continue;
            }
            y === -1 && ((x = !1), (y = M + 1)),
              C === p ? (N === -1 ? (N = M) : I !== 1 && (I = 1)) : N !== -1 && (I = -1);
          }
          return (
            y !== -1 &&
              (N === -1 || I === 0 || (I === 1 && N === y - 1 && N === E + 1)
                ? (l.base = l.name = i.slice(E, y))
                : ((l.name = i.slice(E, N)), (l.base = i.slice(E, y)), (l.ext = i.slice(N, y)))),
            E > 0 && E !== L ? (l.dir = i.slice(0, E - 1)) : (l.dir = l.root),
            l
          );
        },
        sep: '\\',
        delimiter: ';',
        win32: null,
        posix: null,
      };
      const v = (() => {
        if (d) {
          const i = /\\/g;
          return () => {
            const l = n.cwd().replace(i, '/');
            return l.slice(l.indexOf('/'));
          };
        }
        return () => n.cwd();
      })();
      (r.posix = {
        resolve(...i) {
          let l = '',
            g = !1;
          for (let L = i.length - 1; L >= -1 && !g; L--) {
            const C = L >= 0 ? i[L] : v();
            u(C, 'path'), C.length !== 0 && ((l = `${C}/${l}`), (g = C.charCodeAt(0) === h));
          }
          return (l = S(l, !g, '/', _)), g ? `/${l}` : l.length > 0 ? l : '.';
        },
        normalize(i) {
          if ((u(i, 'path'), i.length === 0)) return '.';
          const l = i.charCodeAt(0) === h,
            g = i.charCodeAt(i.length - 1) === h;
          return (
            (i = S(i, !l, '/', _)),
            i.length === 0 ? (l ? '/' : g ? './' : '.') : (g && (i += '/'), l ? `/${i}` : i)
          );
        },
        isAbsolute(i) {
          return u(i, 'path'), i.length > 0 && i.charCodeAt(0) === h;
        },
        join(...i) {
          if (i.length === 0) return '.';
          let l;
          for (let g = 0; g < i.length; ++g) {
            const L = i[g];
            u(L, 'path'), L.length > 0 && (l === void 0 ? (l = L) : (l += `/${L}`));
          }
          return l === void 0 ? '.' : r.posix.normalize(l);
        },
        relative(i, l) {
          if (
            (u(i, 'from'),
            u(l, 'to'),
            i === l || ((i = r.posix.resolve(i)), (l = r.posix.resolve(l)), i === l))
          )
            return '';
          const g = 1,
            L = i.length,
            C = L - g,
            N = 1,
            E = l.length - N,
            y = C < E ? C : E;
          let x = -1,
            M = 0;
          for (; M < y; M++) {
            const k = i.charCodeAt(g + M);
            if (k !== l.charCodeAt(N + M)) break;
            k === h && (x = M);
          }
          if (M === y)
            if (E > y) {
              if (l.charCodeAt(N + M) === h) return l.slice(N + M + 1);
              if (M === 0) return l.slice(N + M);
            } else C > y && (i.charCodeAt(g + M) === h ? (x = M) : M === 0 && (x = 0));
          let I = '';
          for (M = g + x + 1; M <= L; ++M)
            (M === L || i.charCodeAt(M) === h) && (I += I.length === 0 ? '..' : '/..');
          return `${I}${l.slice(N + x)}`;
        },
        toNamespacedPath(i) {
          return i;
        },
        dirname(i) {
          if ((u(i, 'path'), i.length === 0)) return '.';
          const l = i.charCodeAt(0) === h;
          let g = -1,
            L = !0;
          for (let C = i.length - 1; C >= 1; --C)
            if (i.charCodeAt(C) === h) {
              if (!L) {
                g = C;
                break;
              }
            } else L = !1;
          return g === -1 ? (l ? '/' : '.') : l && g === 1 ? '//' : i.slice(0, g);
        },
        basename(i, l) {
          l !== void 0 && u(l, 'ext'), u(i, 'path');
          let g = 0,
            L = -1,
            C = !0,
            N;
          if (l !== void 0 && l.length > 0 && l.length <= i.length) {
            if (l === i) return '';
            let E = l.length - 1,
              y = -1;
            for (N = i.length - 1; N >= 0; --N) {
              const x = i.charCodeAt(N);
              if (x === h) {
                if (!C) {
                  g = N + 1;
                  break;
                }
              } else
                y === -1 && ((C = !1), (y = N + 1)),
                  E >= 0 && (x === l.charCodeAt(E) ? --E === -1 && (L = N) : ((E = -1), (L = y)));
            }
            return g === L ? (L = y) : L === -1 && (L = i.length), i.slice(g, L);
          }
          for (N = i.length - 1; N >= 0; --N)
            if (i.charCodeAt(N) === h) {
              if (!C) {
                g = N + 1;
                break;
              }
            } else L === -1 && ((C = !1), (L = N + 1));
          return L === -1 ? '' : i.slice(g, L);
        },
        extname(i) {
          u(i, 'path');
          let l = -1,
            g = 0,
            L = -1,
            C = !0,
            N = 0;
          for (let E = i.length - 1; E >= 0; --E) {
            const y = i.charCodeAt(E);
            if (y === h) {
              if (!C) {
                g = E + 1;
                break;
              }
              continue;
            }
            L === -1 && ((C = !1), (L = E + 1)),
              y === p ? (l === -1 ? (l = E) : N !== 1 && (N = 1)) : l !== -1 && (N = -1);
          }
          return l === -1 || L === -1 || N === 0 || (N === 1 && l === L - 1 && l === g + 1)
            ? ''
            : i.slice(l, L);
        },
        format: R.bind(null, '/'),
        parse(i) {
          u(i, 'path');
          const l = { root: '', dir: '', base: '', ext: '', name: '' };
          if (i.length === 0) return l;
          const g = i.charCodeAt(0) === h;
          let L;
          g ? ((l.root = '/'), (L = 1)) : (L = 0);
          let C = -1,
            N = 0,
            E = -1,
            y = !0,
            x = i.length - 1,
            M = 0;
          for (; x >= L; --x) {
            const I = i.charCodeAt(x);
            if (I === h) {
              if (!y) {
                N = x + 1;
                break;
              }
              continue;
            }
            E === -1 && ((y = !1), (E = x + 1)),
              I === p ? (C === -1 ? (C = x) : M !== 1 && (M = 1)) : C !== -1 && (M = -1);
          }
          if (E !== -1) {
            const I = N === 0 && g ? 1 : N;
            C === -1 || M === 0 || (M === 1 && C === E - 1 && C === N + 1)
              ? (l.base = l.name = i.slice(I, E))
              : ((l.name = i.slice(I, C)), (l.base = i.slice(I, E)), (l.ext = i.slice(C, E)));
          }
          return N > 0 ? (l.dir = i.slice(0, N - 1)) : g && (l.dir = '/'), l;
        },
        sep: '/',
        delimiter: ':',
        win32: null,
        posix: null,
      }),
        (r.posix.win32 = r.win32.win32 = r.win32),
        (r.posix.posix = r.win32.posix = r.posix),
        (r.normalize = d ? r.win32.normalize : r.posix.normalize),
        (r.resolve = d ? r.win32.resolve : r.posix.resolve),
        (r.relative = d ? r.win32.relative : r.posix.relative),
        (r.dirname = d ? r.win32.dirname : r.posix.dirname),
        (r.basename = d ? r.win32.basename : r.posix.basename),
        (r.extname = d ? r.win32.extname : r.posix.extname),
        (r.sep = d ? r.win32.sep : r.posix.sep);
    }),
    X(J[18], K([0, 1, 69, 17]), function (W, r, n, D) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.URI = void 0), (r.uriToFsPath = S);
      const A = /^\w[\w\d+.-]*$/,
        b = /^\//,
        f = /^\/\//;
      function p(g, L) {
        if (!g.scheme && L)
          throw new Error(
            `[UriError]: Scheme is missing: {scheme: "", authority: "${g.authority}", path: "${g.path}", query: "${g.query}", fragment: "${g.fragment}"}`,
          );
        if (g.scheme && !A.test(g.scheme))
          throw new Error('[UriError]: Scheme contains illegal characters.');
        if (g.path) {
          if (g.authority) {
            if (!b.test(g.path))
              throw new Error(
                '[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character',
              );
          } else if (f.test(g.path))
            throw new Error(
              '[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")',
            );
        }
      }
      function h(g, L) {
        return !g && !L ? 'file' : g;
      }
      function a(g, L) {
        switch (g) {
          case 'https':
          case 'http':
          case 'file':
            L ? L[0] !== e && (L = e + L) : (L = e);
            break;
        }
        return L;
      }
      const m = '',
        e = '/',
        c = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
      class s {
        static isUri(L) {
          return L instanceof s
            ? !0
            : L
              ? typeof L.authority == 'string' &&
                typeof L.fragment == 'string' &&
                typeof L.path == 'string' &&
                typeof L.query == 'string' &&
                typeof L.scheme == 'string' &&
                typeof L.fsPath == 'string' &&
                typeof L.with == 'function' &&
                typeof L.toString == 'function'
              : !1;
        }
        constructor(L, C, N, E, y, x = !1) {
          typeof L == 'object'
            ? ((this.scheme = L.scheme || m),
              (this.authority = L.authority || m),
              (this.path = L.path || m),
              (this.query = L.query || m),
              (this.fragment = L.fragment || m))
            : ((this.scheme = h(L, x)),
              (this.authority = C || m),
              (this.path = a(this.scheme, N || m)),
              (this.query = E || m),
              (this.fragment = y || m),
              p(this, x));
        }
        get fsPath() {
          return S(this, !1);
        }
        with(L) {
          if (!L) return this;
          let { scheme: C, authority: N, path: E, query: y, fragment: x } = L;
          return (
            C === void 0 ? (C = this.scheme) : C === null && (C = m),
            N === void 0 ? (N = this.authority) : N === null && (N = m),
            E === void 0 ? (E = this.path) : E === null && (E = m),
            y === void 0 ? (y = this.query) : y === null && (y = m),
            x === void 0 ? (x = this.fragment) : x === null && (x = m),
            C === this.scheme &&
            N === this.authority &&
            E === this.path &&
            y === this.query &&
            x === this.fragment
              ? this
              : new d(C, N, E, y, x)
          );
        }
        static parse(L, C = !1) {
          const N = c.exec(L);
          return N
            ? new d(N[2] || m, l(N[4] || m), l(N[5] || m), l(N[7] || m), l(N[9] || m), C)
            : new d(m, m, m, m, m);
        }
        static file(L) {
          let C = m;
          if ((D.isWindows && (L = L.replace(/\\/g, e)), L[0] === e && L[1] === e)) {
            const N = L.indexOf(e, 2);
            N === -1
              ? ((C = L.substring(2)), (L = e))
              : ((C = L.substring(2, N)), (L = L.substring(N) || e));
          }
          return new d('file', C, L, m, m);
        }
        static from(L, C) {
          return new d(L.scheme, L.authority, L.path, L.query, L.fragment, C);
        }
        static joinPath(L, ...C) {
          if (!L.path) throw new Error('[UriError]: cannot call joinPath on URI without path');
          let N;
          return (
            D.isWindows && L.scheme === 'file'
              ? (N = s.file(n.win32.join(S(L, !0), ...C)).path)
              : (N = n.posix.join(L.path, ...C)),
            L.with({ path: N })
          );
        }
        toString(L = !1) {
          return R(this, L);
        }
        toJSON() {
          return this;
        }
        static revive(L) {
          var C, N;
          if (L) {
            if (L instanceof s) return L;
            {
              const E = new d(L);
              return (
                (E._formatted = (C = L.external) !== null && C !== void 0 ? C : null),
                (E._fsPath = L._sep === u && (N = L.fsPath) !== null && N !== void 0 ? N : null),
                E
              );
            }
          } else return L;
        }
      }
      r.URI = s;
      const u = D.isWindows ? 1 : void 0;
      class d extends s {
        constructor() {
          super(...arguments), (this._formatted = null), (this._fsPath = null);
        }
        get fsPath() {
          return this._fsPath || (this._fsPath = S(this, !1)), this._fsPath;
        }
        toString(L = !1) {
          return L
            ? R(this, !0)
            : (this._formatted || (this._formatted = R(this, !1)), this._formatted);
        }
        toJSON() {
          const L = { $mid: 1 };
          return (
            this._fsPath && ((L.fsPath = this._fsPath), (L._sep = u)),
            this._formatted && (L.external = this._formatted),
            this.path && (L.path = this.path),
            this.scheme && (L.scheme = this.scheme),
            this.authority && (L.authority = this.authority),
            this.query && (L.query = this.query),
            this.fragment && (L.fragment = this.fragment),
            L
          );
        }
      }
      const o = {
        58: '%3A',
        47: '%2F',
        63: '%3F',
        35: '%23',
        91: '%5B',
        93: '%5D',
        64: '%40',
        33: '%21',
        36: '%24',
        38: '%26',
        39: '%27',
        40: '%28',
        41: '%29',
        42: '%2A',
        43: '%2B',
        44: '%2C',
        59: '%3B',
        61: '%3D',
        32: '%20',
      };
      function _(g, L, C) {
        let N,
          E = -1;
        for (let y = 0; y < g.length; y++) {
          const x = g.charCodeAt(y);
          if (
            (x >= 97 && x <= 122) ||
            (x >= 65 && x <= 90) ||
            (x >= 48 && x <= 57) ||
            x === 45 ||
            x === 46 ||
            x === 95 ||
            x === 126 ||
            (L && x === 47) ||
            (C && x === 91) ||
            (C && x === 93) ||
            (C && x === 58)
          )
            E !== -1 && ((N += encodeURIComponent(g.substring(E, y))), (E = -1)),
              N !== void 0 && (N += g.charAt(y));
          else {
            N === void 0 && (N = g.substr(0, y));
            const M = o[x];
            M !== void 0
              ? (E !== -1 && ((N += encodeURIComponent(g.substring(E, y))), (E = -1)), (N += M))
              : E === -1 && (E = y);
          }
        }
        return E !== -1 && (N += encodeURIComponent(g.substring(E))), N !== void 0 ? N : g;
      }
      function w(g) {
        let L;
        for (let C = 0; C < g.length; C++) {
          const N = g.charCodeAt(C);
          N === 35 || N === 63
            ? (L === void 0 && (L = g.substr(0, C)), (L += o[N]))
            : L !== void 0 && (L += g[C]);
        }
        return L !== void 0 ? L : g;
      }
      function S(g, L) {
        let C;
        return (
          g.authority && g.path.length > 1 && g.scheme === 'file'
            ? (C = `//${g.authority}${g.path}`)
            : g.path.charCodeAt(0) === 47 &&
                ((g.path.charCodeAt(1) >= 65 && g.path.charCodeAt(1) <= 90) ||
                  (g.path.charCodeAt(1) >= 97 && g.path.charCodeAt(1) <= 122)) &&
                g.path.charCodeAt(2) === 58
              ? L
                ? (C = g.path.substr(1))
                : (C = g.path[1].toLowerCase() + g.path.substr(2))
              : (C = g.path),
          D.isWindows && (C = C.replace(/\//g, '\\')),
          C
        );
      }
      function R(g, L) {
        const C = L ? w : _;
        let N = '',
          { scheme: E, authority: y, path: x, query: M, fragment: I } = g;
        if ((E && ((N += E), (N += ':')), (y || E === 'file') && ((N += e), (N += e)), y)) {
          let k = y.indexOf('@');
          if (k !== -1) {
            const F = y.substr(0, k);
            (y = y.substr(k + 1)),
              (k = F.lastIndexOf(':')),
              k === -1
                ? (N += C(F, !1, !1))
                : ((N += C(F.substr(0, k), !1, !1)), (N += ':'), (N += C(F.substr(k + 1), !1, !0))),
              (N += '@');
          }
          (y = y.toLowerCase()),
            (k = y.lastIndexOf(':')),
            k === -1 ? (N += C(y, !1, !0)) : ((N += C(y.substr(0, k), !1, !0)), (N += y.substr(k)));
        }
        if (x) {
          if (x.length >= 3 && x.charCodeAt(0) === 47 && x.charCodeAt(2) === 58) {
            const k = x.charCodeAt(1);
            k >= 65 && k <= 90 && (x = `/${String.fromCharCode(k + 32)}:${x.substr(3)}`);
          } else if (x.length >= 2 && x.charCodeAt(1) === 58) {
            const k = x.charCodeAt(0);
            k >= 65 && k <= 90 && (x = `${String.fromCharCode(k + 32)}:${x.substr(2)}`);
          }
          N += C(x, !0, !1);
        }
        return (
          M && ((N += '?'), (N += C(M, !1, !1))), I && ((N += '#'), (N += L ? I : _(I, !1, !1))), N
        );
      }
      function v(g) {
        try {
          return decodeURIComponent(g);
        } catch {
          return g.length > 3 ? g.substr(0, 3) + v(g.substr(3)) : g;
        }
      }
      const i = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
      function l(g) {
        return g.match(i) ? g.replace(i, (L) => v(L)) : g;
      }
    }),
    X(J[73], K([0, 1, 5, 10, 13, 14, 17, 6]), function (W, r, n, D, A, b, f, p) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.SimpleWorkerServer = r.SimpleWorkerClient = void 0),
        (r.logOnceWebWorkerWarning = m),
        (r.create = i);
      const h = '$initialize';
      let a = !1;
      function m(l) {
        f.isWeb &&
          (a ||
            ((a = !0),
            console.warn(
              'Could not create web worker(s). Falling back to loading web worker code in main thread, which might cause UI freezes. Please see https://github.com/microsoft/monaco-editor#faq',
            )),
          console.warn(l.message));
      }
      class e {
        constructor(g, L, C, N) {
          (this.vsWorker = g), (this.req = L), (this.method = C), (this.args = N), (this.type = 0);
        }
      }
      class c {
        constructor(g, L, C, N) {
          (this.vsWorker = g), (this.seq = L), (this.res = C), (this.err = N), (this.type = 1);
        }
      }
      class s {
        constructor(g, L, C, N) {
          (this.vsWorker = g),
            (this.req = L),
            (this.eventName = C),
            (this.arg = N),
            (this.type = 2);
        }
      }
      class u {
        constructor(g, L, C) {
          (this.vsWorker = g), (this.req = L), (this.event = C), (this.type = 3);
        }
      }
      class d {
        constructor(g, L) {
          (this.vsWorker = g), (this.req = L), (this.type = 4);
        }
      }
      class o {
        constructor(g) {
          (this._workerId = -1),
            (this._handler = g),
            (this._lastSentReq = 0),
            (this._pendingReplies = Object.create(null)),
            (this._pendingEmitters = new Map()),
            (this._pendingEvents = new Map());
        }
        setWorkerId(g) {
          this._workerId = g;
        }
        sendMessage(g, L) {
          const C = String(++this._lastSentReq);
          return new Promise((N, E) => {
            (this._pendingReplies[C] = { resolve: N, reject: E }),
              this._send(new e(this._workerId, C, g, L));
          });
        }
        listen(g, L) {
          let C = null;
          const N = new D.Emitter({
            onWillAddFirstListener: () => {
              (C = String(++this._lastSentReq)),
                this._pendingEmitters.set(C, N),
                this._send(new s(this._workerId, C, g, L));
            },
            onDidRemoveLastListener: () => {
              this._pendingEmitters.delete(C), this._send(new d(this._workerId, C)), (C = null);
            },
          });
          return N.event;
        }
        handleMessage(g) {
          !g ||
            !g.vsWorker ||
            (this._workerId !== -1 && g.vsWorker !== this._workerId) ||
            this._handleMessage(g);
        }
        _handleMessage(g) {
          switch (g.type) {
            case 1:
              return this._handleReplyMessage(g);
            case 0:
              return this._handleRequestMessage(g);
            case 2:
              return this._handleSubscribeEventMessage(g);
            case 3:
              return this._handleEventMessage(g);
            case 4:
              return this._handleUnsubscribeEventMessage(g);
          }
        }
        _handleReplyMessage(g) {
          if (!this._pendingReplies[g.seq]) {
            console.warn('Got reply to unknown seq');
            return;
          }
          const L = this._pendingReplies[g.seq];
          if ((delete this._pendingReplies[g.seq], g.err)) {
            let C = g.err;
            g.err.$isError &&
              ((C = new Error()),
              (C.name = g.err.name),
              (C.message = g.err.message),
              (C.stack = g.err.stack)),
              L.reject(C);
            return;
          }
          L.resolve(g.res);
        }
        _handleRequestMessage(g) {
          const L = g.req;
          this._handler.handleMessage(g.method, g.args).then(
            (N) => {
              this._send(new c(this._workerId, L, N, void 0));
            },
            (N) => {
              N.detail instanceof Error &&
                (N.detail = (0, n.transformErrorForSerialization)(N.detail)),
                this._send(
                  new c(this._workerId, L, void 0, (0, n.transformErrorForSerialization)(N)),
                );
            },
          );
        }
        _handleSubscribeEventMessage(g) {
          const L = g.req,
            C = this._handler.handleEvent(
              g.eventName,
              g.arg,
            )((N) => {
              this._send(new u(this._workerId, L, N));
            });
          this._pendingEvents.set(L, C);
        }
        _handleEventMessage(g) {
          if (!this._pendingEmitters.has(g.req)) {
            console.warn('Got event for unknown req');
            return;
          }
          this._pendingEmitters.get(g.req).fire(g.event);
        }
        _handleUnsubscribeEventMessage(g) {
          if (!this._pendingEvents.has(g.req)) {
            console.warn('Got unsubscribe for unknown req');
            return;
          }
          this._pendingEvents.get(g.req).dispose(), this._pendingEvents.delete(g.req);
        }
        _send(g) {
          const L = [];
          if (g.type === 0)
            for (let C = 0; C < g.args.length; C++)
              g.args[C] instanceof ArrayBuffer && L.push(g.args[C]);
          else g.type === 1 && g.res instanceof ArrayBuffer && L.push(g.res);
          this._handler.sendMessage(g, L);
        }
      }
      class _ extends A.Disposable {
        constructor(g, L, C) {
          super();
          let N = null;
          (this._worker = this._register(
            g.create(
              'vs/base/common/worker/simpleWorker',
              (k) => {
                this._protocol.handleMessage(k);
              },
              (k) => {
                N?.(k);
              },
            ),
          )),
            (this._protocol = new o({
              sendMessage: (k, F) => {
                this._worker.postMessage(k, F);
              },
              handleMessage: (k, F) => {
                if (typeof C[k] != 'function')
                  return Promise.reject(new Error('Missing method ' + k + ' on main thread host.'));
                try {
                  return Promise.resolve(C[k].apply(C, F));
                } catch (z) {
                  return Promise.reject(z);
                }
              },
              handleEvent: (k, F) => {
                if (S(k)) {
                  const z = C[k].call(C, F);
                  if (typeof z != 'function')
                    throw new Error(`Missing dynamic event ${k} on main thread host.`);
                  return z;
                }
                if (w(k)) {
                  const z = C[k];
                  if (typeof z != 'function')
                    throw new Error(`Missing event ${k} on main thread host.`);
                  return z;
                }
                throw new Error(`Malformed event name ${k}`);
              },
            })),
            this._protocol.setWorkerId(this._worker.getId());
          let E = null;
          const y = globalThis.require;
          typeof y < 'u' && typeof y.getConfig == 'function'
            ? (E = y.getConfig())
            : typeof globalThis.requirejs < 'u' && (E = globalThis.requirejs.s.contexts._.config);
          const x = (0, b.getAllMethodNames)(C);
          this._onModuleLoaded = this._protocol.sendMessage(h, [
            this._worker.getId(),
            JSON.parse(JSON.stringify(E)),
            L,
            x,
          ]);
          const M = (k, F) => this._request(k, F),
            I = (k, F) => this._protocol.listen(k, F);
          this._lazyProxy = new Promise((k, F) => {
            (N = F),
              this._onModuleLoaded.then(
                (z) => {
                  k(R(z, M, I));
                },
                (z) => {
                  F(z), this._onError('Worker failed to load ' + L, z);
                },
              );
          });
        }
        getProxyObject() {
          return this._lazyProxy;
        }
        _request(g, L) {
          return new Promise((C, N) => {
            this._onModuleLoaded.then(() => {
              this._protocol.sendMessage(g, L).then(C, N);
            }, N);
          });
        }
        _onError(g, L) {
          console.error(g), console.info(L);
        }
      }
      r.SimpleWorkerClient = _;
      function w(l) {
        return l[0] === 'o' && l[1] === 'n' && p.isUpperAsciiLetter(l.charCodeAt(2));
      }
      function S(l) {
        return /^onDynamic/.test(l) && p.isUpperAsciiLetter(l.charCodeAt(9));
      }
      function R(l, g, L) {
        const C = (y) =>
            function () {
              const x = Array.prototype.slice.call(arguments, 0);
              return g(y, x);
            },
          N = (y) =>
            function (x) {
              return L(y, x);
            },
          E = {};
        for (const y of l) {
          if (S(y)) {
            E[y] = N(y);
            continue;
          }
          if (w(y)) {
            E[y] = L(y, void 0);
            continue;
          }
          E[y] = C(y);
        }
        return E;
      }
      class v {
        constructor(g, L) {
          (this._requestHandlerFactory = L),
            (this._requestHandler = null),
            (this._protocol = new o({
              sendMessage: (C, N) => {
                g(C, N);
              },
              handleMessage: (C, N) => this._handleMessage(C, N),
              handleEvent: (C, N) => this._handleEvent(C, N),
            }));
        }
        onmessage(g) {
          this._protocol.handleMessage(g);
        }
        _handleMessage(g, L) {
          if (g === h) return this.initialize(L[0], L[1], L[2], L[3]);
          if (!this._requestHandler || typeof this._requestHandler[g] != 'function')
            return Promise.reject(new Error('Missing requestHandler or method: ' + g));
          try {
            return Promise.resolve(this._requestHandler[g].apply(this._requestHandler, L));
          } catch (C) {
            return Promise.reject(C);
          }
        }
        _handleEvent(g, L) {
          if (!this._requestHandler) throw new Error('Missing requestHandler');
          if (S(g)) {
            const C = this._requestHandler[g].call(this._requestHandler, L);
            if (typeof C != 'function')
              throw new Error(`Missing dynamic event ${g} on request handler.`);
            return C;
          }
          if (w(g)) {
            const C = this._requestHandler[g];
            if (typeof C != 'function') throw new Error(`Missing event ${g} on request handler.`);
            return C;
          }
          throw new Error(`Malformed event name ${g}`);
        }
        initialize(g, L, C, N) {
          this._protocol.setWorkerId(g);
          const x = R(
            N,
            (M, I) => this._protocol.sendMessage(M, I),
            (M, I) => this._protocol.listen(M, I),
          );
          return this._requestHandlerFactory
            ? ((this._requestHandler = this._requestHandlerFactory(x)),
              Promise.resolve((0, b.getAllMethodNames)(this._requestHandler)))
            : (L &&
                (typeof L.baseUrl < 'u' && delete L.baseUrl,
                typeof L.paths < 'u' && typeof L.paths.vs < 'u' && delete L.paths.vs,
                typeof L.trustedTypesPolicy < 'u' && delete L.trustedTypesPolicy,
                (L.catchError = !0),
                globalThis.require.config(L)),
              new Promise((M, I) => {
                (globalThis.require || W)(
                  [C],
                  (F) => {
                    if (((this._requestHandler = F.create(x)), !this._requestHandler)) {
                      I(new Error('No RequestHandler!'));
                      return;
                    }
                    M((0, b.getAllMethodNames)(this._requestHandler));
                  },
                  I,
                );
              }));
        }
      }
      r.SimpleWorkerServer = v;
      function i(l) {
        return new v(l, null);
      }
    }),
    X(J[70], K([19, 67]), function (W, r) {
      return W.create('vs/editor/common/languages', r);
    }),
    X(J[71], K([0, 1, 43, 18, 2, 65, 70]), function (W, r, n, D, A, b, f) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.InlineEditTriggerKind =
          r.TokenizationRegistry =
          r.LazyTokenizationSupport =
          r.InlayHintKind =
          r.Command =
          r.NewSymbolNameTriggerKind =
          r.NewSymbolNameTag =
          r.FoldingRangeKind =
          r.TextEdit =
          r.SymbolKinds =
          r.symbolKindNames =
          r.DocumentHighlightKind =
          r.SignatureHelpTriggerKind =
          r.DocumentPasteTriggerKind =
          r.SelectedSuggestionInfo =
          r.InlineCompletionTriggerKind =
          r.CompletionItemKinds =
          r.HoverVerbosityAction =
          r.EncodedTokenizationResult =
          r.TokenizationResult =
          r.Token =
            void 0),
        (r.isLocationLink = _),
        (r.getAriaLabelForSymbol = w);
      class p {
        constructor(y, x, M) {
          (this.offset = y), (this.type = x), (this.language = M), (this._tokenBrand = void 0);
        }
        toString() {
          return '(' + this.offset + ', ' + this.type + ')';
        }
      }
      r.Token = p;
      class h {
        constructor(y, x) {
          (this.tokens = y), (this.endState = x), (this._tokenizationResultBrand = void 0);
        }
      }
      r.TokenizationResult = h;
      class a {
        constructor(y, x) {
          (this.tokens = y), (this.endState = x), (this._encodedTokenizationResultBrand = void 0);
        }
      }
      r.EncodedTokenizationResult = a;
      var m;
      (function (E) {
        (E[(E.Increase = 0)] = 'Increase'), (E[(E.Decrease = 1)] = 'Decrease');
      })(m || (r.HoverVerbosityAction = m = {}));
      var e;
      (function (E) {
        const y = new Map();
        y.set(0, n.Codicon.symbolMethod),
          y.set(1, n.Codicon.symbolFunction),
          y.set(2, n.Codicon.symbolConstructor),
          y.set(3, n.Codicon.symbolField),
          y.set(4, n.Codicon.symbolVariable),
          y.set(5, n.Codicon.symbolClass),
          y.set(6, n.Codicon.symbolStruct),
          y.set(7, n.Codicon.symbolInterface),
          y.set(8, n.Codicon.symbolModule),
          y.set(9, n.Codicon.symbolProperty),
          y.set(10, n.Codicon.symbolEvent),
          y.set(11, n.Codicon.symbolOperator),
          y.set(12, n.Codicon.symbolUnit),
          y.set(13, n.Codicon.symbolValue),
          y.set(15, n.Codicon.symbolEnum),
          y.set(14, n.Codicon.symbolConstant),
          y.set(15, n.Codicon.symbolEnum),
          y.set(16, n.Codicon.symbolEnumMember),
          y.set(17, n.Codicon.symbolKeyword),
          y.set(27, n.Codicon.symbolSnippet),
          y.set(18, n.Codicon.symbolText),
          y.set(19, n.Codicon.symbolColor),
          y.set(20, n.Codicon.symbolFile),
          y.set(21, n.Codicon.symbolReference),
          y.set(22, n.Codicon.symbolCustomColor),
          y.set(23, n.Codicon.symbolFolder),
          y.set(24, n.Codicon.symbolTypeParameter),
          y.set(25, n.Codicon.account),
          y.set(26, n.Codicon.issues);
        function x(k) {
          let F = y.get(k);
          return (
            F ||
              (console.info('No codicon found for CompletionItemKind ' + k),
              (F = n.Codicon.symbolProperty)),
            F
          );
        }
        E.toIcon = x;
        const M = new Map();
        M.set('method', 0),
          M.set('function', 1),
          M.set('constructor', 2),
          M.set('field', 3),
          M.set('variable', 4),
          M.set('class', 5),
          M.set('struct', 6),
          M.set('interface', 7),
          M.set('module', 8),
          M.set('property', 9),
          M.set('event', 10),
          M.set('operator', 11),
          M.set('unit', 12),
          M.set('value', 13),
          M.set('constant', 14),
          M.set('enum', 15),
          M.set('enum-member', 16),
          M.set('enumMember', 16),
          M.set('keyword', 17),
          M.set('snippet', 27),
          M.set('text', 18),
          M.set('color', 19),
          M.set('file', 20),
          M.set('reference', 21),
          M.set('customcolor', 22),
          M.set('folder', 23),
          M.set('type-parameter', 24),
          M.set('typeParameter', 24),
          M.set('account', 25),
          M.set('issue', 26);
        function I(k, F) {
          let z = M.get(k);
          return typeof z > 'u' && !F && (z = 9), z;
        }
        E.fromString = I;
      })(e || (r.CompletionItemKinds = e = {}));
      var c;
      (function (E) {
        (E[(E.Automatic = 0)] = 'Automatic'), (E[(E.Explicit = 1)] = 'Explicit');
      })(c || (r.InlineCompletionTriggerKind = c = {}));
      class s {
        constructor(y, x, M, I) {
          (this.range = y), (this.text = x), (this.completionKind = M), (this.isSnippetText = I);
        }
        equals(y) {
          return (
            A.Range.lift(this.range).equalsRange(y.range) &&
            this.text === y.text &&
            this.completionKind === y.completionKind &&
            this.isSnippetText === y.isSnippetText
          );
        }
      }
      r.SelectedSuggestionInfo = s;
      var u;
      (function (E) {
        (E[(E.Automatic = 0)] = 'Automatic'), (E[(E.PasteAs = 1)] = 'PasteAs');
      })(u || (r.DocumentPasteTriggerKind = u = {}));
      var d;
      (function (E) {
        (E[(E.Invoke = 1)] = 'Invoke'),
          (E[(E.TriggerCharacter = 2)] = 'TriggerCharacter'),
          (E[(E.ContentChange = 3)] = 'ContentChange');
      })(d || (r.SignatureHelpTriggerKind = d = {}));
      var o;
      (function (E) {
        (E[(E.Text = 0)] = 'Text'), (E[(E.Read = 1)] = 'Read'), (E[(E.Write = 2)] = 'Write');
      })(o || (r.DocumentHighlightKind = o = {}));
      function _(E) {
        return (
          E &&
          D.URI.isUri(E.uri) &&
          A.Range.isIRange(E.range) &&
          (A.Range.isIRange(E.originSelectionRange) || A.Range.isIRange(E.targetSelectionRange))
        );
      }
      r.symbolKindNames = {
        17: (0, f.localize)(0, null),
        16: (0, f.localize)(1, null),
        4: (0, f.localize)(2, null),
        13: (0, f.localize)(3, null),
        8: (0, f.localize)(4, null),
        9: (0, f.localize)(5, null),
        21: (0, f.localize)(6, null),
        23: (0, f.localize)(7, null),
        7: (0, f.localize)(8, null),
        0: (0, f.localize)(9, null),
        11: (0, f.localize)(10, null),
        10: (0, f.localize)(11, null),
        19: (0, f.localize)(12, null),
        5: (0, f.localize)(13, null),
        1: (0, f.localize)(14, null),
        2: (0, f.localize)(15, null),
        20: (0, f.localize)(16, null),
        15: (0, f.localize)(17, null),
        18: (0, f.localize)(18, null),
        24: (0, f.localize)(19, null),
        3: (0, f.localize)(20, null),
        6: (0, f.localize)(21, null),
        14: (0, f.localize)(22, null),
        22: (0, f.localize)(23, null),
        25: (0, f.localize)(24, null),
        12: (0, f.localize)(25, null),
      };
      function w(E, y) {
        return (0, f.localize)(26, null, E, r.symbolKindNames[y]);
      }
      var S;
      (function (E) {
        const y = new Map();
        y.set(0, n.Codicon.symbolFile),
          y.set(1, n.Codicon.symbolModule),
          y.set(2, n.Codicon.symbolNamespace),
          y.set(3, n.Codicon.symbolPackage),
          y.set(4, n.Codicon.symbolClass),
          y.set(5, n.Codicon.symbolMethod),
          y.set(6, n.Codicon.symbolProperty),
          y.set(7, n.Codicon.symbolField),
          y.set(8, n.Codicon.symbolConstructor),
          y.set(9, n.Codicon.symbolEnum),
          y.set(10, n.Codicon.symbolInterface),
          y.set(11, n.Codicon.symbolFunction),
          y.set(12, n.Codicon.symbolVariable),
          y.set(13, n.Codicon.symbolConstant),
          y.set(14, n.Codicon.symbolString),
          y.set(15, n.Codicon.symbolNumber),
          y.set(16, n.Codicon.symbolBoolean),
          y.set(17, n.Codicon.symbolArray),
          y.set(18, n.Codicon.symbolObject),
          y.set(19, n.Codicon.symbolKey),
          y.set(20, n.Codicon.symbolNull),
          y.set(21, n.Codicon.symbolEnumMember),
          y.set(22, n.Codicon.symbolStruct),
          y.set(23, n.Codicon.symbolEvent),
          y.set(24, n.Codicon.symbolOperator),
          y.set(25, n.Codicon.symbolTypeParameter);
        function x(M) {
          let I = y.get(M);
          return (
            I ||
              (console.info('No codicon found for SymbolKind ' + M),
              (I = n.Codicon.symbolProperty)),
            I
          );
        }
        E.toIcon = x;
      })(S || (r.SymbolKinds = S = {}));
      class R {}
      r.TextEdit = R;
      class v {
        static fromValue(y) {
          switch (y) {
            case 'comment':
              return v.Comment;
            case 'imports':
              return v.Imports;
            case 'region':
              return v.Region;
          }
          return new v(y);
        }
        constructor(y) {
          this.value = y;
        }
      }
      (r.FoldingRangeKind = v),
        (v.Comment = new v('comment')),
        (v.Imports = new v('imports')),
        (v.Region = new v('region'));
      var i;
      (function (E) {
        E[(E.AIGenerated = 1)] = 'AIGenerated';
      })(i || (r.NewSymbolNameTag = i = {}));
      var l;
      (function (E) {
        (E[(E.Invoke = 0)] = 'Invoke'), (E[(E.Automatic = 1)] = 'Automatic');
      })(l || (r.NewSymbolNameTriggerKind = l = {}));
      var g;
      (function (E) {
        function y(x) {
          return !x || typeof x != 'object'
            ? !1
            : typeof x.id == 'string' && typeof x.title == 'string';
        }
        E.is = y;
      })(g || (r.Command = g = {}));
      var L;
      (function (E) {
        (E[(E.Type = 1)] = 'Type'), (E[(E.Parameter = 2)] = 'Parameter');
      })(L || (r.InlayHintKind = L = {}));
      class C {
        constructor(y) {
          (this.createSupport = y), (this._tokenizationSupport = null);
        }
        dispose() {
          this._tokenizationSupport &&
            this._tokenizationSupport.then((y) => {
              y && y.dispose();
            });
        }
        get tokenizationSupport() {
          return (
            this._tokenizationSupport || (this._tokenizationSupport = this.createSupport()),
            this._tokenizationSupport
          );
        }
      }
      (r.LazyTokenizationSupport = C), (r.TokenizationRegistry = new b.TokenizationRegistry());
      var N;
      (function (E) {
        (E[(E.Invoke = 0)] = 'Invoke'), (E[(E.Automatic = 1)] = 'Automatic');
      })(N || (r.InlineEditTriggerKind = N = {}));
    }),
    X(
      J[72],
      K([0, 1, 40, 10, 38, 18, 4, 2, 44, 71, 64]),
      function (W, r, n, D, A, b, f, p, h, a, m) {
        'use strict';
        Object.defineProperty(r, '__esModule', { value: !0 }),
          (r.KeyMod = void 0),
          (r.createMonacoBaseAPI = c);
        class e {
          static chord(u, d) {
            return (0, A.KeyChord)(u, d);
          }
        }
        (r.KeyMod = e), (e.CtrlCmd = 2048), (e.Shift = 1024), (e.Alt = 512), (e.WinCtrl = 256);
        function c() {
          return {
            editor: void 0,
            languages: void 0,
            CancellationTokenSource: n.CancellationTokenSource,
            Emitter: D.Emitter,
            KeyCode: m.KeyCode,
            KeyMod: e,
            Position: f.Position,
            Range: p.Range,
            Selection: h.Selection,
            SelectionDirection: m.SelectionDirection,
            MarkerSeverity: m.MarkerSeverity,
            MarkerTag: m.MarkerTag,
            Uri: b.URI,
            Token: a.Token,
          };
        }
      },
    ),
    X(
      J[74],
      K([0, 1, 25, 18, 4, 2, 60, 31, 56, 57, 72, 24, 63, 54, 14, 55, 62]),
      function (W, r, n, D, A, b, f, p, h, a, m, e, c, s, u, d, o) {
        'use strict';
        Object.defineProperty(r, '__esModule', { value: !0 }),
          (r.EditorSimpleWorker = void 0),
          (r.create = S);
        class _ extends f.MirrorTextModel {
          get uri() {
            return this._uri;
          }
          get eol() {
            return this._eol;
          }
          getValue() {
            return this.getText();
          }
          findMatches(v) {
            const i = [];
            for (let l = 0; l < this._lines.length; l++) {
              const g = this._lines[l],
                L = this.offsetAt(new A.Position(l + 1, 1)),
                C = g.matchAll(v);
              for (const N of C) (N.index || N.index === 0) && (N.index = N.index + L), i.push(N);
            }
            return i;
          }
          getLinesContent() {
            return this._lines.slice(0);
          }
          getLineCount() {
            return this._lines.length;
          }
          getLineContent(v) {
            return this._lines[v - 1];
          }
          getWordAtPosition(v, i) {
            const l = (0, p.getWordAtText)(
              v.column,
              (0, p.ensureValidWordDefinition)(i),
              this._lines[v.lineNumber - 1],
              0,
            );
            return l ? new b.Range(v.lineNumber, l.startColumn, v.lineNumber, l.endColumn) : null;
          }
          words(v) {
            const i = this._lines,
              l = this._wordenize.bind(this);
            let g = 0,
              L = '',
              C = 0,
              N = [];
            return {
              *[Symbol.iterator]() {
                for (;;)
                  if (C < N.length) {
                    const E = L.substring(N[C].start, N[C].end);
                    (C += 1), yield E;
                  } else if (g < i.length) (L = i[g]), (N = l(L, v)), (C = 0), (g += 1);
                  else break;
              },
            };
          }
          getLineWords(v, i) {
            const l = this._lines[v - 1],
              g = this._wordenize(l, i),
              L = [];
            for (const C of g)
              L.push({
                word: l.substring(C.start, C.end),
                startColumn: C.start + 1,
                endColumn: C.end + 1,
              });
            return L;
          }
          _wordenize(v, i) {
            const l = [];
            let g;
            for (i.lastIndex = 0; (g = i.exec(v)) && g[0].length !== 0; )
              l.push({ start: g.index, end: g.index + g[0].length });
            return l;
          }
          getValueInRange(v) {
            if (((v = this._validateRange(v)), v.startLineNumber === v.endLineNumber))
              return this._lines[v.startLineNumber - 1].substring(
                v.startColumn - 1,
                v.endColumn - 1,
              );
            const i = this._eol,
              l = v.startLineNumber - 1,
              g = v.endLineNumber - 1,
              L = [];
            L.push(this._lines[l].substring(v.startColumn - 1));
            for (let C = l + 1; C < g; C++) L.push(this._lines[C]);
            return L.push(this._lines[g].substring(0, v.endColumn - 1)), L.join(i);
          }
          offsetAt(v) {
            return (
              (v = this._validatePosition(v)),
              this._ensureLineStarts(),
              this._lineStarts.getPrefixSum(v.lineNumber - 2) + (v.column - 1)
            );
          }
          positionAt(v) {
            (v = Math.floor(v)), (v = Math.max(0, v)), this._ensureLineStarts();
            const i = this._lineStarts.getIndexOf(v),
              l = this._lines[i.index].length;
            return { lineNumber: 1 + i.index, column: 1 + Math.min(i.remainder, l) };
          }
          _validateRange(v) {
            const i = this._validatePosition({
                lineNumber: v.startLineNumber,
                column: v.startColumn,
              }),
              l = this._validatePosition({ lineNumber: v.endLineNumber, column: v.endColumn });
            return i.lineNumber !== v.startLineNumber ||
              i.column !== v.startColumn ||
              l.lineNumber !== v.endLineNumber ||
              l.column !== v.endColumn
              ? {
                  startLineNumber: i.lineNumber,
                  startColumn: i.column,
                  endLineNumber: l.lineNumber,
                  endColumn: l.column,
                }
              : v;
          }
          _validatePosition(v) {
            if (!A.Position.isIPosition(v)) throw new Error('bad position');
            let { lineNumber: i, column: l } = v,
              g = !1;
            if (i < 1) (i = 1), (l = 1), (g = !0);
            else if (i > this._lines.length)
              (i = this._lines.length), (l = this._lines[i - 1].length + 1), (g = !0);
            else {
              const L = this._lines[i - 1].length + 1;
              l < 1 ? ((l = 1), (g = !0)) : l > L && ((l = L), (g = !0));
            }
            return g ? { lineNumber: i, column: l } : v;
          }
        }
        class w {
          constructor(v, i) {
            (this._host = v),
              (this._models = Object.create(null)),
              (this._foreignModuleFactory = i),
              (this._foreignModule = null);
          }
          dispose() {
            this._models = Object.create(null);
          }
          _getModel(v) {
            return this._models[v];
          }
          _getModels() {
            const v = [];
            return Object.keys(this._models).forEach((i) => v.push(this._models[i])), v;
          }
          acceptNewModel(v) {
            this._models[v.url] = new _(D.URI.parse(v.url), v.lines, v.EOL, v.versionId);
          }
          acceptModelChanged(v, i) {
            if (!this._models[v]) return;
            this._models[v].onEvents(i);
          }
          acceptRemovedModel(v) {
            this._models[v] && delete this._models[v];
          }
          async computeUnicodeHighlights(v, i, l) {
            const g = this._getModel(v);
            return g
              ? c.UnicodeTextModelHighlighter.computeUnicodeHighlights(g, i, l)
              : {
                  ranges: [],
                  hasMore: !1,
                  ambiguousCharacterCount: 0,
                  invisibleCharacterCount: 0,
                  nonBasicAsciiCharacterCount: 0,
                };
          }
          async findSectionHeaders(v, i) {
            const l = this._getModel(v);
            return l ? (0, o.findSectionHeaders)(l, i) : [];
          }
          async computeDiff(v, i, l, g) {
            const L = this._getModel(v),
              C = this._getModel(i);
            return !L || !C ? null : w.computeDiff(L, C, l, g);
          }
          static computeDiff(v, i, l, g) {
            const L =
                g === 'advanced'
                  ? s.linesDiffComputers.getDefault()
                  : s.linesDiffComputers.getLegacy(),
              C = v.getLinesContent(),
              N = i.getLinesContent(),
              E = L.computeDiff(C, N, l),
              y = E.changes.length > 0 ? !1 : this._modelsAreIdentical(v, i);
            function x(M) {
              return M.map((I) => {
                var k;
                return [
                  I.original.startLineNumber,
                  I.original.endLineNumberExclusive,
                  I.modified.startLineNumber,
                  I.modified.endLineNumberExclusive,
                  (k = I.innerChanges) === null || k === void 0
                    ? void 0
                    : k.map((F) => [
                        F.originalRange.startLineNumber,
                        F.originalRange.startColumn,
                        F.originalRange.endLineNumber,
                        F.originalRange.endColumn,
                        F.modifiedRange.startLineNumber,
                        F.modifiedRange.startColumn,
                        F.modifiedRange.endLineNumber,
                        F.modifiedRange.endColumn,
                      ]),
                ];
              });
            }
            return {
              identical: y,
              quitEarly: E.hitTimeout,
              changes: x(E.changes),
              moves: E.moves.map((M) => [
                M.lineRangeMapping.original.startLineNumber,
                M.lineRangeMapping.original.endLineNumberExclusive,
                M.lineRangeMapping.modified.startLineNumber,
                M.lineRangeMapping.modified.endLineNumberExclusive,
                x(M.changes),
              ]),
            };
          }
          static _modelsAreIdentical(v, i) {
            const l = v.getLineCount(),
              g = i.getLineCount();
            if (l !== g) return !1;
            for (let L = 1; L <= l; L++) {
              const C = v.getLineContent(L),
                N = i.getLineContent(L);
              if (C !== N) return !1;
            }
            return !0;
          }
          async computeMoreMinimalEdits(v, i, l) {
            const g = this._getModel(v);
            if (!g) return i;
            const L = [];
            let C;
            i = i.slice(0).sort((E, y) => {
              if (E.range && y.range) return b.Range.compareRangesUsingStarts(E.range, y.range);
              const x = E.range ? 0 : 1,
                M = y.range ? 0 : 1;
              return x - M;
            });
            let N = 0;
            for (let E = 1; E < i.length; E++)
              b.Range.getEndPosition(i[N].range).equals(b.Range.getStartPosition(i[E].range))
                ? ((i[N].range = b.Range.fromPositions(
                    b.Range.getStartPosition(i[N].range),
                    b.Range.getEndPosition(i[E].range),
                  )),
                  (i[N].text += i[E].text))
                : (N++, (i[N] = i[E]));
            i.length = N + 1;
            for (let { range: E, text: y, eol: x } of i) {
              if ((typeof x == 'number' && (C = x), b.Range.isEmpty(E) && !y)) continue;
              const M = g.getValueInRange(E);
              if (((y = y.replace(/\r\n|\n|\r/g, g.eol)), M === y)) continue;
              if (Math.max(y.length, M.length) > w._diffLimit) {
                L.push({ range: E, text: y });
                continue;
              }
              const I = (0, n.stringDiff)(M, y, l),
                k = g.offsetAt(b.Range.lift(E).getStartPosition());
              for (const F of I) {
                const z = g.positionAt(k + F.originalStart),
                  $ = g.positionAt(k + F.originalStart + F.originalLength),
                  T = {
                    text: y.substr(F.modifiedStart, F.modifiedLength),
                    range: {
                      startLineNumber: z.lineNumber,
                      startColumn: z.column,
                      endLineNumber: $.lineNumber,
                      endColumn: $.column,
                    },
                  };
                g.getValueInRange(T.range) !== T.text && L.push(T);
              }
            }
            return (
              typeof C == 'number' &&
                L.push({
                  eol: C,
                  text: '',
                  range: { startLineNumber: 0, startColumn: 0, endLineNumber: 0, endColumn: 0 },
                }),
              L
            );
          }
          async computeLinks(v) {
            const i = this._getModel(v);
            return i ? (0, h.computeLinks)(i) : null;
          }
          async computeDefaultDocumentColors(v) {
            const i = this._getModel(v);
            return i ? (0, d.computeDefaultDocumentColors)(i) : null;
          }
          async textualSuggest(v, i, l, g) {
            const L = new e.StopWatch(),
              C = new RegExp(l, g),
              N = new Set();
            e: for (const E of v) {
              const y = this._getModel(E);
              if (y) {
                for (const x of y.words(C))
                  if (!(x === i || !isNaN(Number(x))) && (N.add(x), N.size > w._suggestionsLimit))
                    break e;
              }
            }
            return { words: Array.from(N), duration: L.elapsed() };
          }
          async computeWordRanges(v, i, l, g) {
            const L = this._getModel(v);
            if (!L) return Object.create(null);
            const C = new RegExp(l, g),
              N = Object.create(null);
            for (let E = i.startLineNumber; E < i.endLineNumber; E++) {
              const y = L.getLineWords(E, C);
              for (const x of y) {
                if (!isNaN(Number(x.word))) continue;
                let M = N[x.word];
                M || ((M = []), (N[x.word] = M)),
                  M.push({
                    startLineNumber: E,
                    startColumn: x.startColumn,
                    endLineNumber: E,
                    endColumn: x.endColumn,
                  });
              }
            }
            return N;
          }
          async navigateValueSet(v, i, l, g, L) {
            const C = this._getModel(v);
            if (!C) return null;
            const N = new RegExp(g, L);
            i.startColumn === i.endColumn &&
              (i = {
                startLineNumber: i.startLineNumber,
                startColumn: i.startColumn,
                endLineNumber: i.endLineNumber,
                endColumn: i.endColumn + 1,
              });
            const E = C.getValueInRange(i),
              y = C.getWordAtPosition({ lineNumber: i.startLineNumber, column: i.startColumn }, N);
            if (!y) return null;
            const x = C.getValueInRange(y);
            return a.BasicInplaceReplace.INSTANCE.navigateValueSet(i, E, y, x, l);
          }
          loadForeignModule(v, i, l) {
            const g = (N, E) => this._host.fhr(N, E),
              C = {
                host: (0, u.createProxyObject)(l, g),
                getMirrorModels: () => this._getModels(),
              };
            return this._foreignModuleFactory
              ? ((this._foreignModule = this._foreignModuleFactory(C, i)),
                Promise.resolve((0, u.getAllMethodNames)(this._foreignModule)))
              : new Promise((N, E) => {
                  W(
                    [v],
                    (y) => {
                      (this._foreignModule = y.create(C, i)),
                        N((0, u.getAllMethodNames)(this._foreignModule));
                    },
                    E,
                  );
                });
          }
          fmr(v, i) {
            if (!this._foreignModule || typeof this._foreignModule[v] != 'function')
              return Promise.reject(new Error('Missing requestHandler or method: ' + v));
            try {
              return Promise.resolve(this._foreignModule[v].apply(this._foreignModule, i));
            } catch (l) {
              return Promise.reject(l);
            }
          }
        }
        (r.EditorSimpleWorker = w), (w._diffLimit = 1e5), (w._suggestionsLimit = 1e4);
        function S(R) {
          return new w(R, null);
        }
        typeof importScripts == 'function' && (globalThis.monaco = (0, m.createMonacoBaseAPI)());
      },
    );
}).call(this);

//# sourceMappingURL=../../../../min-maps/vs/base/worker/workerMain.js.map
