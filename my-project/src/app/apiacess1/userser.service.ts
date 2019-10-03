import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserserService {

  constructor( private httpclient: HttpClient) {
    
  }
  getphots()
  {
   return this.httpclient.get("https://jsonplaceholder.typicode.com/photos");
  }
}
