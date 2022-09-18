import type { NextPage } from 'next'
import Link from 'next/link'
import { Button } from '../src/components/Button'

const Index: NextPage = () => {
  return (
    <div tw="flex flex-col items-center">
      <h2 tw="mt-[150px] font-size[16px] text-lila-text uppercase">
        Start der Applikation
      </h2>
      <h1 tw="mt-[20px] text-black font-size[40px] font-bold">Willkommen</h1>
      <p tw="mt-[50px]">Sie werden nach dem Click weitergeleitet zum Rechner</p>
      <Link href={'/calculator'} passHref>
        <Button tw="block mt-[50px]">Jetzt starten</Button>
      </Link>
    </div>
  )
}

export default Index
