# Desarrollo iterativo e incremental

---

## Unit test

Automatizan la forma de probar el codigo. Los tests dicen qué tiene que hacer el código. Permite mantener la funcionalidad intacta del programa, y me aseguro que ante un cambio, el codigo siga realizando lo que tiene que hacer. Me garantizan que si hago un cambio en una funcionalidad, no rompa las demás partes del código.

### Estructura del test

- **Setup**: Se establece la precondición del codigo
- **Excercise**: Se ejercita el codigo que se está probando
- **Assert**: Se comparan los resultados obtenidos, con los esperadosl.

Ejemplo:

Archivo del codigo

```js
// sum.js
function sum(a, b) {
  return a + b
}

module.exports = sum
```

Archivo del test unitario

```js
// sum.test.js
const sum = require('./sum')

tets('adds 1 + 2 must be equal to 3', () => {
  expect(sum(1, 2)).toBe(3)
})
```

Se podria ejecutar el test unitario con `npx jest sum.test.js`

### Desventajas

- Lleva tiempo mantener los tests, con los programas complejos
- Es complejo desarrollar buenas pruebas
- Los tests se suelen escribir para el código nuevo
- Los gerentes pueden considerar las pruebas una pérdida de tiempo

## TDD (Test driven development)
Se basa en dos premisas
- No escribir una linea de codigo a menos que tenga una prueba que esté fallando
- No duplicar