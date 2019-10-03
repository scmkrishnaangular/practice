import { Component, OnInit } from '@angular/core';
import { FbserService } from './fbser.service';
@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {

  invinfo;
  constructor(private fbservice : FbserService) {

   }

  ngOnInit() {
    let i = 0;
    console.log("1. Loading / fetching data for inv");
    this.fbservice.getinvoices().snapshotChanges().subscribe(resultInfo =>{
      console.log("2. Data loading : " + resultInfo);
      this.invinfo = resultInfo.map(currentInvoice => {

        console.log("Current Invoice item : " + currentInvoice + " : index value " + i++);
        console.log("Current Invoice key : " + currentInvoice.key);
        console.log("Current Invoice payload : " + currentInvoice.payload.val());
        //console.log("Current Invoice payload details : " + ...currentInvoice.payload.val());
      
        return {
           key: currentInvoice.key,
           ...currentInvoice.payload.val()
        }
      });
    });
  }
}