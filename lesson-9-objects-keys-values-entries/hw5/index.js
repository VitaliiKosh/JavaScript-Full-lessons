const getTotalRevenue = (transactions) => {
  // put your code here
  /*
  let result = 0;
  for (let i = 0; i < transactions.length; i += 1) {
    result += transactions[i].amount;
  }
*/
  const result = transactions.reduce((a, b) => a + b.amount, 0);
  return result;
};

// examples
const dayTransactions = [
  { userId: 22, amount: 60, operation: "sell" },
  { userId: 22, amount: 160, operation: "buy" },
  { userId: 44, amount: 90, operation: "sell" },
];

console.log(getTotalRevenue(dayTransactions)); // ==> 310
