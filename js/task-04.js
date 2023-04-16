const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
let counterValue = 0;
const valueEl = document.querySelector('#value');
valueEl.textContent = counterValue;

decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
})
incrementBtn.addEventListener("click", () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
})