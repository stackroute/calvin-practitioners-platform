import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptPageComponent } from './accept-page.component';

describe('AcceptPageComponent', () => {
  let component: AcceptPageComponent;
  let fixture: ComponentFixture<AcceptPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
