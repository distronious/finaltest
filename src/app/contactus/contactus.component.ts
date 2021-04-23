import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  name:string='';
  email:string='';
  message:string='';
  check()
  {
    if(this.name===null)
    {
      alert ("Required");
    }
    else if(this.email===null)
    {
      alert ("Required");
    }
    else if(this.message===null){
      alert ("Required");
    }
    else{
alert ("success!");
    }
  }
  constructor() { }

  ngOnInit(): void {
  }
  OnSubmit(name:NgForm)
  {
      if(name.valid)
      {
        this.check();
      }
    }
}
