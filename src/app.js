var express = require('express');

var app = express();

app.use(express.static(__dirname));
console.log(__dirname);

app.get('/', function(req, res) {
	res.send('Works!');
})

app.listen(8081, '0.0.0.0', function() {
	console.log('signup_demo express runs');
})
