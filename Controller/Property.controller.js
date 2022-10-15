const express = require("express");
const PropController = express.Router();

const PropertyModel = require("../Models/Property.model");

PropController.post("/", async (req, res) => {
  const { name, region } = req.body;
  const prop = new PropertyModel({ name, region });
  await prop.save();
  return res
    .status(200)
    .send({ message: "Properties saved successfully", data: prop });
});

module.exports = PropController;
