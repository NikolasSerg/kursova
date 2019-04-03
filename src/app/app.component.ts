import { Component } from '@angular/core';
import { ConfigsService } from './services/configs.service';
import { ConfigUserSettings } from './interfaces/interfaces';
import {MenuService} from './services/menu.service';
import {AppMenuItems} from './menu-items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private configsService: ConfigsService, private menuService: MenuService) {
    const config: ConfigUserSettings = {
      socialIcons: [
        {
          imageFile: './assets/img/socialIkons-Facebook.png',
          alt: 'Facebook',
          url: 'https://www.facebook.com/'
        },

        {
          imageFile: './assets/img/socialIkons-GooglePlus.png',
          alt: 'GooglePlus',
          url: 'https://www.google.com/'
        },
        {
          imageFile: './assets/img/socialIkons-Instagram.png',
          alt: 'Instagram',
          url: 'https://www.instagram.com/'
        },
        {
          imageFile: './assets/img/socialIkons-Twitter.png',
          alt: 'Twitter',
          url: 'https://www.twitter.com/'
        }
      ],
      showUserControls: false
    };
    configsService.configure(config);
    menuService.items = AppMenuItems;
  }
  title = 'kursova';
}
