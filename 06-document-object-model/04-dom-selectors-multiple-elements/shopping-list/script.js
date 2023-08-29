// QuerySelectorAll()

const listItems = document.querySelectorAll('.item');  // array
console.log(listItems[1].innerText)

// listItems[1].style.color = 'red'  // for one item

// listItems.forEach(item => item.style.color = 'orange')  // for all items

// listItems.forEach((item, index) => {   
//     item.style.color = 'green'

//     if (index === 1) {                // delete from array
//         item.remove()
//     }
//     if (index === 0) {
//         item.innerHTML = `Oranges
//         <button class="remove-item btn-link text-red">
//           <i class="fa-solid fa-xmark"></i>
//         </button>`
//     }
// })

const listItems2 = document.getElementsByClassName('item')  // HTML collection
console.log(listItems2[2].innerText)

const listItemsArray = Array.from(listItems2)  // 2 переделываем в массив 
// и меняем в forEach новую константу listItems => listItemsArray

listItemsArray.forEach(item => {      // 1 не работает потому что это не массив
    console.log(item.innerText)
});

const listItems3 = document.getElementsByTagName('li')
console.log(listItems3)