import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-character-length',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './character-length.component.html',
  styleUrl: './character-length.component.css',
})
export class CharacterLengthComponent {
  rangeValue: number = 10;
  // length: number = 10;

  @Output() lengthChange = new EventEmitter<number>();

  // @AfterViewInit() {
  //   this.updateSliderBackground();
  // }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.updateSliderBackground();
    });
  }

  @ViewChild('slider') slider!: ElementRef;
  updateSliderBackground(): void {
    const percentage =
      ((this.rangeValue - this.slider.nativeElement.min) /
        (this.slider.nativeElement.max - this.slider.nativeElement.min)) *
      100;
    const remainingPercentage = 100 - percentage;
    this.slider.nativeElement.style.background = `linear-gradient(to right, #A4FFAF ${percentage}%, black ${percentage}%, black ${remainingPercentage}%)`;
  }
  // this function sets current slider value rangevalue to be used as
  // password length
  onRangeInput(event: Event): void {
    this.updateSliderBackground();
    const inputElement = event.target as HTMLInputElement;
    this.rangeValue = Number(inputElement.value);
  }
}
function AfterViewInit(): (
  target: CharacterLengthComponent,
  propertyKey: ''
) => void {
  throw new Error('Function not implemented.');
}
