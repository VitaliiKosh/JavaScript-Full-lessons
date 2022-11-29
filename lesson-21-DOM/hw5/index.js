export function setButton(buttonText) {
  const newBodyElem = document.querySelector("body");
  newBodyElem.innerHTML = `<button>${buttonText}</button>`;
}
setButton("button text");
