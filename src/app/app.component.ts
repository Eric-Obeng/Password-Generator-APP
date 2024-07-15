import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DisplayPasswordComponent } from "./display-password/display-password.component";
import { CharacterLengthComponent } from "./character-length/character-length.component";
import { OptionsComponent } from "./options/options.component";
import { StrengthIndicatorComponent } from "./strength-indicator/strength-indicator.component";
import { GenerateButtonComponent } from "./generate-button/generate-button.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DisplayPasswordComponent, CharacterLengthComponent, OptionsComponent, StrengthIndicatorComponent, GenerateButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'password-generator-app';
}
