"use strict";

const id = document.querySelector("form > div:nth-child(1) > input[type=text]");
const password = document.querySelector(
  "form > div:nth-child(2) > input[type=password]"
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
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.log("로그인에러가 발생");
    });
};

loginBtn.addEventListener("click", login);
