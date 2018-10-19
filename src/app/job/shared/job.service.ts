import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Job} from './job.model';

@Injectable()
export class JobService{

	private jobs: any[] = [{
  	id: "1",
  	title: "Plumber Job",
  	city: "Pune",
  	street: "Pimpri",
  	category: "plumber",
  	image: "http://via.placeholder.com/350x250",
  	description: "Royal Plumbing Service",
  	price: 1000,
  	createdAt: "24/10/2018"
  },
  {
  	id: "2",
  	title: "JavaScript Job",
  	city: "Pune",
  	street: "Pimpri",
  	category: "plumber",
  	image: "http://via.placeholder.com/350x250",
  	description: "Royal JavaScript Service",
  	price: 1000,
  	createdAt: "24/10/2018"
  },
  {
  	id: "3",
  	title: "C++ Job",
  	city: "Pune",
  	street: "Pimpri",
  	category: "plumber",
  	image: "http://via.placeholder.com/350x250",
  	description: "Royal C++ Service",
  	price: 1000,
  	createdAt: "24/10/2018"
  },
  {
  	id: "4",
  	title: "Angular Job",
  	city: "Pune",
  	street: "Pimpri",
  	category: "plumber",
  	image: "http://via.placeholder.com/350x250",
  	description: "Royal Angular Service",
  	price: 1000,
  	createdAt: "24/10/2018"
  }];

  public getJobById(jobId: string): Observable<Job> {

    return new Observable<Job>((observer) => {
      setTimeout(() => {
        const foundJob = this.jobs.find((job) => {
          return job.id == jobId;
        });
        observer.next(foundJob);
      }, 500)
    });
  }

  public getJobs(): Observable<Job[]> {

  	  return new Observable<Job[]>((observer) => {

  		setTimeout( () => {
  			observer.next(this.jobs);
  		}, 2000);	  		
  	});
  }
	
}