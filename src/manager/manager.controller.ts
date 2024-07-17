import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ManagerService } from './manager.service';
import { CreateManagerDto } from './dto/create-manager.dto';
import { UpdateManagerDto } from './dto/update-manager.dto';
import { Manager } from './entities/manager.entity';

@Controller('manager')
export class ManagerController {
  constructor(private readonly managerService: ManagerService) {}

  @Post()
  create(@Body() createManagerDto: CreateManagerDto): void {
    return this.managerService.create(createManagerDto);
  }

  @Get()
  findAll(): Manager[] {
    return this.managerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.managerService.findOne(id);
  }

  
  @Post('account')
  createAccount(@Body() createManagerDto: CreateManagerDto): void {
    return this.managerService.create(createManagerDto);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateManagerDto: UpdateManagerDto) {
  //   return this.managerService.update(+id, updateManagerDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.managerService.remove(+id);
  // }
}
