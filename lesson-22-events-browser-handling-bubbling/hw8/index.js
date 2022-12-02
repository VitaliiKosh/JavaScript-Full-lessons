const checkboxElem = document.querySelector(".task-status");

function handleClick(event) {
  console.log(!!event.target.cheched);
  //  console.log(checkboxElem.value);
}

checkboxElem.addEventListener("change", handleClick);
