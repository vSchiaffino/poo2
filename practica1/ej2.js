function creaResta(x){
    return y => y-x
}

const resta = creaResta(4)
console.log(resta(6))