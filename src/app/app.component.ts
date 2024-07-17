import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DisplayPasswordComponent } from './display-password/display-password.component';
import { CharacterLengthComponent } from './character-length/character-length.component';
import { OptionsComponent } from './options/options.component';
import { StrengthIndicatorComponent } from './strength-indicator/strength-indicator.component';
import { GenerateButtonComponent } from './generate-button/generate-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    DisplayPasswordComponent,
    CharacterLengthComponent,
    OptionsComponent,
    StrengthIndicatorComponent,
    GenerateButtonComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  password: string = '';
  length: number = 10;
  includeUpperCase: boolean = true;
  includeLowerCase: boolean = true;
  includeNumbers: boolean = true;
  includeSymbols: boolean = false;

  generatePassword() {
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

    let validChars = '';
    if (this.includeUpperCase) validChars += upper;
    if (this.includeLowerCase) validChars += lower;
    if (this.includeNumbers) validChars += numbers;
    if (this.includeSymbols) validChars += symbols;

    if (validChars.length === 0) {
      alert('Please select at least one option to generate a password.');
      return;
    }

    this.password = Array.from({ length: this.length }, () =>
      validChars.charAt(Math.floor(Math.random() * validChars.length))
    ).join('');
  }

  onLengthChange(length: number) {
    this.length = length;
  }

  onOptionsChange(options: any) {
    this.includeUpperCase = options.includeUpperCase;
    this.includeLowerCase = options.includeLowerCase;
    this.includeNumbers = options.includeNumbers;
    this.includeSymbols = options.includeSymbols;
  }
}
