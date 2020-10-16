var express = require("express");
var app = new express();
const route  = require("./route/route");

app.use("/api",route);


var hostName = '127.0.0.1';
var port = 8888;

app.listen(port, hostName, function () {
  console.log(`🚚...服务器运行在http://${hostName}:${port}`);
});

