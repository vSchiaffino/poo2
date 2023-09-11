const javier = {
  nombre: 'javier',
  apellido: 'johnshon',
  nombreCompleto: function () {
    return this.nombre + ' ' + this.apellido
  },
}

const adam = Object.create(javier)
// Method override
adam.nombreCompleto = function () {
  return Object.getPrototypeOf(this).nombreCompleto().repeat(2)
}
adam.nombre = 'adam'
adam.apellido = 'smith'
console.log(adam.nombreCompleto())
