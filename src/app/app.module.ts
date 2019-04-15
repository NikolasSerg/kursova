import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { PcComponent } from './components/pc/pc.component';
import { AuthenticatedComponent } from './components/authenticated/authenticated.component';
import { SignInComponent } from './components/users/sign-in/sign-in.component';
import { RegistrationComponent } from './components/users/registration/registration.component';
import {FormsModule} from '@angular/forms';
import { UserService } from './services/user.service';
import { UserApi } from './components/users/users';

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
    PcComponent,
    AuthenticatedComponent,
    SignInComponent,
    RegistrationComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [ConfigsService, ScreenService, MenuService, UserService, {
    provide: UserApi, useExisting: UserService
  }],
  bootstrap: [AppComponent]
})
export class AppModule {}
