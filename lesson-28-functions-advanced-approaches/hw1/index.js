const shmoment = (initValue) => {
  //  let time = new Date(initValue);
  const res = new Date(initValue);

  return {
    add(value, number) {
      //      const res = new Date(initValue);

      // eslint-disable-next-line default-case
      switch (value) {
        case "years":
          res.setFullYear(res.getFullYear() + number);
          break;

        case "months":
          res.setMonth(res.getMonth() + number);
          break;

        case "days":
          res.setDate(res.getDate() + number);
          break;

        case "hour":
          res.setHours(res.getHours() + number);
          break;

        case "minutes":
          res.setMinutes(res.getMinutes() + number);
          break;

        case "seconds":
          res.setSeconds(res.getSeconds() + number);
          break;

        case "milliseconds":
          res.setMilliseconds(res.getMilliseconds() + number);
          break;
      }
      return res.toLocaleString();
    },

    subtract(value, number) {
      //      const res = new Date(initValue);

      // eslint-disable-next-line default-case
      switch (value) {
        case "years":
          res.setFullYear(res.getFullYear() - number);
          break;

        case "months":
          res.setMonth(res.getMonth() - number);
          break;

        case "days":
          res.setDate(res.getDate() - number);
          break;

        case "hour":
          res.setHours(res.getHours() - number);
          break;

        case "minutes":
          res.setMinutes(res.getMinutes() - number);
          break;

        case "seconds":
          res.setSeconds(res.getSeconds() - number);
          break;

        case "milliseconds":
          res.setMilliseconds(res.getMilliseconds() - number);
          break;
      }
      return res.toLocaleString();
    },

    res() {
      return res;
    },
  };
  //  return calculator;
};
console.log(shmoment(new Date(2019, 3, 5, 16, 15, 44)).subtract("years", 3));
