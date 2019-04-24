import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './structure/header/header.component';
import { BodyComponent } from './structure/body/body.component';
import { FooterComponent } from './structure/footer/footer.component';
import { ContentComponent } from './structure/content/content.component';
import { ConfigsService } from './services/configs.service';
import { IconBarComponent } from './components/icon-bar/icon-bar.component';
import { ScreenService } from './services/screen.service';
import { MenuService } from './services/menu.service';
import { MenuComponent } from './components/menu/menu.component';
import { MenuItemComponent } from './components/menu/menu-item/menu-item.component';
import { HomeComponent } from './components/home/home.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AuthenticatedComponent } from './components/authenticated/authenticated.component';
import { SignInComponent } from './components/users/sign-in/sign-in.component';
import { RegistrationComponent } from './components/users/registration/registration.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserService } from './services/user.service';
import { UserApi } from './components/users/users';
import { AuthGuardService } from './services/auth-guard.service';
import { LaptopComponent } from './components/laptop/laptop.component';
import { PopupMenuComponent } from './components/menu/popup-menu/popup-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    ContentComponent,
    IconBarComponent,
    MenuComponent,
    MenuItemComponent,
    HomeComponent,
    SettingsComponent,
    AuthenticatedComponent,
    SignInComponent,
    RegistrationComponent,
    LaptopComponent,
    PopupMenuComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, NgbModule, ReactiveFormsModule],
  providers: [ConfigsService, ScreenService, MenuService, UserService, {
    provide: UserApi, useExisting: UserService
  }, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
