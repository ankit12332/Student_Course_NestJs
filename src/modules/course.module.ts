import { CourseController } from './../controllers/course.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseService } from './../services/course.service';
import { Module } from '@nestjs/common';
import { Course } from 'src/entities/course.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Course])],
    controllers: [
        CourseController, ],
    providers: [
        CourseService, ],
})
export class CourseModule {}
