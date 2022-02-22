const express = require('express');
const morgan = require('morgan');
const mainRoutes = require('./routes/mainRoutes');

// express app
const app = express();

app.listen(3000, () => {
  console.log('listerning to port 3000');
});

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// routes
app.get('/', (req, res) => {
  res.redirect('/pages');
});

// blog routes
app.use('/pages', mainRoutes);

// 404 page
// app.use((req, res) => {
//   res.status(404).render('404', { title: '404' });
// });