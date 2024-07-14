import { Injectable, BadRequestException } from '@nestjs/common';
import { CheckingAccount } from './checkingAccount.model';

@Injectable()
export class CheckingAccountService {
    private readonly checkingAccounts: CheckingAccount[] = []; 

    create(data: Partial<CheckingAccount>): CheckingAccount {
        const newAccount = new CheckingAccount(data.accountNumber, data.balance, data.user);
        this.checkingAccounts.push(newAccount);
        return newAccount;
    }

    findAll(): CheckingAccount[] {
        return this.checkingAccounts;
    }

    findOne(accountNumber: string): CheckingAccount {
        const account = this.checkingAccounts.find(acc => acc.accountNumber === accountNumber);
        if (!account) {
            throw new BadRequestException('Could not find the account');
        }
        return account;
    }

    remove(accountNumber: string): void {
        const accountIndex = this.checkingAccounts.findIndex(acc => acc.accountNumber === accountNumber);
        if (accountIndex === -1) {
            throw new BadRequestException('Could not find the account');
        }
        this.checkingAccounts.splice(accountIndex, 1);
    }
}
