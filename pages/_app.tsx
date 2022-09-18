import type { AppProps } from 'next/app'
import { MainLayout } from '../src/layout/MainLayout'
import GlobalStyles from '../styles/GlobalStyles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
      <GlobalStyles />
    </>
  )
}

// export default MyApp

export default MyApp
