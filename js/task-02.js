const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const array = [];

ingredients.forEach((food) => {
  
  const itemEl = document.createElement('li');
  itemEl.classList.add('item')
const textEl = document.createElement('p');
textEl.textContent = food;
itemEl.append(textEl);
console.log(itemEl)
array.push(itemEl)

})
console.log(array)

const ulEl = document.querySelector('#ingredients');
ulEl.append(...array)