const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");
spanEl.style.fontSize = "16px";
console.log(spanEl.style.fontSize);
let styleEl = parseInt(spanEl.style.fontSize);

const handleInput = (event) => {
  const { value } = event.target;
  styleEl = parseInt(value);
  spanEl.style.fontSize = `${styleEl.toString()}px`;
};
inputEl.addEventListener("input", handleInput);
