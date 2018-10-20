const Job =  require('./models/job');

class FakeDb {
	constructor(){
		this.jobs = [{
                  title: "Plumber Job",
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

                  ]
	}

	async cleanDb(){
		await Job.deleteMany({});
	}

	pushJobsToDb(){
		this.jobs.forEach((job) => {
			const newJob = new Job(job);
			newJob.save();
		})
	}

	seedDb(){
		this.cleanDb();
		this.pushJobsToDb();
	}
}

module.exports = FakeDb;