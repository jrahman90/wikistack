const morgan = require("morgan");
const express = require("express");
const { db } = require('./models');

const main = require("./views/main");


let app = express();

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  let emptyString = 'Here is the test item';
  res.send(main(emptyString));
  //console.log('hello mars');
});

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
