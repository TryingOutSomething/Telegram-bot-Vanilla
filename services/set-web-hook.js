const axios = require("axios");
const { REQUEST_URL, WEBHOOK_URL } = require("../constants");

const setWebHook = () => {
  let config = {
    url: WEBHOOK_URL,
  };

  return new Promise((resolve, reject) => {
    axios
      .get(`${REQUEST_URL}/setWebhook`, {
        params: config,
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

module.exports = {
  setWebHook,
};
