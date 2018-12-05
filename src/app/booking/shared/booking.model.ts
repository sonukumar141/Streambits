import { Job } from '../../job/shared/job.model';


export class Booking {

	static readonly DATE_FORMAT = 'YYYY/MM/DD';

	_id: string;
	startAt: string;
	endAt: string;
	totalPrice: number;
	guests: number;
	days: number;
	createdAt: string;
	job: Job;
}