// models/userModel.js

let users = [];

class User {
  constructor(id, username) {
    this.id = id;
    this.username = username;
    this.cart = [];
  }

  static getAllUsers() {
    return users;
  }

  static getUserById(id) {
    return users.find((user) => user.id === id);
  }

  static createUser(username) {
    const id = users.length + 1;
    const newUser = new User(id, username);
    users.push(newUser);
    return newUser;
  }
}

module.exports = User;
