export const requestUserData = (userId) => {
  const request = new Promise((resolve, reject) => {
    if (userId === 'broken') {
      setTimeout(() => {
        reject(new Error('User not found'));
      }, 500);
    } else {
      setTimeout(() => {
        resolve({
          name: 'John',
          age: 17,
          userId,
          email: `${userId}@example.com`,
        });
      }, 1000);
    }
  });
  return request;
};

requestUserData('userid777').then((data) => console.log(data)); // {name: 'John', age: 17, userId: 'userid777', email: 'userid777@example.com'}

requestUserData('broken').catch((error) => console.log(error)); // Error: User not found

// requestUserData("broken-1").finally(() => console.log("finally"));
