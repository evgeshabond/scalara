import { createTheme, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import { MainLayout } from '../src/components/layout/MainLayout'
import GlobalStyles from '../src/styles/GlobalStyles'

function MyApp({ Component, pageProps }: AppProps) {
  const muiTheme = createTheme({
    typography: {
      fontFamily: 'Open Sans',
    },
  })

  return (
    <>
      <ThemeProvider theme={muiTheme}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
        <GlobalStyles />
      </ThemeProvider>
    </>
  )
}

// export default MyApp

export default MyApp
