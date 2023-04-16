const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

console.dir(inputEl.value)

inputEl.addEventListener('input', onChangeInput)
function onChangeInput (event){
    spanEl.style = `font-size: ${event.currentTarget.value}px;`
}
    