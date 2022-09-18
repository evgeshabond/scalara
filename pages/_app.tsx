import { createTheme, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import { MainLayout } from '../src/layout/MainLayout'
import GlobalStyles from '../styles/GlobalStyles'

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
