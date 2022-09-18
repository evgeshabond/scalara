import { SelectChangeEvent } from '@mui/material'
import type { NextPage } from 'next'
import { useState } from 'react'
import { CalculatorForm } from '../src/components/calculator/CalculatorForm'
import { Selector } from '../src/components/calculator/Selector'

const Calculator: NextPage = () => {
  const [calculationId, setCalculationId] = useState(0)

  const onChange = (event: SelectChangeEvent) => {
    setCalculationId(Number(event.target.value))
  }

  return (
    <div tw="flex justify-center w-full mt-[300px]">
      <div tw="flex flex-col space-y-4 items-start w-[500px]">
        <p>Bei welcher Berechnung wollen Sie unterstützt werden?</p>
        <Selector value={String(calculationId)} onChange={onChange} />
        <CalculatorForm calculationId={calculationId} />
      </div>
    </div>
  )
}

export default Calculator
