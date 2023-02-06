"use strict";
<<<<<<< HEAD
const fs = require("fs").promises;
class UserStorage {
  static #getUserInfo(data, id) {
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users); // => [id, psword, name]
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  }

  static #getUsers(data, isAll, fields) {
    const users = JSON.parse(data);
    if (isAll) return users;

=======

class UserStorage {
  static #users = {
    id: ["박성욱", "나개발", "김팀장"],
    psword: ["1234", "1234", "123456"],
    name: ["박성욱", "나개발", "김팀장"],
  };

  static getUsers(...fields) {
    const users = this.#users;
>>>>>>> 24d92bb9c9b797da5d5f5af662f4aefc53ba3650
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

<<<<<<< HEAD
  static getUsers(isAll, ...fields) {
    return fs
      .readFile("./src/database/users.json")
      .then((data) => {
        return this.#getUsers(data, isAll, fields);
      })
      .catch(console.error);
  }

  static getUserInfo(id) {
    return fs
      .readFile("./src/database/users.json")
      .then((data) => {
        return this.#getUserInfo(data, id);
      })
      .catch(console.error);
  }

  static async save(userInfo) {
    const users = await this.getUsers(true);
    if (users.id.includes(userInfo.id)) {
      throw "이미 존재하는 아이디입니다.";
    }
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.psword.push(userInfo.psword);
    fs.writeFile("./src/database/users.json", JSON.stringify(users));
    return { success: true };
  }
}
=======
  static getUserInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users);
    const UserInfo = Object.keys(users).reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});

    return UserInfo;
  }
}

>>>>>>> 24d92bb9c9b797da5d5f5af662f4aefc53ba3650
module.exports = UserStorage;