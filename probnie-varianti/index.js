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
