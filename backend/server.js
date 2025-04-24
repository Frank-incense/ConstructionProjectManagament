const app = require("./index.js");
const http = require("http");


const httpServer = http.createServer(app);
httpServer.listen(3000, () => {
  console.log(`HTTP Server running at http://localhost:${3000}`);
});