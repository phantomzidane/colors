import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
private _data ={}
  constructor() { }
  get data(): {}{
    return this._data;
  } 
  set data(value: {}){
    this._data=value;
  }
  
}
