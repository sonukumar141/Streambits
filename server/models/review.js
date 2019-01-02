const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    rating: Number,
    text: String,
    createdAt: {type: Date, default: Date.now},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    job: {type: Schema.Types.ObjectId, ref: 'Job'}
});

module.exports = mongoose.model('Review', reviewSchema);