import { Component, OnInit } from '@angular/core';
import { DepartSerService } from 'src/app/_services/depart-ser.service';


@Component({
  selector: 'app-depart-details',
  templateUrl: './depart-details.component.html',
  styleUrls: ['./depart-details.component.css']
})
export class DepartDetailsComponent implements OnInit {


  hideDetails(){
    this.departserve.detailsFlag = false;
  }

 
  constructor(public departserve:DepartSerService) {
    
   }

  ngOnInit(): void {
    
  }

}
