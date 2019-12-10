const server = require("./server");

const port = process.env.PORT || 4700;

server.listen(port, () => console.log("\n===Now listening on port 4700===\n"))