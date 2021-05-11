import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Student } from './student';
import { Assignment } from './assignment';

@Entity()
export class ClassRoom {
  @PrimaryGeneratedColumn()
  id: string;

  @Column('varchar', { length: 200 })
  name: string;

  @Column('varchar', { length: 100 })
  school: string;

  @OneToMany(() => Student, (student: Student) => student.classroom)
  students: Student[];

  @ManyToMany(() => Assignment)
  @JoinTable()
  assignments: Assignment[];
}
