const express = require("express");
const Bot = require("../controllers/bot");

const router = express.Router();

router.post("/", Bot.getUserInfoAndReply);
router.get("/botStatus", Bot.getUserInfo);
router.get("/setWebhook", Bot.setTelegramWebhook);

module.exports = router;
