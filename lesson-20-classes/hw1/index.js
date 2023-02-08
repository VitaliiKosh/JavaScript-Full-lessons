export class Order {
  // put your code here
  constructor(price, city, type) {
    this.price = price;
    this.city = city;
    this.type = type;
    this.id = Math.random().toFixed();
    this.isConfirmed = false;
    this.dateCreated = new Date();
  }

  checkPrice() {
    return this.price > 1000;
  }

  confirmOrder() {
    this.isConfirmed = this.isConfirmed === false;
    // this.isConfirmed = true;
    this.dateConfirmed = new Date();
  }

  isValidType() {
    // return type === 'Buy' || type === 'Sell' ? true : false;
    return !!(this.type === 'Buy' || this.type === 'Sell');
  }
}
