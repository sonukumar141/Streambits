import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'streambits-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent {

    modalRef: any;

    constructor(private modalService: NgbModal){}
    openReviewModal(content) {
        this.modalRef = this.modalService.open(content);
    }

    confirmReview(){
        
    }
}
