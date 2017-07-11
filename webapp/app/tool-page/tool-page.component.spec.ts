import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolPageComponent } from './tool-page.component';

describe('ToolPageComponent', () => {
  let component: ToolPageComponent;
  let fixture: ComponentFixture<ToolPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
