import { Component, OnChanges } from '@angular/core';
import { AppService } from './Service/app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // constructor(public appservice: AppService) {}
  // ngOnChanges() {
  //   this.appservice.currentspin.subscribe(value => {
  //     this.spin = value;
  //   });
  // }
}
