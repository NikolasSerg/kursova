import { Component, OnInit } from '@angular/core';
import { ConfigsService } from './../../services/configs.service';

@Component({
  selector: "app-icon-bar",
  templateUrl: "./icon-bar.component.html",
  styleUrls: ["./icon-bar.component.css"]
})
export class IconBarComponent implements OnInit {
  showloader: boolean;

  constructor(private configsService: ConfigsService) {}

  ngOnInit() {}

  signOut() {
    console.log('Sign Out');
  }
}
