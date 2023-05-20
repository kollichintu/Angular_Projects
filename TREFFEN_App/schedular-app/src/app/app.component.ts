import { Component, OnInit } from '@angular/core';
import { User } from './models/user.model';
import { UserService } from './services/users.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'schedular-app';

  users: User[] = [];
  db_users: string[] = [];

  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.userService.get_AllUsers()
    .subscribe({
     next: ( users) => {
      this.users = users;
     },
     error: ( response ) => {
       console.log(response);
     }
    })
  }



}


// this.users = users;
