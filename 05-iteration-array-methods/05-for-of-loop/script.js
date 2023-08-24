// Loop through arrays

const items = ['book', 'table', 'chair', 'laptop', 'phone']
const users = [
    {name: 'Brad'},
    {name: 'Max'},
    {name: 'Kirill'}
]
// for (i = 0; i < items.length; i++) {  // old way
//     console.log(items[i])
// }

// for (const item of items) {  // Moder way
//     console.log(item)
// }

for (const user of users) {
    console.log(user.name)
}

// Loop over strings

const str = 'Hello world'

for (const letter of str) {
    console.log(letter)
}

// Loop over Maps

 const map = new Map();
 map.set('name:', 'Brad'),
 map.set('age:', 30);

for (const  [key, value] of map) {
    console.log(key, value)
}