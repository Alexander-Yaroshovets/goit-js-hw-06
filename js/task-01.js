const listWithId = document.querySelector("#categories");
console.log("Number of categories: ", listWithId.children.length);
const listByClassName = document.querySelectorAll(".item");
listByClassName.forEach((item) => {
  console.log("Category: ", item.firstElementChild.textContent);
  console.log("Elements:", item.lastElementChild.children.length);
});
