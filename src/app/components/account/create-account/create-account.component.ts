import { Component, EventEmitter, Output } from '@angular/core';
import { IAccount } from 'src/app/interfaces/IAccount';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styles: [],
  providers: [LoggingService],
})
export class CreateAccountComponent {
  @Output() emitAccount = new EventEmitter<IAccount>();
  constructor(private loggingService: LoggingService) {}
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
    this.emitAccount.emit({
      id: new Date().getTime(),
      name: this.account_name,
      status: this.account_status,
    });
    this.account_name = '';
    this.account_status = 'active';
  }
}
