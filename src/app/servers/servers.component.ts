import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  server_name = '';
  servers = ['Testserver', 'Testserver 2', 'Testserver 3'];
  server_details = false;
  log_output: string[] = [];

  toggleDetails() {
    this.log_output.push(new Date().getTime().toString());
    this.server_details = !this.server_details;
  }

  getBgColor(index: number) {
    return index > 4 ? 'lightblue' : '';
  }

  addServer() {
    this.servers.push(this.server_name);
    this.server_name = '';
  }
}
