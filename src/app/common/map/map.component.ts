import { Component, OnInit, Input } from '@angular/core';
import { MapService } from './map.service';

@Component({
  selector: 'streambits-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Input() location: string;

  lat: number;
  lng: number;

  constructor(private mapService: MapService) { }

  ngOnInit() {
  }

  mapReadyHandler(){
  	this.mapService.getGeoLocation(this.location).subscribe( (coordinates) => {
  		this.lat = coordinates.lat;
  		this.lng = coordinates.lng;
  	});
  }

}
