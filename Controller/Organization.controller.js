const express = require("express");
const OrgController = express.Router();

const OrganizationModel = require("../Models/Organization.model");

OrgController.post("/", async (req, res) => {
  const { name } = req.body;
  const org = new OrganizationModel({ name });
  await org.save();
  return res
    .status(200)
    .send({ message: "Organization saved successfully", data: org });
});

OrgController.get("/", async (req, res) => {
  const org = await OrganizationModel.find();
  return res.status(200).send({ data: org });
});

OrgController.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const org1 = await OrganizationModel.findOne({ _id: id });
  if (!org1) {
    return res.status(404).send({ message: "Organization Detail Not Found" });
  }
  const org = await OrganizationModel.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
  });
  return res
    .status(200)
    .send({ message: "Organization Detail Updated", data: org });
});

OrgController.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const org1 = await OrganizationModel.findOne({ _id: id });
  if (!org1) {
    return res.status(404).send({ message: "Organization Detail Not Found" });
  }
  const org = await OrganizationModel.findOneAndDelete(
    { _id: id },
    {
      new: true,
    }
  );
  return res.status(200).send({ message: "Organization Delated", data: org });
});
module.exports = OrgController;
