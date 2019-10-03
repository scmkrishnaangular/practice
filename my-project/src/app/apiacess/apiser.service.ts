import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserService {

  constructor( private httpclient:HttpClient) { 

  }
  getcomments()
  {
   return this.httpclient.get("https://jsonplaceholder.typicode.com/comments");
  }
}
