import { Job } from '../../job/shared/job.model';


export class Booking {
	_id: string;
	startAt: string;
	endAt: string;
	totalPrice: number;
	guests: number;
	days: number;
	createdAt: string;
	job: Job;
}