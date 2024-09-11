const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    
    if (req.url === '/') {
        res.end('<h1>Home Page.</h1>');
    } else if (req.url === '/about') {
        res.end('<h1>About Page.</h1>');
    } else if (req.url === '/contact') {
        res.end('<h1>Contact Page.</h1>');
    } else {
        res.end('<h1>Invalid Request!</h1>');
    }
});

server.listen(5000, () => {
    console.log('The NodeJS server on port 5000 is now running...');
});
