let x;

const arr = [23, 34, 45, 56, 67]

// arr.push(100)
// arr.pop()

// arr.unshift(99)
// arr.shift()

// arr.reverse()

x = arr.includes(45)

x = arr.indexOf(67)

x = arr.slice(1) // с 1 индекса и до конца 

x = arr.slice(1, 4)  // с 1 по 4

// x = arr. splice(1, 4)  // удаляет с массива с 1 по 4 индекс включительно

// x = arr.splice(2, 1) // удалят из массива один индекс

x = arr.splice(1, 4).reverse().toString()

console.log(x)