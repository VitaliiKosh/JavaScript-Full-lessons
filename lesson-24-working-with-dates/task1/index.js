const weekDays = ["Mo", "Tu", "We", "Th", "Fr", "St", "Su"];

const dayOfWeek = (date, days) => {
  const day = new Date(date).getDate();
  const dateInFuture = new Date(date).setDate(day + days);

  return weekDays[new Date(dateInFuture).getDay()];
};

const result = dayOfWeek(new Date(2022, 11, 6), 3);
const result1 = dayOfWeek(new Date(2022, 11, 6), 5);
const result2 = dayOfWeek(new Date(2022, 11, 6), 7);
const result3 = dayOfWeek(new Date(2022, 11, 6), 1);
const result4 = dayOfWeek(new Date(2022, 11, 6), 2);

console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
