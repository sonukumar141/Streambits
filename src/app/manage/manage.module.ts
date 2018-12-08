import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { CommonModule } from  '@angular/common';
 
import { ManageComponent } from './manage.component';
import { ManageBookingComponent } from './manage-booking/manage-booking.component';
import { ManageJobComponent } from './manage-job/manage-job.component';

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
  ManageJobComponent
],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  providers: [

  ]

})
export class ManageModule { }
