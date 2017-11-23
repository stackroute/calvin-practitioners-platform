import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityMembersWidgetComponent } from './community-members-widget.component';

describe('CommunityMembersWidgetComponent', () => {
  let component: CommunityMembersWidgetComponent;
  let fixture: ComponentFixture<CommunityMembersWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunityMembersWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityMembersWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
