// Step 3
const library = [
    {
        title: 'White',
        author: 'Joack',
        status : {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'Black',
        author: 'Bob',
        status : {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'RED',
        author: 'Nikki',
        status : {
            own: true,
            reading: false,
            read: false
        }
    }
]

// Step 2

library[0].status.read = true
library[1].status.read = true
library[2].status.read = true

// Step 3

const {title: firstBook} = library[0]

console.log(firstBook)

// Step 4

const libraryJson = JSON.stringify(library)

console.log(libraryJson)