import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

//Newsap url
newsApiUrl ="https://newsapi.org/v2/top-headlines?country=in&apiKey=4d20a9d8b56b4847ab183ae0b641ab9c";
//TechNews url

techApiurl ="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=4d20a9d8b56b4847ab183ae0b641ab9c";
//Business url
businessApiurl ="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=4d20a9d8b56b4847ab183ae0b641ab9c";

//Sorts url

sportsApiurl ="https://newsapi.org/v2/top-headlines?country=in&category=Sports&apiKey=4d20a9d8b56b4847ab183ae0b641ab9c";
//topheading()
topHeading():Observable<any>{
  return this._http.get(this.newsApiUrl);

}

techNews():Observable<any>{
  return this._http.get(this.techApiurl);
}

businessNews():Observable<any>{
  return this._http.get(this.businessApiurl);
}

sportsNews():Observable<any>{
  return this._http.get(this.sportsApiurl);
}
}
