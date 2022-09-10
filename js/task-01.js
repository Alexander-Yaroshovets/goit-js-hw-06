const listWithId = document.querySelector("#categories");
console.log("Number of categories: ", listWithId.children.length);
const listByClassName = document.querySelectorAll(".item");

for (const item of listByClassName) {
  console.log("Category: ", item.firstElementChild.textContent);
  console.log("Elements:", item.lastElementChild.children.length);
}
