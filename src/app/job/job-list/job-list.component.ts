import { Component, OnInit } from '@angular/core';
import { JobService } from '../shared/job.service';

@Component({
  selector: 'streambits-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {

  jobs: any[] = [];

  constructor(private jobService: JobService) { }

  ngOnInit() {
  	this.jobs = this.jobService.getJobs();
  }

}
