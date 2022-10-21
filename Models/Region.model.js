const mongoose = require("mongoose");

const RegionSchema = new mongoose.Schema({
  region: { type: String, required: true },
  fields: { type: String, required: true },
  subregions: [{ type: String }],
  organization: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "organization",
  },
  property: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "property",
    },
  ],
});

const RegionModel = mongoose.model("region", RegionSchema);

module.exports = RegionModel;
