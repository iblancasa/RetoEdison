//
// # SimpleServer
//
// A simple chat server using Socket.IO, Express, and Async.
//
var http = require('http');
var path = require('path');

var express = require('express');
var bodyParser = require("body-parser");

//
// ## SimpleServer `SimpleServer(obj)`
//
// Creates a new instance of SimpleServer with the following options:
//  * `port` - The HTTP port to listen on. If `process.env.PORT` is set, _it overrides this value_.
//
var router = express();
var server = http.createServer(router);
router.use(bodyParser.urlencoded({ extended: false }));

var arrayPersonas = [];

router.use(express.static(path.resolve(__dirname, 'client')));


router.get("/a",function(req, res) {
		 res.send('Hello World!');
	}
);

router.post('/edison', function (req, res) {
  var personas = req.body.personas;
  res.send('Got a POST request: ' + personas);
  arrayPersonas.push(personas);
});

router.get("/personas",function(req, res) {
		 res.send(arrayPersonas);
	}
);




server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);
});
