import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleActionsComponent } from './role-actions.component';

describe('RoleActionsComponent', () => {
  let component: RoleActionsComponent;
  let fixture: ComponentFixture<RoleActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
