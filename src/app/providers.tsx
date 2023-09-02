'use client';

import React from 'react';
import {CacheProvider} from '@chakra-ui/next-js';
import {ChakraProvider, extendTheme} from '@chakra-ui/react';
import {NextFont} from 'next/dist/compiled/@next/font';

export function Providers({children, font}: {children: React.ReactNode; font: NextFont}) {
  const theme = extendTheme({
    fonts: {
      heading: font.style.fontFamily,
      body: font.style.fontFamily,
    },
  });

  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
