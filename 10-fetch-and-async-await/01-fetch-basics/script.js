// Fetching a JSON file
fetch('./movies.json')
.then((respons) => respons.json())
.then((data) => console.log(data))

// Fetching a text file
fetch('./test.txt')
.then((respons) => respons.text())
.then((data) => console.log(data))

// Fetching from an API
fetch('https://api.github.com/users/alexeencokirill')
.then((respons) => respons.json())
.then((data) => (document.querySelector('h1').textContent = data.login))