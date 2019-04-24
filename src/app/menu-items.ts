import { MenuItem } from './services/menu.service';
export const AppMenuItems: Array<MenuItem> = [
  {
    text: 'Компьютери',
    icon: '/assets/img/icon_PC.png',
    route: "/authenticated/pc",
    submenu:
      [
        {
          text: 'ТОП 5',
          icon: 'src/imgs/car.png',
          route: null,
          submenu: [
            {
              text: 'Assus',
              icon: null,
              route: null,
              submenu: null
            },
            {
              text: 'Samsung',
              icon: null,
              route: null,
              submenu: null
            },
            {
              text: 'Lenovo',
              icon: null,
              route: null,
              submenu: null
            },
            {
              text: 'Acer',
              icon: null,
              route: null,
              submenu: null
            },
          ]
        },
        {
          text: 'Price top',
          icon: null,
          route: null,
          submenu: null
        }
      ]
  },
  {
    text: 'Ноутбуки',
    icon: '/assets/img/icon_Laptop.png',
    route: "/authenticated/laptop",
    submenu: [
      {
        text: 'ТОП',
        icon: null,
        route: null,
        submenu: null
      },
      {
        text: 'Ноутбук',
        icon: null,
        route: null,
        submenu: null
      }
    ]
  },
  {
    text: 'Підпір ПК',
    icon: '/assets/img/settings.png',
    route: null,
    submenu: [
      {
        text: 'Стаціонарний',
        icon: '/assets/img/icon_PC.png',
        route: '/authenticated/pc-main',
        submenu: null
      },
      {
        text: 'Ноутбук',
        icon: '/assets/img/icon_Laptop.png',
        route: '/authenticated/settings/laptop',
        submenu: null
      }
    ]
  },
  {
    text: 'Home',
    icon: '/assets/img/icon_Home.png',
    route: '/authenticated/home',
    submenu: null
  },
];
