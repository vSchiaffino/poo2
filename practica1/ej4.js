const pilotos = ["Verstappen", "Hamilton", "Russell", "Sainz", "Perez", "Leclerc", "Norris", "Alonso", "Ocon", "Vettel"];

// a) -----
const llegadaRussell = pilotos.indexOf("Russell") + 1
console.log(`Russell llego ${llegadaRussell}`)
// b) -----
const nombreSexto = pilotos[5]
console.log(`El sexto fue ${nombreSexto}`)
// c) -----
const pilotosConA = pilotos.filter(piloto => piloto.includes("a") || piloto.includes("A"))
console.log(`Los pilotos con a son: ${pilotosConA}`)
// d) -----
const otrosPilotos = ["Russell", "Bottas","Perez"]
const seEncuentranEnLaCarrera = otrosPilotos.map(piloto => pilotos.includes(piloto))
console.log(seEncuentranEnLaCarrera)
// e) -----
pilotos.splice(pilotos.indexOf("Perez"), 1)
pilotos.splice(1, 0, "Perez")
console.log("El array arreglado: ", pilotos)