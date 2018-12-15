import { Component, OnInit } from '@angular/core';
import { ImageUploadService } from './image-upload.service';

class FileSnippet {
	pending: boolean = false;
	status: string = 'INIT';

	constructor(public src: string, public file: File) {
	}	
}

@Component({
  selector: 'streambits-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent {

  selectedFile: FileSnippet;

  constructor(private imageService: ImageUploadService) { }

  private onSuccess() {
  	this.selectedFile.pending = false;
  	this.selectedFile.status = 'OK';
  }

  private onFilure() {
  	this.selectedFile.pending = false;
  	this.selectedFile.status = 'FAIL';
  }

  processFile(imageInput: any) {
  	const file: File = imageInput.files[0];
  	const reader = new FileReader();

  	debugger;
  	
  	reader.addEventListener('load', (event: any	) => {
  		this.selectedFile = new FileSnippet(event.target.result, file);

  		this.selectedFile.pending = true;

  		this.imageService.uploadImage(this.selectedFile.file).subscribe(
  			(imageUrl: string) => {
  				
  				this.onSuccess();
  			},
  			() => {
  				this.onFilure();
  			})

  	});

  	reader.readAsDataURL(file);
  }

}
