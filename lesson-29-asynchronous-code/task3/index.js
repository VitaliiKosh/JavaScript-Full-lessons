export const printing = () => {
  //  console.log(1);
  console.log(1);

  setTimeout(function () {
    //    console.log(2);
    console.log(5);
  }, 1000);

  //  console.log(3);
  console.log(2);

  setTimeout(function () {
    //    console.log(4);
    console.log(4);
  }, 0);

  setTimeout(function () {
    //    console.log(5);
    console.log(6);
  }, 2000);

  //  console.log(6);
  console.log(3);
};

printing();
