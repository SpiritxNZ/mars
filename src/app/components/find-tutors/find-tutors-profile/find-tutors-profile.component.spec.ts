import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindTutorsProfileComponent } from './find-tutors-profile.component';

describe('FindTutorsProfileComponent', () => {
  let component: FindTutorsProfileComponent;
  let fixture: ComponentFixture<FindTutorsProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindTutorsProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindTutorsProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
