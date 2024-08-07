import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateManagerDto } from './dto/create-manager.dto';
import { Manager } from './entities/manager.entity';
import { SequentialIdService } from 'src/utils/SequentialIdService';

@Injectable()
export class ManagerService {
  managers: Manager[] = [];

  constructor(private sequentialIdService: SequentialIdService) {}

  create(createManagerDto: CreateManagerDto): void {
    const manager = new Manager(
      createManagerDto.name,
      this.sequentialIdService.generateId(),
    );
    this.managers.push(manager);
  }

  findAll(): Manager[] {
    return this.managers;
  }

  findOne(id: string) {
    try {
      const manager = this.managers.find(
        (manager) => manager.id === Number(id),
      );

      if (!manager) {
        throw new NotFoundException('Invalid Id');
      }

      return manager;
    } catch (error) {
      throw new BadRequestException('Invalid params');
    }
  }
}
