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
  public state="color";
  public url="./assets"
  public file:File;
  public page=`
  <head>
  <meta charset="utf-8">
  <title>Color</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  
  <link rel="stylesheet" href="assets/my.css">
</head>
  <nav class="navbar">
  <div class="navbar-left">
    <a class="navbar-item" href="http://bulma.io">
      <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo">
    </a>
  </div>

  <div class="navbar-center">
    <a class="navbar-item">
      <span class="icon">
        <i class="fa fa-github"></i>
      </span>
    </a>
    <a class="nav-item">
      <span class="icon">
        <i class="fa fa-twitter"></i>
      </span>
    </a>
  </div>

  <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
  <!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->
  <span class="navbar-toggle">
    <span></span>
    <span></span>
    <span></span>
  </span>

  <!-- This "nav-menu" is hidden on mobile -->
  <!-- Add the modifier "is-active" to display it on mobile -->
  <div class="navbar-right navbar-menu">
    <a class="navbar-item">
      Home
    </a>
    <a class="navbar-item">
      Documentation
    </a>
    <a class="navbar-item">
      Blog
    </a>

    <span class="navbar-item">
      <a class="button" >
        <span class="icon">
          <i class="fa fa-twitter"></i>
        </span>
        <span>Tweet</span>
      </a>
      <a class="button is-primary">
        <span class="icon">
          <i class="fa fa-download"></i>
        </span>
        <span>Download</span>
      </a>
    </span>
  </div>
</nav>`;
  constructor(private resu:Colors){}
   
  ngOnInit(){
    this.resu.getColors()
    .subscribe(resu => this.data = resu );
    document.querySelector('#ok').innerHTML=this.page;
  }
  change(id){
    this.colors = {
      "c1":this.data[id].c1,
      "c2":this.data[id].c2,
      "c3":this.data[id].c3,
      "c4":this.data[id].c4,
    }
  }
  test(event){
    event.target.href="#";
    if(this.state=="color"){
      
      event.target.style.color="red";
    }
    else{
      event.target.href="#";
      event.target.style.backgroundColor="blue";
    }
    event.target.classList.add("how")
    console.log(event)
  }
  col(){
    if(this.state=="color"){
      this.state="background-color";
    }
    else{
      this.state="color";
    }
  }
  onFileUpload(event){
    this.file=event.target.files[0];
    console.log(this.file)
    console.log(event)
  }
  readTextFile(){
    // const fd= new FormData();
    // fd.append("index",this.file, this.file.name)
    // this.http.post(this.url,fd)
    // .subscribe(res=>{
    //   console.log(res)
    // })
    let redfile= new FileReader();
    redfile.onload = (e) =>{
      this.page=e.target.result.toString()
      document.querySelector('#ok').innerHTML=this.page;
    }
    redfile.readAsText(this.file);
  }

}
