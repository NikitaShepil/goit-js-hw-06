function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnColorElem = document.querySelector('.change-color');
const colorName = document.querySelector('.color');

btnColorElem.addEventListener('click', onBtnToChC)
function onBtnToChC(event){
  const randomColor = getRandomHexColor();
  document.body.style= `background-color: ${randomColor};`
  colorName.textContent= `${randomColor}`
  
}