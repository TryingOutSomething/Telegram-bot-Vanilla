const axios = require("axios");
const { REQUEST_URL } = require("../constants");
const { setWebHook } = require("../services/set-web-hook");

const setTelegramWebhook = (req, res, next) => {
  setWebHook()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const getUserInfo = (req, res, next) => {
  axios
    .get(`${REQUEST_URL}/getWebhookInfo`)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      console.log(err);
      res.status(502).send("Error occurred! Please try again later");
    });
};

const getUserInfoAndReply = (req, res, next) => {
  console.log(req.body);
  console.log(req.body.message);

  let payload = {
    chat_id: req.body.message.chat.id,
    text: req.body.message.text,
  };

  axios
    .post(`${REQUEST_URL}/sendMessage`, payload)
    .then((response) => {
      console.log("Message posted!");
      res.status(200).send("Ok");
    })
    .catch((err) => {
      console.log(err);
      res.end(err.data);
    });
};

module.exports = {
  getUserInfo,
  getUserInfoAndReply,
  setTelegramWebhook,
};
