const express = require("express");
const app = express();
const { sendEmail } = require("./controllers/email-controller");
const port = 3050;
var cors = require("cors");
var bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cors());

app.get("/", (req, res) => res.send("Hello World!"));

app.post("/email", sendEmail);

app.listen(process.env.PORT || port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
