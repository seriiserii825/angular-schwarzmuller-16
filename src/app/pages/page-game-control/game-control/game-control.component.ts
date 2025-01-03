import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent {
  @Output() intervalFired = new EventEmitter<number>();
  @Output() intervalStopped = new EventEmitter<void>();

  startGame() {
    this.intervalFired.emit();
  }
  stopGame() {
    this.intervalStopped.emit();
  }
}
