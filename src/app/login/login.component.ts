import { Component, OnInit } from '@angular/core';
import {userInfo} from '../classes/userInfo';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: userInfo={
    username: "Temp",
    password: "Temp"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
