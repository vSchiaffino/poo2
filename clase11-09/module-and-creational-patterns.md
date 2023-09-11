# Patrones

---

## Creational patterns

### Forzar el uso de new

Resuelve el problema de olvidarse el new cuando creo un nuevo objeto. La solución es en la funcion constructora, preguntar si se uso new antes, y si no se uso, lo fuerzo.

```js
function Persona(nombre, apellido) {
  // si se olvido el new, lo fuerzo
  if (!(this instanceof Persona)) return new Persona(nombre, apellido)
  // nombre
  this.nombre = nombre
  this.apellido = apellido
  // metodos
  this.nombreCompleto = function () {
    return this.apellido + ' ' + this.nombre
  }
}

// ejemplo de uso
const persona1 = new Persona('valentin', 'schiaffino')
const persona2 = Persona('valentin', 'schiaffino')
```

### IIFE (immediately invoked function expresion)

Usa el concepto de clausuras para crear propiedades "privadas" en los objetos

```js
const Contador = (function () {
  let contador = 0
  return function () {
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

const contador = Contador()
console.log(contador.contador) // undefined, es privado
// Solo puedo cambiar la variable a través del objeto
contador.aumentar()
contador.aumentar()
contador.aumentar()
contador.decrementar()
console.log(contador.getContador()) // 2
```

### Modulos literales

Se usa para emular el concepto de clases y poder encapsular las variables globales en modulos.

```js
const contador = (function () {
  let contador = 0
  function aumentar() {
    return contador++
  }
  function decrementar() {
    return contador--
  }
  function reset() {
    console.log(contador)
    contador = 0
  }
  return {
    aumentar,
    decrementar,
    reset,
  }
})()

const contadora = contador
const contadorb = contador
// En este caso contadora y contadorb son lo mismo
contadora.aumentar()
contadorb.aumentar()
contadorb.aumentar()
contadora.reset() // 3
contadorb.reset() // 0
```
