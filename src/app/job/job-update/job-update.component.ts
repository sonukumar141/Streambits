import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '../shared/job.service';
import { Job } from '../shared/job.model'

@Component({
  selector: 'streambits-job-update',
  templateUrl: './job-update.component.html',
  styleUrls: ['./job-update.component.scss']
})
export class JobUpdateComponent implements OnInit {

  job: Job;

  constructor(private route: ActivatedRoute, 
  			  private jobService: JobService) { }

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
	});
 }

 updateJob(value) {
    debugger;
    console.log(value);
    alert('Update Job Called');
 }
}
