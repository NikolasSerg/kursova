import { Injectable } from "@angular/core";


export interface Icons {
  imageFile: string;
  url: string;
  alt: string;
}

export interface ConfigUserSettings {
  showUserControls?: boolean;
  socialIcons?: Array<Icons>;
}



@Injectable({
  providedIn: "root"
})
export class ConfigsService {
  showUserControls: boolean = true;
  socialIcons = new Array<Icons>();

  configure(settings: ConfigUserSettings): void {
    Object.assign(this, settings);
  }
  constructor() {}
}
