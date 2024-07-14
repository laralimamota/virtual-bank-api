import { Body, Controller, Get, Post } from '@nestjs/common';
import { CheckingAccount } from './checkingAccount.model';
import { CheckingAccountService } from './checkingAccount.service';

@Controller('accounts/checking')
export class CheckingAccountController {
    constructor(private readonly checkingAccountService: CheckingAccountService) {}

    @Get()
    findAll(): CheckingAccount[] {
        return this.checkingAccountService.findAll();
    }

    @Post()
    create(@Body() data: Partial<CheckingAccount>) {
        return this.checkingAccountService.create(data);
    }
}
