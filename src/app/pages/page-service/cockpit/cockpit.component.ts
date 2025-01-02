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
  addServer() {
    // this.server_elements.push({
    //   type: 'server',
    //   name: this.server_name,
    //   content: this.server_content
    // });
  }
  addServerBlueprint() {
    // this.server_elements.push({
    //   type: 'blueprint',
    //   name: this.server_name,
    //   content: this.server_content
    // });
  }
  buttonDisabled(){
    return this.server_name === '' || this.server_content === '';
  }
}
