export function getSection(num) {
  //  const result = document.querySelector(".box");
  const newElem = document.querySelector(`span[data-number = "${num}"]`);
  return newElem.parentElement.getAttribute("data-section");
}

// console.log(getSection(1));
