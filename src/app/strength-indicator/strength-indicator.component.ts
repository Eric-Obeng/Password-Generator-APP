import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-strength-indicator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './strength-indicator.component.html',
  styleUrl: './strength-indicator.component.css',
})
export class StrengthIndicatorComponent {
  @Input() password: string = '';
  strength: string = 'TOO WEAK!';
  strengthBar: string[] = [
    'transparent',
    'transparent',
    'transparent',
    'transparent',
  ];
  strengthColors: string[] = ['#F64A4A', '#FB7C58', '#F8CD65', '#A4FFAF'];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['password']) {
      this.calculateStrength();
    }
  }

  calculateStrength() {
    const length = this.password.length;
    const hasUpperCase = /[A-Z]/.test(this.password);
    const hasLowerCase = /[a-z]/.test(this.password);
    const hasNumbers = /[0-9]/.test(this.password);
    const hasSymbols = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(
      this.password
    );

    const criteria = [
      hasUpperCase,
      hasLowerCase,
      hasNumbers,
      hasSymbols,
    ].filter(Boolean).length;

    if (length >= 12 && criteria >= 3) {
      this.strength = 'STRONG';
      this.strengthBar = ['#A4FFAF', '#A4FFAF', '#A4FFAF', '#A4FFAF'];
    } else if (length >= 8 && criteria >= 2) {
      this.strength = 'MEDIUM';
      this.strengthBar = ['#F8CD65', '#F8CD65', '#F8CD65', 'transparent'];
    } else if (length >= 5 && criteria >= 1) {
      this.strength = 'WEAK';
      this.strengthBar = ['#FB7C58', '#FB7C58', 'transparent', 'transparent'];
    } else {
      this.strength = 'TOO WEAK!';
      this.strengthBar = [
        '#F64A4A',
        'transparent',
        'transparent',
        'transparent',
      ];
    }
  }

  getStrengthColor(index: number) {
    if (this.strengthBar[index]) {
      return this.strengthColors[index];
    }
    return 'transparent';
  }
}
