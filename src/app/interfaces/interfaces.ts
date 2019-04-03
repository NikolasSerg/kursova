export interface Icons {
  imageFile: string;
  url: string;
  alt: string;
}

export interface ConfigUserSettings {
  showUserControls?: boolean;
  socialIcons?: Array<Icons>;
}
