//var http = require('http');
//var server = http.createServer(function (req, res) {
//res.writeHead(200,{'Content-Type': 'text/plain'});
//res.end('NodeJS App');
//});
//server.listen(8080);
//http-server -o
//console.log('Server is running at http://localhost:8080/');

const http = require('http')
const requestListener = function (req, res) {
    const headers = {
        'Access-Control-Allow-Origin': '*', /* @dev First, read about security */
        'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
        'Access-Control-Max-Age': 2592000, // 30 days
        /** add other headers as per requirement */
    };
    res.writeHead(200, headers);
    res.end(JSON.stringify({"key":"value"}));
}
const server = http.createServer(requestListener);
server.listen(8080);
