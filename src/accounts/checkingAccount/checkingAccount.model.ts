import { User } from 'src/users/interfaces/user.interface';
import { Account } from '../abstract/account.abstract';
import { BadRequestException } from '@nestjs/common';

export class CheckingAccount extends Account {
  private readonly overdraftLimit: number = 100;

  constructor(accountNumber: string, balance: number, user: User) {
    if (balance <= 500) {
      throw new BadRequestException('The balance must be greater then 500');
    }
    super(accountNumber, balance, user);
  }

  withdraw(amount: number): void {
    if (amount <= 0) {
      throw new BadRequestException('Withdrawal amount must be positive.');
    }

    if (amount <= this.balance) {
      this.balance -= amount;
      return;
    }

    const remainingAmount = amount - this.balance;
    if (remainingAmount <= this.overdraftLimit) {
      this.balance -= amount;
      return;
    }

    throw new BadRequestException(
      'Withdrawal amount exceeds balance and overdraft limit.',
    );
  }
}
