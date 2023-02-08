export function manageClasses() {
  const elementOne = document.querySelector('.one');
  const elementTwo = document.querySelector('.two');
  const elementThree = document.querySelector('.three');
  const elementFour = document.querySelector('.four');

  elementOne.classList.add('selected');

  elementTwo.classList.remove('selected');

  elementThree.classList.toggle('three_done');

  if (elementFour.classList.contains('some-class')) {
    elementFour.classList.add('another-class');
  }
}

// manageClasses();
