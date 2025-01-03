import { Component, Input } from '@angular/core';
import { IAccount } from 'src/app/interfaces/IAccount';
import { LoggingService } from '../logging.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styles: [],
  providers: [LoggingService],
})
export class ListAccountComponent {
  @Input() accounts: IAccount[] = [];

  constructor(
    private loggingService: LoggingService,
    private accountService: AccountService
  ) {}
  setStatus(account: IAccount, status: IAccount['status']): void {
    const result = {
      id: account.id,
      status,
    };
    this.accountService.changeStatus(result)
    this.loggingService.logStatusChange(status);
  }
}
