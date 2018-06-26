var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.listen(8081, '0.0.0.0', function() {
	console.log('signup_demo express runs');
})
