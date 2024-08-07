import { User } from 'src/users/interfaces/user.interface';
import { Account } from '../abstract/account.abstract';
import { BadRequestException } from '@nestjs/common';

export class SavingsAccount extends Account {
  constructor(accountNumber: string, balance: number, user: User) {
    super(accountNumber, balance, user);
  }

  withdraw(amount: number): void {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      return;
    }
    throw new BadRequestException(
      'Withdrawal amount exceeds balance or is invalid.',
    );
  }
}
