const personas = ["Lionel Messi", "Rodrigo Depaul", "Emiliano Martinez", "Angel Dimaria",
"Soledad Jaimes", "Yamila Rodriguez", "Florencia Bonsegundo"]

// ---- 1
const ordenado = [...personas].sort()
console.log("Ordenado por nombre", ordenado)
// ---- 2
const invertido = personas.map(persona => persona.split(" ").reverse().join(" "))
// ---- 3
// const ordenadoApellido = [...invertido].sort((a, b) => a.split(" ")[0].localeCompare(b.split(" ")[0]))
const ordenadoApellido = [...invertido].sort()
console.log("Ordenado por apellido", ordenadoApellido)

