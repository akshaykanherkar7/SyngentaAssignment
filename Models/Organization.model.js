const mongoose = require("mongoose");

const OrganizationSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const OrganizationModel = mongoose.model("organization", OrganizationSchema);

module.exports = OrganizationModel;
