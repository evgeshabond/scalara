import React from 'react'
import { Footer } from './footer/Footer'
import { Header } from './header/Header'

export type MainLayoutProps = { children?: React.ReactNode }

export const MainLayout: React.FunctionComponent<MainLayoutProps> = ({
  children,
}) => {
  return (
    <div tw="flex flex-col h-full">
      <Header />
      <main tw="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}
