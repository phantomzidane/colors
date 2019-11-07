import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public mydata:{};
  public state="color";
  public htmlFile:File;
  public cssFile: File;
  constructor(private data:DataService) { }

  ngOnInit() {
  
   this.data.data={
     "htmls":""
   }
  }
  
  uploadFile(event){
    this.htmlFile=event.target.files[0];
  }
  uplaodCss(event){
   this.cssFile=event.target.files[0]
  }
  load(){
    const readHtml= new FileReader();
    readHtml.onload = e =>{
      this.data.data["htmls"]=e.target.result
      console.log(this.data.data["htmls"])
      const readcss= new FileReader();
      readcss.onload = e =>{
          console.log(e)
          this.data.data["css"]=e.target.result 
      }
      readcss.readAsText(this.cssFile);
      
    }
    readHtml.readAsText(this.htmlFile);
    
    console.log(this.htmlFile)
    
  }
  getcolor(event){
    this.data.data["colors"]=event.target.style.backgroundColor
  }
  choose(){
    if(this.state=="color"){
      this.state="backgroundColor";
      this.data.data["state"]= this.state;
    }
    else if(this.state=="backgroundColor"){
      this.state="color";
      this.data.data["state"]= this.state;
    }
    
  }
}
