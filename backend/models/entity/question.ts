import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { ClassRoom } from "./classroom";
import { Assignment } from "./assignment";

export type questionType = "Text" | "MCQ" | "Dichotomous";

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: string;

  @Column("text", { nullable: false })
  description: string;

  @Column("text", { nullable: true })
  choices: string;

  @Column({ nullable: false })
  type: questionType;

  @Column()
  correctAnswer: string;

  @ManyToOne(() => Assignment, (assignment: Assignment) => assignment.questions)
  assignment: Assignment[];
}
