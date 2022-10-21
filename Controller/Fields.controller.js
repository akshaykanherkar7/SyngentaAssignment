const express = require("express");
const FieldController = express.Router();

const FieldModel = require("../Models/Field.model");

FieldController.post("/", async (req, res) => {
  const { name, size, position, property } = req.body;
  const field = new FieldModel({ name, size, position, property });
  await field.save();
  return res
    .status(200)
    .send({ message: "Field saved successfully", data: field });
});

FieldController.get("/", async (req, res) => {
  const field = await FieldModel.find();
  return res.status(200).send({ data: field });
});

FieldController.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const field1 = await FieldModel.findOne({ _id: id });
  if (!field1) {
    return res.status(404).send({ message: "Field Detail Not Found" });
  }
  const field = await FieldModel.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
  });
  return res.status(200).send({ message: "Field Detail Updated", data: field });
});

FieldController.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const field1 = await FieldModel.findOne({ _id: id });
  if (!field1) {
    return res.status(404).send({ message: "Field Detail Not Found" });
  }
  const field = await FieldModel.findOneAndDelete(
    { _id: id },
    {
      new: true,
    }
  );
  return res.status(200).send({ message: "Field Delated", data: field });
});

module.exports = FieldController;
