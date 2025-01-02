import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css']
})
export class BtnComponent {
  @Input() color: 'white' = 'white';
  @Input() background: 'blue' | 'red' | 'green' | 'yellow' = 'blue';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() type: 'submit' | 'button' = 'button';

  setClasses(){
    let class_atrr = '';
    if (this.size === 'small') {
      class_atrr += 'px-2 py-1 text-xs ';
    }
    if (this.size === 'medium') {
      class_atrr += 'px-4 py-2 text-sm ';
    }
    if (this.size === 'large') {
      class_atrr += 'px-6 py-3 text-base ';
    }
    if (this.color === 'white') {
      class_atrr += 'text-white ';
    }else{
      class_atrr += 'text-black ';
    }
    if (this.background === 'blue') {
      class_atrr += 'bg-blue-500 hover:bg-blue-700 ';
    }
    if (this.background === 'red') {
      class_atrr += 'bg-red-500 hover:bg-red-700 ';
    }
    if (this.background === 'green') {
      class_atrr += 'bg-green-500 hover:bg-green-700 ';
    }
    if (this.background === 'yellow') {
      class_atrr += 'bg-yellow-500 hover:bg-yellow-700 ';
    }
    return class_atrr;
  }
}
