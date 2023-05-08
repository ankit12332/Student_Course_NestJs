import { StudentController } from './../controllers/student.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentService } from './../services/student.service';
import { Module } from '@nestjs/common';
import { Student } from 'src/entities/student.entity';

@Module({
    imports:  [TypeOrmModule.forFeature([Student])],
    controllers: [
        StudentController, ],
    providers: [
        StudentService, ],
})
export class StudentModule {}
