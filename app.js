var sql = require('mssql');
// var async = require("async");
// var moment = require('moment');
var express = require("express"),
  app = require("express")(),
  http = require("http").Server(app),
  io = require("socket.io")(http),
  util = require("util"),
  fs = require("fs");

 //////////prayag lapto connection start /////////
  // const sqlConfig = {
  //   user: "user_mis",
  //   password: "admin",
  //   database: "taco_treceability",
  //   server: "DESKTOP-FCCFFB0",// '192.168.0.139\\MSSQLSERVER',
    // server: '10.9.4.28\\MSSQLSERVER',
 //////////prayag lapto connection end /////////

 const sqlConfig = {
  user: "admin8",
  password: "admin8",
  database: "kion_treceability",
  server: "DESKTOP-FKJATC0",
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 50000 
  },
  options: {
    encrypt: false, // for Azure
    trustServerCertificate: false // change to true for local dev / self-signed certs
  }
};

var dbConn = new sql.ConnectionPool(sqlConfig);
console.log("1111111111111111111111....");
dbConn.connect().then(function () {
  console.log("Connected to data....", sqlConfig);
});

http.listen(7000, "0.0.0.0", function () {
  console.log("Connected to :7000");
});  

app.use(express.static(__dirname));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/target.html'));
});

io.sockets.on('connection', (socket) => {
  console.log('kkkkkkkkkkkk');
});