const getValueWithDelay = (value, delay) =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log(value);
      resolve(value);
    }, delay);
  });

const asyncNum1 = getValueWithDelay(56);
const asyncNum2 = getValueWithDelay(4);
const asyncNum3 = getValueWithDelay(10);

export const asyncSum = (...asyncNumbers) => {
  return Promise.allSettled(asyncNumbers).then((numbers) =>
    console.log(numbers)
  );
};

asyncSum(asyncNum1, Promise.reject(new Error("err")), asyncNum3).then(
  (result) => console.log(result)
);
