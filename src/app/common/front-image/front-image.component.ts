import { Component } from '@angular/core';
import { AuthService } from '../../auth/shared/auth.service';

@Component({
	selector: "streambits-front-image",
	templateUrl: "./front-image.component.html",
	styleUrls: ["./front-image.component.scss"]
})

export class FrontImageComponent{

	constructor(public auth: AuthService){}
	
}