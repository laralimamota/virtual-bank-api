import { UsersService } from './users.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    index():User[] {
        return this.usersService.findAll();
    }
    
    @Post()
    create(@Body() userDto: CreateUserDto): void {
        return this.usersService.create(userDto);
    }
}