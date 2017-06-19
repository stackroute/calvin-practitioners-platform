import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityRoleActionsComponent } from './community-role-actions.component';

describe('CommunityRoleActionsComponent', () => {
  let component: CommunityRoleActionsComponent;
  let fixture: ComponentFixture<CommunityRoleActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunityRoleActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityRoleActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
