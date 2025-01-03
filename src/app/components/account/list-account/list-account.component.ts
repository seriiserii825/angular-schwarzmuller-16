import { Component, Input } from '@angular/core';
import {IAccount} from 'src/app/interfaces/IAccount';

@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styles: [],
})
export class ListAccountComponent {
  @Input() accounts: IAccount[] = [];
}
