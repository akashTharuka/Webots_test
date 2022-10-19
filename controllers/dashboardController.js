const University = require('../models/university');
const School = require('../models/school');

const get_leaderboard = async (req, res) => {
  var universities  = await University.find().sort({score: -1});
  var schools = await School.find().sort({score: -1});
  res.send({ universities, schools });
}

module.exports = {
  get_leaderboard
}