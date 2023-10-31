const User = require('./user');
const PaidPost = require('./paid-post');

class Client extends User {
  billing;

  constructor(name, billing = 0) {
    super(name);
    this.billing = billing;
  }

  notify(paidpost) {
    if (paidpost instanceof PaidPost) {
      this.billing += Number(paidpost.price.toFixed(2));
    }
    return this.read(paidpost.summary);
  }
}

module.exports = Client;
