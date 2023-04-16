function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnColorElem = document.querySelector('.change-color');
btnColorElem.addEventListener('click', onBtnToChC)
function onBtnToChC(event){
  document.body.style= `background-color: ${getRandomHexColor()};`
  
}