import { Component, OnInit } from '@angular/core';
import { IUser } from '../../models/user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  superUser: IUser = {
    id: 0,
    name: 'Super',
    lastname: 'Usuario',
    email: "admin@admin.com",
    password: "123456"
    
  }
  constructor() { }
  ngOnInit(): void {
    
  }

}
