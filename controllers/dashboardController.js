const University = require('../models/university');
const School = require('../models/school');

const get_uniLeaderboard = async (req, res) => {
  var result  = await University.find().sort({score: -1});
  res.send(result);
}

const get_schoolLeaderboard = async (req, res) => {
  var result  = await School.find().sort({score: -1});
  res.send(result);
}

module.exports = {
  get_uniLeaderboard, 
  get_schoolLeaderboard,
}