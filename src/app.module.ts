import { Module } from '@nestjs/common';
import { UsersService } from './users/users.service';
import { ManagerService } from './manager/manager.service';
import { UsersController } from './users/users.controller';
import { ManagerController } from './manager/manager.controller';
import { SequentialIdService } from './utils/SequentialIdService';
import { CheckingAccountController } from './accounts/checkingAccount/checkingAccount.controller';
import { CheckingAccountService } from './accounts/checkingAccount/checkingAccount.service';
import { SavingsAccountController } from './accounts/savingsAccount/savingsAccount.controller';
import { SavingsAccountService } from './accounts/savingsAccount/savingsAccount.service';

@Module({
  controllers: [
    UsersController,
    ManagerController,
    SavingsAccountController,
    CheckingAccountController,
  ],
  providers: [
    UsersService,
    ManagerService,
    SequentialIdService,
    SavingsAccountService,
    CheckingAccountService,
    SequentialIdService,
  ],
})
export class AppModule {}
