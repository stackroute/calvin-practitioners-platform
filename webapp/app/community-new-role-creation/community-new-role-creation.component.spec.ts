import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityNewRoleCreationComponent } from './community-new-role-creation.component';

describe('CommunityNewRoleCreationComponent', () => {
  let component: CommunityNewRoleCreationComponent;
  let fixture: ComponentFixture<CommunityNewRoleCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunityNewRoleCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityNewRoleCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
