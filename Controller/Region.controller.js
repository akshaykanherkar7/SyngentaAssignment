const express = require("express");
const RegionController = express.Router();

const RegionModel = require("../Models/Region.model");

RegionController.post("/", async (req, res) => {
  const { regions, fields, subregions } = req.body;
  const reg = new RegionModel({ regions, fields, subregions });
  await reg.save();
  return res
    .status(200)
    .send({ message: "Region saved successfully", data: reg });
});

RegionController.get("/", async (req, res) => {
  const reg = await RegionModel.find();
  return res.status(200).send({ data: reg });
});

RegionController.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const reg1 = await RegionModel.findOne({ _id: id });
  if (!reg1) {
    return res.status(404).send({ message: "Region Detail Not Found" });
  }
  const reg = await RegionModel.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
  });
  return res.status(200).send({ message: "Region Detail Updated", data: reg });
});

RegionController.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const reg1 = await RegionModel.findOne({ _id: id });
  if (!reg1) {
    return res.status(404).send({ message: "Region Detail Not Found" });
  }
  const reg = await RegionModel.findOneAndDelete(
    { _id: id },
    {
      new: true,
    }
  );
  return res.status(200).send({ message: "Region Delated", data: reg });
});

module.exports = RegionController;
