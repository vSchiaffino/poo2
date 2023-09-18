const piezaCirculo = {
  esCirculo: true,
}

function Casilla(posicion) {
  this.posicion = posicion
  this.pieza = null
  this.setPieza = function (pieza) {
    if (pieza !== null) throw new Error('casilla ocupada')
    this.pieza = pieza
  }
  this.estaEn = function([x, y]){
    return x == this.posicion[0] && y == this.posicion[1]
  }
}

const casilla_1_1 = new Casilla([1, 1])
console.log(piezaCirculo)
console.log(casilla_1_1)
