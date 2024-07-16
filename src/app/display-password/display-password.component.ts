import { Component } from '@angular/core';

@Component({
  selector: 'app-display-password',
  standalone: true,
  imports: [],
  templateUrl: './display-password.component.html',
  styleUrl: './display-password.component.css',
})
export class DisplayPasswordComponent {
  password: string = 'Eric';

  copyPassword() {
    navigator.clipboard.writeText(this.password);
    alert('Password copied');
  }
}
