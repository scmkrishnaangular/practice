import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase} from '@angular/fire/database';
export class InvMaster
{
  cust_id;
  cust_name;
}

@Injectable({
  providedIn: 'root'
})
export class FbserService {

  invDbref : AngularFireList<InvMaster>;
  

  constructor(private dbconnect : AngularFireDatabase) {
      console.log("Database Connect" + dbconnect);
      this.invDbref = this.dbconnect.list("invoice_master");
  }
  getinvoices() {
    return this.invDbref;
  }
}
