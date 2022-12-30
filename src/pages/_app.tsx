import { useEffect } from 'react';
import Script from 'next/script';
import { ChakraProvider } from '@chakra-ui/react';
import { hotjar } from 'react-hotjar';

import theme from '../theme';
import { AppProps } from 'next/app';

import * as gtag from '../lib/gtag';

function MyApp({ Component, pageProps }: AppProps) {
  // Init Hotjar
  useEffect(() => {
    hotjar.initialize(3305075, 6);
  });

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script strategy='afterInteractive' src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`} />
      <Script
        id='gtag-init'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
