import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { PcInterface } from './pc-interface';
import { Observable, of, throwError } from 'rxjs';
import { delay, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private PcCollection: Array<PcInterface> = [
    { id: 1, name: 'Asus', model: 'x', price: 14500 },
    { id: 2, name: 'Aser', model: 'a', price: 15500 },
    { id: 3, name: 'Samsung', model: 's', price: 13500 },
    { id: 4, name: 'Lg', model: 'l', price: 16500 },
    { id: 5, name: 'Lenovo', model: 'l', price: 12500 },

  ]

  constructor(private userService: UserService) { }

  getPC(): Observable<PcInterface[]> {
    return of(this.PcCollection);
  }
  getPcItem(id: number): Observable<PcInterface> {
    const pc = this.PcCollection.find(item => item.id === id);
    return of(pc);
  }
  deletePc(id: number): Observable<any> {
    return of({}).pipe(delay(2000), map(() => this.PcCollection.splice(this.PcCollection.findIndex(item => item.id === id), 1)));
  }
  createPc(newPc: PcInterface): Observable<any> {
    let id = 0;
    this.PcCollection.forEach(item => {
      if (item.id >= id) {
        id = item.id + 1;
      }
    });
    newPc.id = id;
    this.PcCollection.push(newPc);
    return of(newPc);
  }
  updatePc(PcForUpdating: PcInterface): Observable<any> {
    const pc = this.PcCollection.find(item => item.id === PcForUpdating.id);
    Object.assign(pc, PcForUpdating);
    return of(pc).pipe(delay(1200));
  }
}
