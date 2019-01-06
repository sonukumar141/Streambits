import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ReviewComponent } from './review.component';

@NgModule({
    declarations: [
        ReviewComponent
    ],
    exports: [
        ReviewComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [

    ]
})

export class ReviewModule {}