var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.listen(port, function(){
	console.log("app listening on port " + port);
});



// MAKE SURE TO CHANGE ROUTE NAMES AND FILE NAMES
app.get("/", function(request, response) {
  response.sendFile(path.join(__dirname, "index.html"));
});
//MAKE SURE TO CHANGE ROUTE NAMES AND FILE NAMES
app.get("/reserve", function(request, response) {
  response.sendFile(path.join(__dirname, "reserve.html"));
});






