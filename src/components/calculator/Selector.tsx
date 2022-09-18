import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material'
import { ReactNode } from 'react'
import { calculations } from '../../config/calculations.config'

type SelectorProps = {
  onChange: (event: SelectChangeEvent<string>, child: ReactNode) => void
  value: string
}

export const Selector: React.FunctionComponent<SelectorProps> = ({
  onChange,
  value,
}) => {
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
      >
        {calculations.map((calculation, index) => (
          <MenuItem value={String(index)} key={calculation.name}>
            {calculation.name}
          </MenuItem>
        ))}
        {/* <MenuItem value={0}>{calculations[cal]}</MenuItem>
          <MenuItem value={1}>Twenty</MenuItem>
          <MenuItem value={2}>Thirty</MenuItem> */}
      </Select>
    </FormControl>
  )
}
