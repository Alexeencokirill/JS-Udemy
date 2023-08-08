//Values are stored on the stack
const name = 'Alex'
const age = 34;


//Reference values are stored on the heap
const person = {
    name: 'Violetta',
    age: 22
}

let newName = name;
newName = 'Kirill'

let newPerson = person
newPerson.age = 29 

console.log(name, newName)
console.log(person, newPerson)