import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolMarketPlaceComponent } from './tool-market-place.component';

describe('ToolMarketPlaceComponent', () => {
  let component: ToolMarketPlaceComponent;
  let fixture: ComponentFixture<ToolMarketPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolMarketPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolMarketPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
