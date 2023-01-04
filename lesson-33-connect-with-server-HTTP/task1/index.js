const userAvatarElem = document.querySelector(".user__avatar");
const userNameElem = document.querySelector(".user__name");
const userLocationElem = document.querySelector(".user__location");

const defaultAvatar = "https://avatars3.githubusercontent.com/u10001";

userAvatarElem.src = defaultAvatar;

// http://api.github.com/users/USERNAME

// fetch and render user data...

const fetchUserData = (userName) => {
  return fetch(`https://api.github.com/users/${userName}`).then((response) =>
    response.json()
  );
  //    .then((result) => console.log(result));
};

const renderUserData = (userData) => {
  //  console.log(userData);
  // eslint-disable-next-line camelcase
  const { avatar_url, name, location } = userData;
  // eslint-disable-next-line camelcase
  userAvatarElem.src = avatar_url;
  userNameElem.textContent = name;
  userLocationElem.textContent = location ? `from ${location}` : "";
};

const showUserBtnElem = document.querySelector(".name-form__btn");
const userNameInputElem = document.querySelector(".name-form__input");

const onSearchUser = () => {
  const userName = userNameInputElem.value;
  fetchUserData(userName).then((userData) => renderUserData(userData));
};

showUserBtnElem.addEventListener("click", onSearchUser);
