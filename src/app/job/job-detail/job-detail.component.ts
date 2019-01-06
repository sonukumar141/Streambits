import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '../shared/job.service';
import { Job } from '../shared/job.model';
import { Review } from '../../review/shared/review.model';
import { ReviewService } from '../../review/shared/review.service';

import * as moment from 'moment';


@Component({
  selector: 'streambits-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent implements OnInit {

  job: Job;

  reviews: Review[] = [];

  constructor(private route: ActivatedRoute, 
				private jobService: JobService,
				private reviewService: ReviewService) { }

  ngOnInit() {
  	this.route.params.subscribe(
  	(params) => {
  		this.getJob(params['jobId']);
 	})
  }

 getJob(jobId: string){
	this.jobService.getJobById(jobId).subscribe(
	(job: Job) => {
		this.job = job;
		this.getReviews(job._id);
	});
 }

 getReviews(jobId: string) {
	this.reviewService.getJobReviews(jobId)
		.subscribe((reviews: Review[]) =>{
			this.reviews = reviews;
		});
 }

 formatDate(date: string): string {
	return `${moment(date).fromNow()}`;
 }

}
