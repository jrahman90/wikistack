const morgan = require("morgan");
const express = require("express");


let app = express();

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  console.log('hello world');
})
