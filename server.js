var Express = require("express");

var Server = Express();
Server.use("/", Express.static(__dirname+"/"));
Server.listen(80);