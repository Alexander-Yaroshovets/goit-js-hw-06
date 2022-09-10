let counterValue = 0;
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
let valueEl = document.querySelector("#value");
const handleClickDecr = () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};
const handleClickIncr = () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};
btnDecrement.addEventListener("click", handleClickDecr);
btnIncrement.addEventListener("click", handleClickIncr);
