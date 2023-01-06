const baseUrl =
  "https://63b7e3f64f17e3a931df2527.mockapi.io/userslist/userform";

const submitBtn = document.querySelector(".submit-button");
const formElem = document.querySelector(".login-form");
const submitEvent = document.querySelector("form");

const validation = () => {
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
    body: JSON.stringify(event),
  })
    .then((response) => response.json())
    .then((data) => {
      alert(JSON.stringify(data));
      formElem.reset();
    });
};

formElem.addEventListener("input", validation);

submitEvent.addEventListener("submit", sendToServer);
