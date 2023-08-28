// document.getElementById();

console.log(document.getElementById('app-title'))
console.log(document.getElementById('app-title').id)
console.log(document.getElementById('app-title').className) // if it exist!
console.log(document.getElementById('app-title').getAttribute('id'))

// Set atributes
document.getElementById('app-title').title = 'Shopping-List'
document.getElementById('app-title').setAttribute('class', 'title');

const title = document.getElementById('app-title')
// console.log(title)

// Get/Change content
console.log(title.textContent)
title.textContent = 'Hello World';
title.innerText = 'Hello Again';
title.innerHTML = '<strong>Shopping List</strong>';

// Change style
title.style.color = 'red';
title.style.backgroundColor = 'black';
title.style.padding = '10px';
title.style.borderRadius = '10px';

// Document.querySelector()
console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('input[type="text"]'));
console.log(document.querySelector('li:nth-child(2)').innerText);

const secondItem = document.querySelector('li:nth-child(2)');
secondItem.innerHTML = 'Apple Juice';
secondItem.style.color = 'red';

// Use these methods on others elements

 const list = document.querySelector('ul');

 const firstItem = list.querySelector('li');
 firstItem.style.color = 'blue';

 console.log(firstItem) 