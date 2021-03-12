import NextDocument, {Html, Head, Main, NextScript} from 'next/document'
import {ColorModeScript} from '@chakra-ui/react'

const CSP =
  "default-src self; connect-src 'self' api.rss2json.com; img-src 'self' a.fsdn.com a.thumbs.redditmedia.com b.thumbs.redditmedia.com media.wired.com www.techmeme.com; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; base-uri self; form-action self"

export default class Document extends NextDocument {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <meta httpEquiv="Content-Security-Policy" content={CSP} />
        </Head>
        <body>
          {/* Make Color mode to persists when you refresh the page. */}
          <ColorModeScript initialColorMode="system" />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
