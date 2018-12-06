const express = require('express');
const router = express.Router();
const Job = require('../models/job');
const User = require('../models/user');
const { normalizeErrors } = require('../helpers/mongoose');

const UserCtrl = require('../controllers/user');

router.get('/secret', UserCtrl.authMiddleware, function(req, res){
	res.json({"secret": true});
});

router.get('/:id', function(req, res){

	const jobId = req.params.id;

	Job.findById(jobId)
		.populate('user', 'username -_id')
		.populate('bookings', 'startAt endAt -_id')
		.exec(function(err, foundJob) {
			if(err){
				return res.status(422).send({errors: [{title: 'Job Error', detail: 'Could not find Job'}]});
			}

			return res.json(foundJob);
		});
});


router.post('', UserCtrl.authMiddleware, function(req, res) {
	const {title, city, street, category, image, description, price} = req.body;
	const user = res.locals.user;

	const job = new Job({title, city, street, category, image, description, price});
	job.user = user;

	Job.create(job, function(err, newJob) {
		if(err) {
			return res.status(422).send({errors: normalizeErrors(err.errors)});
		}

		User.update({_id: user.id}, {$push: {jobs: newJob}}, function(){});

		return res.json(newJob);
	});
});

router.get('', function(req, res){
	const city = req.query.city;

	const query = city ? {city: city.toLowerCase()} : {};

		Job.find(query)
			.select('-bookings')
			.exec(function(err, foundJobs) {

		if(err) {
			return res.status(422).send({errors: normalizeErrors(err.errors)});
		}

		if(city && foundJobs.length === 0) {
			return res.status(422).send({errors: [{title: 'No Jobs Found!', detail: `There are no jobs for city ${city}`}]});
		}

			return res.json(foundJobs);
		});
});



module.exports = router;