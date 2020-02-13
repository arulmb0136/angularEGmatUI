import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiHeadComponent } from './ui-head.component';

describe('UiHeadComponent', () => {
  let component: UiHeadComponent;
  let fixture: ComponentFixture<UiHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
