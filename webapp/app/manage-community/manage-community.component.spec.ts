import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCommunityComponent } from './manage-community.component';

describe('CreateCommunityComponent', () => {
  let component: ManageCommunityComponent;
  let fixture: ComponentFixture<ManageCommunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCommunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
