let x;
let y;

const person = {
    name: 'John Doe',
    age: 30,
    isAdmin: true,
    address: {
        street: '123 Main st',
        city: 'Boston',
        state: 'MA'
    },
    hobbies: ['music', 'sport']
}

x = person.name
x = person['age']
x = person.address.city
x = person.hobbies

person.name = 'Jene Doe'                       // меняем значения обьекта
person['isAdmin'] = false

delete person.age                              // удаляем значение

person.hasChildren = true                      // добавляем значение

person.greet =  function  (params) {           // делаем функцию
    console.log(`My name is ${this.name}`)
}

person.greet()

const person2 = {                              //  двойной параметр (нежелательно!)
    'First name': ' Max',
    'Last name': 'Alexeenco'
}

y = person2['First name']
x = person

console.log(y)
console.log(x)