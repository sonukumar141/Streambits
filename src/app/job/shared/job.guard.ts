import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { JobService } from './job.service';
import { Observable } from 'rxjs';	


@Injectable()
export class JobGuard implements CanActivate {

  constructor(private jobService: JobService,
              private router: Router) {}

 

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

    	const jobId: string = route.params.jobId;

    	return this.jobService.verifyJobUser(jobId).map(() => {
    		return true;
    	}).catch(() => {
    		this.router.navigate(['/jobs']);
    		return Observable.of(false);
    	})
    
    }
}	