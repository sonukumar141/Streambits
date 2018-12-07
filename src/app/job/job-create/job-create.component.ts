import { Component, OnInit } from '@angular/core';
import { Job } from '../shared/job.model';
import { JobService } from '../shared/job.service';

@Component({
  selector: 'streambits-job-create',
  templateUrl: './job-create.component.html',
  styleUrls: ['./job-create.component.scss']
})
export class JobCreateComponent implements OnInit {

  newJob: Job;
  jobCategories = Job.CATEGORIES;

  constructor(private jobService: JobService) { }

  handleImageChange() {
  	this.newJob.image = "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg";
  }

  ngOnInit() {
  	this.newJob = new Job();
  }

  createJob() {
  	this.jobService.createJob(this.newJob).subscribe(
  	() => {

  	},
  	() => {
  	
  	})
  }

}
