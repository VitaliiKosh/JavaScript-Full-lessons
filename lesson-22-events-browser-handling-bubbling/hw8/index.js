const checkboxElem = document.querySelector(".task-status");

function handleClick() {
  console.log(!!event.target.cheched);
  //  console.log(checkboxElem.value);
}

checkboxElem.addEventListener("change", handleClick);
