import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-options',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './options.component.html',
  styleUrl: './options.component.css',
})
export class OptionsComponent {
  includeUpperCase: boolean = true;
  includeLowerCase: boolean = true;
  includeNumbers: boolean = true;
  includeSymbols: boolean = false;

  @Output() optionsChange = new EventEmitter<any>();

  onOptionChange() {
    this.optionsChange.emit({
      includeUpperCase: this.includeUpperCase,
      includeLowerCase: this.includeLowerCase,
      includeNumbers: this.includeNumbers,
      includeSymbols: this.includeSymbols,
    });
  }
}
