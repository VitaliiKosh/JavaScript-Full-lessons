tructor(price, city, type) {
    this._price = price;
    this._city = city;
    this._type = type;
  }

  checkPrice() {
    if (this._price > 1000) {
      return true;
    }
    return false;
  }

  confirmOrder() {}

  isValidType() {}
}