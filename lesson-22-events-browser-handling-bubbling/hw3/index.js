const checkboxElem = document.querySelector('.task-status');

function handleClick() {
  console.log(!!checkboxElem.checked);
  //  console.log(checkboxElem.value);
}

checkboxElem.addEventListener('change', handleClick);
