import { notFound } from 'next/navigation';
import { Comments } from '~/components/challenge/comments';
import { Description } from '~/components/challenge/description';
import { getServerAuthSession } from '~/server/auth';
import { getChallengeRouteData } from './getChallengeRouteData';

interface Props {
  params: {
    id: string;
  };
}

export default async function Challenges({ params: { id } }: Props) {
  const session = await getServerAuthSession();
  const challenge = await getChallengeRouteData(id, session);

  if (!challenge) {
    return notFound();
  }

  return (
    <div className="relative h-full">
      <Description challenge={challenge}></Description>
      {/* BUG: comment length wont update when adding/deleting a comment */}
      <Comments rootId={challenge.id} commentCount={challenge._count.comment} type="CHALLENGE" />
    </div>
  );
}
