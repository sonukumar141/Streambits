const Job =  require('./models/job');

class FakeDb {
	constructor(){
		this.jobs = [{
                  title: "Plumber Job",
                  city: "San Francisco",
                  street: "Main street",
                  category: "Blue Color",
                  image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/11/image.jpeg",
                  description: "Very nice apartment in center of the city.",
                  price: 43
                  },
                  {
                  title: "Javascript Job",
                  city: "New York",
                  street: "Time Square",
                  category: "White color",
                  image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/11/image.jpeg",
                  description: "Very nice apartment in center of the city.",
                  price: 11
                  },
                  {
                  title: "C++ Job",
                  city: "Spisska Nova Ves",
                  street: "Banicka 1",
                  category: "White Color",
                  image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/11/image.jpeg",
                  description: "Very nice apartment in center of the city.",
                  price: 23
}]
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