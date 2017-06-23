import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCommunityToolsComponent } from './manage-community-tools.component';

describe('ManageCommunityToolsComponent', () => {
  let component: ManageCommunityToolsComponent;
  let fixture: ComponentFixture<ManageCommunityToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCommunityToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCommunityToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
