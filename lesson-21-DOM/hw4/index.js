export function setTitle(text) {
  const titleNewText = document.querySelector(".title");
  titleNewText.textContent = text;
  return titleNewText.textContent;
}

console.dir(setTitle("I will be very good Front-End developer!"));
