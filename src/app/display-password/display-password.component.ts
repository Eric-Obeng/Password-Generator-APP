import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-password',
  standalone: true,
  imports: [],
  templateUrl: './display-password.component.html',
  styleUrl: './display-password.component.css',
})
export class DisplayPasswordComponent {
  @Input() password: string = '';

  copiedMessage: string = '';

  copyPassword() {
    navigator.clipboard.writeText(this.password);
    this.copiedMessage = 'COPIED';
    setTimeout(() => {
      this.copiedMessage = '';
    }, 2000);
  }
}
