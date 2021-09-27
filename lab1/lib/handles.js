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
'       <h1 style="background-color: red; text-align: center;">ERROR</h1>' +
'    </body>' +
'</html>'


module.exports = {
  serverHandle : function (req, res) {
    const route = url.parse(req.url);
    const path = route.pathname;
    const params = qs.parse(route.query);

    res.writeHead(200, {'Content-Type': 'text/html'});

    if (path === '/hello' && 'name' in params) {
      if (params['name'] == "Felix") {
        res.write("Je suis actuellement en cycle master dans l'ecole ECE");
      }else {
        res.write('Hello ' + params['name']);
      }


    } else {
      res.writeHead(404, {'Content-Type': 'text/html'})
      res.write("page not found  ERROR" + "<br>" + content)
    }

    res.end();
  }

}
