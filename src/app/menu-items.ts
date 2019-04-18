import {MenuItem} from './services/menu.service';

export const AppMenuItems: Array<MenuItem> = [
  {
    text: 'PC',
    icon: './assets/img/icon_CPU.png',
    route: '/authenticated/pc',
    submenu: null
  },
  {
    text: 'Laptop',
    icon: './assets/img/icon_Laptop.png',
    route: '/authenticated/laptop',
    submenu: null
  }
  // ,
  // {
  //   text: 'Mobile',
  //   icon: './assets/img/icon_Mobile.png',
  //   route: '/mobile',
  //   submenu: null
  // },
  // {
  //   text: 'Mouse',
  //   icon: './assets/img/icon_Mouse.png',
  //   route: '/mouse',
  //   submenu: null
  // },
  // {
  //   text: 'Camera',
  //   icon: './assets/img/icon_Camera.png',
  //   route: '/camera',
  //   submenu: null
  // }
];
