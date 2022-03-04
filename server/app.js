const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const leaderboardRoutes = require('./routes/leaderboardRoutes');

// environmental variables
require('dotenv').config();

// express app
const app = express();

app.use(cors());
app.use(express.json());

// connect to mongodb & listen for requests

const dbPswAkash = process.env.DB_PSW_AKASH;
const dbPswKalana = process.env.DB_PSW_KALANA;

// const dbURI = process.env.DB_URL_2;
const dbURI = process.env.DB_URL_1;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(result => app.listen(process.env.PORT || 5000, () => {
		console.log('listening to port 5000');
	}))
	.catch(err => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
	res.locals.path = req.path;
	next();
});


app.use('/leaderboards', leaderboardRoutes);

// 404 page
// app.use((req, res) => {
//   res.status(404).render('404', { title: '404' });
// });