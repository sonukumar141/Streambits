import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class HelperService {
	
	public getRangeOfDates(startAt, endAt) {
		const tempDates = [];
		const mEndAt = moment(endAt);
		let mStartAt = moment(startAt);

		while(mStartAt < mEndAt) {
			tempDates.push(mStartAt.format('DD-MM-YYYY'));
			mStartAt = mStartAt.add(1, 'day');
		}

		tempDates.push(moment(startAt).format('DD-MM-YYYY'));
		tempDates.push(mEndAt.format('DD-MM-YYYY'));

		return tempDates;
	}
}