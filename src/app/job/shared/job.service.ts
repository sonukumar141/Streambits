import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Job} from './job.model';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class JobService{

  constructor(private http: HttpClient) {}

  public getJobById(jobId: string): Observable<any> {

    return this.http.get('/api/v1/jobs/' + jobId);
  }

  public getJobs(): Observable<any> {
    return this.http.get('/api/v1/jobs');
  }

  public getJobsByCity(city: string): Observable<any> {
    return this.http.get(`/api/v1/jobs?city=${city}`);
  }
	
  public createJob(job: Job): Observable<any> {
    return this.http.post('/api/v1/jobs', job);
  }

  public getUserJobs(): Observable<any> {
    return this.http.get('/api/v1/jobs/manage');
  }

  public deleteJob(jobId: string): Observable<any> {
    return this.http.delete(`/api/v1/jobs/${jobId}`);
  }

  public updateJob(jobId: string, jobData: any):  Observable<any> {
      return this.http.patch(`/api/v1/jobs/${jobId}`, jobData);
  }

  public verifyJobUser(jobId: string): Observable<any> {
    return this.http.get(`/api/v1/jobs/${jobId}/verify-user`);
  }
}