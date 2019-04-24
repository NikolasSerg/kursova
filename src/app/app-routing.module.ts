import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AuthenticatedComponent } from './components/authenticated/authenticated.component';
import { SignInComponent } from './components/users/sign-in/sign-in.component';
import { RegistrationComponent } from './components/users/registration/registration.component';
import { AuthGuardService } from './services/auth-guard.service';
import { LaptopComponent } from './components/laptop/laptop.component';


const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'authenticated', component: AuthenticatedComponent, canActivate: [AuthGuardService], children: 
    [
      {
        path: '', canActivateChild: [AuthGuardService], children: [
          { path: 'home', component: HomeComponent },
          { path: 'laptop', component: LaptopComponent },
          { path: 'settings', component: SettingsComponent }
        ]
      }
    ]
},
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: '**', component: SignInComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
