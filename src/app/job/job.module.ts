import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgPipesModule, UcWordsPipe } from 'ngx-pipes';
import { MapModule } from '../common/map/map.module';
import { Daterangepicker } from 'ng2-daterangepicker';
import { FormsModule } from '@angular/forms';
import { EditableModule } from '../common/components/editable/editable.module';
import { ImageUploadModule } from '../common/components/image-upload/image-upload.module';

import { JobListComponent } from './job-list/job-list.component';
import { JobListItemComponent } from './job-list-item/job-list-item.component';
import { JobComponent } from './job.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { JobDetailBookingComponent } from './job-detail/job-detail-booking/job-detail-booking.component';
import { JobSearchComponent } from './job-search/job-search.component';

import { JobService } from './shared/job.service';
import { BookingService } from '../booking/shared/booking.service';
import { HelperService } from '../common/service/helper.service';
import { UppercasePipe } from '../common/pipes/uppercase.pipe';

import { AuthGuard } from '../auth/shared/auth.guard';
import { JobGuard } from './shared/job.guard';
import { JobCreateComponent } from './job-create/job-create.component';
import { JobUpdateComponent } from './job-update/job-update.component';

const routes: Routes = [
  {path: 'jobs', 
  component: JobComponent,
  children: [
  	{path: '', component: JobListComponent},
    {path: 'new', component: JobCreateComponent, canActivate: [AuthGuard]},
    {path: ':jobId/edit', component: JobUpdateComponent, canActivate: [AuthGuard, JobGuard]},
  	{path: ':jobId', component: JobDetailComponent },
    {path: ':city/h', component: JobSearchComponent}
  ]
  }
]

@NgModule({
	declarations: [
		JobComponent,
    	JobListComponent,
    	JobListItemComponent,
    	JobDetailComponent,
      UppercasePipe,
      JobDetailBookingComponent,
      JobSearchComponent,
      JobCreateComponent,
      JobUpdateComponent
	],
	imports: [CommonModule,
			  RouterModule.forChild(routes),
        HttpClientModule,
        NgPipesModule,
        MapModule,
        Daterangepicker,
        FormsModule,
        EditableModule,
        ImageUploadModule
			  ],
	providers: [
      JobService,
      HelperService,
      BookingService,
      UcWordsPipe,
      JobGuard
    ]
})

export class JobModule {
	
}