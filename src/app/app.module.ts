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
    PcComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ConfigsService, ScreenService, MenuService],
  bootstrap: [AppComponent]
})
export class AppModule {}
