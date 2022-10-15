const mongoose = require("mongoose");

const FieldSchema = new mongoose.Schema({
  name: String,
  size: Number,
  position: String,
  region: [{ type: mongoose.Schema.Types.ObjectId, ref: "region" }],
});

const FieldModel = mongoose.model("field", FieldSchema);

module.exports = FieldModel;
