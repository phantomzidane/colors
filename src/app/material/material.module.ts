import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material';
import { MatButtonToggleModule} from '@angular/material';
import { MatIconModule} from '@angular/material';
import { MatBadgeModule} from '@angular/material';
const MaterialComponents=[
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule
]
@NgModule({
  
  imports: [
    MaterialComponents
  ],
  exports:[
    MaterialComponents
  ]
})
export class MaterialModule { }
