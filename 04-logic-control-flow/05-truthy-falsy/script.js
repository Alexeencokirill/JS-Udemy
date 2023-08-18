
// Falsy values:

// - false
// - 0
// - "" or '' (empthy string)
// - null
// - undefined
// - NaN

// Truthy values:
// - everything else that is not flasy
// - true
// - '0' (0 in a string)
// - ' ' (spase in a string)
// - [] (empty array)
// - {} (empty object)
// - function () {} (empty function)
 
const x = false

if (x) {
    console.log('This is truthy')
} else {
    console.log('This is falsy')
}

console.log(Boolean(x))

// ================= Truthy and falsy caveats

const children = 0;

if (children !== undefined) {
    console.log(`You have ${children} children`)
} else {
    console.log('Please enter number of children')
}

// Cheking for the empty arrays

const posts = []

if (posts.length > 0) {
    console.log('List Posts')
} else {
    console.log('No Posts To List')
}

// Cheking for the empty objects

const user = {}

if (Object.keys(user).length > 0) {
    console.log('List users')
} else {
    console.log('No Users')
}

// Loose Equality (==)

 console.log(false == 0)
 console.log('' == 0)
 console.log(null == undefined)