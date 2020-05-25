const {
  sendMessage,
  sendEditedMessage,
} = require("../services/telegram-service");
const commandHandler = require("../services/command-handler");

const getUserInfoAndReply = (req, res) => {
  if (req.body.message) sendDefaultMessageToUser(req, res);
  else setEditedMessage(req, res);
};

const sendDefaultMessageToUser = (req, res) => {
  let payload = commandHandler.defaultMessageTemplate(req.body.message);

  sendMessage(payload)
    .then(() => res.sendStatus(200))
    .catch((err) => {
      console.log(err.response.data);
      res.end(err.response.data.description);
    });
};

const setEditedMessage = (req, res) => {
  let payload = commandHandler.editInlineMessage(req.body.callback_query);
  console.log(payload)
  sendEditedMessage(payload)
    .then(() => res.sendStatus(200))
    .catch((err) => {
      console.log(err.response.data);
      res.end(err.response.data.description);
    });
};

module.exports = {
  getUserInfoAndReply,
};
