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

module.exports = OrgController;
