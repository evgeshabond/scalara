import { AppBar } from '@mui/material'
import tw from 'twin.macro'
import { Logo } from './Logo'
import { Navigation } from './navigation/Navigation'

export const Header = () => {
  const Container = tw.div`h-full flex items-center `

  return (
    <AppBar position="relative" tw="bg-black h-[70px]">
      <Container>
        <Logo />
        <Navigation />
      </Container>
    </AppBar>
  )
}
