import { User } from "src/users/interfaces/user.interface";

export abstract class Account {
    accountNumber: string;
    balance: number;
    user: User;

    constructor(
        accountNumber: string,
        balance: number,
        user: User,
    ) {this.accountNumber = accountNumber, this.balance = balance, this.user = user}

    abstract withdraw(amount: number):void;

    deposit(amount: number): void {
        this.balance += amount;
    }

    getBalance(): number {
        return this.balance;
  }
}