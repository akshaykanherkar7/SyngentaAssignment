const mongoose = require("mongoose");

const RegionSchema = new mongoose.Schema({
  regions: String,
  fields: String,
  properties: [
    { property: { type: mongoose.Schema.Types.ObjectId }, ref: PropertyModel },
  ],
});

const RegionModel = mongoose.model("region", RegionSchema);

module.exports = RegionModel;
