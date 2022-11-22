const wallet = {
  transactions: [1, 5, 6, 7, 8, 9, 10, 11],
  getMax() {
    return Math.max(...this.transactions);
  },
  getMin() {
    return Math.min(...this.transactions);
  },
};

console.log(wallet.getMax());
console.log(wallet.getMin());
