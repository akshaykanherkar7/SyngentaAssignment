const mongoose = require("mongoose");

const PropertySchema = new mongoose.Schema({
  regions: {type: String , required: true},
  fields: {type: String , required: true},
});

const PropertyModel = mongoose.model("property", PropertySchema);

module.exports = PropertyModel;
