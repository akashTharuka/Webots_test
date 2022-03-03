const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const leaderboardRoutes = require('./routes/leaderboardRoutes');

// express app
const app = express();

app.use(cors());
app.use(express.json());

// mongodb username - Kalana99, password - Kalana99
// connect to mongodb & listen for requests
const dbURI = "mongodb+srv://Kalana99:Kalana99@cluster0.lrpxz.mongodb.net/leaderBoards?retryWrites=true&w=majority";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(5000, () => {
    console.log('listerning to port 5000');
  }))
  .catch(err => console.log(err));

// app.listen(5000, () => {
//   console.log('listerning to port 5000');
// });

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// routes
// app.get('/', (req, res) => {
//   res.redirect('/pages');
// });

// blog routes
app.use('/leaderboards', leaderboardRoutes);

// 404 page
// app.use((req, res) => {
//   res.status(404).render('404', { title: '404' });
// });