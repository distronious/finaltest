import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string='';
  password:string='';
  check()
  {
    if(this.username==null)
    {
      alert ("Required");
    }
    else if(this.password==null)
    {
      alert ("Required");
    }
    else{
      alert ("success!");
    }
    if(this.password != "[A-Za-z0-9]")
    {
      alert ("letters and numbers are accepted");
    }
    else if(this.username != "[A-Za-z0-9]")
    {
      alert ("letters and numbers are accepted");
    }
    else
    {
      alert ("success!!");
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

