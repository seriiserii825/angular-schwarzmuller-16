import { Component } from '@angular/core';

export interface IServerElement {
  type: 'server' | 'blueprint';
  name: string;
  content: string;
}
@Component({
  selector: 'app-page-service',
  templateUrl: './page-service.component.html',
  styleUrls: ['./page-service.component.css'],
})
export class PageServiceComponent {
  server_elements: IServerElement[] = [];

  onServerAdded(event_data: { name: string; content: string }) {
    this.server_elements.push({
      type: 'server',
      name: event_data.name,
      content: event_data.content,
    });
  }
  onBlueprintAdded(event_data: { name: string; content: string }) {
    this.server_elements.push({
      type: 'blueprint',
      name: event_data.name,
      content: event_data.content,
    });
  }
}
