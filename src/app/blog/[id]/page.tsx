import React from 'react';
import {IGameInfo} from '~shared/types/IGameInfo';
import {BreadcrumbsSection} from '~widgets/BreadcrumbsSection';
import {IBreadcrumb} from '~shared/types/IBreadcrumb';
import {Navigate} from '~shared/ui/Navigate/Navigate';
import {PageWrapper} from '~app/page-wrapper';
import {PostSection} from '~widgets/PostSection';

interface GameProps {
  params: {id: string};
}

async function getGameInfo(id: string): Promise<IGameInfo | null> {
  const response = await fetch(process.env.URL + `/api/games/${id}`, {method: 'GET'});
  if (response.ok) {
    return response.json();
  }
  return null;
}

export default async function PostPage({params}: GameProps) {
  const gameInfo = await getGameInfo(params.id);

  if (!gameInfo) return <Navigate to={'/'} />;

  const breadcrumbsItems: IBreadcrumb[] = [
    {label: 'Блог', url: '/blog'},
    {label: gameInfo.title, url: `/service/${params.id}`},
  ];

  return (
    <PageWrapper>
      <BreadcrumbsSection items={breadcrumbsItems} />
      <PostSection />
    </PageWrapper>
  );
}
