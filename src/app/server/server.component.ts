import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  server_status = 'offline';

  constructor() {
    this.server_status = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.server_status;
  }

  getColor() {
    return this.server_status === 'online' ? 'green' : 'red';
  }
}
