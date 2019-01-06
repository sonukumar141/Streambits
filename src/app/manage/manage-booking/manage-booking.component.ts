import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../booking/shared/booking.service';
import { Booking } from '../../booking/shared/booking.model';
import { Review } from '../../review/shared/review.model';

import * as moment from 'moment';

@Component({
  selector: 'streambits-manage-booking',
  templateUrl: './manage-booking.component.html',
  styleUrls: ['./manage-booking.component.scss']
})
export class ManageBookingComponent implements OnInit {

  bookings: Booking[];

  constructor(private bookingService: BookingService) { }

  ngOnInit() {
  	this.bookingService.getUserBookings().subscribe(
  	(bookings: Booking[]) => {
  		this.bookings = bookings;
  	},
  	() => {

  	})
  }

  isExpired(endAtText: string) {
    const timeNow = moment();
    const endAt = moment(endAtText);

    return endAt.isBefore(timeNow);
  }

  reviewPublished(bookingIndex: number, review: Review){
    this.bookings[bookingIndex]['review'] = review;
  }

}
