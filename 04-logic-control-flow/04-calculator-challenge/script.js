const calculator = (num1, num2, operator) => {
    let total;

    switch (operator) {
        case '+':
        total = num1 + num2;
        break;
        case '-':
        total = num1 - num2;
        break;
        case '*':
        total = num1 * num2;
        break;
        case '/':
        total = num1 / num2;
        break;
        default:
        total = 'Invalid operator'
    }
    console.log(total)
    return total;
}



calculator(5, 2, '+')
calculator(5, 2, '-')
calculator(5, 2, '*')
calculator(5, 2, '/')