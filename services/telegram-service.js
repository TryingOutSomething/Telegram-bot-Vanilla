const axios = require("axios");
const { DOMAIN_URL } = require("../constants");
const {
  setTelegramWebHook,
  getWebHookInfo,
  sendMessageToTelegram,
} = require("../api");

const setWebHook = () => {
  let config = {
    url: DOMAIN_URL,
  };

  return new Promise((resolve, reject) => {
    setTelegramWebHook(config)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const getWebHook = () => {
  return new Promise((resolve, reject) => {
    getWebHookInfo()
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject("Error occurred! Please try again later");
      });
  });
};

const sendMessage = (payload) => {
  return new Promise((resolve, reject) => {
    sendMessageToTelegram(payload)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => reject(err));
  });
};

module.exports = {
  getWebHook,
  setWebHook,
  sendMessage,
};
