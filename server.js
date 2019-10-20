let express = require("express");
let path = require("path");
let app = express();
let server = require("http").Server(app);
let io = require("socket.io")(server);
let port = 8888;
// let name="";
app.use("/", express.static(path.join(__dirname, "dist/chatApp")));
io.on("connection", socket => {
  console.log("new connection made from client with ID="+socket.id);
  // socket.on("newName", data => {
  //   io.sockets.emit("name", { name: data});
  // });
  socket.on("newMsg", data => {
    io.sockets.emit("msg", { msg: data.m, name: data.n,timeStamp: getCurrentDate() });
  });

});
server.listen(port, () => {
  console.log("Listening on port " + port);
});
function getCurrentDate() {
  let d = new Date();
  return d.toLocaleString();
}