const bodyEl = document.body;
const buttonEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const handleBodyColor = () => {
  const RandomHexColor = getRandomHexColor();
  bodyEl.style.backgroundColor = RandomHexColor;
  spanEl.textContent = RandomHexColor;
};

buttonEl.addEventListener("click", handleBodyColor);
