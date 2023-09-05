const clearBtn = document.querySelector('#clear')

function onClear () {
    const itemList = document.querySelector('ul');
    const items = itemList.querySelector('li');

    // itemList.innerHTML = '';  // простой способ удулить

    // items.forEach((item) => item.remove());     // другой способ

    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild)
    }
}


// JavaScript Event Listener
// clearBtn.onclick = function () {
//     alert('Clear items')
// }


// addEventListener()
// clearBtn.addEventListener('click', () => alert('Clear items'));
// clearBtn.addEventListener('click', () => console.log('Clear items'));

clearBtn.addEventListener('click', onClear); // with function

// setTimeout(() => clearBtn.removeEventListener('click', onClear),3000);

// setTimeout(() => clearBtn.click(),3000)
