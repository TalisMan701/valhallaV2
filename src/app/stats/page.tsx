import React from 'react';
import {SearchStatsSection} from '~widgets/SearchStatsSection';
import {PlayerRatingSection} from '~widgets/PlayerRatingSection';

export default function Stats() {
  return (
    <>
      <SearchStatsSection />
      <PlayerRatingSection />
    </>
  );
}
