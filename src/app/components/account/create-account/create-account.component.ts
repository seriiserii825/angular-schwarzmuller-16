import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';
import {AccountService} from '../account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styles: [],
  providers: [LoggingService],
})
export class CreateAccountComponent {
  constructor(private loggingService: LoggingService, private accountService: AccountService) {}
  account_name: string = '';
  options = ['active', 'inactive', 'unknown'];
  account_status: 'active' | 'inactive' | 'unknown' = 'active';
  accountName(value: string) {
    this.account_name = value;
  }
  changeStatus(event: Event) {
    this.account_status = (<HTMLSelectElement>event.target).value as
      | 'active'
      | 'inactive'
      | 'unknown';
    this.loggingService.logStatusChange(this.account_status);
  }
  createAccount() {
    this.accountService.createAccount({
      id: new Date().getTime(),
      name: this.account_name,
      status: this.account_status,
    })
    this.account_name = '';
    this.account_status = 'active';
  }
}
