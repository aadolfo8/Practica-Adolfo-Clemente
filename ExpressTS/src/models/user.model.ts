import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  CreateDateColumn
} from "typeorm";
import bcrypt from "bcryptjs";
import * as dotenv from "dotenv";

dotenv.config();

@Entity("users")
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;
/* 
  @Column()
  @CreateDateColumn()
  createdAt: Date; */

  @BeforeInsert()
  async hashPassword():  Promise<void> {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  };

  async comparePasswords( candidatePassword: string) : Promise<boolean> {
    return await bcrypt.compare(candidatePassword, this.password);
  }
}
