// window.onload = function () {
//     document.querySelector('h1').textContent = 'Hello World';
// }

window.addEventListener('load', () => {
    // document.querySelector('h1').textContent = 'Hello World'
    console.log('Page Loaded')
})

window.addEventListener('DOMContentLoaded', () => {
    // document.querySelector('h1').textContent = 'Hello World'
    console.log('DOM Loaded')
})

console.log('Run Me')

window.addEventListener('resize', () => {
    document.querySelector('h1').textContent = `Resized to ${window.innerWidth} x ${window.innerHeight}`
})

window.addEventListener('scroll', () => {
    console.log(`Scrolled: ${window.screenX} x ${window.screenY}`)

    if (window.scrollY > 70) {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white'
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black'
    }
})

window.addEventListener('focus', () => {
    document.querySelectorAll('p').forEach(p => {
        p.style.color = 'blue'
    })
})

window.addEventListener('blur', () => {
    document.querySelectorAll('p').forEach(p => {
        p.style.color = 'black'
    })
})