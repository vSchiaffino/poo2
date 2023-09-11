const Persona = (function () {
  var contador = 0
  return function (nombre, apellido, fechaNacimiento) {
    this.nombre = nombre
    this.apellido = apellido
    this.fechaNacimiento = fechaNacimiento
    this.aumentar = function () {
      contador += 1
    }
    this.decrementar = function () {
      contador -= 1
    }
    this.getContador = function () {
      return contador
    }
  }
})()

const persona = new Persona('valen', 'sch', new Date())
persona.aumentar()
persona.aumentar()
persona.aumentar()
persona.aumentar()

console.log(persona.getContador())
console.log(persona.contador)
