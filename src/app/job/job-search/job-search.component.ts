import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '../shared/job.service';
import { Job } from '../shared/job.model';

@Component({
  selector: 'streambits-job-search',
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.scss']
})
export class JobSearchComponent implements OnInit {

  city: string;
  jobs: Job[] = [];

  constructor(private route: ActivatedRoute, 
  			  private jobService: JobService) { }

  ngOnInit() {
  	this.route.params.subscribe((params) => {
  		this.city = params['city'];
  		this.getSearchJobs();
  	})
  }

  getSearchJobs() {
  	this.jobService.getJobsByCity(this.city).subscribe(
  	(jobs: Job[]) => {
  		this.jobs = jobs;
  	},
  	() => {

  	})
  }

}
