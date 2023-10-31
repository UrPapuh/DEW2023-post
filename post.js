const User = require('./user');

class Post {
  name;

  #number;

  #subscribers;

  constructor(name) {
    this.name = name;
    this.#number = 0;
    this.#subscribers = [];
  }

  get summary() {
    return `${this.name} publication number ${this.#number}`;
  }

  getSubscribers() {
    return this.#subscribers.map((user) => user.name).join(',');
  }

  attach(user) {
    if (user instanceof User && !(this.#subscribers.includes(user))) {
      this.#subscribers.push(user);
    }
  }

  detach(user) {
    const index = this.#subscribers.indexOf(user);
    if (index >= 0) {
      this.#subscribers.splice(index, 1);
    }
  }
}

module.exports = Post;
