const express   = require("express"); //require/import = include in C++
const app       = express(); //intialising the code we loaded
const http      = require("http"); //to connect it to the web server (built-in package so we dont have to npm install)
const server    = http.createServer(app); //create the server, initialising the server

//our vars (fixed variables)
const LISTEN_PORT = 8080; //what port is our web content is going to be served on
const ABS_STATIC_PATH = __dirname + '/public'; //this tells the serve the "root" path of web-loaded files

//set our routes
//when someone accesses this path, send something back
app.get('/', function(req, res) {
    res.sendFile('index.html', {root: ABS_STATIC_PATH});
});

//middleware
//after someone makes a request, we do something (in the middle)
//then we send back something
app.use(express.static(ABS_STATIC_PATH)); //so files requested by client come from this root

server.listen(LISTEN_PORT); //start the server
console.log("Listening on port: " + LISTEN_PORT); //if we dont see this message, something is wrong 