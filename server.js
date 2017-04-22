var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var fs = require("fs");

var app = express();
var port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var reservations = [];


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

app.get("/tables", function(request, response) {
  response.sendFile(path.join(__dirname, "tables.html"));
});

app.post("/api/tables", function(request, response){
	var newReservation = request.body;
	// console.log(newReservation);
	reservations.push(newReservation);

    var reservationArrayJson = JSON.stringify(reservations);
    fs.writeFile('reservations.json', reservationArrayJson, 'utf8', 'callback');

	console.log(reservations);
});




