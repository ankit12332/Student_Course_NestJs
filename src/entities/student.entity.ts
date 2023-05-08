import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Course } from './course.entity';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  studentName: string;

  @Column()
  email: string;

  @Column()
  fatherName: string;

  @Column()
  motherName: string;

  @Column()
  gender: string;

  @Column({ type: 'date' }) // format YYYY-MM-DD
  dateOfBirth: Date;

  @Column()
  level: string;

  @Column()
  department: string;

  @Column({ type: 'bigint' }) //bigint is a data type. This will allow it to store larger integer values.
  mobileNumber: number;

  @OneToMany(() => Course, course => course.student)
  courses: Course[];
}
