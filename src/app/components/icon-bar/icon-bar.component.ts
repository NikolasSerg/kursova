// import { Component, OnInit } from '@angular/core';
// import { ConfigsService } from './../../services/configs.service';
// import { UserApi } from '../users/users';

// @Component({
//   selector: "app-icon-bar",
//   templateUrl: "./icon-bar.component.html",
//   styleUrls: ["./icon-bar.component.css"]
// })
// export class IconBarComponent implements OnInit {
//   showloader: boolean;

//   constructor(private configsService: ConfigsService, private userApi: UserApi) {}

//   ngOnInit() {
//     this.showloader = false;
//   }

//   signOut() {
//     this.showloader = true;
//     console.log('Sign Out');
//     console.log(this.showloader, ' - showloader');
//     setTimeout( () => {this.userApi.signOut()}, 2000 );
//   }
// }


import { Component, OnInit, Input } from '@angular/core';
import { ConfigsService } from './../../services/configs.service';
import { UserApi } from '../users/users';

@Component({
  selector: 'app-icon-bar',
  templateUrl: './icon-bar.component.html',
  styleUrls: ['./icon-bar.component.css']
})
export class IconBarComponent implements OnInit {
  showLoader: boolean;
  @Input() showIcons;
  constructor(private configsService: ConfigsService, private userApi: UserApi) { }

  ngOnInit() {
    this.showLoader = false;
  }
  signOut() {
    this.showLoader = true;
    setTimeout(() => { this.userApi.signOut(); }, 2000);
    console.log('Sign out');
  }
}
