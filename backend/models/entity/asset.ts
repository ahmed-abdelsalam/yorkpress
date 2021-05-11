import { Student } from "./student";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity()
export class Asset {
  @PrimaryGeneratedColumn()
  id: string;

  @Column("varchar", { length: 100 })
  name: string;

  @Column("varchar", { length: 100 })
  path: string;

  @ManyToOne(() => Student, (student: Student) => student.assets)
  student: Student;
}
