const User = require('./user');

class Client extends User {
  billing;

  constructor(name, billing = 0) {
    super(name);
    this.billing = billing;
  }

  notify(paidpost) {
    this.billing += (paidpost.price || 0);
    this.billing = Number(this.billing.toFixed(2));
    return this.read(paidpost.summary);
  }
}

module.exports = Client;
