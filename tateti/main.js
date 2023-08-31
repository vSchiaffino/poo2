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

  setPieza(pieza) {
    if (this.pieza !== null)
      throw new Error('este casillero ya tiene una pieza')

    this.pieza = pieza
  }
}

class Tablero {
  constructor() {
    // this.casillas = Array.from({ length: 3 }, (_, i) =>
    //   Array.from({ length: 3 }, (_, j) => new Casilla([i, j]))
    // ).flat()

    this.casillas = []
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        this.casillas.push(new Casilla([i, j]))
      }
    }
  }

  agregar(pieza, posicion) {
    const casilla = this.casillas.find((casilla) => casilla.estaEn(posicion))
    casilla.setPieza(pieza)
  }

  toString() {
    return this.casillas.map((casilla) => casilla.toString())
  }
}

const tablero = new Tablero()
console.log(tablero.toString())
tablero.agregar(new Pieza(true), [1, 1])
console.log(tablero.toString())
tablero.agregar(new Pieza(true), [0, 0])
console.log(tablero.toString())

/**
 *   x | o | x
 *  ----------
 *   x | 0 | x
 *  ----------
 *
 */
