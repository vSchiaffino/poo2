function repeat(functionToRepeat, n){
    for (let i = 0; i < n; i++) {
        functionToRepeat(i+1)
    }
}

const printString = (n) => {
    console.log(`Execution number: ${n}`)
}

repeat(printString, 5)