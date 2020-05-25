const callbackDataConstants = {
  SHORT_YEET: "short yeet",
  LONG_YEET: "long yeet",
};

const DEFAULT_MESSAGE_TEXT = "Hello";

const context = {
  _payload: {},

  _getBaseChatPayload: function (id) {
    if (containsInlineChatId(this._payload)) {
      delete this._payload.inline_message_id;
    }

    this._payload.chat_id = id;
    return this;
  },

  _getBaseInlinePayload: function (id) {
    if (containsChatId(this._payload)) {
      delete this._payload.chat_id;
    }

    this._payload.inline_message_id = id;
    return this;
  },

  _setInlineoptions: function () {
    this._payload.reply_markup = {
      inline_keyboard: [
        [
          { text: "Yeet", callback_data: callbackDataConstants.SHORT_YEET },
          { text: "Yeeet", callback_data: callbackDataConstants.LONG_YEET },
          { text: "Go to Youtube", url: "https://www.youtube.com/" },
        ],
      ],
    };

    return this;
  },

  _setMessageText: function (text) {
    this._payload.text = text;
    return this;
  },

  getDefaultMessage: function ({ id }) {
    this._getBaseChatPayload(id)
      ._setInlineoptions()
      ._setMessageText(DEFAULT_MESSAGE_TEXT);

    return this._payload;
  },

  updateInlineMessage: function (id, text) {
    this._getBaseInlinePayload(id)._setMessageText(text)._setInlineoptions();

    return this._payload;
  },
};

const containsChatId = (payload) => {
  return payload.chat_id;
};

const containsInlineChatId = (payload) => {
  return payload.inline_message_id;
};

module.exports = {
  context,
  callbackDataConstants,
};
