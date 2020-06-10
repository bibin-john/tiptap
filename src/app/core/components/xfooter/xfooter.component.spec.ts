import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XfooterComponent } from './xfooter.component';

describe('XfooterComponent', () => {
  let component: XfooterComponent;
  let fixture: ComponentFixture<XfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
