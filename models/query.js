const { Double } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const querySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true
  },
  query: {
	type: String,
	required: true
  },
}, { timestamps: true });

const Query = mongoose.model('Query', querySchema);
module.exports = Query;