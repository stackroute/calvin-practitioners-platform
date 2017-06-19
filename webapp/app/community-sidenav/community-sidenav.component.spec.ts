import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunitySidenavComponent } from './community-sidenav.component';

describe('CommunitySidenavComponent', () => {
  let component: CommunitySidenavComponent;
  let fixture: ComponentFixture<CommunitySidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunitySidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunitySidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
