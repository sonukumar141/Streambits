import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { CommonModule } from  '@angular/common';
import { NgPipesModule } from 'ngx-pipes';
import { ReviewModule } from '../review/review.module';
 
import { ManageJobBookingComponent } from './manage-job/manage-job-booking/manage-job-booking.component';
import { ManageComponent } from './manage.component';
import { ManageBookingComponent } from './manage-booking/manage-booking.component';
import { ManageJobComponent } from './manage-job/manage-job.component';
import { FormatDatePipe } from '../common/pipes/format-date.pipe';

import { JobService } from '../job/shared/job.service';
import { BookingService } from '../booking/shared/booking.service';
import { AuthGuard } from '../auth/shared/auth.guard';

const routes: Routes = [
	{
		path: 'manage',
		component: ManageComponent,
		children: [
		    {path: 'jobs', component: ManageJobComponent, canActivate: [AuthGuard]},
		  	{path: 'bookings', component: ManageBookingComponent, canActivate: [AuthGuard]}			
		]
	}
]

@NgModule({
  declarations: [
  ManageComponent,
  ManageBookingComponent,
  ManageJobComponent,
  FormatDatePipe,
  ManageJobBookingComponent
],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NgPipesModule,
    ReviewModule
  ],
  providers: [
    JobService,
    BookingService
  ]

})
export class ManageModule { }
