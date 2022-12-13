const shmoment = (initValue) => {
  const result = new Date(initValue);

  const calculator = {
    add(value, number) {
      if (value === "years") {
        result.setFullYear(result.getFullYear() + number);
        return this;
      }

      if (value === "months") {
        result.setMonth(result.getMonth() + number);
        return this;
      }

      if (value === "days") {
        result.setDate(result.getDate() + number);
        return this;
      }

      if (value === "hours") {
        result.setHours(result.getHours() + number);
        return this;
      }

      if (value === "minutes") {
        result.setMinutes(result.getMinutes() + number);
        return this;
      }

      if (value === "seconds") {
        result.setSeconds(result.getSeconds() + number);
        return this;
      }

      if (value === "milliseconds") {
        result.setMilliseconds(result.getMilliseconds() + number);
        return this;
      }

      return result.add();
    },

    subtract(value, number) {
      if (value === "years") {
        result.setFullYear(result.getFullYear() + number);
        return this;
      }

      if (value === "months") {
        result.setMonth(result.getMonth() + number);
        return this;
      }

      if (value === "days") {
        result.setDate(result.getDate() + number);
        return this;
      }

      if (value === "hours") {
        result.setHours(result.getHours() + number);
        return this;
      }

      if (value === "minutes") {
        result.setMinutes(result.getMinutes() + number);
        return this;
      }

      if (value === "seconds") {
        result.setSeconds(result.getSeconds() + number);
        return this;
      }

      if (value === "milliseconds") {
        result.setMilliseconds(result.getMilliseconds() + number);
        return this;
      }

      return result.subtract();
    },

    result() {
      return result;
    },
  };
  return calculator;
};

console.log(
  shmoment(new Date(2019, 3, 5, 16, 15, 44)).subtract("years", 3).add("days", 5)
);

/*
  const calculator = {
    add(value, number) {
      // eslint-disable-next-line default-case
      switch (value) {
        case "years":
          result.setFullYear(result.getFullYear() + number);
          return this;

        case "months":
          result.setMonth(result.getMonth() + number);
          return this;

        case "days":
          result.setDate(result.getDate() + number);
          return this;

        case "hour":
          result.setHours(result.getHours() + number);
          return this;

        case "minutes":
          result.setMinutes(result.getMinutes() + number);
          return this;

        case "seconds":
          result.setSeconds(result.getSeconds() + number);
          return this;

        case "milliseconds":
          result.setMilliseconds(result.getMilliseconds() + number);
          return this;
      }
      return result.toLocaleString();
    },

    subtract(value, number) {
      // eslint-disable-next-line default-case
      switch (value) {
        case "years":
          result.setFullYear(result.getFullYear() - number);
          return this;

        case "months":
          result.setMonth(result.getMonth() - number);
          return this;

        case "days":
          result.setDate(result.getDate() - number);
          return this;

        case "hour":
          result.setHours(result.getHours() - number);
          return this;

        case "minutes":
          result.setMinutes(result.getMinutes() - number);
          return this;

        case "seconds":
          result.setSeconds(result.getSeconds() - number);
          return this;

        case "milliseconds":
          result.setMilliseconds(result.getMilliseconds() - number);
          return this;
      }
      return result.toLocaleString();
    },

    result() {
      return result;
    },
  };
  return calculator;
};

console.log(
  shmoment(new Date(2019, 3, 5, 16, 15, 44)).subtract("years", 3).add("days", 5)
);
*/
