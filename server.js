const express = require('express');

var app = express();
var port = process.env.PORT || 3000;

module.exports.app = app.get('/', (req, res) => {
  res.status(401).send({
    bla: "ssdff",

    error: "Page not found. Check request and try again!!!",
    bloe: "Testing One, 2"
  });
});

module.exports.app = app.get('/user', (req, res) => {
  res.status(200).send({
    "users": [{
      "name": "Jacky",
      "age": "50"
    }, {
      "name": "Hans",
      "age": "55"
    }, {
      "name": "Cas",
      "age": "14"
    }, {
      "name": "Anouk",
      "age": "12"
    }]
  })
});

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
