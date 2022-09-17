import { AppBar } from '@mui/material'
import tw from 'twin.macro'

export const Header = () => {
  return (
    <AppBar position="relative" tw="bg-black">
      <div>
        <span tw="bg-red-900">Aufgabe</span>
        <span tw="bg-ololo">Aufgabe</span>
      </div>
    </AppBar>
  )
}
