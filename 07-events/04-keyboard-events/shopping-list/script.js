const itemItem = document.querySelector('#item-input');

const onKeyPress = e => {
    console.log('keypress');
};

const onKeyUp = e => {
    console.log('keyup')
}

const onKeyDown = e => {
    // key
    // console.log(e.key)
    // document.querySelector('h1').innerHTML = e.key;
    // if (e.key === 'Enter') {
    //     alert('You pressed Enter');
    // }

    // keycode
    // https://www.toptal.com/developers/keycode/table-of-all-keycodes
    if (e.keyCode === 13) {
        alert('You press Enter')
    }

    // code
    if (e.code === 'Digit1') {
        console.log('You press Digit1')
    }
    // console.log(e.code)

    if (e.repeat) {
        console.log('You are holding key ' + e.key);
    }

    console.log('Shift: ' + e.shiftKey);
    console.log('Control: ' + e.ctrlKey);
    console.log('Alt: ' + e.altKey);

    if (e.shiftKey && e.key === 'K') {
        console.log('You pressed shift K')
    }

}

// itemItem.addEventListener('keypress', onKeyPress);
// itemItem.addEventListener('keyup', onKeyUp);
itemItem.addEventListener('keydown', onKeyDown)