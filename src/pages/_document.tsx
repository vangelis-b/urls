import NextDocument, {Html, Head, Main, NextScript} from 'next/document'
import {ColorModeScript} from '@chakra-ui/react'

export default class Document extends NextDocument {
  render(): JSX.Element {
    const csp =
      "default-src 'self';" +
      "base-uri 'none';" +
      "connect-src 'self' vitals.vercel-insights.com api.rss2json.com;" +
      "img-src 'self' data:;" +
      "object-src 'none';" +
      "script-src 'self' 'unsafe-inline' 'unsafe-eval';" +
      "style-src 'self' 'unsafe-inline'"

    return (
      <Html>
        <Head>
          <meta httpEquiv="Content-Security-Policy" content={csp} />
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
