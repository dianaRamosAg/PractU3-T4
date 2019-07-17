const app = require("./server");
const server = require("http").Server(app);
const config = require("./_config");

const port = config.PORT;

server.listen(port);

console.log("server is on port"+port);