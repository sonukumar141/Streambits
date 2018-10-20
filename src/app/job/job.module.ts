import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgPipesModule } from 'ngx-pipes';

import { JobListComponent } from './job-list/job-list.component';
import { JobListItemComponent } from './job-list-item/job-list-item.component';
import { JobComponent } from './job.component';

import { JobService } from './shared/job.service';
import { JobDetailComponent } from './job-detail/job-detail.component';

import { UppercasePipe } from '../common/pipes/uppercase.pipe';

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
    	JobDetailComponent,
      UppercasePipe
	],
	imports: [CommonModule,
			  RouterModule.forChild(routes),
        HttpClientModule,
        NgPipesModule
			  ],
	providers: [JobService]
})

export class JobModule {
	
}