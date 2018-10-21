const User = require('../models/user');

exports.auth =  function(req, res){


}

exports.signup =  function(req, res){

	const {username, email, password, passwordConfirmation} = req.body;

	if(!password || !email) {
		return res.status(422).send({errors: [{title: 'Data Missing!', detail: 'Provide email and password'}]});
	}

	if(password != passwordConfirmation) {
		return res.status(422).send({errors: [{title: 'Invalid password!', detail: 'Password is not as confirmation'}]});

	}
	User.findOne({email}, function(err, existingUser){
		if(err){
			return res.status(422).send({'mongoose': 'handle later'});
		}

		if(existingUser){
			return res.status(422).send({errors: [{title: 'Invalid email!', detail: 'Email already registered'}]});
		}

		const user = new User({
			username,
			email,
			password
		});

		user.save(function(err){
			if(err){
				return res.status(422).send({'mongoose': 'handle later'});
			}

			return res.json({'registered': true});
		})
	})

}