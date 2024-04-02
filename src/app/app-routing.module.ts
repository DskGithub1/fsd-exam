import { UserLoginComponent } from './user-login/user-login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationComponent } from './register-user/register-user.component';


const routes: Routes = [
  { path: 'user-registration', component: UserRegistrationComponent },
  { path: 'user', component: UserLoginComponent },
  { path: '', component: UserLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
