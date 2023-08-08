let x

let d = new Date()

x = d.toString()

x = d.getTime()
x = d.valueOf()

x = d.getFullYear()
x = d.getMonth() + 1;
x = d.getDate() // the day of the month
x = d.getDay() // the day of the week

x = d.getHours()
x = d.getMinutes()
x = d.getSeconds()
x = d.getMilliseconds()

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`

x = Intl.DateTimeFormat('en-US').format(d);
x = Intl.DateTimeFormat('en-GB').format(d);
x = Intl.DateTimeFormat('default', { month: 'long'}).format(d);

x = d.toLocaleString('default', {month: 'short'})

x = d.toLocaleString('default',{
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    timeZone: 'Poland'

})

console.log(x)