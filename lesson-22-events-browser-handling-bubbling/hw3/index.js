const checkboxElem = document.querySelector(".task-status");

function handleClick() {
  console.log(!!checkboxElem.checked);
}

checkboxElem.addEventListener("change", handleClick);
