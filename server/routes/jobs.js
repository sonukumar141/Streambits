const express = require('express');
const router = express.Router();
const Job = require('../models/job');
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

router.get('', function(req, res){
		const city = req.query.city;

		if(city) {
			Job.find({city: city.toLowerCase()})
				.select('-bookings')
				.exec(function(err, filteredJobs) {
			if(err) {
				return res.status(422).send({errors: normalizeErrors(err.errors)});
			}

			if(filteredJobs.length === 0) {
				return res.status(422).send({errors: [{title: 'No Jobs Found!', detail: `There are no jobs for city ${city}`}]});
			}

			return res.json(filteredJobs);
			})
		}else {
			Job.find({})
				.select('-bookings')
				.exec(function(err, foundJobs) {

				return res.json(foundJobs);
			});
		}
});



module.exports = router;