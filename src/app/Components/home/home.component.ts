import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { BillBoard } from 'src/app/Interface/BillBoard';
import { GetDataService } from '../../Service/get-data.service';
import { AppService } from '../../Service/app.service';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class HomeComponent implements OnInit {
  billboard = [];
  billboard1 = [];
  selectedBackLight: any = '';
  selectedPlace: any = '';
  selectedId: any = '';
  selectedAvailable: any = '';
  spin = true;
  place = [];

  billboardFilter = {
    available: '',
    backLight: '',
    boardId: '',
    place: ''
  };
  constructor(
    public gds: GetDataService,
    public appservice: AppService,
    public router: Router,
    private breakpointObserver: BreakpointObserver
  ) {}
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.XSmall)
    .pipe(map(result => result.matches));
  remove_duplicates(arr: any[] | Iterable<unknown>) {
    const s = new Set(arr);
    const it = s.values();
    return Array.from(it);
  }
  ngOnInit() {
    this.appservice.currentbilldata.subscribe(bill => {
      this.billboard = bill;
      this.remove_duplicates(this.place);
    });
    this.gds.getApp().then(res => {
      const data = Object.entries(res);
      data.forEach(i => {
        const array = i[1];
        const board = Object.entries(array);
        this.gds
          .getimgurl(board[3][1][0])
          .then(link => {
            const bill: BillBoard = {
              available: board[1][1],
              backLight: board[2][1],
              imglink: link,
              boardId: board[4][1],
              facingDirection: board[5][1],
              height: board[6][1],
              id: board[7][1],
              latitude: board[8][1],
              longitude: board[9][1],
              place: board[12][1],
              sqfeetSize: board[13][1],
              width: board[14][1]
            };
            this.place.push(board[12][1]);
            this.billboard1.push(bill);
          })
          .then(() => (this.spin = !this.spin));
      });

      this.appservice.updatebilldata(this.billboard1);
    });
  }
  getLL(board) {
    this.appservice.updatell([board.longitude, board.latitude]);
  }
}
