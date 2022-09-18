import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material'
import { ReactNode } from 'react'
import { calculations } from '../../config/calculations.config'

type CalculationSelectorProps = {
  onChange: (event: SelectChangeEvent<string>, child: ReactNode) => void
  value: string
}

export const CalculationSelector: React.FunctionComponent<
  CalculationSelectorProps
> = ({ onChange, value }) => {
  return (
    <FormControl>
      <InputLabel id="calculation">Berechnungart</InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={value}
        onChange={onChange}
        label="CalculationID"
        autoWidth
        variant="standard"
      >
        {calculations.map((calculation, index) => (
          <MenuItem value={String(index)} key={calculation.name}>
            {calculation.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
