const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsById = document.querySelector("#ingredients");
const elements = [];
ingredients.forEach((ingredient) => {
  const elem = document.createElement("li");
  elem.textContent = ingredient;
  elem.classList.add("item");
  elements.push(elem);
});
ingredientsById.append(...elements);
