const axios = require("axios");
const { REQUEST_URL } = require("./constants");

const apiClient = axios.create({
  baseURL: REQUEST_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const setTelegramWebHook = (params) => {
  return apiClient.get("/setWebhook", { params: params });
};

const getWebHookInfo = () => {
  return apiClient.get("/getWebhookInfo");
};

module.exports = {
  getWebHookInfo,
  setTelegramWebHook,
};
