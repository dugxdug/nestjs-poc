import { Controller, Get, Req, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { Users } from '../interfaces/user.interface';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    // this.usersService.create(createUserDto);
  }

  @Get()
  findAll(@Req() request, @Res() res) {
    Promise.resolve(this.usersService.findAll()).then(response => {
      response.map(data => {
        res.status(HttpStatus.OK).json(data);
      });
    });
  }
}
