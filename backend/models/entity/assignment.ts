import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { ClassRoom } from './classroom';
import { Question } from './question';

@Entity()
export class Assignment {
  @PrimaryGeneratedColumn()
  id: string;

  @Column('varchar', { length: 200 })
  name: string;

  @Column('datetime', { nullable: false })
  startDate: Date;

  @Column({ default: 60 })
  duration: number;

  @OneToMany(() => Question, (question: Question) => question.assignment)
  questions: Question[];
}
