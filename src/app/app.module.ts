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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserService } from './services/user.service';
import { UserApi } from './components/users/users';
import { AuthGuardService } from './services/auth-guard.service';
import { LaptopComponent } from './components/laptop/laptop.component';
import { DataService } from './services/data.service';
import { PcMainComponent } from './components/pc/pc-main/pc-main.component';
import { PcDetailComponent } from './components/pc/pc-detail/pc-detail.component';
import { PcListComponent } from './components/pc/pc-list/pc-list.component';
import { PopupMenuComponent } from './components/menu/popup-menu/popup-menu.component';
import { DynamicFieldComponent } from './components/dynamicForm/dynamic-field/dynamic-field.component';
import { DynamicFormComponent } from './components/dynamicForm/dynamic-form/dynamic-form.component';
import { PanelComponent } from './components/panel/panel.component';

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
    RegistrationComponent,
    LaptopComponent,
    PcMainComponent,
    PcDetailComponent,
    PcListComponent,
    PopupMenuComponent,
    DynamicFieldComponent,
    DynamicFormComponent,
    PanelComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [ConfigsService, ScreenService, MenuService, UserService, {
    provide: UserApi, useExisting: UserService
  }, AuthGuardService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
