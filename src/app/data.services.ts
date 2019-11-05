import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Data} from "../shared/data.interface"

@Injectable({
    providedIn: "root",
})
export class Colors{
    url="assets/colors.json";
    resulst:[];
    constructor(private http: HttpClient, private data:Data){
    }
    getColors():Observable<Data[]>{
        return this.http.get<Data[]>(this.url);
    }
}