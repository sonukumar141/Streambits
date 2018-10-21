import { NgModule } from '@angular/core';
import { MapComponent } from './map.component';
import { AgmCoreModule } from '@agm/core';
import { CamelizePipe } from 'ngx-pipes';

import { MapService } from './map.service';

@NgModule({
  declarations: [
    MapComponent
  ],
  exports: [
    MapComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDKhMuYssF4ls3F2idN1-NhKOf9Ov0pPl4'
    })
  ],
  providers: [
    MapService,
    CamelizePipe
  ]
})
export class MapModule { }