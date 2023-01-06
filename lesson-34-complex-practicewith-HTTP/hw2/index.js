// const baseUrl = "https://63b7b9a44d97e82aa3c41ae8.mockapi.io/todolist/userform";
const baseUrl = "https://63a6c3fc59fd83b1bb3777cf.mockapi.io/todolist/userform";

const submitBtn = document.querySelector(".submit-button");
const formElem = document.querySelector(".login-form");
const submitEvent = document.querySelector("form");

const checkValidation = () => {
  if (formElem.reportValidity()) {
    submitBtn.removeAttribute("disabled");
  } else {
    submitBtn.setAttribute("disabled", true);
  }
};

const sendToServer = (event) => {
  event.preventDefault();
  const { fields } = document.forms;
  const userData = Object.fromEntries(new FormData(fields));
  console.log(userData);
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(userData),
  })
    .then((response) => response.json())
    .then((data) => {
      alert(JSON.stringify(data));
      formElem.reset();
    });
};

formElem.addEventListener("input", checkValidation);

submitEvent.addEventListener("submit", sendToServer);
