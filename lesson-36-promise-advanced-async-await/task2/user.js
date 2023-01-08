const userNameElem = document.querySelector(".user__name");
const userLocationElem = document.querySelector(".user__location");
const userAvatarElem = document.querySelector(".user__avatar");

export const renderUserData = (userData) => {
  // eslint-disable-next-line camelcase
  const { avatar_url, name, location } = userData;
  // eslint-disable-next-line camelcase
  userAvatarElem.src = avatar_url;
  userNameElem.textContent = name;
  userLocationElem.textContent = location ? `from ${location}` : "";
};
