<<<<<<< HEAD
"use strict";

// 모듈
const express = require('express');
const app = express();

// 라우팅
const home = require("./routes/home");

// 앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드.

=======
"use strict";

// 모듈
const express = require('express');
const app = express();

// 라우팅
const home = require("./routes/home");

// 앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드.

>>>>>>> 7e2b55e5f2ccd4d62706a52a17767e9202131af0
module.exports = app;