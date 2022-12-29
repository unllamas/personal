import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';

export default class Document extends NextDocument {
  render() {
    const schema = {
      '@context': 'https://schema.org/',
      '@type': 'Person',
      name: 'Jonathan',
      url: 'https://jonallamas.com/',
      image: 'https://www.jonallamas.com/favicon.png',
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
      <Html lang='es'>
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
            content='Con un variado backgrund en diferentes áreas en tecnología, hoy me encuentro desarrollando e investigando sobre software localfirst.'
          />
          <meta name='robots' content='index,follow' />

          <meta property='og:title' content='Front-end Web3 Developer - Jonathan Llamas' />
          <meta property='og:description' content='UI Developer enfocado a desarrollo/producto.' />
          <meta property='og:locale' content='es_ES' />
          <meta property='og:type' content='website' />
          <meta property='og:image' content='/social/facebook-1200x630.jpg' />
          <meta property='og:url' content='https://jonallamas.com/' />

          <meta name='twitter:title' content='Front-end Web3 Developer - Jonathan Llamas' />
          <meta name='twitter:description' content='UI Developer enfocado a desarrollo/producto.' />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:image' content='/social/twitter-600x330.jpg' />
          <meta name='twitter:url' content='https://jonallamas.com/' />

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
