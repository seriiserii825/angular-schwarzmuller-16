import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IAccount } from 'src/app/interfaces/IAccount';
import {LoggingService} from '../logging.service';

@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styles: [],
  providers: [LoggingService],
})
export class ListAccountComponent {
  @Output() emitAccount = new EventEmitter<{
    id: number;
    status: IAccount['status'];
  }>();
  @Input() accounts: IAccount[] = [];

  constructor(private loggingService: LoggingService) {}
  setStatus(account: IAccount, status: IAccount['status']): void {
    const result = {
      id: account.id,
      status,
    }
    this.emitAccount.emit(result);
    this.loggingService.logStatusChange(status);
  }
}
