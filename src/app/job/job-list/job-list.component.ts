import { Component, OnInit } from '@angular/core';
import { JobService } from '../shared/job.service';
import { Job } from '../shared/job.model';

@Component({
  selector: 'streambits-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {

  jobs: Job[] = [];

  constructor(private jobService: JobService) { }

  ngOnInit() {
  	const jobObservable = this.jobService.getJobs();

  	jobObservable.subscribe(
  		(jobs: Job[]) => {
  			this.jobs = jobs;
  		},
  		(err) => {

  		},
  		() => {

  		});
  }

}
