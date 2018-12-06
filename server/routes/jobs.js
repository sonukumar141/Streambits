const express = require('express');
const router = express.Router();
const Job = require('../models/job');

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
			return res.json({city});
		}else {
			Job.find({})
				.select('-bookings')
				.exec(function(err, foundJobs) {

				return res.json(foundJobs);
			});
		}
});



module.exports = router;