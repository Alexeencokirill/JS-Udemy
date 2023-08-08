let x;

const name = 'Jhone';
const age = 30;

// x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old.'
x = `Hello, my name is ${name} and I am ${age} yaers old.`

// console.log(x)

// String Properties and Methods 

const s = new String('       Hello world');

x = typeof s
// x = s.length;

// ==================== Access value by key =====================
x = s[0] 

x = s.__proto__

// x = s.toLocaleUpperCase();
// x = s.toLocaleLowerCase()

// x = s.charAt(0)

// x = s.indexOf('w')

// x = s.substring(0, 5)
// x = s.substring(5)
// x = s.slice(-11, -6)

// x = s.trim()

// x = s.replace('world', 'Jhone')

// x = s.includes('Hello')

// x = s.valueOf()

x = s.split(' ')

console.log(x)