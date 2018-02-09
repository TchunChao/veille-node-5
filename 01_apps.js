var express = require('express');
var app = express();

/* on associe le moteur de vue au module «ejs» */
app.set('view engine', 'ejs'); // générateur de template
app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})