export function setTitle(text) {
  const title = document.querySelector(".title");
  //  title.textContent = text;
  //  return title.textContent;
  return (title.textContent = text);
}

console.log(setTitle("I will be very good Front-End developer!"));
