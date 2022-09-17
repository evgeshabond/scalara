import { AppBar } from '@mui/material'
import tw from 'twin.macro'
import { Logo } from './Logo'
import { Navigation } from './navigation/Navigation'

export const Header = () => {
  const MainContainer = tw.div`h-full flex items-center `
  const ActionsContainer = tw.div`h-full flex justify-between items-center flex-grow`

  return (
    <AppBar position="relative" tw="bg-black h-[70px]">
      <MainContainer>
        <Logo />
        <ActionsContainer>
          <Navigation />
          <div>Profile</div>
        </ActionsContainer>
      </MainContainer>
    </AppBar>
  )
}
