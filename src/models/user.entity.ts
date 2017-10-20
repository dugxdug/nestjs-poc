import { Table, Column, Model, PrimaryKey } from 'sequelize-typescript';

@Table
export class Users extends Model<Users> {
  @Column
  userName: string;

  @PrimaryKey @Column
  userId: number;

  @Column
  orgId: number;
}
