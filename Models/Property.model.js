const mongoose = require("mongoose");

const PropertySchema = new mongoose.Schema({
  regions: String,
  fields: String,
  organization: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "organization",
    },
  ],
});

const PropertyModel = mongoose.model("property", PropertySchema);

module.exports = PropertyModel;
