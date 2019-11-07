import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material';
import { MatButtonToggleModule} from '@angular/material'
const MaterialComponents=[
  MatButtonModule,
  MatButtonToggleModule
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
