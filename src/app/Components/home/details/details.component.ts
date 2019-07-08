import { Observable } from 'rxjs';
import {
  Component,
  OnInit,
  Input,
  Injectable,
  AfterViewChecked,
  OnChanges,
  DoCheck
} from '@angular/core';
import { AppService } from '../../../Service/app.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class DetailsComponent implements OnInit, DoCheck {
  billboard = [];
  lat = 9;
  lng = 76;
  ngDoCheck() {
    this.appservice.currentll.subscribe(ll => {
      this.lat = ll[0];
      this.lng = ll[1];
    });
  }
  constructor(public appservice: AppService) {}
  ngOnInit() {
    this.appservice.currentbilldata.subscribe(bill => {
      this.billboard = bill;
    });
  }
}
