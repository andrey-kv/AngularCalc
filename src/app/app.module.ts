import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DigitalKeyboardComponent } from './digital-keyboard/digital-keyboard.component';
import { FormsModule } from '@angular/forms';
import { ActionKeyboardComponent } from './action-keyboard/action-keyboard.component';

@NgModule({
    declarations: [
        AppComponent,
        CalculatorComponent,
        DigitalKeyboardComponent,
        ActionKeyboardComponent
    ],
    imports: [
        BrowserModule, FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
