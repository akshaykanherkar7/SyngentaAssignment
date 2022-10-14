const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(express.json());
app.use(cors());

const connection = require("./Config/Config");

app.get("/", async (req, res) => {
  return res.status(200).send("HomePage");
});



app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected Established");
  } catch (err) {
    console.log("err:", err);
  }
  console.log("listening on port:", process.env.PORT);
});
