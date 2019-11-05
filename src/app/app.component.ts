import { Component } from '@angular/core';
import {Colors} from "./data.services";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'color';
  public data;
  public colors;
  constructor(private resu:Colors){}
   
  ngOnInit(){
    this.resu.getColors()
    .subscribe(resu => this.data = resu );
  }
  change(id){
    this.colors = {
      "c1":this.data[id].c1,
      "c2":this.data[id].c2,
      "c3":this.data[id].c3,
      "c4":this.data[id].c4,
    }
  }
}
