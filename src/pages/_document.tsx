import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';

export default class Document extends NextDocument {
  render() {
    const schema = {
      '@context': 'https://schema.org/',
      '@type': 'Person',
      name: 'Jonathan',
      url: '',
      image: '',
      sameAs: [
        'https://twitter.com/unllamas',
        'https://www.linkedin.com/in/unllamas/',
        'https://github.com/jonallamas',
      ],
      jobTitle: 'Front-end web3 developer',
      worksFor: {
        '@type': 'Organization',
        name: 'Freelance',
      },
    };

    return (
      <Html>
        <Head>
          {/* Favicon */}
          <link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png' />
          <link rel='manifest' href='/favicon/site.webmanifest' />
          <meta name='msapplication-TileColor' content='#ffffff' />
          <meta name='theme-color' content='#ffffff'></meta>

          {/* Metadata */}
          <meta
            name='description'
            content='Aceptar cripto-activos nunca fue tan facil. Recibe pagos internacionales en tan solo 30 segundos.'
          />
          <meta name='robots' content='index,follow' />

          <meta property='og:title' content='Sallet - Wallet non custodial' />
          <meta property='og:description' content='Recibe pagos internacionales en tan solo 30 segundos.' />
          <meta property='og:locale' content='es_ES' />
          <meta property='og:type' content='website' />
          <meta property='og:image' content='/img/social/facebook-1200x630.jpg' />
          <meta property='og:url' content='https://sallet.app' />

          <meta name='twitter:title' content='Sallet - Wallet non custodial' />
          <meta name='twitter:description' content='Recibe pagos internacionales en tan solo 30 segundos.' />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:image' content='/img/social/twitter-600x330.jpg' />
          <meta name='twitter:url' content='https://sallet.app' />

          {/* Schema */}
          <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        </Head>
        <body>
          {/* Make Color mode to persists when you refresh the page. */}
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
