const x = 100;

if(true) {
    const y = 200;
    console.log(x + y)
}

// console.log(x + y)  // выдаст ошибку  Y не в глобальн области видимости

for ( let i = 0; i <= 10; i++) {
    console.log(i)
}

console.log(i)  // выдаст ошибку  I находится внутри цикла