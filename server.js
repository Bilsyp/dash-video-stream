const express = require("express");
const path = require("path");
const app = express();

app.get("/video-stream/out.mpd", (req, res) => {
  //   res.sendFile(path.join(__dirname, "video-stream/out.mpd"));
  //   res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/video/out.mpd", (req, res) => {});

app.listen(3000, () => {
  console.log("Server is running");
});
