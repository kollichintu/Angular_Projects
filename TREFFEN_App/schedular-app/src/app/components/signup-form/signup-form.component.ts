import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/users.service'

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent  implements OnInit {

  addUserRequest:User = {
    id: 0,
    First_name: '',
    Last_name: '',
    Email: '',
    Password: '',
  }

  constructor(private userService: UserService, private router: Router) {

  }
  ngOnInit(): void {
  }

  addUser(){
    this.userService.add_user(this.addUserRequest)
    .subscribe({
      next: ( user) => {
        this.router.navigate([''])
      }
    })

  }

}
