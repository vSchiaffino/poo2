function Persona(nombre, apellido, fechaNacimiento) {
  this.nombre = nombre
  this.apellido = apellido
  this.fechaNacimiento = fechaNacimiento
  this.nombreCompleto = () => {
    return this.apellido + ', ' + this.nombre
  }
}

function Empleado(nombre, apellido, fechaNacimiento, sueldoBasico) {
  Persona.call(this, nombre, apellido, fechaNacimiento)
  this.sueldoBasico = sueldoBasico
  this.calcularSueldo = function () {
    return sueldoBasico
  }
}

// Empleado.prototype = Object.create(Persona.prototype)
// Empleado.prototype.constructor = Empleado

const persona = new Persona('javier', 'baez', new Date())
const persona2 = new Persona('Adam', 'Smith', new Date(2010, 5, 5))
Persona.prototype.dni = 17
Persona.prototype.getDni = function(){
    return this.dni
}
persona.dni = 22
console.log(persona.getDni())
