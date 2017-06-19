import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityActivitylogsComponent } from './community-activitylogs.component';

describe('CommunityActivitylogsComponent', () => {
  let component: CommunityActivitylogsComponent;
  let fixture: ComponentFixture<CommunityActivitylogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunityActivitylogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityActivitylogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
