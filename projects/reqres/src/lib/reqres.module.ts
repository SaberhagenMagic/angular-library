import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
// Components
import { ReqresComponent } from './reqres.component';
import { UsersComponent } from './users/users.component';



@NgModule({
  declarations: [ReqresComponent, UsersComponent],
  imports: [
    CommonModule, HttpClientModule
  ],
  exports: [UsersComponent]
})
export class ReqresModule { }
