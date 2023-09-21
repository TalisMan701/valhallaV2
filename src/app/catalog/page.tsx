import React from 'react';
import {SearchStatsSection} from '~widgets/SearchStatsSection';
import {PageWrapper} from '~app/page-wrapper';
import {ServicesTableSection} from '~widgets/ServicesTableSection';
import {client} from '~shared/api/Client';
import {IGame} from '~shared/types/IGame';

async function _getGames(): Promise<IGame[]> {
  try {
    const response = await client.games.getGames();

    return response.data;
  } catch (e) {
    return [];
  }
}

export default async function Stats() {
  const games = await _getGames();
  return (
    <PageWrapper>
      <SearchStatsSection games={games} />
      <ServicesTableSection />
    </PageWrapper>
  );
}
