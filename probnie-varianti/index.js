function squaredNumbers() {
  const arr = Array.from(document.querySelectorAll(".number"));
  //  console.log(arr);

  arr.map((arrElem) => {
    const searchNumber = arrElem.dataset.number;
    //  console.log(searchNumber);

    // searchNumber.dataset.squaredNumber = searchNumber ** 2;
    //  dataset.squaredNumber(searchNumber ** 2);
    // const dataSquaredNumber = searchNumber ** 2;
    arrElem.setAttribute("data-squared-number", searchNumber ** 2);
    console.log(arrElem);
  });
  /*
  arr.map((elemArr) => {
    //    console.log(elemArr);
    const searchNumberOfdata = elemArr.querySelector("[data-]");
    const numberOfData = Object.values(searchNumberOfdata.dataset);
    searchNumberOfdata.dataset.squaredNumber = numberOfData[0] ** 2;
  });
  */
}

squaredNumbers();

function squaredNumbers() {
  const element = document.querySelectorAll(".number");
  //  const element = Array.from(document.querySelectorAll(".number"));

  console.log(element.getAttribute("data-section"));

  //  if (elementFour.classList.contains("some-class")) {
  //    elementFour.classList.add("another-class");
  // }
  /*
  const arr = Array.from(document.querySelectorAll(".number"));
  console.log(arr);
  arr.map((elemArr) => {
    console.log(elemArr);
    const searchNumberOfdata = elemArr.querySelector("[data-]");
    const numberOfData = Object.values(searchNumberOfdata.dataset);
    searchNumberOfdata.dataset.squaredNumber = numberOfData[0] ** 2;
  });
  */
}

squaredNumbers();

function squaredNumbers() {
  const arr = Array.from(document.querySelectorAll(".number"));
  console.log(arr);

  //  const searchNumberOfdata = arr.querySelector("dataNumber");
  // console.log(arr.getAttribute("dataNumber"));
  arr.map((arrElem) => {
    const searchNumber = arrElem.querySelector("data-number");
    const numberOfData = Object.values(searchNumber.dataset);
    searchNumber.dataset.squaredNumber = numberOfData[0] ** 2;
    // const searchNumber = elemArr.getAttribute("data-number");
    // console.log(elemArr.getAttribute("data-number"));
    // console.log(numberOfData);
  });
  /*
  arr.map((elemArr) => {
    //    console.log(elemArr);
    const searchNumberOfdata = elemArr.querySelector("[data-]");
    const numberOfData = Object.values(searchNumberOfdata.dataset);
    searchNumberOfdata.dataset.squaredNumber = numberOfData[0] ** 2;
  });
  */
}

squaredNumbers();

/*
export function bind(func, context, ...arg1) {
  return function (...arg2) {
    return func.apply(context, [...arg1, arg2]);
  };
}
*/

const startDate = new Date(Date.UTC(2022, 11, 7, 7, 46, 64, 44));
const endDate = new Date(Date.UTC(2020, 3, 30, 4, 56, 18, 45));

const getDiff = (startDate, endDate) => {
  const newStartDate = new Date(startDate).getTime();
  const newEndDay = new Date(endDate).getTime();
  const diffDate = Math.abs(newStartDate - newEndDay);
  // console.log(diffDate); // ==> 82176645999
  // console.log(new Date(diffDate)); // ==> Wed Aug 09 1972 05:50:45 GMT+0300 (Восточная Европа, стандартное время)
  // 86400000ms in 1 day, 3600000ms in 1 hour, 60000ms in 1 minute, 1000ms in 1 second

  const days = Math.floor(diffDate / 86400000);
  // console.log(days); // ==> 951
  const hours = Math.floor((diffDate - days * 86400000) / 3600000);
  // console.log(hours); // ==> 2
  const minutes = Math.floor(
    (diffDate - days * 86400000 - hours * 3600000) / 60000
  );
  // console.log(minutes); // ==> 50
  const seconds = Math.floor(
    (diffDate - days * 86400000 - hours * 3600000 - minutes * 60000) / 1000
  );
  // console.log(seconds); // ==> 45

  console.log(`${days}d ${hours}h ${minutes}m ${seconds}s`);
};

getDiff(startDate, endDate);

//  const diffDate = Math.abs(
//    new Date(startDate).getTime() - new Date(endDate).getTime()
//  );

// console.log(diffDate); // ==> 82176645999

//  const hoursData = new Date(diffDate).getUTCHours();

//  console.log(hoursData);
