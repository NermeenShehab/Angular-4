import { Component, OnInit } from '@angular/core';
import { Depart } from 'src/app/models/depart';
import { DepartSerService } from 'src/app/_services/depart-ser.service';

@Component({
  selector: 'app-depart-delete',
  templateUrl: './depart-delete.component.html',
  styleUrls: ['./depart-delete.component.css']
})
export class DepartDeleteComponent implements OnInit {
  
  
  

 
 

  constructor(public departserve:DepartSerService ) { }

  ngOnInit(): void {
    
  }

}
