const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsById = document.querySelector("#ingredients");

const elements = ingredients.map((ingredient) => {
  const elem = document.createElement("li");
  elem.textContent = ingredient;
  elem.classList.add("item");
  return elem;
});
ingredientsById.append(...elements);
