function getItemsList() {
  const elementsList = document.querySelectorAll(".technology");
  //  console.dir(elementsList);
  return elementsList;
}

console.dir(getItemsList());

function getItemsArray() {
  const elementsArray = document.querySelectorAll(".tool");
  //  console.dir(Array.from(elementsArray));
  return Array.from(elementsArray);
}

console.dir(getItemsArray());
