const baseUrl = "https://63b7b9a44d97e82aa3c41ae8.mockapi.io/api/v1/userform";

const checkValidation = () => {
  if (loginForm.reportValidity()) {
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
  fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(userData),
  }).then(() =>
    alert(fetch(baseUrl).then((response) => JSON.stringify(response.json())))
  );
  formElem.reset();
};

const submitBtn = document.querySelector(".submit-button");

const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("input", checkValidation);

const sumbitEvent = document.querySelector("form");
sumbitEvent.addEventListener("submit", sendToServer);
