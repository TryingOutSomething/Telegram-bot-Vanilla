const REQUEST_URL = `https://api.telegram.org/bot${process.env.BOT_TOKEN}`;
const WEBHOOK_URL = process.env.DOMAIN_NAME;

module.exports = {
    REQUEST_URL,
    WEBHOOK_URL
}