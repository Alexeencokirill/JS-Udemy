// ====================== Naming

const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person = {
  firstName,
  lastName,
  age,
};

console.log(person.age)

// ====================== Destructuring

const todo = {
  id: 1,
  title: 'Take out trash',
  user: {
    name: 'John',
  },
};

// const id = todo.id

const {               // деструктуризация
  id: todoId,         // переименование в деструктуризации
  title,
  user: { name },     // деструктуризация
} = todo; 

console.log(todoId);

// ====================== Destructuring arrays

const numbers = [23, 67, 33, 49, 52]

const [first, second, ...rest] = numbers

console.log(first, second, rest)