import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberInvitationComponent } from './member-invitation.component';

describe('MemberInvitationComponent', () => {
  let component: MemberInvitationComponent;
  let fixture: ComponentFixture<MemberInvitationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberInvitationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberInvitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
