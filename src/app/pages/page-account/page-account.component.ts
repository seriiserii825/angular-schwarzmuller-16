import { Component, OnInit } from '@angular/core';
import {AccountService} from 'src/app/components/account/account.service';
import {IAccount} from 'src/app/interfaces/IAccount';

@Component({
  selector: 'app-page-account',
  templateUrl: './page-account.component.html',
  styles: [],
  providers: [AccountService]
})
export class PageAccountComponent implements OnInit {
  accounts: IAccount[] = []

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.accounts = this.accountService.accounts;
  }
}
