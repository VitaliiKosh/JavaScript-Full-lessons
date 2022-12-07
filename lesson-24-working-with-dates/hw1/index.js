export const getDiff = (startDate, endDate) => {
  const newStartDate = new Date(startDate).getTime();
  // console.log(newStartDate);
  const newEndDay = new Date(endDate).getTime();
  // console.log(newEndDay);
  const diffDate = Math.abs(Math.abs(newStartDate) - Math.abs(newEndDay));
  // console.log(diffDate); // ==> 82176645999
  // console.log(new Date(diffDate)); // ==> Wed Aug 09 1972 05:50:45 GMT+0300 (Восточная Европа, стандартное время)
  // 86400000ms in 1 day, 3600000ms in 1 hour, 60000ms in 1 minute, 1000ms in 1 second

  const days = Math.floor(diffDate / 86400000);
  // console.log(days); // ==> 951
  const hours = Math.floor((diffDate - days * 86400000) / 3600000);
  // console.log(hours); // ==> 2
  const minutes = Math.floor(
    (diffDate - days * 86400000 - hours * 3600000) / 60000
  );
  // console.log(minutes); // ==> 50
  const seconds = Math.floor(
    (diffDate - days * 86400000 - hours * 3600000 - minutes * 60000) / 1000
  );
  // console.log(seconds); // ==> 45

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};
/*
const startDate = new Date(Date.UTC(2022, 11, 7, 7, 46, 64, 44));
const endDate = new Date(Date.UTC(2020, 3, 30, 4, 56, 18, 45));
*/

const startDate = new Date(Date.UTC(1956, 20, 5, 7, 46, 64, 44));
const endDate = new Date(Date.UTC(2020, 3, 30, 4, 56, 18, 45));

console.log(getDiff(startDate, endDate));
