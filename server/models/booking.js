const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
	startAt: { type: Date, required: 'Starting date is required' },
	endAt: { type: Date, required: 'Ending date is required' },
	totalPrice: Number,
	days: Number,
	guests: Number,
	createdAt: { type: Date, default: Date.now },
	user: { type: Schema.Types.ObjectId, ref: 'User' },
	job: { type: Schema.Types.ObjectId, ref: 'Job' }
});

module.exports = mongoose.model('Booking', bookingSchema);