const axios = require("axios");

const token = "1245257794:AAGXGtcESVBNeq8i3xOPCugonzHCz0n0RCs";
const requestUrl = `https://api.telegram.org/bot${token}`;

const test = (req, res, next) => {
  console.log(req.body);
  res.status(200).send("Hello World");
};

const test2 = (req, res, next) => {
  console.log(req.body);
};

const setTelegramWebhook = (req, res, next) => {
  // change the url everytime you run ngrok
  let config = {
    url: "https://f8d5d70b.ngrok.io",
    allowed_updates: ["sendMessage"],
  };

  axios
    .get(`${requestUrl}/setWebhook`, {
      params: config,
    })
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      console.log(err);
      res.end(err);
    });
};

const getUserInfo = (req, res, next) => {
  axios
    .get(`${requestUrl}/getWebhookInfo`)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      console.log(err);
      res.status(502).send("Error occurred! Please try again later");
    });
};

const getUserInfoAndReply = (req, res, next) => {
  // axios
  //   .get(`${requestUrl}/getMe`)
  //   .then((response) => {
  //     console.log(response.data);
  //     res.status(200).send(response.data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     res.end(err);
  //   });
  console.log(req.body);
  console.log(req.body.message);

  let payload = {
    chat_id: req.body.message.chat.id,
    text: req.body.message.text,
  };

  axios
    .post(`${requestUrl}/sendMessage`, payload)
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
  test,
  test2,
  getUserInfo,
  getUserInfoAndReply,
  setTelegramWebhook,
};
