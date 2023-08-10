// function add(a, b) {
//     return a + b;
// }

// Arrow function syntax
const add = (a, b) => {
    return a + b;
};

// Impliit return
const substrat = (a, b) => a - b;  // короче вариант записи

const duble = x => x * 2;          // короче если один параметр

// Returning an object
const createObject = () => ({
    name: 'Brad'
})

const numbers = [1,2,3,4,5]

numbers.forEach(function (n) {
console.log(n)
})
// Arrow function in a callback
numbers.forEach(n => console.log(n))  // короче вариант

console.log(add(5, 5))
console.log(substrat(8, 4))
console.log(duble(7))
console.log(createObject())