import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
      <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-11108610629" />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
