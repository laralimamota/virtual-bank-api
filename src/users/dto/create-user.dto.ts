import { User } from 'src/users/interfaces/user.interface';

export class CreateUserDto {
  nome: string;
  cpf: string;
  adress: string;
  phone: string;
  income: number;
  managerId: number;

  constructor(
    nome: string,
    cpf: string,
    adress: string,
    phone: string,
    income: number,
    managerId: number,
  ) {
    this.nome = nome;
    this.cpf = cpf;
    this.adress = adress;
    this.phone = phone;
    this.income = income;
    this.managerId = managerId;
  }
}
