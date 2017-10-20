import { Users } from './user.entity';

export const usersProviders = [
  {
    provide: 'UsersRepository',
    useValue: Users,
  },
];
