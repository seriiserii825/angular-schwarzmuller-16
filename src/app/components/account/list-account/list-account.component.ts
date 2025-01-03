import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IAccount } from 'src/app/interfaces/IAccount';

@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styles: [],
})
export class ListAccountComponent {
  @Output() emitAccount = new EventEmitter<{
    id: number;
    status: IAccount['status'];
  }>();
  @Input() accounts: IAccount[] = [];

  setStatus(account: IAccount, status: IAccount['status']): void {
    const result = {
      id: account.id,
      status,
    }
    this.emitAccount.emit(result);
  }
}
