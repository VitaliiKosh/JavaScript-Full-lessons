const inputElem = document.querySelector(".text-input");

function handleClick() {
  console.log(inputElem.value);
}

inputElem.addEventListener("change", handleClick);
