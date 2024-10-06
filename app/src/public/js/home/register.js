"use strict";

const username = document.querySelector("input.name");
const password = document.querySelector("input.password");
const emailAddress = document.querySelector("input.email");
const registerbtn = document.querySelector("button");

const register = () => {
  const req = {
    id: username.value,
    password: password.value,
    email: emailAddress.value,
  };

  console.log(req);

  fetch("/register", {
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
        location.href = "/login";
      }
    })
    .catch((err) => {
      console.log("회원가입 에러가 발생");
    });
};

registerbtn.addEventListener("click", register);
