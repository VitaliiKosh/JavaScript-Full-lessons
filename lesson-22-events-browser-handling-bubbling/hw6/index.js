const button = Array.from(document.querySelectorAll('.btn'));
// console.log(button);

// const firstButton = button[0];
// const secondButton = button[1];

const [firstButton, secondButton] = button;
// console.log(firstButton);
// console.log(secondButton);

function handleClick(event) {
  console.log(event.target.textContent);
}

firstButton.addEventListener('click', handleClick);
secondButton.addEventListener('click', handleClick);
