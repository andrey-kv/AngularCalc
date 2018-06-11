import { Component, OnInit, Input } from '@angular/core';
import { CalcEngine } from './calc-engine';

@Component({
    selector: 'app-calculator',
    styleUrls: ['./calculator.component.css'],
    template: `
  <p>
  <!--{{ calcEngine.operand }} || {{ calcEngine.registr }} || {{ operationCode }} || <br> -->
  <label for="display">{{ labelTitle }}</label>
  <input [(ngModel)]="display" type="string" placeholder="Result" id="display">
  <button (click)="clear()">C</button>
  </p>
  <p>{{ result }}</p>
  <app-digital-keyboard
  (newDigit)="onInputDigit($event)">
  </app-digital-keyboard>
  <app-action-keyboard
  (operation) = "onOperation($event)">
  </app-action-keyboard>
  `
})

export class CalculatorComponent implements OnInit {

    calcEngine = new CalcEngine();
    display = '';
    result = '';
    labelTitle = 'Result:';
    operationPressed = false;
    operationCode = '=';

    constructor() { }

    ngOnInit() {
    }

    clear() {
        this.result = this.display;
        this.calcEngine.Clear();
        this.display = '';
    }

    onInputDigit(digit: string) {
        if (this.operationPressed) {
            this.calcEngine.SetRegistry();
            this.display = '';
        }

        this.display = this.display + digit;
        this.calcEngine.SetOperand(this.display);
        this.operationPressed = false;
    }

    onOperation(operation: string) {
        this.operationPressed = true;
        if ('+-*/'.includes(this.operationCode)) {
            this.display = this.calcEngine.Calculate2(this.operationCode);
        }
        this.operationCode = operation;
    }
}
