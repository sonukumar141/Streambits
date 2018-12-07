import { Booking } from '../../booking/shared/booking.model';

export class Job 
{
	static readonly CATEGORIES = ['Wedding Venue', 'Office Party', 'Banquet Hall'];

	_id: string;
	title: string;
	city: string;
	street: string;
	category: string;
	image: string;
	bedrooms: number;
	shared: boolean;
	description: string;
	price: number;
	createdAt: string;
	bookings: Booking[];
	
}

