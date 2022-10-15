const mongoose = require("mongoose");

const FieldSchema = new mongoose.Schema({
  name: { type: String, required: true },
  size: { type: Number, required: true },
  position: { type: String, required: true },
  // region: [{ type: mongoose.Schema.Types.ObjectId, ref: "region" }],
});

const FieldModel = mongoose.model("field", FieldSchema);

module.exports = FieldModel;
