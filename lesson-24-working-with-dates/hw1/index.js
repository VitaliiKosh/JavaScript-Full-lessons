const startDate = new Date(Date.UTC(2019, 10, 24, 20, 50, 34, 44));
const endDate = new Date(Date.UTC(2019, 1, 22, 17, 52, 18));

const diffDate = Math.abs(
  new Date(startDate).getTime() - new Date(endDate).getTime()
);

console.log(diffDate); // ==> 23770696044

const hoursData = new Date(diffDate).getUTCHours();

console.log(hoursData);
