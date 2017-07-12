import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityToolManagementComponent } from './community-tool-management.component';

describe('CommunityToolManagementComponent', () => {
  let component: CommunityToolManagementComponent;
  let fixture: ComponentFixture<CommunityToolManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunityToolManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityToolManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
