import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @Column
  userName: string;

  @Column
  userId: number;

  @Column
  orgId: number;
}
