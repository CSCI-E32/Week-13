var express = require('express');

var app = express();

app.use(function(req, res, next){
  console.log((new Date()).toString() + " " + req.method + " " + req.url);
  next();
});

var people = [
  {id: 1, name: "Steve", twitter: "@steveyeun"},
  {id: 2, name: "Norman", twitter: "@wwwbigbaldhead"},
  {id: 3, name: "Lauren", twitter: "@LaurenCohan"},
  {id: 4, name: "Danai", twitter: "@DanaiGurira"}
];

app.get('/people', function(req, res){
  res.json(people);
});


app.listen(7000);
