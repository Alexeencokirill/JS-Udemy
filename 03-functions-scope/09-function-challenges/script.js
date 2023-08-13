// ============================== Challenge 1

// function getCelcius (f) {
//     const celsius = (f - 32) * 5 / 9;
//     return celsius;
// }

const getCelcius = (f) => ((f - 32) * 5) / 9;

console.log(`The temperature is ${getCelcius(50)}\xB0 C.`);

//xB0

// ============================== Challenge 2

const minMax = (arr) => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return {
    min,
    max,
  };
};

console.log(minMax([1, 2, 3, 4, 5, 6, 7]));
  // ============================== Challenge 3

  ((length, width) => {
    const area = length * width;
    
    const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`;
    
    console.log(output);
    })(10, 5);