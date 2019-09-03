var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express("");
var mongoose = require("mongoose");
var port = process.env.PORT || 3009;

app.use(bodyParser.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

const mongoURI = "mongodb://localhost:27017/blog_project";

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true
  })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.listen(port, () => {
  console.log("Server is running on port:" + port);
});
