import { client } from "@repo/db/client";
import { WebSocketServer } from "ws";

const server = new WebSocketServer({
    port : 3001
});

server.on("connection",async(socket) => {
    await client.user.create({
        data : {
            username : Math.random().toString(),
            password : Math.random().toString()
        }
    })
    socket.send("Connected to Web Socket Server")
})
