const get_index = (req, res) => {
  res.render('index');
}

const get_gameday = (req, res) => {
  res.render('gameday');
}

const get_test = (req, res) => {
  res.render('test');
}

module.exports = {
  get_index,
  get_gameday,
  get_test,
}