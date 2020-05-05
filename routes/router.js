const express = require("express");
const Bot = require("../controllers/bot");

const router = express.Router();

router.get("/", Bot.test);
// router.post("/", Bot.test2);
router.post("/", Bot.getUserInfoAndReply);
router.get("/botStatus", Bot.getUserInfo);
router.get("/setWebhook", Bot.setTelegramWebhook);

module.exports = router;
