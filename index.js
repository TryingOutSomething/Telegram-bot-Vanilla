const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/router");

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", routes);

// app.get("/start", (req, res, next) => {
//   let payload = {
//     chat_id: "382298069",
//     text: "hi",
//   };

//   axios
//     .get(`${requestUrl}/sendMessage`, {
//       params: payload,
//     })
//     .then((response) => {
//       console.log(response.data);
//       res.status(200).send("Done");
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(502).send("error");
//     });
// });

const PORT = process.env.PORT || 8443;

app.listen(PORT, () => {
  console.log(`server started at port ${PORT}...`);
});
