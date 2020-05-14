const axios = require("axios");
const { REQUEST_URL, USER_API } = require("./constants");

const telegramApiClient = axios.create({
  baseURL: REQUEST_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const setTelegramWebHook = (params) => {
  return telegramApiClient.get("/setWebhook", { params: params });
};

const getWebHookInfo = () => {
  return telegramApiClient.get("/getWebhookInfo");
};

const sendMessageToTelegram = (payload) => {
  return telegramApiClient.post("/sendMessage", payload);
};

const userApiClient = axios.create({
  baseURL: USER_API,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const getRandomUserApi = (config) => {
  return userApiClient.get(USER_API, { params: config });
};

module.exports = {
  getWebHookInfo,
  setTelegramWebHook,
  sendMessageToTelegram,
  getRandomUserApi,
};
