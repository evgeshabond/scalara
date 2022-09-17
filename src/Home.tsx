import NextHead from 'next/head'
import { useEffect } from 'react'
import Button from '@mui/material/Button'

export const Home = () => {
  const a = 'aslcmsda'

  return (
    <>
      <NextHead>
        <meta charSet="UTF-8" />
        <title>Twind Next.js Example</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </NextHead>

      <main>
        <h1>This is Twind!</h1>
        <Button variant="contained">Hello world</Button>
      </main>
    </>
  )
}
