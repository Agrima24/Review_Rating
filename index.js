const express = require("express");
const app = express();
var cors = require("cors");
require("./models/config");
const dotenv = require("dotenv");
const bodyparser = require("body-parser");
const router = require("./router/mainRoutes");
dotenv.config();
const port = 5000;

app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use(express.static(__dirname+'/public'));
app.get('/', function (req, res) {
  res.send(__dirname + 'index.html');
});

app.get('/', function (req, res) {
  res.send(__dirname + '/login.html');
});

app.use(router);

const server = app.listen(process.env.port, function (req, res) {
  console.log(`server is running on port : ${process.env.port}`);
});

module.exports = server;
