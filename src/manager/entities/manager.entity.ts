import { BadRequestException } from '@nestjs/common';
import { Account } from 'src/accounts/abstract/account.abstract';
import { CheckingAccount } from 'src/accounts/checkingAccount/checkingAccount.model';
import { SavingsAccount } from 'src/accounts/savingsAccount/savingsAccount.model';
import { User } from 'src/users/interfaces/user.interface';

export class Manager {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }

  createAccount(
    user: User,
    balance: number,
    type: string,
    accountNumber: string,
  ): void {
    let newAccount: Account;
    if (type == 'CHECKING') {
      newAccount = new CheckingAccount(accountNumber, balance, user);
    } else if (type == 'SAVINGS') {
      newAccount = new SavingsAccount(accountNumber, balance, user);
    } else {
      throw new BadRequestException('Invalid account type');
    }

    user.accounts.push(newAccount);
  }
}
