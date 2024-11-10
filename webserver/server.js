const express = require("express");
const path = require('path');
var env = require('dotenv').config();
const app = express();
const port = process.env.PORT;

app.get("/test", (req, res) => {
  res.send(`<h1>Hello World</h1>`);
});

app.use(express.static("site-angular"));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/site-angular/index.html'));
});

app.listen(port, () => {
  console.log(port);
  console.log(`Node server running on http://localhost:${port}`);
});
