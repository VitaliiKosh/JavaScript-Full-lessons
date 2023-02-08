const buttons = Array.from(document.querySelectorAll('.pagination__page'));
// console.log(button);
const [firstButton, secondButton, thirdButton] = buttons;
// console.log(firstButton);
// console.log(secondButton);
// console.log(thirdButton);

function handleClick(event) {
  console.log(event.target.textContent);
}

firstButton.addEventListener('click', handleClick);
secondButton.addEventListener('click', handleClick);
thirdButton.addEventListener('click', handleClick);
