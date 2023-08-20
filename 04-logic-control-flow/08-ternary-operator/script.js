const age = 18;

// Using an if statement

if (age >= 18) {
  console.log('You can vote!');
} else {
  console.log('You can not vote!');
}

// Using a ternary operator

age >= 18 ? console.log('You can vote!') : console.log('You can not vote!');

// Assining a conditional value to a variable

const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? 'You can vote!' : 'You can not vote!';

console.log(canVote);
console.log(canVote2);

// Multipul statements

const auth = true;
//   let rederect;

//   if (auth) {
//     aYou can not vote!;
//     rederect = '/dashboard';
//   } else {
//     alert('Access Denied')
//     rederect = '/login'
//   }

// const rederect = auth                          // запись черещ тернарный оператор
//   ? (alert('You can not vote!'), '/dashboard')
//   : (alert('Access Denied'), '/login');

// console.log(rederect);

auth ? console.log('Welcome to dashbord') : null; // короткая запись когда нет else
auth && console.log('Welcome to dashboard');  // еще короче запись