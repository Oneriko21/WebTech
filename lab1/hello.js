// Import a module
const http = require('http')
const url = require('url')
const qs = require('querystring')

const content = '<!DOCTYPE html>' +
'<html>' +
'    <head>' +
'        <meta charset="utf-8" />' +
'        <title>ECE AST</title>' +
'    </head>' +
'    <body>' +
'       <p style="background-color: red;">Hello World !</p>' +
'    </body>' +
'</html>'


const serverHandle = function (req, res) {
  const route = url.parse(req.url);
  const path = route.pathname;
  const params = qs.parse(route.query);

res.writeHead(200, {'Content-Type': 'text/html'});

  if (path === '/hello' && 'name' in params) {
    if (params['name'] == "Felix") {
      res.write('Bjr je suis en ingé a l ECE');
    }else {
      res.write('Hello ' + params['name']);
    }


  } else {
    res.writeHead(404, {'Content-Type': 'text/html'})
    res.write("page not found  ERROR" + "<br> + Content")
  }

  res.end();
}



const server = http.createServer(serverHandle);
server.listen(8080);
