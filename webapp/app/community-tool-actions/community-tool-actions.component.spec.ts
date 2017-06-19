import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityToolActionsComponent } from './community-tool-actions.component';

describe('CommunityToolActionsComponent', () => {
  let component: CommunityToolActionsComponent;
  let fixture: ComponentFixture<CommunityToolActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunityToolActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityToolActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
