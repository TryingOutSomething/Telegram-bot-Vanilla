const axios = require("axios");
const { REQUEST_URL } = require("../constants");
const {
  setWebHook,
  getWebHook,
  sendMessage,
} = require("../services/telegram-service");
const { conversationHandler } = require("../services/command-handler");

const setTelegramWebhook = (req, res, next) => {
  setWebHook()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const getWebhookInfo = (req, res, next) => {
  getWebHook()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(503).send(err);
    });
};

const getUserInfoAndReply = async (req, res, next) => {
  if (typeof req.body.message === "undefined") res.sendStatus(200);

  let payload = await conversationHandler(req.body.message);

  sendMessage(payload)
    .then((response) => res.sendStatus(200))
    .catch((err) => {
      console.log(err);
      res.end(err.data.description);
    });
};

module.exports = {
  getWebhookInfo,
  getUserInfoAndReply,
  setTelegramWebhook,
};
