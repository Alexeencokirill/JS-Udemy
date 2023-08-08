let x;
x = 5 + '5' // String
x = 5 + Number('5') // Number
x = 5 * '5' // Number
x = 5 + null // Number
x = Number(null) // Number
x = 5 + true // Number 6
x = 5 + undefined // NaN
console.log(x, typeof(x))