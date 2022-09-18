import { TextField, TextFieldProps } from '@mui/material'
import { ChangeEventHandler } from 'react'

type InputProps = {
  value: string
  setValue: (value: string) => void
} & TextFieldProps

export const Input: React.FunctionComponent<InputProps> = ({
  value,
  setValue,
  ...rest
}) => {
  const onChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = (
    event,
  ) => {
    setValue(event.target.value)
  }

  return <TextField value={value} onChange={onChange} {...rest} />
}
