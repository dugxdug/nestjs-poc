import { Module } from '@nestjs/common';
import { CatsController } from '../controllers/catsController';
import { CatsService } from '../services/cats.service';
import { UsersController } from '../controllers/usersController';
import { UsersService } from '../services/users.service';
import { UsersModule } from '../modules/users.module';

@Module({
    modules: [UsersModule],
    controllers: [ CatsController ],
    components: [ CatsService ],
})
export class ApplicationModule {}
