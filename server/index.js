const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const Job = require('./models/job');
const FakeDb = require('./fake-db');

const jobRoutes = require('./routes/jobs');

mongoose.connect(config.DB_URI).then(() => {
	const fakeDb = new FakeDb();
	fakeDb.seedDb();
});

const app = express();

app.use('/api/v1/jobs', jobRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, function(){
	console.log('Node Server is running');
});