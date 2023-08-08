  const x = Math.floor(Math.random() * 100) + 1;
  const y = Math.floor(Math.random() * 50) + 1
  const sum = x + y
  const difference = x - y
  const product = x * y
  const quotient = x / y
  const rm = x % y

  const sumOutput = `${x} + ${y} = ${sum}`
  const differenceOutput = `${x} - ${y} = ${difference}`
  const productOutput = `${x} * ${y} = ${product}`
  const quotientOutput = `${x} / ${y} = ${quotient}`
  const rmOutput = `${x} % ${y} = ${rm}`
  
  console.log(sumOutput);
  console.log(differenceOutput)
  console.log(productOutput)
  console.log(quotientOutput)
  console.log(rmOutput)