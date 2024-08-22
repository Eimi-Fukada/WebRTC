const path = require("path");
const https = require("https");
const fs = require("fs");
const express = require("express");

const app = express();

const privateKeyPath = path.resolve(__dirname, "../server.key");
const certificatePath = path.resolve(__dirname, "../server.cert");
const privateKey = fs.readFileSync(privateKeyPath, "utf8");
const certificate = fs.readFileSync(certificatePath, "utf8");
const credentials = { key: privateKey, cert: certificate };
const httpsServer = https.createServer(credentials, app);

module.exports = httpsServer;
