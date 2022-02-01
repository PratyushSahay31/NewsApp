import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private http:HttpClient) { }
  url="https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=081d190d4d0e41edb7afaac1a3b5ee0b";
  techUrl="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=081d190d4d0e41edb7afaac1a3b5ee0b";
  businessUrl="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=081d190d4d0e41edb7afaac1a3b5ee0b";
  healthUrl="https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=081d190d4d0e41edb7afaac1a3b5ee0b"

  topHeading(){

    return this.http.get(this.url);
  }
 
  techApi(){
    return this.http.get(this.techUrl)
    
  }

  businessApi(){
    return this.http.get(this.businessUrl);
  }

  healthApi(){
    return this.http.get(this.healthUrl);
  }
}
