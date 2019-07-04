import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// import { BillBoard } from '../Interface/BillBoard';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  // a: BillBoard;
  private billdata = new BehaviorSubject([]);
  currentbilldata = this.billdata.asObservable();
  updatebilldata(data: any) {
    this.billdata.next(data);
  }
  constructor() {}
}
