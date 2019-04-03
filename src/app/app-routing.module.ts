import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PcComponent } from './components/pc/pc.component';
import { HomeComponent } from './components/home/home.component';
import { SettingsComponent } from './components/settings/settings.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'pc', component: PcComponent},
  {path: 'settings', component: SettingsComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 