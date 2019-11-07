import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',]
})
export class AppComponent {
  
  // ngAfterViewInit() {
  //   let ele= document.getElementsByTagName('iframe')[0];
  //   let htm= ele.contentDocument.getElementsByTagName('html')[0].outerHTML
  //   let fin = ele.contentDocument.querySelector('html').innerHTML
    
  //   console.log(htm,fin)
  // }
  title = 'color';

  constructor(){}
   
  ngOnInit(){
   
  }
  // onLoad(){
  //   let ele= document.getElementsByTagName('iframe')[0];
  //   let htm= ele.contentWindow
  //   let fin = ele.contentDocument
    
  //   console.log(htm)
  // }
  
  // frame(event){
  //   let ele= document.getElementsByTagName('iframe')[0];
  //   let htm= ele.contentWindow
  //   let fin = ele.contentDocument
    
  //   console.log(htm)
  // }
  

}
