var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

// var logger = function(req, res, next){
//     console.log("Logging...");
//     next();
// }

// app.use(logger);


// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//set static path

app.use(express.static(path.join(__dirname, 'public')))

// var person = [
//     {
//         name: 'Jeff',
//         age: 30
//     },
//     {
//         name: 'Sara',
//         age: 26
//     }
// ]

// app.get('/', function(req, res){
//     res.json(person)
// });

app.get('/', function(req, res){
    res.send("Hello")
});

app.listen(3000, function(){
    console.log("Server started on Port 3000...")
})