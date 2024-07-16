import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-character-length',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './character-length.component.html',
  styleUrl: './character-length.component.css',
})
export class CharacterLengthComponent {
  length: number = 10;

  @Output() lengthChange = new EventEmitter<number>();

  onLengthChange() {
    this.lengthChange.emit(this.length);
  }
}
