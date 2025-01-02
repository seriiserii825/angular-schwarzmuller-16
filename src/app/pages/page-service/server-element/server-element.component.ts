import { Component, Input } from '@angular/core';
import {IServerElement} from '../page-service.component';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent {
  @Input() element: IServerElement = {
    type: 'server',
    name: '',
    content: '',
  };
}
