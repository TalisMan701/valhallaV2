import React from 'react';
import {SearchStatsSection} from '~widgets/SearchStatsSection';
import {PageWrapper} from '~app/page-wrapper';
import {ServicesTableSection} from '~widgets/ServicesTableSection';

export default function Stats() {
  return (
    <PageWrapper>
      <SearchStatsSection />
      <ServicesTableSection />
    </PageWrapper>
  );
}
