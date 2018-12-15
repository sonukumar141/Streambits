import { Component, OnInit } from '@angular/core';
import { Job } from '../shared/job.model';
import { JobService } from '../shared/job.service';

import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'streambits-job-create',
  templateUrl: './job-create.component.html',
  styleUrls: ['./job-create.component.scss']
})
export class JobCreateComponent implements OnInit {

  newJob: Job;
  jobCategories = Job.CATEGORIES;
  errors: any[] = [];

  constructor(private jobService: JobService, 
  			  private router: Router) { }

  handleImageChange() {
  	this.newJob.image = "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg";
  }

  ngOnInit() {
  	this.newJob = new Job();
  }

  handleImageUpload(imageUrl: string){
    debugger;
    this.newJob.image = imageUrl;
  }

  handleImageError(){
    this.newJob.image = '';
  }

  createJob() {
  	this.jobService.createJob(this.newJob).subscribe(
  	(job: Job) => {
  		this.router.navigate([`/jobs/${job._id}`]);
  	},
  	(errorResponse: HttpErrorResponse) => {
  		this.errors = errorResponse.error.errors;
  	})
  }

}
