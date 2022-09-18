import { SelectChangeEvent } from '@mui/material'
import type { NextPage } from 'next'
import { useState } from 'react'
import { Selector } from '../src/components/calculator/Selector'

const Calculator: NextPage = () => {
  const [calculationId, setCalculationId] = useState(0)

  const onChange = (event: SelectChangeEvent) => {
    setCalculationId(Number(event.target.value))
  }

  return (
    <div>
      <p>Bei welcher Berechnung wollen Sie unterstützt werden?</p>
      <Selector value={String(calculationId)} onChange={onChange} />
    </div>
  )
}

export default Calculator
