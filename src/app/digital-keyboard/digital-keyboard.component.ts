import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-digital-keyboard',
    styleUrls: ['./digital-keyboard.component.css'],
    template: `
  <p>
  {{ currentDigit }}
  </p>
  <p>
  <button *ngFor="let n of firstRow" (click)='digit(n)'>{{ n }}</button>
  <br>
  <button *ngFor="let n of secondRow" (click)='digit(n)'>{{ n }}</button>
  <br>
  <button *ngFor="let n of thirdRow" (click)='digit(n)'>{{ n }}</button></p>
  `
})

export class DigitalKeyboardComponent implements OnInit {

    @Output() newDigit = new EventEmitter<string>();
    currentDigit: string;
    firstRow = ['1', '2', '3', '4'];
    secondRow = ['5', '6', '7', '8'];
    thirdRow = ['9', '0', '.'];

    constructor() { }

    ngOnInit() {
    }

    digit(digit: string): any {
        this.currentDigit = digit;
        this.newDigit.emit(digit);
    }
}
