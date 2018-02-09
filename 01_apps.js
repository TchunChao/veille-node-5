const express = require('express');
const app = express();
const fs = require('fs');
app.use(express.static('public'));

/* on associe le moteur de vue au module «ejs» */
app.set('view engine', 'ejs'); // générateur de template

app.get('/', function (req, res) {
   fs.readFile( __dirname + "/public/data/" + "membres.txt", 
        'utf8',
        (err, data) => {
        	if (err) { return console.error(err);}
        	console.log( data );
        	let resultat = JSON.parse("[" + data + "]");           
  res.render('gabarit.ejs', {adresses: resultat})
  });
})

let server = app.listen(8081, function () {
   let host = server.address().address
   let port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})