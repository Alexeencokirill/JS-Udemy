// Ways to declare a variable
// var, let, const

let firstName = 'Chirill';
let secondName = 'Alexeenco';

console.log(firstName, secondName);

let age = 34;

console.log(age);

// Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

// Multi-Word Formatting
// firstName     camelCase
// first_name    underscore
// FirstName     PascalCase
// firstname     owercase

// Re-assigning Variables

age = 35;

console.log(age);

let score;

score = 1;
console.log(score);

if (true) {
  score = score + 1;
}

console.log(score);

const arr = [1, 2, 3, 4];

//  arr = [1, 2, 3, 4, 5] так делать не можем

arr.push(5); // так можем добавить

console.log(arr);

const person = {
  name: 'Chirill',
};

person.name = 'Max';
person.email = 'alexeencom@gmail.com';

console.log(person);

// Declare multipule values at once

let a, b, c;

const d = 10, e = 20, f = 30;

console.log(d);
console.log(a);