const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const elements = document.querySelector("#ingredients");

const element = ingredients.map(option => {
  const elementAll = document.createElement("li");
  elementAll.classList.add("item");
  elementAll.textContent = option;
  
  return elementAll;
});
console.log(element);
elements.append(...element);

// ==================== 2 варіант

// const element = [];
// for (let i = 0; i < ingredients.length; i += 1){
//   const option = ingredients[i];
//   const elementAll = document.createElement('li');
//   elementAll.classList.add('item');
//   elementAll.textContent = option;
//   element.push(elementAll);
// }
// console.log(element);
// elements.append(...element);