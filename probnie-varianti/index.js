const squaredNumbers = () => {
  const arr = Array.from(document.querySelectorAll(".number"));
  //  console.log(arr);
  arr.map((elemArr) => {
    //    console.log(elemArr);
    const searchNumberOfdata = elemArr.querySelector("[data-]");
    const numberOfData = Object.values(searchNumberOfdata.dataset);
    searchNumberOfdata.dataset.squaredNumber = numberOfData[0] ** 2;
  });
};
