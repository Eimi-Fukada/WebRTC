const httpsServer = require("../utils/https.js");

const express = require("express");
const indexRouter = express.Router();

const app = express();

// peer
const { ExpressPeerServer } = require("peer");
const io = require("socket.io")(httpsServer);

// const { v4: uuidV4 } = require("uuid");

const peerServer = ExpressPeerServer(httpsServer, {
  port: 3000,
  path: "/mypeer",
  debug: true,
  // proxied: true,
});

app.use(peerServer);

io.on("connection", (socket) => {
  socket.on("join-room", (roomId, userId) => {
    console.log("roomid===", roomId, userId);
  });
});

/* GET home page. */
indexRouter.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
  // res.redirect(`/${uuidV4()}`);
});

module.exports = indexRouter;
