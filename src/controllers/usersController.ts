import { Controller, Get, Req, Post, Body } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../interfaces/user.interface';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    // this.usersService.create(createUserDto);
  }

  @Get()
  findAll(@Req() request) {
    return this.usersService.findAll();
  }
}
