import { Component, Inject } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { Model } from 'sequelize-typescript';
import { Users } from '../models/user.entity';

@Component()
  export class UsersService {
    constructor(
      @Inject('UsersRepository') private readonly usersRepository: typeof Model,
    ) {}

    private readonly users: Users[] = [];

    create(user: Users) {
      this.users.push(user);
    }

    async findAll(): Promise<Users[]> {
      return await this.usersRepository.findAll<Users>({where: {userId: 1}});
    }
  }
