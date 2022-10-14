const mongoose = require("mongoose");

const FieldSchema = new mongoose.Schema({
  name: String,
  size: Number,
  position: String,
  region: [
    { region: { type: mongoose.Schema.Types.ObjectId }, ref: RegionModel },
  ],
});

const FieldModel = mongoose.model("field", FieldSchema);

module.exports = FieldModel;
