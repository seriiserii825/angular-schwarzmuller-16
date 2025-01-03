import { Component } from '@angular/core';

@Component({
  selector: 'app-page-game-control',
  templateUrl: './page-game-control.component.html',
  styleUrls: ['./page-game-control.component.css'],
})
export class PageGameControlComponent {
  interval: any = 0;
  last_number: number = 0;
  interval_is_running: boolean = false;

  startGame() {
    if (this.interval_is_running) {
      console.log('Game already running');
      return;
    }
    this.interval = setInterval(() => {
      this.last_number++;
      console.log(this.last_number);
      this.interval_is_running = true;
    }, 1000);
  }
  stopGame() {
    if (!this.interval_is_running) {
      console.log('Game not running');
      return;
    }
    clearInterval(this.interval);
    this.interval_is_running = false;
    console.log('Game stopped');
  }
}
