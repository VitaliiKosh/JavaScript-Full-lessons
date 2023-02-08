export function createButton(buttonText) {
  const newElem = document.querySelector('body');
  const newButton = document.createElement('button');
  newButton.textContent = `${buttonText}`;
  newElem.append(newButton);
}

// createButton("Button Start");
