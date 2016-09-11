var WebSocketServer = require("ws").Server;

var wss = new WebSocketServer({port: 7007});

console.log("Server is Running...");

wss.broadcast = function broadcastMsg(msg) {
    wss.clients.forEach(function each(client) {
        client.send(msg);
    });
};

wss.on('connection', function connection(ws) {
    console.log("Connection Received.");
    ws.on('message', function onMessage(msg) {
        wss.broadcast(msg);
    });
});
