import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PcComponent } from './components/pc/pc.component';
import { HomeComponent } from './components/home/home.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AuthenticatedComponent } from './components/authenticated/authenticated.component';
import { SignInComponent } from './components/users/sign-in/sign-in.component';
import { RegistrationComponent } from './components/users/registration/registration.component';

const child: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pc', component: PcComponent },
  { path: 'settings', component: SettingsComponent }
]
const routes: Routes = [
  {path: 'sign-in', component: SignInComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'authenticated', component: AuthenticatedComponent, children: child},
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: '**', component: SignInComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 