const Post = require('./post');

class PaidPost extends Post {
  price;

  constructor(name, price) {
    super(name);
    this.price = price;
  }
}

module.exports = PaidPost;
