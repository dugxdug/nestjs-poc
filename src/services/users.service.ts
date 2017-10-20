import { Component, Inject } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { Model } from 'sequelize-typescript';
import { User } from '../models/user.entity';

@Component()
  export class UsersService {
    constructor(
      @Inject('UsersRepository') private readonly usersRepository: typeof Model,
    ) {}

    private readonly users: User[] = [];

    create(user: User) {
      this.users.push(user);
    }

    async findAll(): Promise<User[]> {
      return await this.usersRepository.findAll<User>();
    }
  }
