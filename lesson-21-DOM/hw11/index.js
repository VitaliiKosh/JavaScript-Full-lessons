export function squaredNumbers() {
  const arr = Array.from(document.querySelectorAll(".number"));
  //  console.log(arr);

  arr.map((arrElem) => {
    const searchNumber = arrElem.dataset.number;
    // console.log(searchNumber);
    arrElem.setAttribute("data-squared-number", searchNumber ** 2);
    // console.log(arrElem);
  });
}

// squaredNumbers();
