import type { AppProps } from 'next/app'
import { GlobalStyles } from 'twin.macro'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  )
}

// export default MyApp

export default MyApp
