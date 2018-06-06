import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalKeyboardComponent } from './digital-keyboard.component';

describe('DigitalKeyboardComponent', () => {
  let component: DigitalKeyboardComponent;
  let fixture: ComponentFixture<DigitalKeyboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalKeyboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalKeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
