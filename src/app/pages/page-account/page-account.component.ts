import { Component } from '@angular/core';
import { IAccount } from 'src/app/interfaces/IAccount';

@Component({
  selector: 'app-page-account',
  templateUrl: './page-account.component.html',
  styles: [],
})
export class PageAccountComponent {
  accounts: IAccount[] = [
    {
      id: 1,
      name: 'Account 1',
      status: 'active',
    },
    {
      id: 2,
      name: 'Account 2',
      status: 'inactive',
    },
    {
      id: 3,
      name: 'Account 3',
      status: 'unknown',
    },
  ];
  createAccount(account: IAccount) {
    this.accounts.push(account);
  }
  changeStatus(result: {id: number, status: IAccount['status']}): void {
    this.accounts = this.accounts.map(account => {
      if (account.id === result.id) {
        account.status = result.status;
      }
      return account;
    });
  }
}
