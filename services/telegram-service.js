const { DOMAIN_URL } = require("../constants/server-constants");
const {
  setTelegramWebHook,
  sendMessageToTelegram,
  sendEditedMessageToTelegram,
} = require("../api");

const setWebHook = () => {
  let config = {
    url: DOMAIN_URL,
  };

  return new Promise((resolve, reject) => {
    setTelegramWebHook(config)
      .then((response) => resolve(response.data))
      .catch((err) => reject(err));
  });
};

const sendMessage = (payload) => {
  return new Promise((resolve, reject) => {
    sendMessageToTelegram(payload)
      .then((response) => resolve(response.data))
      .catch((err) => reject(err));
  });
};

const sendEditedMessage = (payload) => {
  return new Promise((resolve, reject) => {
    sendEditedMessageToTelegram(payload)
      .then((response) => resolve(response.data))
      .catch((err) => reject(err));
  });
};

module.exports = {
  setWebHook,
  sendMessage,
  sendEditedMessage
};
