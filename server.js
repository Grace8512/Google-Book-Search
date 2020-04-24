const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3003;
const app = express();
const mongoose = require("mongoose");
const Book = require("./models/Book");
// Add code to connect to a MongoDB database named googlebooks using the mongoose npm package
var mongodb_url = process.env.MONGO_URL || "mongodb://localhost:27017/local";
mongoose.connect( mongodb_url, { useNewUrlParser: true });
var googlebooks = mongoose.connection;

//test mongooes
googlebooks.on("error", function(err){
  console.log("mongoose err: " + err);
});

googlebooks.once("open", function(){
  console.log("Mongoose connection successful.");
});

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
app.use(express.static("client/build"));


// Define API routes here
app.get("/api/books", (req,res) => {
  Book.find().then((result)=>{
    res.json(result);
    console.log(result);
  });
});

app.post("/api/books", (req, res) => {
  Book.create(req.body).then((result)=>{
    res.json(result);
    console.log(result);
  }).catch((err)=>{
    console.log(req.body);
    console.log('post err' + err);
  });
});

app.delete("/api/books/:id", (req, res) => {
  Book.remove({_id: req.params.id}).then((result)=>{
    res.json(result);
    console.log(result);
  });
});
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
