import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { ClassRoom } from "./classroom";
import { Asset } from "./asset";

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: string;

  @Column("varchar", { length: 100, nullable: false })
  firstName: string;

  @Column("varchar", { length: 100, nullable: false })
  lastName: string;

  @Column("varchar", { length: 200 })
  email: string;

  @Column("varchar", { length: 100 })
  schoolId: string;

  @Column()
  avatar: string;

  @ManyToOne(() => ClassRoom, (classroom: ClassRoom) => classroom.students)
  classroom: ClassRoom;

  @OneToMany(() => Asset, (asset: Asset) => asset.student)
  assets: Asset[];
}
