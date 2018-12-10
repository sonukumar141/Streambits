import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '../shared/job.service';
import { Job } from '../shared/job.model';

import { Subject } from 'rxjs';

@Component({
  selector: 'streambits-job-update',
  templateUrl: './job-update.component.html',
  styleUrls: ['./job-update.component.scss']
})
export class JobUpdateComponent implements OnInit {

  job: Job;
  jobCategories: string[] = Job.CATEGORIES;

  locationSubject: Subject<any> =  new Subject();

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

 updateJob(jobId: string, jobData: any) {
    this.jobService.updateJob(jobId, jobData).subscribe(
    (updatedJob: Job) => {
        this.job = updatedJob;

        debugger;
        if (jobData.city || jobData.street) {
          this.locationSubject.next(this.job.city + ', ' + this.job.street);
        }
    },
    () => {

    })
 }
}
