import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import React from 'react'
import { Header } from './Header'

export type MainLayoutProps = { children?: React.ReactNode }

export const MainLayout: React.FunctionComponent<MainLayoutProps> = ({
  children,
}) => {
  return (
    <>
      <Header></Header>
      {children}
    </>
  )
}
