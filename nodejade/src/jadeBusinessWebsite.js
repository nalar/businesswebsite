var fs = require('fs');
var express = require('express');
var jade = require('jade');

app = express();
app.set('views','./src/views');
app.set('view engine','jade');
app.use(express.static(__dirname+'/views'));

app.get('/', function(request, response){
	response.render('index');
});

app.get('/products', function(request, response){
	response.render('products');
});

app.get('/staff', function(request, response){
	response.render('staff');
});

app.get('/about', function(request, response){
	response.render('about');
});

app.get('/contact', function(request, response){
	response.render('contact');
});

var server = app.listen(3000, function () {
	console.log('NYCDB listening on port: ' + server.address().port);
});