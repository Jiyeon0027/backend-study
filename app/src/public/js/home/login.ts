"use strict";

const idInput = document.querySelector(
  "body > div > div > form > input[type=text]"
) as HTMLInputElement | null;

const passwordInput = document.querySelector(
  "body > div > div > form > input[type=password]"
) as HTMLInputElement | null;

const loginBtn = document.querySelector("button") as HTMLButtonElement | null;

const login = (event: Event): void => {
  event.preventDefault();
  if (idInput && passwordInput) {
    // Null check for TypeScript safety
    const req = {
      id: idInput.value,
      password: passwordInput.value,
    };

    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.success) {
          location.href = "/";
        } else {
          location.href = "/register";
        }
      })
      .catch((err) => {
        console.log("로그인에러가 발생", err);
      });
  } else {
    console.log("ID 또는 비밀번호 입력 필드가 없습니다.");
  }
};

if (loginBtn) {
  loginBtn.addEventListener("click", login);
} else {
  console.log("로그인 버튼을 찾을 수 없습니다.");
}
