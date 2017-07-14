import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolConfigPageComponent } from './tool-config-page.component';

describe('ToolConfigPageComponent', () => {
  let component: ToolConfigPageComponent;
  let fixture: ComponentFixture<ToolConfigPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolConfigPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolConfigPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
