const mongoose = require('mongoose');

const attractionSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  address: { type: String, required: true },
  site: { type: String, required: true },
  rank: Number,
});

module.exports = mongoose.model('Attraction', attractionSchema);
