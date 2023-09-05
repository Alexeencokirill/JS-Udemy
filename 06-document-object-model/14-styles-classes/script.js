const text = document.querySelector('.card');
const itemList = document.querySelector('.item-list');
const items = itemList.querySelectorAll('li')

function run () {
    // className

    // console.log(itemList.className)
    // text.className = 'card dark'

    // ClassList

    // console.log(itemList.classList);
    itemList.classList.forEach(c => console.log(c))

    // text.classList.add('dark')
    // text.classList.remove('card')

    // text.classList.toggle('dark')
    // text.classList.replace('card', 'dark')

    // Change Style

    // itemList.style.lineHeight = '3';

    items.forEach((el, index) => {
        el.style.color = 'red'

        if(index === 2) {
            el.style.color = 'blue'
        }
    })
}

document.querySelector('button').onclick = run;