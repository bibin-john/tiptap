import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailingParagraphComponent } from './trailing-paragraph.component';

describe('TrailingParagraphComponent', () => {
  let component: TrailingParagraphComponent;
  let fixture: ComponentFixture<TrailingParagraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrailingParagraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrailingParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
