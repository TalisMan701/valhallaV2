import '~shared/assets/styles/globals.scss';

import {MODAL_PORTAL_ID} from '../shared/config/constants';
import React from 'react';

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en'>
      <body>
        <main>
          <span>Layout!!!</span>
          {children}
        </main>
        <div id={MODAL_PORTAL_ID} />
      </body>
    </html>
  );
}