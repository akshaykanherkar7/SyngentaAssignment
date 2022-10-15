const mongoose = require("mongoose");

const RegionSchema = new mongoose.Schema({
  regions: String,
  fields: String,
  properties: [{ type: mongoose.Schema.Types.ObjectId, ref: "properties" }],
});

const RegionModel = mongoose.model("region", RegionSchema);

module.exports = RegionModel;
