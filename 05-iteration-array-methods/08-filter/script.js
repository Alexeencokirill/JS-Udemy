const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// const evenNumbers = numbers.filter(function(el) {
//     return el % 2 === 0;
// })

// Short version
// const evenNumbers = numbers.filter(el => el % 2 ===0)  // arrow function

// Same with forEach
// let evenNumbers = [];

// numbers.forEach(number => {
//     if (number % 2 === 0) {
//         evenNumbers.push(number )
//     }
// })

// console.log(evenNumbers)

const companies = [
    {name: 'Company One', category: 'Finance', start: 1981, end: 2004},
    {name: 'Company Two', category: 'Retail', start: 1982, end: 2005},
    {name: 'Company Tree', category: 'Auto', start: 1983, end: 2006},
    {name: 'Company For', category: 'Retail', start: 1984, end: 2007},
    {name: 'Company Five', category: 'Tecnology', start: 1985, end: 2008},
    {name: 'Company Six', category: 'Finance', start: 1986, end: 2009},
    {name: 'Company Seven', category: 'Retail', start: 1987, end: 2010},
    {name: 'Company Eight', category: 'Auto', start: 1988, end: 2003},
    {name: 'Company Nine', category: 'Tecnology', start: 1989, end: 2012}
]

// Get only ratails companies

const retailCompanies = companies.filter(company => company.category === 'Retail')

console.log(retailCompanies)

// Get companies that started in or after 1980 and ended in or before 2005

const earlyCompanies = companies.filter((company) => company.start >= 1980 && company.end <= 2005)

console.log(earlyCompanies)

// Get companies that lasted 10 years or more

const longCompanies = companies.filter((company) => company.end - company.start >= 10)

console.log(longCompanies)