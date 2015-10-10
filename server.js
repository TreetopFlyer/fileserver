var Express = require("express");

var Server = Express();
Server.use("/", Express.static(__dirname+"/pages"));
Server.use("/js", Express.static(__dirname+"/node_modules"));
Server.listen(80);