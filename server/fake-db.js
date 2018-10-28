const Job =  require('./models/job');
const User = require("./models/user");

class FakeDb {
	constructor(){
		this.jobs = [{
                  title: "Plumber Job",
                  city: "San Francisco",
                  street: "Main street",
                  category: "Blue Color",
                  image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/11/image.jpeg",
                  description: "Another nice Job in Mumbai.",
                  price: 43
                  },
                  {
                  title: "Javascript Job",
                  city: "Pune",
                  street: "Pimpri",
                  category: "White color",
                  image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/11/image.jpeg",
                  description: "Another nice Job in Pune.",
                  price: 11
                  },
                  {
                  title: "C++ Job",
                  city: "Mumbai",
                  street: "Marine Lines",
                  category: "White Color",
                  image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/11/image.jpeg",
                  description: "Another nice Job in Mumbai.",
                  price: 23
                  },
                  {
                  title: "Carpenter Job",
                  city: "Mumbai",
                  street: "Marine Lines",
                  category: "Blue Color",
                  image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/11/image.jpeg",
                  description: "Another nice Job in Mumbai.",
                  price: 43
                  },
                  {
                  title: "Javascript Job",
                  city: "Mumbai",
                  street: "Marine Lines",
                  category: "White color",
                  image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/11/image.jpeg",
                  description: "Another nice Job in Mumbai.",
                  price: 11
                  },
                  {
                  title: "Full stack developer Job",
                  city: "Mumbai",
                  street: "Marine Lines",
                  category: "White Color",
                  image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/11/image.jpeg",
                  description: "Another nice Job in Mumbai.",
                  price: 23
                  },
                  {
                  title: "Front End developer Job",
                  city: "Mumbai",
                  street: "Marine Lines",
                  category: "White color",
                  image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/11/image.jpeg",
                  description: "Another nice Job in Mumbai.",
                  price: 11
                  },
                  {
                  title: "Wordpress, Php Job",
                  city: "Mumbai",
                  street: "Marine Lines",
                  category: "White Color",
                  image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/11/image.jpeg",
                  description: "Another nice Job in Mumbai.",
                  price: 23
                  }                  

                  ];

                  this.users = [{
                        username: "Test User",
                        email: "test@gmail.com",
                        password: "testtest"
                  }];
	}

	async cleanDb(){
            await User.deleteMany({});
		await Job.deleteMany({});
	}

	pushDataToDb(){
            const user = new User(this.users[0]);

		this.jobs.forEach((job) => {
			const newJob = new Job(job);
                  newJob.user = user;

                  user.jobs.push(newJob);
			newJob.save();
		});

            user.save();
	}

	async seedDb(){
		await this.cleanDb();
		this.pushDataToDb();
	}
}

module.exports = FakeDb;