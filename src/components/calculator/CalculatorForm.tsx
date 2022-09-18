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

  const [valueA, setValueA] = useState('')
  const [valueB, setValueB] = useState('')
  const [error, setError] = useState('')
  const [result, setResult] = useState('')

  const onClick = () => {
    setValueA('')
    setValueB('')
    setResult('')
  }

  useEffect(() => {
    let result = ''
    try {
      setError('')
      //  check for the case when only inputA required is in config file
      if (isInputBRequired && (valueA.length < 1 || valueB.length < 1)) {
        throw 'Bitte geben beide Zahlen ein'
      }
      result = calculationConfig.formel(valueA, valueB)
      if (!Number.isFinite(result)) {
        throw 'Es ist ein Fehler aufgetreren'
      }
    } catch (e: any) {
      setError(e)
    } finally {
      setResult(result)
    }
  }, [calculationConfig, isInputBRequired, valueA, valueB])

  return (
    <div tw="flex flex-col space-y-4">
      <p>{calculationConfig.beschreibung}</p>
      <Input
        value={valueA}
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
          value={valueB}
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
      {!error && (
        <div>
          <p>Ergebniss</p>
          <p>{result}</p>
        </div>
      )}
      {error && <div tw="text-rose-400">{error}</div>}
    </div>
  )
}
