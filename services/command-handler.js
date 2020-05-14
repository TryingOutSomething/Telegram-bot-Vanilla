const { START_COMMAND_REGEX_PATTERN } = require("../constants");
const { getRandomUser } = require("../services/gen-random-user");

const conversationHandler = async ({ chat, text }) => {
  let payload = { chat_id: chat.id };

  if (isCommand(text)) {
    let markup = {
      keyboard: [["Male"], ["Female"]],
      one_time_keyboard: true,
    };
    payload.text = "Do you want to generate a male or female user?";
    payload.reply_markup = markup;
    return payload;
  }

  payload.text = (await getRandomUser(text.toLowerCase())) || "invalid input";

  return payload;
};

const isCommand = (text) => START_COMMAND_REGEX_PATTERN.test(text);

module.exports = {
  conversationHandler,
};
