let x;

const todo = new Object()

todo.id = 1;
todo.name = 'Buy milk';
todo.complited = false;

x = todo;

const person = {                       // Nesting
    address: {
        coordinate: {
            lat: 123323,
            lng: -34435
        }
    }
}

x = person.address.coordinate.lat

const obj1 = {a: 1, b: 2}             // Обьединение обьектов
const obj2 = {c: 3, d: 4}

const obj3 = {obj1, obj2}
// const obj3 ={...obj1, ...obj2}     // Распыляем два обьекта в один

const obj4 = Object.assign({}, obj1, obj2)

const todos = [                       // Массив обьектов
    {id: 1, name: 'Buy Milk'},
    {id: 2, name: 'Pickup kids from school'},
    {id: 3, name: 'Take out trash'}
]

x = todos[0].name

x = Object.keys(todo)                 // Разные методы
x = Object.keys(todo).length;
x = Object.values(todo)
x = Object.entries(todo)
x = todo.hasOwnProperty('name')

console.log(x)