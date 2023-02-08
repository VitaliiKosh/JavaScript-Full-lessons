/*
const withdraw = (clients, balances, client, amount) => {
  const result =
    clients.filter((name) => client.includes(name)) &&
    balances.indexOf(name) >= amount
      ? balances - amount
      : -1;
  return result;
};
*/

const withdraw = (clients, balances, client, amount) => {
  const index = clients.indexOf(client);

  if (amount > balances[index]) {
    return -1;
  }

  // eslint-disable-next-line no-param-reassign
  balances[index] -= amount;
  return balances[index];
};

// input
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50)); // ==> 37
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10)); // ==> -1
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'Ann', 1350)); // ==> 50
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 60)); // ==> 27
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10)); // ==> -1
