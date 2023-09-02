import '~shared/assets/styles/globals.scss';

import {MODAL_PORTAL_ID} from '~shared/config/constants';
import React from 'react';
import {Header} from '~widgets/Header';
import {Footer} from '~widgets/Footer';
import {Providers} from './providers';
import localFont from 'next/font/local';
import {extendTheme} from '@chakra-ui/react';

const GTEestiProDisplay = localFont({
  src: [
    {
      path: '../shared/assets/fonts/GTEestiProDisplay-Light.woff',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../shared/assets/fonts/GTEestiProDisplay-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../shared/assets/fonts/GTEestiProDisplay-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../shared/assets/fonts/GTEestiProDisplay-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../shared/assets/fonts/GTEestiProDisplay-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../shared/assets/fonts/GTEestiProDisplay-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../shared/assets/fonts/GTEestiProDisplay-Bold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../shared/assets/fonts/GTEestiProDisplay-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../shared/assets/fonts/GTEestiProDisplay-UltraBold.woff',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../shared/assets/fonts/GTEestiProDisplay-UltraBold.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
});

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en'>
      <body className={GTEestiProDisplay.className}>
        <Providers font={GTEestiProDisplay}>
          <div className='global-container'>
            <Header />
            {children}
            <Footer />
          </div>
          <div id={MODAL_PORTAL_ID} />
        </Providers>
      </body>
    </html>
  );
}
