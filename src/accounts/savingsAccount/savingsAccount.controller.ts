import { Body, Controller, Get, Post } from '@nestjs/common';
import { SavingsAccount } from './savingsAccount.model';
import { SavingsAccountService } from './savingsAccount.service';

@Controller('accounts/checking')
export class SavingsAccountController {
  constructor(private readonly savingsAccountService: SavingsAccountService) {}

  @Get()
  findAll(): SavingsAccount[] {
    return this.savingsAccountService.findAll();
  }

  @Post()
  create(@Body() data: Partial<SavingsAccount>) {
    return this.savingsAccountService.create(data);
  }
}
