const isValidRequest = (req, res, next) => {
  if (noValidTelegramKeys(req)) return res.sendStatus(200);

  next();
};

const noValidTelegramKeys = ({ body }) => !body.message && !body.callback_query && !body.edited_message;

module.exports = {
  isValidRequest,
};
