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
    throw new Error('Failed to load data');
  }
};

// examples
getUsersBlogs(['google', 'facebook', 'reactjs']).then((linksList) =>
  console.log(linksList)
); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
getUsersBlogs(['microsoft']).then((linksList) => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]
