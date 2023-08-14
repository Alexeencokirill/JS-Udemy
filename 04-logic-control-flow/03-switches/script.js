const d = new Date (2022, 1, 10, 8, 0, 0)
const month = d.getMonth();
const hour = d.getHours();

switch (month) {
    case 1:
        console.log('Its January')
        break;
    case 2:
        console.log('Its February')
        break;
    case 3:
        console.log('Its March')
        break;
    default:
        console.log('Its not Jan, Feb or March')
}


switch (true) {
    case hour < 12:
        console.log('Good Morning')
        break;
    case hour < 18:
        console.log('Good Afernoon')
        break;
    default:
        console.log('Good Night')
}