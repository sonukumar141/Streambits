const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
	title: {type: String, required: true, max: [128, 'Title too long, max is 128 characters.']},
    city: { type: String, required: true, lowercase: true },
    street: { type: String, required: true, min: [4, 'Too short, min is 4 characters']},
    category: { type: String, required: true, lowercase: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    price: Number,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Job', jobSchema);