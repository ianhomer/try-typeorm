import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

import { Group } from "./Group";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({nullable: true})
  address: string;

  @ManyToMany(() => Group)
  @JoinTable()
  categories: Group[];
}
