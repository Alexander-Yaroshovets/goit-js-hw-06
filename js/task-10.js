function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputElByTag = document.querySelector("input");
const createButtonEl = document.querySelector("[data-create]");
const destroyButtonEl = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");

const elem = document.createElement("div");
elem.style.width = "30px";
elem.style.height = "30px";
let boxWidth = parseInt(elem.style.width);
let boxHeight = parseInt(elem.style.height);

// boxesEl.append(elem);
const handleInput = (event) => {
  console.log("change");
  const elem = document.createElement("div");
  boxWidth += 10;
  boxHeight += 10;
  elem.style.width = `${boxWidth.toString()}px`;
  elem.style.height = `${boxHeight.toString()}px`;
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  elem.style.backgroundColor = getRandomHexColor();

  const createBoxes = (amount) => {
    boxesEl.append(elem);
  };
  createButtonEl.addEventListener("click", createBoxes);
  const destroyBoxes = () => {
    boxesEl.remove(elem);
  };
  destroyButtonEl.addEventListener("click", destroyBoxes);
};
inputElByTag.addEventListener("change", handleInput);
