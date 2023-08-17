const howManyTimesAppears = (array, number) => 
    array.filter(n => n == number).length

const array = [ 3, 6, 9, 3, 1, 5, 2, 10]
console.log(howManyTimesAppears(array, 3))
console.log(howManyTimesAppears(array, 5))
console.log(howManyTimesAppears(array, 7))