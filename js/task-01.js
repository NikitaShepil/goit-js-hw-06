const listEl = document.querySelector("#categories");
const listElArrey = [...listEl.children];
console.log(`Number of categories: ${listElArrey.length}` );

listElArrey.forEach((element) => {
    const elementArrey = element.children
    console.log(`Category: ${elementArrey[0].textContent}`)
    console.log(`Elements: ${elementArrey[1].children.length}`)
    
})