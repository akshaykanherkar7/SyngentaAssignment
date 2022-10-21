const mongoose = require("mongoose");

const OrganizationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  region: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "region"
  }]
});

const OrganizationModel = mongoose.model("organization", OrganizationSchema);

module.exports = OrganizationModel;
