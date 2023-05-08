import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { CreateStudentDto, UpdateStudentDto } from 'src/dtos/student.dto';
import { StudentService } from 'src/services/student.service';

@Controller('students')
export class StudentController {
    constructor(private studentService: StudentService){}

    @Get()
    async findAll(){
        return await this.studentService.findAllStudents();
    }

    @Get('/:id')
    async findOne(@Param('id') id: number){
        return await this.studentService.findOne(id)
    }

    @Post()
    async create(@Body() studentDto: CreateStudentDto){
        return await this.studentService.create(studentDto)
    }

    @Patch('/:id')
    async updatePatch(@Param('id') id:number, @Body() body:UpdateStudentDto){
        return await this.studentService.updateByUsingPatch(id, body)
    }
    
    @Put('/:id')
    async updatePut(@Param('id') id:number, @Body() body:UpdateStudentDto){
        return await this.studentService.updateByUsingPut(id, body)
    }

    @Delete('/:id')
    async deleteStudent(@Param('id') id:number){
        return await this.studentService.remove(id);
    }
}
