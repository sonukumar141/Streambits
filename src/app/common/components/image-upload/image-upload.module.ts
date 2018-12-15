import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ImageUploadComponent } from './image-upload.component';

import { ImageUploadService } from './image-upload.service';

@NgModule({
	
	imports: [
		CommonModule
	],
	providers: [
		ImageUploadService
	],
	exports: [
		ImageUploadComponent
	],
	declarations: [
		ImageUploadComponent
	]
})

export class ImageUploadModule {}