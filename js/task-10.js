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

const handleInput = (event) => {
  const inputValue = event.target.value;

  for (let i = 1; i <= inputValue; i += 1) {
    const elem = document.createElement("div");
    boxWidth += 10;
    boxHeight += 10;
    elem.style.width = `${boxWidth.toString()}px`;
    elem.style.height = `${boxHeight.toString()}px`;
    elem.style.backgroundColor = getRandomHexColor();

    const createBoxes = () => {
      boxesEl.append(elem);
    };

    const destroyBoxes = () => {
      location.reload();
    };

    createButtonEl.addEventListener("click", createBoxes);
    destroyButtonEl.addEventListener("click", destroyBoxes);
  }
};

inputElByTag.addEventListener("change", handleInput);
