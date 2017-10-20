import { Module } from '@nestjs/common';
import { CatsController } from '../controllers/catsController';
import { CatsService } from '../services/cats.service';

@Module({
    modules: [],
    controllers: [ CatsController ],
    components: [ CatsService ],
})
export class ApplicationModule {}
