"use strict";

const username = document.querySelector(
  "input.name"
) as HTMLInputElement | null;
const password = document.querySelector(
  "input.password"
) as HTMLInputElement | null;
const emailAddress = document.querySelector(
  "input.email"
) as HTMLInputElement | null;
const registerBtn = document.querySelector(
  "button"
) as HTMLButtonElement | null;

const register = (): void => {
  if (username && password && emailAddress) {
    // Null checks for TypeScript safety
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
        console.log("회원가입 에러가 발생", err);
      });
  } else {
    console.log("필수 입력 필드가 없습니다.");
  }
};

if (registerBtn) {
  registerBtn.addEventListener("click", register);
} else {
  console.log("회원가입 버튼을 찾을 수 없습니다.");
}
