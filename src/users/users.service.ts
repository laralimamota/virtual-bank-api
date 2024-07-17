import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { SequentialIdService } from 'src/utils/SequentialIdService';
import { ManagerService } from 'src/manager/manager.service';

@Injectable()
export class UsersService {
  private users: User[] = [];

  constructor(
    private sequentialIdService: SequentialIdService,
    private managerService: ManagerService,
  ) {}

  findAll(): User[] {
    return this.users;
  }

  create(userDto: CreateUserDto): void {
    const managerSelected = this.managerService.findOne(
      userDto.managerId.toString(),
    );

    const newUser = new User(
      this.sequentialIdService.generateId(),
      userDto.nome,
      userDto.cpf,
      userDto.adress,
      userDto.phone,
      userDto.income,
      managerSelected,
      [],
    );

    this.users.push(newUser);
  }
}
