const express = require('express');
const path = require(`path`);
const app = express();
const port = 2000
console.log(`Online`)

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, ".", "pages", "home.html"))
})

app.get("/mrjoker", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, ".", "pages", "mrjoker.html"))
})

app.get("/commanderr", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, ".", "pages", "commanderr.html"))
})

app.get("/discordhome", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, ".", "pages", "commander", "discordhome.html"))
})

app.get("/forever", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, ".", "pages", "commander", "forever.html"))
})

app.listen(port)