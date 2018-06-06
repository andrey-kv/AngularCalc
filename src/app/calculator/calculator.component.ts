import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-calculator',
  styleUrls: ['./calculator.component.css'],
  template: `
  <p>
  <label for="display">{{ labelTitle }}</label>
  <input [(ngModel)]="display" type="string" placeholder="Result" id="display">
  <button (click)="clear()">C</button>
  </p>
  <p>{{ result }}</p>
  <app-digital-keyboard
  (newDigit)="onInputDigit($event)">
  </app-digital-keyboard>
  `
})

export class CalculatorComponent implements OnInit {

  @Input() digitInp: string;

  display = '';
  result = '';
  labelTitle = 'Result:';

  constructor() { }

  ngOnInit() {
  }

  clear() {
    this.result = this.display;
    this.display = '';
  }

  onInputDigit(digit: string) {
    this.display = this.display + digit;
  }
}
