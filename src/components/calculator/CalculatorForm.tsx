import { useEffect, useState } from 'react'
import { calculations } from '../../config/calculations.config'
import { Button } from '../core/Button'
import { Input } from '../core/Input'

type CalculatorFormProps = {
  calculationId: number
}

export const CalculatorForm: React.FunctionComponent<CalculatorFormProps> = ({
  calculationId,
}) => {
  const calculationConfig = calculations[calculationId]
  const isInputBRequired = calculationConfig.inputB !== undefined

  const [valueA, setValueA] = useState<string>('')
  const [valueB, setValueB] = useState<string>('')
  const [result, setResult] = useState<string>('')

  const onClick = () => {
    setValueA('')
    setValueB('')
    setResult('')
  }

  useEffect(() => {
    if (valueA.length > 0 && valueB.length > 0) {
      setResult(calculationConfig.formel(valueA, valueB))
      return
    }
    setResult('')
  }, [calculationConfig, valueA, valueB])

  return (
    <div tw="flex flex-col space-y-4">
      <p>{calculationConfig.beschreibung}</p>
      <Input
        value={String(valueA)}
        setValue={setValueA}
        required
        error={valueA.length < 1}
        type="number"
        name={calculationConfig.inputA}
        label={calculationConfig.inputA}
        variant="standard"
      />
      {isInputBRequired && (
        <Input
          value={String(valueB)}
          setValue={setValueB}
          required={isInputBRequired}
          error={valueB.length < 1}
          type="number"
          name={calculationConfig.inputB}
          label={calculationConfig.inputB}
          variant="standard"
        />
      )}
      <Button onClick={onClick}>Alle Felder leeren</Button>
      {Number.isFinite(result) && (
        <div>
          <p>Ergebniss</p>
          <p>{result}</p>
        </div>
      )}
    </div>
  )
}
