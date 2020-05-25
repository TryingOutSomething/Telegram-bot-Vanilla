const express = require("express");
const Bot = require("../controllers/bot");
const { isValidRequest } = require("../middlewares/validation");

const router = express.Router();

router.post("/", isValidRequest, Bot.getUserInfoAndReply);

module.exports = router;
