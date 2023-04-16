const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');



function onInput(event){
    console.log(event.currentTarget.value);
    spanEl.textContent = event.currentTarget.value;
    if(event.currentTarget.value === ''){
        spanEl.textContent = 'Anonymus';
    }
}
inputEl.addEventListener('input', onInput)
