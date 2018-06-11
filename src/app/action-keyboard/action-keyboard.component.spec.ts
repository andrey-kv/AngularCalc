import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionKeyboardComponent } from './action-keyboard.component';

describe('ActionKeyboardComponent', () => {
  let component: ActionKeyboardComponent;
  let fixture: ComponentFixture<ActionKeyboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionKeyboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionKeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
