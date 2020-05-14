const REQUEST_URL = `https://api.telegram.org/bot${process.env.BOT_TOKEN}`;
const DOMAIN_URL = process.env.DOMAIN_NAME;

const USER_API = "https://randomuser.me/api/";

const START_COMMAND_REGEX_PATTERN = /\/start/i;

module.exports = {
  REQUEST_URL,
  DOMAIN_URL,
  USER_API,
  START_COMMAND_REGEX_PATTERN,
};