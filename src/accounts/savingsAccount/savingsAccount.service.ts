import { Injectable, BadRequestException } from '@nestjs/common';
import { SavingsAccount } from './savingsAccount.model';

@Injectable()
export class SavingsAccountService {
  private readonly savingsAccounts: SavingsAccount[] = [];
  create(data: Partial<SavingsAccount>): SavingsAccount {
    const newAccount = new SavingsAccount(
      data.accountNumber,
      data.balance,
      data.user,
    );
    this.savingsAccounts.push(newAccount);
    return newAccount;
  }

  findAll(): SavingsAccount[] {
    return this.savingsAccounts;
  }

  findOne(accountNumber: string): SavingsAccount {
    const account = this.savingsAccounts.find(
      (acc) => acc.accountNumber === accountNumber,
    );
    if (!account) {
      throw new BadRequestException('Could not find the account');
    }
    return account;
  }

  // Método para remover uma conta de poupança
  remove(accountNumber: string): void {
    const accountIndex = this.savingsAccounts.findIndex(
      (acc) => acc.accountNumber === accountNumber,
    );
    if (accountIndex === -1) {
      throw new BadRequestException('Could not find the account');
    }
    this.savingsAccounts.splice(accountIndex, 1);
  }
}
