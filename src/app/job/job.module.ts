import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common';

import { JobListComponent } from './job-list/job-list.component';
import { JobListItemComponent } from './job-list-item/job-list-item.component';
import { JobComponent } from './job.component';

import { JobService } from './shared/job.service';

@NgModule({
	declarations: [
		JobComponent,
    	JobListComponent,
    	JobListItemComponent
	],
	imports: [CommonModule],
	providers: [JobService]
})

export class JobModule {
	
}