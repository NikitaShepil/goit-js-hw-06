const listEl = document.querySelector("#categories");
const itemElList = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemElList.length}` );

itemElList.forEach((element) => {
    const itemTitle = element.querySelector('h2').textContent;
    const itemLength = element.querySelectorAll('li').length;
    console.log(`Category: ${itemTitle}\nElements: ${itemLength}\n`)
    
    
})