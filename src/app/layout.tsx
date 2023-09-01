import '~shared/assets/styles/globals.scss';

import {MODAL_PORTAL_ID} from '~shared/config/constants';
import React from 'react';
import {Header} from '~widgets/Header';
import {Footer} from '~widgets/Footer';
import {Providers} from './providers';

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <div className='global-container'>
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
          <div id={MODAL_PORTAL_ID} />
        </Providers>
      </body>
    </html>
  );
}
