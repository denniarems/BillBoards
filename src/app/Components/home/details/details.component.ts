import {
  Component,
  OnInit,
  Input,
  Injectable,
  AfterViewChecked
} from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class DetailsComponent {
  @Input() board: object;
  constructor() {}
}
