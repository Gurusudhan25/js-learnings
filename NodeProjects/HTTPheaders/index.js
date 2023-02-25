const HTTP = require("http"),
  fs = require("fs"),
  URL = require("url"),
  util = require("util");

const server = HTTP.createServer((req, res) => {
  console.log(URL.parse(req.url));
  console.log(req.headers);
  if (req.headers.name == "guru") {
    res.write("hello");
    res.end();
  } else {
    res.write("bye");
    res.end();
  }
});
server.listen(8000);

//Used Postman to send request to the listening server and got details of the headers
/** Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,clea
  port: null,
  hostname: null,
  hash: null,
  search: null,
  query: [Object: null prototype] {},
  pathname: '/',
  path: '/',
  href: '/'
}
{
  name: 'Gurusudhan',
  age: '21',
  'content-type': 'application/json',
  'user-agent': 'PostmanRuntime/7.30.0',
  accept: '"/",
  'postman-token': '4849d0f1-0b00-4624-bbbc-feb483369f31',
  host: 'localhost:8000',
  'accept-encoding': 'gzip, deflate, br',
  connection: 'keep-alive',
  'content-length': '32'
}*/

// const http = require('http');

// http.createServer((request, response) => {
//   const { headers, method, url } = request;
//   let body = [];
//   request.on('error', (err) => {
//     console.error(err);
//   }).on('data', (chunk) => {
//     body.push(chunk);
//   }).on('end', () => {
//     body = Buffer.concat(body).toString();
//     // BEGINNING OF NEW STUFF

//     response.on('error', (err) => {
//       console.error(err);
//     });

//     response.statusCode = 200;
//     response.setHeader('Content-Type', 'application/json');
//     // Note: the 2 lines above could be replaced with this next one:
//     // response.writeHead(200, {'Content-Type': 'application/json'})

//     const responseBody = { headers, method, url, body };

//     response.write(JSON.stringify(responseBody));
//     response.end();
//     // Note: the 2 lines above could be replaced with this next one:
//     // response.end(JSON.stringify(responseBody))

//     // END OF NEW STUFF
//   });
// }).listen(8080);
