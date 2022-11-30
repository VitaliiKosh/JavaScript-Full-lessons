export function finishForm() {
  const ourForm = document.querySelector(".login-form");
  const ourInput = document.querySelector("input");

  ourInput.type = "password";
  ourInput.name = "password";
  //  console.dir(ourInput.getAttribute("name"));
  //  console.dir(ourInput.getAttribute("type"));

  const newElem = document.createElement("input");
  newElem.setAttribute("type", "text");
  newElem.setAttribute("name", "login");
  ourForm.prepend(newElem);
  //  console.dir(newElem.getAttribute("name"));
  //  console.dir(newElem.getAttribute("type"));
}

// finishForm();
