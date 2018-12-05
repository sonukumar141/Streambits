import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Booking } from '../../../booking/shared/booking.model';
import { Job } from '../../shared/job.model';
import { HelperService } from '../../../common/service/helper.service';
import { BookingService } from '../../../booking/shared/booking.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DaterangePickerComponent } from 'ng2-daterangepicker';
import * as moment from 'moment';

@Component({
  selector: 'streambits-job-detail-booking',
  templateUrl: './job-detail-booking.component.html',
  styleUrls: ['./job-detail-booking.component.scss']
})
export class JobDetailBookingComponent implements OnInit {

  @Input() job: Job;
  @ViewChild(DaterangePickerComponent)
  	private picker: DaterangePickerComponent;
 	
  newBooking: Booking;
  modalRef: any;

  daterange: any = {};
  bookedOutDates: any[] = [];
  errors: any[] = [];

  public options: any = {
  	locale: {format: Booking.DATE_FORMAT},
  	alwaysShowCalendars: false,
  	opens: 'left',
  	autoUpdateInput: false,
  	isInvalidDate: this.checkForInvalidDates.bind(this)
  };

  constructor(private helper: HelperService, 
              private modalService: NgbModal,
              private bookingService: BookingService) { }

  ngOnInit() {
  		this.newBooking = new Booking();
		this.getBookedOutDates();
  }

  private checkForInvalidDates(date) {
  	return this.bookedOutDates.includes(this.helper.formatBookingDate(date)) || date.diff(moment(), 'days') < 0;
  }

  private getBookedOutDates() {
  	const bookings: Booking[] = this.job.bookings;

  	if(bookings && bookings.length > 0) {
  		bookings.forEach((booking: Booking) => {
  			const dateRange =  this.helper.getBookingRangeOfDates(booking.startAt, booking.endAt);
  			this.bookedOutDates.push(...dateRange);
  		}); 
  	}
  }

  private addNewBookedOutDates(bookingData: any) {
  	const dateRange =  this.helper.getBookingRangeOfDates(bookingData.startAt, bookingData.endAt);
  	this.bookedOutDates.push(...dateRange);
  }


  private resetDatePicker() {
  	this.picker.datePicker.setStartDate(moment());
  	this.picker.datePicker.setEndDate(moment());
  	this.picker.datePicker.element.val('');
  }

  openConfirmModal(content) {
  	this.errors = [];
  	this.modalRef = this.modalService.open(content);
  }

  createBooking() {
  	console.log(this.newBooking);

  	this.newBooking.job = this.job;
  	this.bookingService.createBooking(this.newBooking).subscribe(
  	(bookingData: any) => {
  		this.addNewBookedOutDates(bookingData);
  		this.newBooking = new Booking();
  		this.modalRef.close();
  		this.resetDatePicker();
  	},
  	(errorResponse: any) => {
  		this.errors = errorResponse.error.errors;
  	})
  }

  public selectedDate(value: any, datepicker?: any) {

  	this.options.autoUpdateInput = true;
  	this.newBooking.startAt = this.helper.formatBookingDate(value.start);
  	this.newBooking.endAt = this.helper.formatBookingDate(value.end);
  	this.newBooking.days = -(value.start.diff(value.end, 'days'));
  	this.newBooking.totalPrice = this.newBooking.days * this.job.price;
  }

}
