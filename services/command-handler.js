const {
  context,
  callbackDataConstants,
} = require("../constants/telegram-constants");

const defaultMessageTemplate = ({ chat }) => {
  return context.getDefaultMessage(chat);
};

const handleCallback = ({ message, data }) => {
  return { chat_id: message.chat.id, text: data };
};

const editInlineMessage = ({ id, message, data }) => {
  switch (data.toLowerCase()) {
    case callbackDataConstants.SHORT_YEET:
      return context.updateInlineMessage(message.message_id, "Smol yeet");

    case callbackDataConstants.LONG_YEET:
      return context.updateInlineMessage(message.message_id, "LARGE YEET BOI");

    default:
      throw "Invalid inline option!";
  }
};

module.exports = {
  defaultMessageTemplate,
  handleCallback,
  editInlineMessage,
};
