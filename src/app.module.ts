import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AccountsModule } from './accounts/accounts.module';

@Module({
  imports: [UsersModule, AccountsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
