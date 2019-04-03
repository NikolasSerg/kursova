import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: "root"
})
export class ScreenService {
  // private resizeSource = new Subject<null>();
  // public resize$ = this.resizeSource.asObservable();
  largePixels = 780;
  screenWidth: number;
  screenHeight: number;

  constructor() {
    try{
      this.screenWidth = window.innerWidth;
      this.screenHeight = window.innerHeight;
      window.addEventListener('resize', (event) => {
        this.onResize(event)
      })
    }
    catch(e) {
      console.log(e)
    }
  }

  onResize(event: Event): void {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    // this.resizeSource.next();
  }

  isLarge(): boolean {
     return this.screenWidth >= this.largePixels;
  }
}
