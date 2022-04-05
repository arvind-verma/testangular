import { Component, OnInit, TemplateRef, Renderer2, EventEmitter,ViewChild,ElementRef } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor() {
  }

  ngOnInit() {

  }

    full_name_test;
    email_test
    grid_row:any = [];
    saveData(){
      let grid = {
        "name":this.full_name_test,
        "email":this.email_test
      } 
      this.grid_row.push(grid);
    }

    editAction ="-1";
    editTest(id){
      this.editAction = id;
      if(typeof this.grid_row[id]!="undefined"){
        this.full_name_test = this.grid_row[id].name;
        this.email_test = this.grid_row[id].email;
      }
    }

    updateTest(){
      if(typeof this.grid_row[this.editAction]!="undefined"){
        this.grid_row[this.editAction].name =  this.full_name_test;
        this.grid_row[this.editAction].email = this.email_test ;
      }
    }
}
