import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  private csss:string;
  private coloors;
  public realPage=``;
  public file:File;
  public page = `
  <p>testing</p>
  `
  public htmldata:string;
  constructor(private data:DataService) { }
  
  ngOnInit() {
   
  }
  load(){
    this.page= this.data.data["htmls"];
    this.csss= this.data.data['css'];
    document.querySelector("#output").innerHTML=`<style>${this.csss} </style> ${this.page}`;

  }
  
  action(event){
    this.coloors=this.data.data["colors"]
    if(event.target=="<span>"){
      event.target.href="#";
    }
    else{
      console.log(event.target)
      if(this.data.data["state"]=="color"){
        event.target.style.color=this.coloors;
      }
      else if(this.data.data["state"]=="backgroundColor"){
        event.target.style.backgroundColor=this.coloors;
      }
     
    }
    
  }
  daata(){
   this.realPage= document.querySelector("#output").innerHTML;
  this.file = new File([this.realPage], "indeex.html", {
    type: "text/plain",
  });
   
  }
  donw(event){
    
     console.log(this.file)
      event.target.href = this.file
      event.target.download = "index.html";
    
  }
}
