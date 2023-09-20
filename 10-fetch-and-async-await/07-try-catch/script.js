// try {
//     console.log(x)
// } catch (error) {
//     console.log('Error ' + error)
// }

function double(number) {
    if (isNaN(number)) {
        throw new Error (number + ' is not a number')
    }

    return number * 2;
}

try {
    const y = double('u')
    console.log(y)
} catch (error) {
    console.log(error)
}