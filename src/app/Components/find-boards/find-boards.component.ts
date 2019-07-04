import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  MatAutocompleteSelectedEvent,
  MatAutocomplete
} from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { BillBoard } from '../../Interface/BillBoard';
import { AppService } from 'src/app/Service/app.service';
import { GetDataService } from 'src/app/Service/get-data.service';
@Component({
  selector: 'app-find-boards',
  templateUrl: './find-boards.component.html',
  styleUrls: ['./find-boards.component.scss']
})
export class FindBoardsComponent implements OnInit {
  constructor() {}
  billboard = [];
  billboard1 = [];
  ngOnInit() {}
}
