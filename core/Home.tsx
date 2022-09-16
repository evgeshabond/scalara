import NextHead from 'next/head'
import {useEffect} from 'react'
import { tw } from 'twind'

export const Home = () => {

  return (<>
    <NextHead>
      <meta charSet="UTF-8" />
      <title>Twind Next.js Example</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </NextHead>

    <main className={tw`h-screen bg-blue-600 flex items-center justify-center`}>
      <h1 className={tw`font-bold text(center 5xl white sm:gray-800 md:pink-700)`}>
        This is Twind!
      </h1>
    </main>
  </>)
  }
