import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class UserRegistrationComponent {
  userData = {
    fullname: '', 
    userName: '',
    email: '',
    phoneNumber: '',
    password: ''
  };

  constructor(private http: HttpClient, private router: Router) { }

  registerUser() {
    const url = 'http://localhost:8080/user';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    this.http.post(url, this.userData, { headers }).subscribe(
      (response) => {
        this.router.navigate(['user']);
        console.log('User registration successful!', response);
      },
      (error) => {
        this.router.navigate(['user']);
        console.error('Error occurred while registering user:', error);
      }
    );
  }
}
