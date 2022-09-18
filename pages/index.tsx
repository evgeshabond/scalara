import type { NextPage } from 'next'
import { Button } from '../src/components/Button'

const Index: NextPage = () => {
  return (
    <div tw="flex flex-col items-center">
      <h2 tw="mt-[150px] font-size[16px] text-lila-text uppercase">
        Start der Applikation
      </h2>
      <h1 tw="mt-[20px] text-black font-size[40px] font-bold">Willkommen</h1>
      <p tw="mt-[50px]">Nach dem Click Sie werden weitergeleitet zum Rechner</p>
      <Button tw="mt-[50px]">Jezt starten</Button>
    </div>
  )
}

export default Index
