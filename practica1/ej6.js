array1 = [ 4, 8, 2, 13, 20]
array2 = [ 4, 8, 2, -5, 20]



function fn(arr){
    const copia = [...arr]
    copia.sort((a, b) => a-b)
    const menor = copia[0]
    return arr.map(n => n+menor)
}

console.log(fn(array1))
console.log(fn(array2))