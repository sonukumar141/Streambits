import { Component, OnInit, Input } from '@angular/core';
import { Booking } from '../../../booking/shared/booking.model';
import { HelperService } from '../../../common/service/helper.service';
import * as moment from 'moment';

@Component({
  selector: 'streambits-job-detail-booking',
  templateUrl: './job-detail-booking.component.html',
  styleUrls: ['./job-detail-booking.component.scss']
})
export class JobDetailBookingComponent implements OnInit {

  @Input() price: number;
  @Input() bookings: Booking[];

  newBooking: Booking;

  daterange: any = {};
  bookedOutDates: any[] = [];

  public options: any = {
  	locale: {format: Booking.DATE_FORMAT},
  	alwaysShowCalendars: false,
  	opens: 'left',
  	isInvalidDate: this.checkForInvalidDates.bind(this)
  };

  constructor(private helper: HelperService) { }

  ngOnInit() {
  		this.newBooking = new Booking();
		this.getBookedOutDates();
  }

  private checkForInvalidDates(date) {
  	return this.bookedOutDates.includes(this.helper.formatBookingDate(date)) || date.diff(moment(), 'days') < 0;
  }

  private getBookedOutDates() {
  	if(this.bookings && this.bookings.length > 0) {
  		this.bookings.forEach((booking: Booking) => {
  			const dateRange =  this.helper.getBookingRangeOfDates(booking.startAt, booking.endAt);
  			this.bookedOutDates.push(...dateRange);
  		}); 
  	}
  }

  public selectedDate(value: any, datepicker?: any) {

  	this.newBooking.startAt = this.helper.formatBookingDate(value.start);
  	this.newBooking.endAt = this.helper.formatBookingDate(value.end);
  	this.newBooking.days = -(value.start.diff(value.end, 'days'));

  	console.log(this.newBooking);

  	this.daterange.start = value.start;
  	this.daterange.end = value.end;
  	this.daterange.label = value.label;
  }

}
