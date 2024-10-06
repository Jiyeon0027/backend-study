"use strict";

const id = document.querySelector(
  "body > div > div > form.login-form > input[type=text]:nth-child(1)"
);
const password = document.querySelector(
  "body > div > div > form > input[type=password]:nth-child(2)"
);
const loginBtn = document.querySelector("button");

const login = () => {
  const req = {
    id: id.value,
    password: password.value,
  };

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/";
      } else {
        location.href = "/register";
      }
    })
    .catch((err) => {
      console.log("로그인에러가 발생");
    });
};

loginBtn.addEventListener("click", login);
