const inputElById = document.querySelector("#validation-input");
const HandleInput = (event) => {
  const { value, dataset } = event.target;
  const requiredLength = Number(dataset.length);
  console.log(requiredLength === value.length);
  if (requiredLength === value.length) {
    event.target.classList.add("valid");
    event.target.classList.remove("invalid");
  } else {
    event.target.classList.add("invalid");
    event.target.classList.remove("valid");
  }
};
inputElById.addEventListener("blur", HandleInput);
