const inputEl = document.querySelector('#validation-input');
function onInputBlur(elem){
if(elem.currentTarget.value.length === 6 ){
    inputEl.classList.remove('invalid')
    inputEl.classList.add('valid')

}
else{
    inputEl.classList.add('invalid')
}
}

inputEl.addEventListener("blur", onInputBlur);