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

contadora.aumentar()
contadorb.aumentar()
contadorb.aumentar()
contadora.reset()
contadorb.reset()