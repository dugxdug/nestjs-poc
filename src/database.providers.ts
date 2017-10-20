import { Sequelize } from 'sequelize-typescript';
import { User } from './models/user.entity';

export const databaseProviders = [
  {
    provide: 'SequelizeToken',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mssql',
        host: 'localhost',
        // port: 3306,
        username: 'test',
        password: 'training',
        database: 'LMS',
      });
      sequelize.addModels([User]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
