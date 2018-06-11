import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action-keyboard',
  styleUrls: ['./action-keyboard.component.css'],
  template: `
  <p>
  {{ currentAction }}
  </p>
  <button *ngFor="let n of firstRow;" (click)='buttonPressed(n)'>{{ n }}</button>
  <br>
  <button *ngFor="let n of secondRow" (click)='buttonPressed(n)'>{{ n }}</button>
  `
})

export class ActionKeyboardComponent implements OnInit {

  @Output() operation = new EventEmitter<string>();
  currentAction: string;

  firstRow = ['+', '-', '*', '/'];
  secondRow = ['=', '1/x', '\u00B1', '\u221A'];
  // thirdRow = ['9', '0', '.'];
  constructor() { }

  ngOnInit() {
  }

  buttonPressed(opCode: string): any {
    this.currentAction = opCode;
    this.operation.emit(opCode);
  }
}
