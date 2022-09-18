import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material'
import { FunctionComponent } from 'react'

export const Button: FunctionComponent<MuiButtonProps> = (props) => {
  return (
    <MuiButton
      {...props}
      tw="py-[14px] px-[40px] font-size[16px] text-white bg-black hover:bg-black"
    />
  )
}
