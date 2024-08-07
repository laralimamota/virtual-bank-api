import { User } from 'src/users/interfaces/user.interface';

export class CreateManagerDto {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}
