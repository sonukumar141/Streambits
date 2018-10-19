import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common';
import { Routes, RouterModule} from '@angular/router';

import { JobListComponent } from './job-list/job-list.component';
import { JobListItemComponent } from './job-list-item/job-list-item.component';
import { JobComponent } from './job.component';

import { JobService } from './shared/job.service';
import { JobDetailComponent } from './job-detail/job-detail.component';

const routes: Routes = [
  {path: 'jobs', 
  component: JobComponent,
  children: [
  	{path: '', component: JobListComponent},
  	{path: ':jobId', component: JobDetailComponent}
  ]
  }
]

@NgModule({
	declarations: [
		JobComponent,
    	JobListComponent,
    	JobListItemComponent,
    	JobDetailComponent
	],
	imports: [CommonModule,
			  RouterModule.forChild(routes)

			  ],
	providers: [JobService]
})

export class JobModule {
	
}