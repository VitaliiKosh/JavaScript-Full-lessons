export function finishList() {
  const newElem = document.querySelector('.list');
  const newSecondElem = document.querySelector('.special');

  const firstElem = document.createElement('li');
  firstElem.textContent = '1';
  newElem.prepend(firstElem);

  const fourthElem = document.createElement('li');
  fourthElem.textContent = '4';
  newSecondElem.before(fourthElem);

  const sixthElem = document.createElement('li');
  sixthElem.textContent = '6';
  newSecondElem.after(sixthElem);

  const eigthElem = document.createElement('li');
  eigthElem.textContent = '8';
  newElem.append(eigthElem);
}

// finishList();
