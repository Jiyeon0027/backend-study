"use strict";

const UserStorage = require("../../models/UserStorage");

const view = {
  home: (req, res) => {
    res.render("home/index");
  },

  login: (req, res) => {
    res.render("home/login");
  },
};

const process = {
  login: (req, res) => {
    const id = req.body.id;
    const password = req.body.password;

    const userStorage = new UserStorage();
    const users = userStorage.getUsers();

    const response = {};
    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.password[idx] === password) {
        response.success = true;
        return res.json(response);
      }
    }

    response.success = false;
    response.msg = "로그인에 실패하셨습니다";
    return res.json(response);
  },
};

module.exports = {
  view,
  process,
};
