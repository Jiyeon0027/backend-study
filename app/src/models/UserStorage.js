"use strict";

class UserStorage {
  #users = {
    id: ["jiyeon", "지연", "hello"],
    password: ["1234", "0000", "123456"],
  };

  getUsers() {
    return this.#users;
  }
}

module.exports = UserStorage;
