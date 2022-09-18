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
    formel: (inputA: number, inputB: number) =>
      Math.sqrt(inputA ** 2 + inputB ** 2),
  },
  {
    name: 'Ganzzahligen Rest ausgeben',
    beschreibung:
      'Ausgehend von einer Zahl wird der ganzzahlige Rest einer Division berechnet.',
    inputA: 'Zahl',
    inputB: 'Divisor',
    formel: (inputA: number, inputB: number) => inputA % inputB,
  },
  {
    name: 'Kreisumfang berechnen',
    beschreibung:
      'Mit dem Durchmesser eines Kreises kann hier der Umfang berechnet werden.',
    inputA: 'Durchmesser',
    formel: (inputA: number) => inputA * Math.PI,
  },
]

// Kreisumfang berechnen
// Mit dem Durchmesser eines Kreises kann hier der Umfang berechnet werden.
// Durchmesser
// JA
// –
// NEIN
// Ergebnis =
// Durchmesser * 3,1415
