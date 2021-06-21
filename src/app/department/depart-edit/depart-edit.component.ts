import { Component, OnInit } from '@angular/core';

import { DepartSerService } from 'src/app/_services/depart-ser.service';

@Component({
  selector: 'app-depart-edit',
  templateUrl: './depart-edit.component.html',
  styleUrls: ['./depart-edit.component.css']
})
export class DepartEditComponent implements OnInit {






  constructor(public dep:DepartSerService ){ }

  ngOnInit(): void {
  }

}
