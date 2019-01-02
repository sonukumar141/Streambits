const User = require('../models/user');
const Job = require('../models/job');

const Review = require('../models/review');

const Booking = require('../models/booking');
const moment = require('moment');
const { normalizeErrors } = require('../helpers/mongoose');

exports.createReview = function(req, res) {
    const reviewData = req.body;
    const { bookingId } = req.query;
    const user = res.locals.user;

    Booking.findById(bookingId)
           .populate({path: 'job', populate: {path: 'user'}})
           .populate('review')
           .populate('user')
           .exec((err, foundBooking) => {
                if(err){
                    return res.status(422).send({errors: normalizeErrors(err.errors)});
                }          
                
                const {job} = foundBooking;

                if(job.user.id === user.id) {
                    return res.status(422).send({errors: [{title: 'Invalid User!', detail: 'Cannot create review on your Job!'}]});
                }
                
                const foundBookingUserId = foundBooking.user.id;

                if(foundBookingUserId !== user.id) {
                    return res.status(422).send({errors: [{title: 'Invalid User!', detail: 'Cannot create review on other\'s booking'}]});
                }
           });
}