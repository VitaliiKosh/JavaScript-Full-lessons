// put your code here
// eslint-disable-next-line consistent-return
function withdraw(clients, balances, client, amount) {
  if (clients[0] === client && balances[0] >= amount) {
    return balances[0] - amount;
  }
  if (clients[0] === client && balances[0] < amount) {
    return -1;
  }

  if (clients[1] === client && balances[1] >= amount) {
    return balances[1] - amount;
  }
  if (clients[1] === client && balances[1] < amount) {
    return -1;
  }

  if (clients[2] === client && balances[2] >= amount) {
    return balances[2] - amount;
  }
  if (clients[2] === client && balances[2] < amount) {
    return -1;
  }
}

console.log(withdraw(["Ann", "John", "User"], [1400, 87, -6], "Ann", 1350));
console.log(withdraw(["Ann", "John", "User"], [1400, 87, -6], "John", 60));
console.log(withdraw(["Ann", "John", "User"], [1400, 87, -6], "User", 10));
