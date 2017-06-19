import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityToolsWidgetComponent } from './community-tools-widget.component';

describe('CommunityToolsWidgetComponent', () => {
  let component: CommunityToolsWidgetComponent;
  let fixture: ComponentFixture<CommunityToolsWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunityToolsWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityToolsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
