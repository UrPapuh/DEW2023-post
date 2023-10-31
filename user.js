class User {
  name;

  constructor(name) { this.name = name; }

  read(str) { return `${this.name} is reading ${str}`; }

  notify(post) {
    return this.read(post.summary);
  }
}

module.exports = User;
