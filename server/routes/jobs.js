const express = require('express');
const router = express.Router();
const Job = require('../models/job');


router.get('', function(req, res){
	Job.find({}, function(err, foundJobs){
		res.json(foundJobs);
	});
});

router.get('/:id', function(req, res){

	const jobId = req.params.id;



	Job.findById(jobId, function(err, foundJob){

	if(err){
	res.status(422).send({errors: [{title: 'Job Error', detail: 'Could not find Job'}]});
	}

	res.json(foundJob);
	});
});

module.exports = router;