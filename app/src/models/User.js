"use stricts";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  login() {
    const userStorage = new UserStorage();
    const users = userStorage.getUsers();

    const id = this.body.id;
    const password = this.body.password;

    const response = {};
    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.password[idx] === password) {
        response.success = true;
        return response;
      }
    }

    response.success = false;
    response.msg = "로그인에 실패하셨습니다";
    return response;
  }

  register() {
    console.log(this.body);
    return 1;
  }
}

module.exports = User;
