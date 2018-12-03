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
		this.getBookedOutDates();
  }

  private checkForInvalidDates(date) {
  	debugger;
  	return this.bookedOutDates.includes(date.format(Booking.DATE_FORMAT)) || date.diff(moment(), 'days') < 0;
  }

  private getBookedOutDates() {
  	if(this.bookings && this.bookings.length > 0) {
  		this.bookings.forEach((booking: Booking) => {
  			const dateRange =  this.helper.getRangeOfDates(booking.startAt, booking.endAt);
  			this.bookedOutDates.push(...dateRange);
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
