import { Component } from '@angular/core';

interface IServerElement {
  type: string;
  name: string;
  content: string;
}
@Component({
  selector: 'app-page-service',
  templateUrl: './page-service.component.html',
  styleUrls: ['./page-service.component.css'],
})
export class PageServiceComponent {
  server_elements: IServerElement[] = [
    {
      type: 'server',
      name: 'some',
      content: 'some',
    },
    {
      type: 'blueprint',
      name: 'some',
      content: 'some',
    },
    {
      type: 'server',
      name: 'some',
      content: 'some',
    },
  ];
}
