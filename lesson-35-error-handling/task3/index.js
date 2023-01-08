import { fetchUserData, fetchRepositories } from "./gateway.js";
import { renderUserData } from "./user.js";
import { renderRepos, cleanReposList } from "./repos.js";
import { showSpinner, hideSpinner } from "./spinner.js";

const defaultUser = {
  avatar_url: "https://avatars3.githubusercontent.com/u10001",
  name: "",
  location: "",
};

renderUserData(defaultUser);

const showUserBtnElem = document.querySelector(".name-form__btn");
const userNameInputElem = document.querySelector(".name-form__input");

const onSearchUser = () => {
  showSpinner();
  cleanReposList();
  const userName = userNameInputElem.value;
  fetchUserData(userName)
    .then((userData) => {
      renderUserData(userData);
      return userData.repos_url;
    })
    .then((url) => fetchRepositories(url))
    .then((reposList) => {
      renderRepos(reposList);
    })
    .catch((err) => {
      alert(err.message);
    })
    .finally(() => {
      hideSpinner();
    });
};

showUserBtnElem.addEventListener("click", onSearchUser);

/*
export const getUsersBlogs = async (users) => {
  let resLinks;
  try {
    const usersData = users.map((user) => {
      const userData = fetch(`https://api.github.com/users/${user}`)
        .then((response) => {
          return response.json();
        })
        .then((response) => response.blog)
        .catch((err) => {
          return Promise.reject(new Error(err.message));
        });
      return userData;
    });
    resLinks = await Promise.all(usersData);
    return await Promise.all(usersData);
  } catch (err) {
    throw new Error("Failed to load data");
  }
};
*/
