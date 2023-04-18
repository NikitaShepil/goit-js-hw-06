const inputEl = document.querySelector('#validation-input');
function onInputBlur(elem){
if(elem.currentTarget.value.length === Number(elem.currentTarget.dataset.length) ){
    inputEl.classList.remove('invalid')
    inputEl.classList.add('valid')

}
else{
    inputEl.classList.add('invalid')
    
}
}

inputEl.addEventListener("blur", onInputBlur);