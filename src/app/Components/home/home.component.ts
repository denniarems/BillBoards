import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
// import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { BillBoard } from 'src/app/Interface/BillBoard';
import { GetDataService } from '../../Service/get-data.service';
import { AppService } from '../../Service/app.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class HomeComponent implements OnInit {
  billboard = [];
  billboard1 = [];
  constructor(
    public gds: GetDataService,
    public appservice: AppService,
    public router: Router
  ) {}

  ngOnInit() {
    this.appservice.currentbilldata.subscribe(bill => {
      this.billboard = bill;
    });
    this.gds.getApp().then(res => {
      const data = Object.entries(res);
      data.forEach(i => {
        const array = i[1];
        const board = Object.entries(array);
        this.gds.getimgurl(board[3][1][0]).then(link => {
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
          this.billboard1.push(bill);
        });
      });
      this.appservice.updatebilldata(this.billboard1);
    });
  }
}
