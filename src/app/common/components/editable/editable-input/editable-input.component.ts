import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'streambits-editable-input',
  templateUrl: './editable-input.component.html',
  styleUrls: ['./editable-input.component.scss']
})
export class EditableInputComponent implements OnInit {

  @Input() entity: any;

  @Input() field: string;

  @Input() className: string;

  @Output() entityUpdated = new EventEmitter();

  isActiveInput: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  updateEntity() {
  	debugger;
  	this.entityUpdated.emit('Some Value');
  }

}
