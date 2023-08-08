console.log(100);

console.log('Hello world');

console.log(200, 'Hello', true);

const x = 100;

console.log(x);

console.error('Alert');

console.warn('Warning');

console.table({
  name: 'Chirill',
  surname: 'Alexeenco',
  email: 'alexeencokirill2015@gmail.com',
});

console.group('simple');
console.error('Alert');
console.warn('Warning');
console.table({
  name: 'Chirill',
  surname: 'Alexeenco',
  email: 'alexeencokirill2015@gmail.com',
});
console.groupEnd();

const styles = 'padding: 10px; background-color: white; color: green';
console.log('%cHello World', styles);