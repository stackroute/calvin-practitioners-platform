import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityMemberManagementComponent } from './community-member-management.component';

describe('CommunityMemberManagementComponent', () => {
  let component: CommunityMemberManagementComponent;
  let fixture: ComponentFixture<CommunityMemberManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunityMemberManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityMemberManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
