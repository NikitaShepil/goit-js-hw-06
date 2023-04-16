function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const mainBox = document.querySelector('#boxes');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const groupEl = document.querySelector('#controls');
const number = groupEl.querySelector('input[type="number"]')

createBtn.addEventListener('click',() => createBoxes(number.value));

function onCreateBtn(event){
  
}
function createBoxes(amount){
 if (amount <= 0){
  return;
 }
    let divList = '';
    let widthDv = 20;
    let hightDv = 20;
  for(let i = 0; i < amount ; i+=1){
   
    let divEl =
     `<div style="width:${widthDv + 10}px; height:${hightDv +10}px; background-color:${getRandomHexColor()}"></div>`;
     divList += divEl;
     widthDv += 10;
     hightDv += 10;

  }
  console.log(mainBox)
  mainBox.insertAdjacentHTML("afterbegin",divList)

}

destroyBtn.addEventListener('click', onDestroy);
function onDestroy(event){
while(mainBox.firstChild){
  mainBox.removeChild(mainBox.firstChild)
}
}

