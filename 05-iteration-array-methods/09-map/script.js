const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const doubledNumbers = numbers.map(number => number * 2)
const doubledNumbers = numbers.map(number => 'Number ' + number)

console.log(doubledNumbers)

// Same with forEach

const doubledNumbers2 = [];

const newNumber = numbers.forEach(number => doubledNumbers2.push(number * 3))

console.log(doubledNumbers2)

const companies = [
    {name: 'Company One', category: 'Finance', start: 1980, end: 2004},
    {name: 'Company Two', category: 'Retail', start: 1982, end: 2005},
    {name: 'Company Tree', category: 'Auto', start: 1983, end: 2006},
    {name: 'Company For', category: 'Retail', start: 1984, end: 2007},
    {name: 'Company Five', category: 'Tecnology', start: 1985, end: 2008},
    {name: 'Company Six', category: 'Finance', start: 1986, end: 2009},
    {name: 'Company Seven', category: 'Retail', start: 1987, end: 2010},
    {name: 'Company Eight', category: 'Auto', start: 1988, end: 2003},
    {name: 'Company Nine', category: 'Tecnology', start: 1990, end: 2012}
]

// Create an array of company names

const companyNames = companies.map(company => company.name)
console.log(companyNames)

// Create an array with just company and category

// const companyInfo = companies.map(company => company.name + ': '  + company.category)
// const companyInfo = companies.map(company => {                                               // return an object
//     return {
//         name: company.name,
//         category: company.category
//     }
// })

// console.log(companyInfo)

// Create an array of the objects with the name and the length of each company in years 

const companyYears = companies.map(company => {
    return {
        name: company.name,
        years: company.end - company.start + ' years',  
    }
})
console.log(companyYears)

// Chain map methods

const squareAndDouble = numbers
    .map(number => Math.sqrt(number))
    .map(sqrt => sqrt * 2)
console.log(squareAndDouble)

// Chaining different methods

const evenDouble = numbers
    .filter(number => number % 2 === 0)
    .map(even => even * 2)

console.log(evenDouble)