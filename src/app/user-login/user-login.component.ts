import { Component } from '@angular/core';
import { UserService } from './user.service'
import { Router } from '@angular/router';



@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  email: any;
  password: any;
  constructor (private userService: UserService, private router: Router) {  
  }

  login() {
    this.router.navigate(['user-registration']);
    this.userService.login(this.email, this.password)
      .subscribe(
        
        (        response: any) => {
          this.router.navigate(['user-registration']);
          console.log('Login successful:', response);
        },
        (        error: any) => {
          this.router.navigate(['user-registration']);
          console.error('Login failed:', error);
        }
      );
  }
}
