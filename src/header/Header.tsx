import { AppBar } from '@mui/material'
import { Logo } from './Logo'

export const Header = () => {
  return (
    <AppBar position="relative" tw="bg-black h-[70px]">
      <div tw="h-full flex items-center ">
        <Logo />
      </div>
    </AppBar>
  )
}
