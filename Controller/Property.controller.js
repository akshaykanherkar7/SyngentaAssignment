const express = require("express");
const PropController = express.Router();

const PropertyModel = require("../Models/Property.model");

PropController.post("/", async (req, res) => {
  const { fields, region, field } = req.body;
  const prop = new PropertyModel({ fields, region, field });
  await prop.save();
  return res
    .status(200)
    .send({ message: "Properties saved successfully", data: prop });
});

PropController.get("/", async (req, res) => {
  const props = await PropertyModel.find();
  return res.status(200).send({ data: props });
});

PropController.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const props1 = await PropertyModel.findOne({ _id: id });
  if (!props1) {
    return res.status(404).send({ message: "Property Detail Not Found" });
  }
  const props = await PropertyModel.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
  });
  return res
    .status(200)
    .send({ message: "Property Detail Updated", data: props });
});

PropController.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const props1 = await PropertyModel.findOne({ _id: id });
  if (!props1) {
    return res.status(404).send({ message: "Property Detail Not Found" });
  }
  const props = await PropertyModel.findOneAndDelete(
    { _id: id },
    {
      new: true,
    }
  );
  return res.status(200).send({ message: "Property Delated", data: props });
});

module.exports = PropController;
