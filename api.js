const axios = require("axios");
const { REQUEST_URL } = require("./constants/server-constants");

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

const sendMessageToTelegram = (payload) => {
  return telegramApiClient.post("/sendMessage", payload);
};

const sendEditedMessageToTelegram = (payload) => {
  return telegramApiClient.post("/editMessageText", payload);
};

module.exports = {
  setTelegramWebHook,
  sendMessageToTelegram,
  sendEditedMessageToTelegram
};
