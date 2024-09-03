import type { Metadata } from 'next';
import { Suspense } from 'react';
import { ExploreSlug } from '../_components/explore-slug';
import { ExploreSlugSkeleton } from '../_components/explore-slug-skeleton';

export const dynamic = 'force-dynamic';

interface Props {
  params: {
    slug: string;
  };
}

export const metadata: Metadata = {
  title: 'Explore Challenges | TypeHero',
};

// accepts both difficulty & tags as slug.
// ex: `/explore/easy`, `explore/popular`
export default function Page({ params }: Props) {
  return (
    <Suspense fallback={<ExploreSlugSkeleton />}>
      <ExploreSlug slug={params.slug} />
    </Suspense>
  );
}
