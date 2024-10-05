"use strict";

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
    console.log(req?.body);
  },
};

module.exports = {
  view,
  process,
};
