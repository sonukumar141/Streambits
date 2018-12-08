import { Component, OnInit } from '@angular/core';
import { JobService } from '../../job/shared/job.service';
import { Job } from '../../job/shared/job.model';

@Component({
  selector: 'streambits-manage-job',
  templateUrl: './manage-job.component.html',
  styleUrls: ['./manage-job.component.scss']
})
export class ManageJobComponent implements OnInit {

  jobs: Job[];
  jobDeleteIndex: number;

  constructor(private jobService: JobService) { }

  ngOnInit() {
  	this.jobService.getUserJobs().subscribe(
  	(jobs: Job[]) => {	
  		this.jobs = jobs;
  	},
  	() => {

  	})
  }

  deleteJob(jobId: string)  {

  	this.jobService.deleteJob(jobId).subscribe(
  	() => {
  		this.jobs.splice(this.jobDeleteIndex, 1);
  		this.jobDeleteIndex = undefined;
  	},
  	() => {

  	})
  }
}
