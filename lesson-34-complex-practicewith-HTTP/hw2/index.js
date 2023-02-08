const _baseUrl = 'https://636a8bfbc07d8f936da160be.mockapi.io/api/v1/users';

const formElem = document.querySelector('.login-form');
const submitBtnElem = document.querySelector('.submit-button');

const onInput = () => {
  const isValidForm = formElem.reportValidity();
  if (isValidForm) {
    submitBtnElem.removeAttribute('disabled');
  } else {
    submitBtnElem.setAttribute('disabled', true);
  }
};

formElem.addEventListener('input', onInput);

const createUser = (data) =>
  fetch(_baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(data),
  });

const onSubmitForm = (event) => {
  event.preventDefault();

  const data = Array.from(new FormData(event.target)).reduce(
    (acc, item) => ({ ...acc, [item[0]]: item[1] }),
    {}
  );
  createUser(data)
    .then((response) => response.json())
    .then((task) => {
      event.target.reset();
      alert(JSON.stringify(task));
    });
};

formElem.addEventListener('submit', onSubmitForm);
