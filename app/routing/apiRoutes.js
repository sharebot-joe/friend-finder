// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var friendsData = require("../data/friends")


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------
  app.get("/api/friends", function(req, res) {
    res.json(friendsData)
  });

  // This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
  app.post("/api/friends", function(req, res) {
    // var newpath = path.join(__dirname, "home.html");
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  // app.get("/tables", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/tables.html"));
  // });

  // app.get("/reserve", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/reserve.html"));
  // });

  // // If no matching route is found default to home
  // app.get("*", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/home.html"));
  // });
};
