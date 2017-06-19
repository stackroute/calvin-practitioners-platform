import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityDashboardComponent } from './community-dashboard.component';

describe('CommunityDashboardComponent', () => {
  let component: CommunityDashboardComponent;
  let fixture: ComponentFixture<CommunityDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunityDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
