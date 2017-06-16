import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { manageCommunityComponent } from './manage-community.component';

describe('CreateCommunityComponent', () => {
  let component: manageCommunityComponent;
  let fixture: ComponentFixture<manageCommunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ manageCommunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(manageCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
