import { Component, input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  type = input('')
  label = '';
  value = '';
  placeholder = '';
}
