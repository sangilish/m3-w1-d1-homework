const http = require('http');
const fs = require('fs');
const path = require('path');

const serveFile = (res, filePath, contentType) => {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500);
            res.end('Error loading the page.');
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
        }
    });
};

const server = http.createServer((req, res) => {
    if (req.url === '/home' || req.url === '/') {
        serveFile(res, path.join(__dirname, 'home.html'), 'text/html');
    } else if (req.url === '/about') {
        serveFile(res, path.join(__dirname, 'about.html'), 'text/html');
    } else if (req.url === '/contact') {
        serveFile(res, path.join(__dirname, 'contact.html'), 'text/html');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

server.listen(5000, () => {
    console.log('The NodeJS server on port 5000 is now running...');
});
