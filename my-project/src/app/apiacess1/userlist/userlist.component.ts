import { Component, OnInit } from '@angular/core'; 
  import { UserserService} from '../userser.service';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(private userservice: UserserService) { }
  photoslist;
  ngOnInit() {
    
  this.userservice.getphots().subscribe(data=>{this.photoslist=data;})
  }

}
