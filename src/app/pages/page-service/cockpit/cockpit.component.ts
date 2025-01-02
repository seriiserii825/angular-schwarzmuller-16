import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{
    name: string;
    content: string;
  }>();
  @Output() blueprintCreated = new EventEmitter<{
    name: string;
    content: string;
  }>();

  server_name = '';
  server_content = '';

  getServerName(value: string) {
    this.server_name = value;
  }
  getServerContent(value: string) {
    this.server_content = value;
  }
  buttonDisabled() {
    return this.server_name === '' || this.server_content === '';
  }
  addServer() {
    this.serverCreated.emit({
      name: this.server_name,
      content: this.server_content,
    });
    this.resetServer();
  }
  addServerBlueprint() {
    this.blueprintCreated.emit({
      name: this.server_name,
      content: this.server_content,
    });
    this.resetServer();
  }
  resetServer(){
    this.server_name = '';
    this.server_content = '';
  }
}
