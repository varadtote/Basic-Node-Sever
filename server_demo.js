var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile("./public/home.html", "UTF-8", function (err, html) {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(html);
        });
    }
    else if (req.url === "/about") {
        fs.readFile("./public/about.html", "UTF-8", function (err, html) {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(html);
        });
    }
    else if (req.url === "/contact") {
        fs.readFile("./public/contact.html", "UTF-8", function (err, html) {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(html);
        });
    }
    else {
        fs.readFile("./public/404.html", "UTF-8", function (err, html) {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(html);
        });
    }


}).listen(5000, () => console.log('Server running....'))