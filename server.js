// server.js

const http = require("http");

// const PORT = 3000;

const server = http.createServer((req, res) => {

    console.log("Request received:", req.url);

    res.setHeader("Content-Type", "text/html");

    if (req.url === "/") {
        res.statusCode = 200;
        res.end("<h1>Welcome to Smart Utility Toolkit</h1>");
    }

    else if (req.url === "/about") {
        res.statusCode = 200;
        res.end("<h1>About Page</h1><p>This is a Node.js backend project.</p>");
    }

    else if (req.url === "/contact") {
        res.statusCode = 200;
        res.end("<h1>Contact Page</h1><p>Email: de4vanshrao3323@gtmail.com.com</p>");
    }

    else {
        res.statusCode = 404;
        res.end("<h1>404 - Page Not Found</h1>");
    }
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});