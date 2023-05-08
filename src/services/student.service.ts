import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from 'src/entities/student.entity';
import { CreateStudentDto } from 'src/dtos/student.dto';



@Injectable()
export class StudentService {
    constructor(@InjectRepository(Student) private repo: Repository<Student>){}

    async findAllStudents(){
        return await this.repo.find(); // it will find only students list
    }

    async findAllStudentsWithCourse(){
        return await this.repo.find({relations:['courses']}); // it will find students and courses associated with student
    }

    async findOne(id: number){
        return await this.repo.find({where:{id}})
    }

    async create(studentDto:CreateStudentDto): Promise<Student>{
        const student = new Student();
        student.studentName = studentDto.studentName;
        student.email = studentDto.email;
        student.fatherName = studentDto.fatherName;
        student.motherName = studentDto.motherName;
        student.gender = studentDto.gender;
        student.dateOfBirth = studentDto.dateOfBirth;
        student.level = studentDto.level;
        student.department = studentDto.department;
        student.mobileNumber = studentDto.mobileNumber;
        return await this.repo.save(student);
    }

    async updateByUsingPut(id: number, attrs: Partial<Student>){
        const student = await this.repo.findOne({where:{id}});
        if (!student) {
            throw new NotFoundException('Student not found');
        }
        Object.assign(student, attrs);
        return this.repo.save(student);
    }

    async updateByUsingPatch(id: number, attrs: Partial<Student>){
        const student = await this.repo.findOne({where:{id}});
        if (!student) {
            throw new NotFoundException('Student not found');
        }
        Object.assign(student, attrs);
        return this.repo.save(student);
    }

    async remove(id: number){
        const student = await this.repo.findOne({where:{id}});
        if (!student) {
            throw new NotFoundException('Student not found');
        }
        return this.repo.delete(student);
    }
}
