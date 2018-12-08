import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Booking } from '../../../booking/shared/booking.model';

@Component({
  selector: 'streambits-manage-job-booking',
  templateUrl: './manage-job-booking.component.html',
  styleUrls: ['./manage-job-booking.component.scss']
})
export class ManageJobBookingComponent implements OnInit {

  @Input() bookings: Booking[];

  constructor(public modalService: NgbModal) { }

  ngOnInit() {
  }

}
