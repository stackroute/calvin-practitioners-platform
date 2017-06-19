import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityNavbarComponent } from './community-navbar.component';

describe('CommunityNavbarComponent', () => {
  let component: CommunityNavbarComponent;
  let fixture: ComponentFixture<CommunityNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunityNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
