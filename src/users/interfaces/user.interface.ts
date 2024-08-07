import { Account } from 'src/accounts/abstract/account.abstract';
import { Manager } from 'src/manager/entities/manager.entity';

export class User {
  id: number;
  nome: string;
  cpf: string;
  adress: string;
  phone: string;
  income: number;
  manager?: Manager;
  accounts?: Account[];

  constructor(
    id: number,
    nome: string,
    cpf: string,
    adress: string,
    phone: string,
    income: number,
    manager?: Manager,
    accounts?: Account[],
  ) {
    this.id = id;
    this.nome = nome;
    this.cpf = cpf;
    this.adress = adress;
    this.phone = phone;
    this.income = income;
    this.manager = manager || null;
    this.accounts = accounts || null;
  }
}
