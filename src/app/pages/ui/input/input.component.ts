import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() label: string = '';
  @Input() value: string = '';
  @Input() name: string = '';
  @Input() placeholder: string = '';

  @Output() valueChange = new EventEmitter<string>();

  onInput(event: Event) {
    this.value = (<HTMLInputElement>event.target).value;
    this.valueChange.emit(this.value);
  }
}
