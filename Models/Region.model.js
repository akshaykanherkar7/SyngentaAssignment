const mongoose = require("mongoose");

const RegionSchema = new mongoose.Schema({
  regions: { type: String, required: true },
  fields: { type: String, required: true },
  subregions: [{ type: String, required: true }],
  // properties: [{ type: mongoose.Schema.Types.ObjectId, ref: "properties" }],
});

const RegionModel = mongoose.model("region", RegionSchema);

module.exports = RegionModel;
