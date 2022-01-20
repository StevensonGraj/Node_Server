const http = require("http");

function webSite(req, res) {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end("That's my first server with plain text...");
}

let server = http.createServer(webSite);

server.listen(7272, "192.168.1.6");

console.log("Server running at  7272 port...");