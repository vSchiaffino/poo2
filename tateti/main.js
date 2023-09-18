const readline = require('readline-sync')

class Pieza {
  constructor(esCirculo) {
    this.esCirculo = esCirculo
  }

  toString() {
    return this.esCirculo ? 'o' : 'x'
  }
}

class Casilla {
  constructor(posicion) {
    this.posicion = posicion
    this.pieza = null
  }

  toString() {
    return this.pieza === null ? ' ' : this.pieza.toString()
  }

  estaEn([x, y]) {
    return x == this.posicion[0] && y === this.posicion[1]
  }

  getPieza() {
    return this.pieza
  }

  setPieza(pieza) {
    if (this.pieza !== null)
      throw new Error('este casillero ya tiene una pieza')

    this.pieza = pieza
  }
}

class Tablero {
  constructor() {
    this.casillas = []
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        this.casillas.push(new Casilla([i, j]))
      }
    }
  }

  getCasillaEn(posicion) {
    return this.casillas.find((casilla) => casilla.estaEn(posicion))
  }

  hayLinea() {
    const posiblesLineas = [
      // Horizontales
      [
        [0, 0],
        [0, 1],
        [0, 2],
      ],
      [
        [1, 0],
        [1, 1],
        [1, 2],
      ],
      [
        [2, 0],
        [2, 1],
        [2, 2],
      ],
      // Verticales
      [
        [0, 0],
        [1, 0],
        [2, 0],
      ],
      [
        [0, 1],
        [1, 1],
        [2, 1],
      ],
      [
        [0, 2],
        [1, 2],
        [2, 2],
      ],
      // Diagonales
      [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      [
        [0, 2],
        [1, 1],
        [2, 0],
      ],
    ]
    return posiblesLineas
      .map((posibleLinea) =>
        posibleLinea
          .map((posicion) => this.getCasillaEn(posicion).getPieza())
          .map((pieza) => (pieza ? pieza.esCirculo : null))
      )
      .some(
        (posibleLinea) =>
          posibleLinea.every((esCirculo) => esCirculo === true) ||
          posibleLinea.every((esCirculo) => esCirculo === false)
      )
  }

  agregar(pieza, posicion) {
    const casilla = this.getCasillaEn(posicion)
    casilla.setPieza(pieza)
  }

  toString() {
    const casillas = [...this.casillas]
    const filas = [
      casillas.splice(0, 3),
      casillas.splice(0, 3),
      casillas.splice(0, 3),
    ]
    return filas
      .map((fila) => fila.map((casilla) => casilla.toString()).join(' | '))
      .join('\n---------\n')
  }
}

const tablero = new Tablero()

let turno = false
let turnoDe = ''

while (!tablero.hayLinea()) {
  console.log(tablero.toString())
  turnoDe = turno === true ? 'o' : 'x'
  console.log(`turno de '${turnoDe}'`)
  const input = readline.question("pone la posicion? Ej: '00', '11', '01': ")
  const posicion = input.split('').map((c) => Number(c))
  tablero.agregar(new Pieza(turno), posicion)
  turno = !turno
}


console.log(tablero.toString())
console.log(`Gano ${turnoDe}`)
