export type Calculation = {
  name: string
  beschreibung: string
  inputA: string
  inputB?: string
  formel: Function
}

export const calculations: Calculation[] = [
  {
    name: 'Hypotenuse berechnen',
    beschreibung:
      'Anhand von Ankathete und Gegenkathete die Länge der Hypotenuse berechnen',
    inputA: 'Ankathete',
    inputB: 'Gegemkathete',
    formel: (inputA: string, inputB: string) => {
      const numA = Number(inputA)
      const numB = Number(inputB)
      if (numA <= 0 || numB <= 0) throw 'Beide Zahlen muessen positiv sein'
      return Math.sqrt(numA ** 2 + numB ** 2)
    },
  },
  {
    name: 'Ganzzahligen Rest ausgeben',
    beschreibung:
      'Ausgehend von einer Zahl wird der ganzzahlige Rest einer Division berechnet.',
    inputA: 'Zahl',
    inputB: 'Divisor',
    formel: (inputA: string, inputB: string) => {
      const numA = Number(inputA)
      const numB = Number(inputB)
      if (numB > numA) throw 'Erste Zahl muss groesser sein als zweite'
      if (numB === 0) throw 'Zweite Zahl muss nicht 0 sein'
      return numA % numB
    },
  },
  {
    name: 'Kreisumfang berechnen',
    beschreibung:
      'Mit dem Durchmesser eines Kreises kann hier der Umfang berechnet werden.',
    inputA: 'Durchmesser',
    formel: (inputA: string) => {
      const numA = Number(inputA)
      if (inputA.length < 1) throw 'Bitte geben die Zahl ein'
      if (numA <= 0) throw 'Die Zahl muss positiv sein'
      return numA * Math.PI
    },
  },
]
