import { Component, OnInit, Input } from '@angular/core';
import { Booking } from '../../../booking/shared/booking.model';

@Component({
  selector: 'streambits-job-detail-booking',
  templateUrl: './job-detail-booking.component.html',
  styleUrls: ['./job-detail-booking.component.scss']
})
export class JobDetailBookingComponent implements OnInit {

  @Input() price: number;
  @Input() bookings: Booking[];

  daterange: any = {};

  public options: any = {
  	locale: {format: 'DD-MM-YYYY'},
  	alwaysShowCalendars: false,
  	opens: 'left'
  };

  constructor() { }

  ngOnInit() {
		this.getBookedOutDates();
  }

  private getBookedOutDates() {
  	if(this.bookings && this.bookings.length > 0) {
  		this.bookings.forEach((booking: Booking) => {
  			console.log(booking);
  		}); 
  	}
  }

  public selectedDate(value: any, datepicker?: any) {

  	console.log(value);

  	datepicker.start = value.start;
  	datepicker.end = value.end;

  	this.daterange.start = value.start;
  	this.daterange.end = value.end;
  	this.daterange.label = value.label;
  }

}
