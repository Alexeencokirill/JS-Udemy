const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkBox = document.getElementById('checkbox');
const heading = document.querySelector('h1');

function onInput (e) {
    heading.textContent = e.target.value;
}

function onCheked (e) {
    const isChecked = e.target.checked;
    heading.textContent = isChecked ? 'Checked' : 'Not Checked'
}

function onFocus (e) {
    console.log('Inout is focused');
    itemInput.style.outlineStyle = 'solid';
    itemInput.style.outlineWidth = '1px';
    itemInput.style.color = 'green';
}

function onBlur (e) {
    console.log('Input is not focused');
    itemInput.style.outlineStyle = 'none';
}

itemInput.addEventListener('input', onInput);
priorityInput.addEventListener('change', onInput)
checkBox.addEventListener('input', onCheked);
itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur' , onBlur);