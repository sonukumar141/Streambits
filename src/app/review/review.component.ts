import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Review } from './shared/review.model';

@Component({
  selector: 'streambits-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent {

    modalRef: any;

    review: Review = {text: '', rating: 3};

    constructor(private modalService: NgbModal){}
    openReviewModal(content) {
        this.modalRef = this.modalService.open(content);
    }

    confirmReview(){
        debugger;
        console.log(this.review);
    }
}
