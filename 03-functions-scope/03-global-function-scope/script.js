// alert('Hello');
// console.log(window.innerWidth)

const x = 100;                                // глобальная видимость

console.log(x, 'in Global')

function run() {                              // в функции
    console.log(window.innerHeight)
    console.log(x, 'in function')
}

run()

if (true) {                                  // в блоке
console.log(x, 'in block')
}

function add() {                           // пременная созданная в функции
    const x = 1;                      // перепишет глобальную перем x = 100
    const y = 50;
    console.log( x + y)
}

// console.log(y)                // <- выдаст ошибку такой переменной не в 
                              // глобальной видимости она в функции add
add()