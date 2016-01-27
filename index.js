var express = require('express');
var app = express();

app.use(express.static('./'))

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});





// app.get('/', function(req, res) {
//   res.sendfile('./');
// });

// app.get('/1', function(req, res) {
//   res.send('hello person 1');
// });

// app.get('/random', function(req, res) {
//   res.send('hello' + req.query.message);
// });