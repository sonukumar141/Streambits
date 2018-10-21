const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	username: {
		type: String,
		min: [4, 'Too short, Min is 4 characers'],
		max: [32, 'Too Long, Max character is 32']
	},
	email: {
		type: String,
		min: [4, 'Too short, Min is 4 characers'],
		max: [32, 'Too Long, Max character is 32'],
		unique: true,
		lowercase: true,
		required: 'Email is required',
		match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/] 
	},
	password: {
		type: String,
		min: [4, 'Too short, Min is 4 characers'],
		max: [32, 'Too Long, Max character is 32'],
		required: 'Password is required',

	},
	jobs: [{type: Schema.Types.ObjectId, ref: 'Job'}]	

});

module.exports = mongoose.model('User', userSchema);