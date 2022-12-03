const button = Array.from(document.querySelectorAll(".btn"));
// const button = document.querySelectorAll(".btn");
//   console.log(button);

function handleClick(event) {
  button.map((element) => element.textContent);
  //  console.log(searchNumber); / ==> JavaScript  HTML
  console.log(event.target.textContent);
}

button.addEventListener("click", handleClick);
