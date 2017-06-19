import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityRoleManagementComponent } from './community-role-management.component';

describe('CommunityRoleManagementsComponent', () => {
  let component: CommunityRoleManagementComponent;
  let fixture: ComponentFixture<CommunityRoleManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunityRoleManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityRoleManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
