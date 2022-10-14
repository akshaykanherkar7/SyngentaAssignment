const mongoose = require("mongoose");

const PropertySchema = new mongoose.Schema({
  regions: [{ type: String }],
  fields: [{ type: String }],
  organization: [
    {
      organiztion: { type: mongoose.Schema.Types.ObjectId },
      ref: OrganizationModel,
    },
  ],
});

const PropertyModel = mongoose.model("property", PropertySchema);

module.exports = PropertyModel;
