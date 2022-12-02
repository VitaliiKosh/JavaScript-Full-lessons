const inputElem = document.querySelector(".text-input");

function handleClick() {
  console.log(event.target.value);
}

inputElem.addEventListener("change", handleClick);
