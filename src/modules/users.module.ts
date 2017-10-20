import { Module } from '@nestjs/common';
import { UsersController } from '../controllers/userscontroller';
import { UsersService } from '../services/users.service';
import { usersProviders } from '../models/users.providers';
import { DatabaseModule } from './database.module';

@Module({
  modules: [DatabaseModule],
  controllers: [UsersController],
  components: [
    UsersService,
    ...usersProviders,
  ],
})
export class UsersModule {}
