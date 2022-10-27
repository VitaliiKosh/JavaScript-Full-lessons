const getTotalRevenue = (transactions) => {
  // put your code here
  // eslint-disable-next-line no-use-before-define
  const result = Object.keys(dayTransactions).map((value, index) =>
    // eslint-disable-next-line no-use-before-define
    Object.values(dayTransactions[value])
  );
  console.log(result[0][1] + result[1][1] + result[2][1]);
};

// examples
const dayTransactions = [
  { userId: 22, amount: 60, operation: "sell" },
  { userId: 22, amount: 160, operation: "buy" },
  { userId: 44, amount: 90, operation: "sell" },
];

const result = getTotalRevenue(dayTransactions); // ==> 310
