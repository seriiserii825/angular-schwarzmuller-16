import { Component } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  server_name = '';
  server_content = '';

  getServerName(value: string) {
    this.server_name = value;
  }
  getServerContent(value: string) {
    this.server_content = value;
  }
}
