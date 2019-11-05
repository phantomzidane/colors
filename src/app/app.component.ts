import { Component } from '@angular/core';
import {Colors} from "./data.services";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'color';
  public data;
  constructor(private resu:Colors){}
   
  ngOnInit(){
    this.resu.getColors()
    .subscribe(resu => this.data = resu );
  
  }
}
