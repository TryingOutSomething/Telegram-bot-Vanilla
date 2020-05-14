const axios = require("axios");
const { DOMAIN_URL } = require("../constants");
const { setTelegramWebHook, getWebHookInfo } = require("../api");

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

module.exports = {
  getWebHook,
  setWebHook,
};
