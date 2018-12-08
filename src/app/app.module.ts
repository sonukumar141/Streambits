import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { JobComponent } from './job/job.component';

import { JobModule } from './job/job.module';
import { AuthModule } from './auth/auth.module';
import { ManageModule } from './manage/manage.module';

const routes: Routes = [
  {path: '', redirectTo: '/jobs', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    JobModule,
    AuthModule,
    NgbModule.forRoot(),
    ManageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
