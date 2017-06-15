import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWidgetsComponent } from './my-communities.component';

describe('UserWidgetsComponent', () => {
  let component: UserWidgetsComponent;
  let fixture: ComponentFixture<UserWidgetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserWidgetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
