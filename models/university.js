const { Double } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const universitySchema = new Schema({
  teamName: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true
  },
}, { timestamps: true });

const University = mongoose.model('University', universitySchema);
module.exports = University;