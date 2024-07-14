import { CheckingAccountController } from './checkingAccount/checkingAccount.controller';
import { SavingsAccountController } from './savingsAccount/savingsAccount.controller';
import { Module } from '@nestjs/common';
import { SavingsAccountService } from './savingsAccount/savingsAccount.service';
import { CheckingAccountService } from './checkingAccount/checkingAccount.service';

@Module({
  controllers: [SavingsAccountController, CheckingAccountController],
  providers: [SavingsAccountService, CheckingAccountService]
})
export class AccountsModule {}
