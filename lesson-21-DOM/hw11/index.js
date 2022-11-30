export function squaredNumbers() {
  const arr = Array.from(document.querySelectorAll(".number"));
  console.log(arr);

  arr.map((arrElem) => {
    const searchNumber = arrElem.querySelector("data-number");
    const numberOfData = Object.values(searchNumber.dataset);
    searchNumber.dataset.squaredNumber = numberOfData[0] ** 2;
  });
}

squaredNumbers();
