const mongoose = require("mongoose");

const FieldSchema = new mongoose.Schema({
  name: { type: String, required: true },
  size: { type: Number, required: true },
  position: { type: String, required: true },
  property: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "property",
    },
  ],
});

const FieldModel = mongoose.model("field", FieldSchema);

module.exports = FieldModel;
