export const delay = (time) => {
  const request = new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
  return request;
};

delay(3000).then((data) => console.log("Done"));
