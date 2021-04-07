import {
  Table,
  Column,
  Model,
  HasMany,
  PrimaryKey,
  CreatedAt,
  UpdatedAt,
  ForeignKey,
} from 'sequelize-typescript';
import { User } from '../../users/models/User';

@Table
export class FeedItem extends Model<FeedItem> {
  @Column
  // '!' indicates that it allows for null.
  public caption!: string;

  @Column
  public url!: string;

  // @CreatedAt and @UpdatedAt will set the option in the Postgres database to automatically set the date
  // when any row is created, or updated and is useful when sorting and filtering our data.

  @Column
  @CreatedAt
  public createdAt: Date = new Date();

  @Column
  @UpdatedAt
  public updatedAt: Date = new Date();
}
