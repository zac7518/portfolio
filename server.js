// Import the http module
const http = require('http');
const fs = require('fs');
const path = require('path');

// Define the port number
const port = 3000;

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Define the file path to the index.html file
    const filePath = path.join(__dirname, 'pages', 'index.html');

    // Read the content of the index.html file
    fs.readFile(filePath, (err, data) => {
        if (err) {
            // If an error occurs (e.g., file not found), send a 404 response
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
        } else {
            // If the file is successfully read, send its content as the response
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
});

// Start the server and listen for incoming requests
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
