var config = module.exports;

var PRODUCTION = process.env.NODE_ENV === "production";

config.express = {
  port: process.env.EXPRESS_PORT || 6000,
  ip: "127.0.0.1",
};

config.webhook = {
  url: process.env.NGROK,
};

if (PRODUCTION) {
  // for example
  config.express.ip = "0.0.0.0";
}
