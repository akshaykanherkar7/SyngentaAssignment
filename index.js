const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(express.json());
app.use(cors());

const connection = require("./Config/Config");
const OrgController = require("./Controller/Organization.controller");
const PropController = require("./Controller/Property.controller");
const FieldController = require("./Controller/Fields.controller");

app.get("/", async (req, res) => {
  return res.status(200).send("HomePage");
});

app.use("/organization", OrgController);
app.use("/properties", PropController);
app.use("/fields", FieldController);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected Established");
  } catch (err) {
    console.log("err:", err);
  }
  console.log("listening on port:", process.env.PORT);
});
