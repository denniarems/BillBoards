import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// import { BillBoard } from '../Interface/BillBoard';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  private billdata = new BehaviorSubject([]);
  private ll = new BehaviorSubject([]);

  currentbilldata = this.billdata.asObservable();
  currentll = this.ll.asObservable();

  updatebilldata(data: any) {
    this.billdata.next(data);
  }
  updatell(data: any) {
    this.ll.next(data);
  }

  constructor() {}
}
