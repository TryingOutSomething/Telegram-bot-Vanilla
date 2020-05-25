const app = require("./server");
const config = require("./config");
const { setWebHook } = require("./services/telegram-service");

setWebHook()
  .then(() => {
    app.listen(config.express.port, config.express.ip, (error) => {
      if (error) {
        console.error("Unable to listen for connections", error);
        process.exit(10);
      }

      console.log(
        `Server started on ${config.express.ip}:${config.express.port}`
      );
    });
  })
  .catch((err) => console.error(err));
