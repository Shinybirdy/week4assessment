var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded( {extended:false});
var pg =require('pg');
var connectionString = 'postgres://localhost:5432/zoo_of_insanity';

//var randomNumber = require('/modules/randomNumber.js');
//^^won't work - some path problem somewhere. Grrrr.

app.listen(3000, "localhost", function( req,res ){
  console.log("Server is running on 3000, darling...");
});//^made the server

app.use ( express.static ( 'public' ));
//^made the public file static

app.post('/postNewAnimal',urlencodedParser, function(req,res){
  console.log("inPOST " + req.body.animal_type);
pg.connect(connectionString, function(err, client, done){
    client.query('INSERT into animals_of_zoo (animal_type, amount, threat_level) values($1, $2, $3)',[req.body.animal_type, req.body.amount, req.body.threat_level ]);
  });
});//wondering if pg connect needs to be in here^^the route to post to database

app.get('/', function( req, res ){
  res.sendFile(path.resolve('views/index.html'));
});

app.get('/getAllAnimals', function(req,res){
  res.write ('got them animals');
  res.end();
//   console.log('in getAllAnimals');
//   res.send('in getAllAnimals');
 });
