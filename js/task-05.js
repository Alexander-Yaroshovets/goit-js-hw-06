const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");
const handleInput = (event) => {
  const { value } = event.currentTarget;

  spanEl.textContent = value ? value : " Anonymous";
};

inputEl.addEventListener("input", handleInput);
