const mongoose = require("mongoose");

const PropertySchema = new mongoose.Schema({
  // regions: { type: String, required: true },
  fields: { type: String, required: true },
  region: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "region",
    },
  ],
  field: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "field",
    },
  ],
});

const PropertyModel = mongoose.model("property", PropertySchema);

module.exports = PropertyModel;
