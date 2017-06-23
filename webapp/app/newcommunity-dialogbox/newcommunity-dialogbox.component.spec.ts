import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcommunityDialogboxComponent } from './newcommunity-dialogbox.component';

describe('NewcommunityDialogboxComponent', () => {
  let component: NewcommunityDialogboxComponent;
  let fixture: ComponentFixture<NewcommunityDialogboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcommunityDialogboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcommunityDialogboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
