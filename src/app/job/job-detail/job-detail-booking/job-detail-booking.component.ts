import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'streambits-job-detail-booking',
  templateUrl: './job-detail-booking.component.html',
  styleUrls: ['./job-detail-booking.component.scss']
})
export class JobDetailBookingComponent implements OnInit {

  @Input() price: number;

  daterange: any = {};

  constructor() { }

  ngOnInit() {
  }

  public options: any = {
  	locale: {format: 'DD-MM-YYYY'},
  	alwaysShowCalendars: false,
  	opens: 'left'
  };

  public selectedDate(value: any, datepicker?: any) {

  	console.log(value);

  	datepicker.start = value.start;
  	datepicker.end = value.end;

  	this.daterange.start = value.start;
  	this.daterange.end = value.end;
  	this.daterange.label = value.label;
  }

}
