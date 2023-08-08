// Default params

function registerUser(user = 'Bot') {  // <- дефолтное значение user
    if (!user) {     // <- дефолтное значение если не задали user
        user = 'Bot'
    }

    return user + ' is registered'
}

console.log(registerUser(''))

// Rest params

function sum(...numbers) {
    let total = 0;

    for (const num of numbers) {
        total += num
    }
    return total
}

console.log(sum(1, 2, 3, 4, 5, 6, 100))

// Objects as params

function loginUser(user) {
    return `The user ${user.name} with the id of ${user.id} is logged in.`
}

const user = {
    id: 1,
    name: 'John'
}

console.log(loginUser(user))  // первый вариант
console.log(loginUser({name: 'Sara', id: 2})) // второй вариант

// Arrays as params

function getRandom(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length)  // создаем рандосное число
    const item = arr[randomIndex]  // рандомное число присваеваем переменной
    console.log(item)
}

getRandom([1,2,3,4,5,6,7,8,9,10])