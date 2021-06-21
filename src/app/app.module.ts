import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DepartListComponent } from './department/depart-list/depart-list.component';
import { DepartAddComponent } from './department/depart-add/depart-add.component';
import { FormsModule } from '@angular/forms';
import { DepartDeleteComponent } from './department/depart-delete/depart-delete.component';
import { DepartDetailsComponent } from './department/depart-details/depart-details.component';
import { DepartEditComponent } from './department/depart-edit/depart-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartListComponent,
    DepartAddComponent,
    DepartDeleteComponent,
    DepartDetailsComponent,
    DepartEditComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
