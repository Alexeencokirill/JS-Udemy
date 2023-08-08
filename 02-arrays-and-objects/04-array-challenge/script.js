// ================== Task 1 ===============

const arr = [1, 2, 3, 4, 5];

// Solution 1
// arr.reverse().push(0)
// arr.unshift(6)

// Solution 2
arr.unshift(0)
arr.push(6)
arr.reverse()

console.log('task 1:', arr);


// ================= Task 2 ================

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10]

// Solution 1
// const arr3 = arr1.slice(0, 4).concat(arr2)

// Solution 2
const arr3 = [...arr1, ...arr2]
arr3.splice(4, 1)

console.log('task 2:', arr3)