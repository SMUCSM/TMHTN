var express = require('express');
var fs = require('fs');
var path = require('path');
var cors = require('cors');

// Create server
var app = express();
// Fix CORS
app.use(cors());

var count = 0; // # of visitors
app.get('/', function(request, response) {
  count++;
  response.send('This page has been requested '+count+' times!');
});

app.get('/file/:filename', function (req, res) {
  var filename = req.params.filename;
  var filepath = path.resolve(__dirname, "data", filename);
  console.log(filepath);

  // Read file in ASYNC (non blocking I/O)
  fs.readFile(filepath, function (err, data) {
    if (err) {
      // throw err;
      res.send(err.message);
    } else {
      res.send(data);
    }
  });

});

var port = 3000;
app.listen(port, function() {
  console.log('Server is listening on port '+port);
});