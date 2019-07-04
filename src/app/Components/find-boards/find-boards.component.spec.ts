import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindBoardsComponent } from './find-boards.component';

describe('FindBoardsComponent', () => {
  let component: FindBoardsComponent;
  let fixture: ComponentFixture<FindBoardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindBoardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindBoardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
