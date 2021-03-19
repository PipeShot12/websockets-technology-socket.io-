const app = require('express')();
const cors = require('cors');
app.use(cors());

const api = require('./api');

app.use(api);

// const httpServer = require('http').createServer(app);
// const io = require("socket.io")(httpServer, {
//     cors: {
//       origin: "http://localhost:3000",
//     },
//   });
// const port = process.env.PORT || 8000;

// io.use((socket, next) => {
//     const username = socket.handshake.auth.username;
//     if (!username) {
//       return next(new Error("invalid username"));
//     }
//     socket.username = username;
//     next();
//   });

// io.on("connection", (socket) => {
//     // fetch existing users
//     const users = [];
//     for (let [id, socket] of io.of("/").sockets) {
//         users.push({
//             userID: id,
//             username: socket.username,
//         });
//     }
//     socket.emit("users", users);
// })

// httpServer.listen(port,()=>{
//     console.log("Server Online")
// })

app.listen(5000,()=>{
  console.log("server on")
})