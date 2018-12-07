import { Component, OnInit } from '@angular/core';
import { Job } from '../shared/job.model';

@Component({
  selector: 'streambits-job-create',
  templateUrl: './job-create.component.html',
  styleUrls: ['./job-create.component.scss']
})
export class JobCreateComponent implements OnInit {

  newJob: Job;

  constructor() { }

  ngOnInit() {
  	this.newJob = new Job();
  }

  createJob() {
  	console.log(this.newJob);
  }

}
