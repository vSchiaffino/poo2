
const mRepeticion = (arr) => {
    const resultado = arr.reduce((acc, actual) => {
        const cantActual = arr.filter((item) => item === actual).length
        const cantAcc = arr.filter((item) => item === acc).length
        return cantAcc > cantActual ? acc : cantActual
    }, 0)
    return resultado
}

//const valores = Array.from( {lenght: 10}, () => parseInt(Math.random() * 10)) //Crea un array de lenght 10 con numeros random
const valores = [1,2,4,3,4,5,4,1,6,7,8,1,4,9]
console.log(valores)

const masRepetido = mRepeticion(valores)
console.log(masRepetido)