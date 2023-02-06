"use strict";

const id = document.querySelector("#id"),
  psword = document.querySelector("#psword"),
<<<<<<< HEAD
  loginBtn = document.querySelector("#button");
=======
  loginBtn = document.querySelector("button");
>>>>>>> 24d92bb9c9b797da5d5f5af662f4aefc53ba3650

loginBtn.addEventListener("click", login);

function login() {
  const req = {
    id: id.value,
    psword: psword.value,
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
      console.error("로그인 중 오류 발생");
    });
}