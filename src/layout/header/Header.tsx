import { AppBar } from '@mui/material'
import tw from 'twin.macro'
import { Logo } from './Logo'
import { Navigation } from './navigation/Navigation'
import { Profile } from './Profile'

export const Header = () => {
  const MainContainer = tw.div`h-full flex items-center `
  const ActionsContainer = tw.div`h-full flex justify-between items-center flex-grow`

  return (
    <AppBar position="relative" tw="bg-black h-[70px] pr-[8px]">
      <MainContainer>
        <Logo />
        <ActionsContainer>
          <Navigation />
          <Profile />
        </ActionsContainer>
      </MainContainer>
    </AppBar>
  )
}
