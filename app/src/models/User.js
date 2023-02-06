"use strict";
<<<<<<< HEAD
const { response } = require("express");
const UserStorage = require("./UserStorage");
=======

const UserStorage = require("./UserStorage");

>>>>>>> 24d92bb9c9b797da5d5f5af662f4aefc53ba3650
class User {
  constructor(body) {
    this.body = body;
  }
<<<<<<< HEAD
  async login() {
    const client = this.body;
    const { id, psword } = await UserStorage.getUserInfo(client.id);
    if (id) {
      if (id === client.id && psword === client.psword) {
        return { success: true };
      }
      return { success: false, msg: "비밀번호가 틀렸습니다." };
    }
    return { success: false, msg: "존재하지 않는 아이디입니다." };
  }

  async register() {
    const client = this.body;
    try {
      const response = await UserStorage.save(client);
      return response;
    } catch (err) {
      return { success: false, msg: err };
    }
=======

  login() {
    const body = this.body;
    const { id, psword } = UserStorage.getUserInfo(this.body.id);
    
    if (id) {
      if (id === this.body.id && psword === this.body.psword) {
        return { success: true };
      }
      return { success: false, msg: "비밀번호가 틀렸습니다."};
    }
    return { success: false, msg: "존재하지 않는 아이디입니다."};
>>>>>>> 24d92bb9c9b797da5d5f5af662f4aefc53ba3650
  }
}

module.exports = User;