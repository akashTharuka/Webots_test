const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const leaderboardRoutes = require('./routes/leaderboardRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');

// environmental variables
require('dotenv').config();

// express app
const app = express();

app.use(cors());
app.use(express.json());


const dbURI = process.env.DB_URI;

// middleware & static files
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production'){
	app.use(express.static('client/build'));
}

app.listen(process.env.PORT || 5000, () => {
    console.log('listening to port 5000');
})

// connect to mongodb and listen
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(result => app.listen(process.env.PORT || 5000, () => {
		console.log('listening to port 5000');
	}))
	.catch(err => console.log(err));

app.use((req, res, next) => {
	res.locals.path = req.path;
	next();
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://www.robo.cse.mrt.ac.lk");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.use('/leaderboards', leaderboardRoutes);
app.use('/dashboard', dashboardRoutes);

