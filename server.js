// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Tables (DATA)
// =============================================================
// Comprised of objects with the following form:
// {
//     customerName: "",
//     phoneNumber: "",
//     customerEmail: "",
//     customerID: ""
//  }
var tables = [];
// Waitlist (DATA)
// =============================================================
// Comprised of objects with the following form:
// {
//     customerName: "",
//     phoneNumber: "",
//     customerEmail: "",
//     customerID: ""
//  }
var waitlist = [];

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

// require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// // Basic route that sends the user first to the AJAX Page
// app.get("/", function(req, res) {
// 	// var newpath = path.join(__dirname, "home.html");
//   res.sendFile(path.join(__dirname, "./app/public/home.html"));
// });

// // API tables page which displays tables JSON data
// app.get("/api/tables", function(req, res) {
//   return res.json(tables);
//   // res.sendFile(path.join(__dirname, "view.html"));
// });

// // API waitlist page which displays waitlist JSON data
// app.get("/api/waitlist", function(req, res) {
//   return res.json(waitlist);
//   // res.sendFile(path.join(__dirname, "view.html"));
// });

// // Displays current reservatiosn and waiting list
// app.get("/tables", function(req, res) {
//   res.sendFile(path.join(__dirname, "tables.html"));
// });

// // Displays a single character, or returns false
// app.get("/reservations", function(req, res) {
//   res.sendFile(path.join(__dirname, "reservations.html"));
//   // var chosen = req.params.character;

//   // console.log(chosen);

//   // for (var i = 0; i < characters.length; i++) {
//   //   if (chosen === characters[i].routeName) {
//   //     return res.json(characters[i]);
//   //   }
//   // }

//   // return res.json(false);
// });

// app.post("/api/characters", function(req, res) {
//   // req.body hosts is equal to the JSON post sent from the user
//   // This works because of our body-parser middleware
//   var newcharacter = req.body;

//   console.log(newcharacter);

//   // We then add the json the user sent to the character array
//   characters.push(newcharacter);

//   // We then display the JSON to the users
//   res.json(newcharacter);
// });

// Serve up static files to the client
var fullPath = path.join(__dirname, '/app/public')
app.use(express.static(fullPath));

function handleRequest(req, res) {
  var path = req.url;

  switch (path) {
  case "/tables":
    return renderTablesPage(req, res);
  case "/waitlist":
    return renderWaitlistPage(req, res);
  default:
    return renderHomePage(req, res);
  }
}

function renderTablesPage(req, res) {
  fs.readFile(__dirname + "/tables.html", function(err, data) {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/html" });
      res.end("<html><head><title>Oops</title></head><body><h1>Oops, there was an error</h1></html>");
    }
    else {
      // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
      // an html file.
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
}

function renderWaitlistPage(req, res) {
  fs.readFile(__dirname + "/waitlist.html", function(err, data) {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/html" });
      res.end("<html><head><title>Oops</title></head><body><h1>Oops, there was an error</h1></html>");
    }
    else {
      // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
      // an html file.
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
}


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
