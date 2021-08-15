import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  useLetters = false;
  useNumbers = false;
  useSymbols = false;
  passwordLength = 0;
  password = '';

  handleLengthChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) {
      this.passwordLength = parsedValue;
    } else {
      if (value === '') {
        this.passwordLength = 0;
      }
    }
  }

  handleUseLetters() {
    this.useLetters = !this.useLetters;
  }

  handleUseNumbers() {
    this.useNumbers = !this.useNumbers;
  }

  handleUseSymbols() {
    this.useSymbols = !this.useSymbols;
  }

  handleResetClick() {
    this.useLetters = false;
    this.useNumbers = false;
    this.useSymbols = false;
    this.passwordLength = 0;
    this.password = '';
  }

  handleClick() {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*?~*/';

    let validCharacters = '';

    if (this.useLetters) {
      validCharacters += letters;
    }

    if (this.useSymbols) {
      validCharacters += symbols;
    }

    if (this.useNumbers) {
      validCharacters += numbers;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.passwordLength; i++) {
      const index = Math.floor(Math.random() * validCharacters.length);
      generatedPassword += validCharacters[index];
    }

    this.password = generatedPassword;
  }
}
