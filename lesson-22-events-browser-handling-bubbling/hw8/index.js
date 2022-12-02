const checkboxElem = document.querySelector(".task-status");

function handleClick(event) {
  console.log(event.target.cheched ? true : false);
}

checkboxElem.addEventListener("change", handleClick);
