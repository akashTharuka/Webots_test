const { Double } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schoolSchema = new Schema({
  teamName: {
    type: String,
    required: true,
  },
  schoolName: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true
  },
}, { timestamps: true });

const School = mongoose.model('School', schoolSchema);
module.exports = School;