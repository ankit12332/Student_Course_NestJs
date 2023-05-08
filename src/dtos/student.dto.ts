import { IsNotEmpty, IsString, IsEmail, IsDateString, IsNumber } from 'class-validator';

export class CreateStudentDto {
  @IsNotEmpty()
  @IsString()
  studentName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  fatherName: string;

  @IsNotEmpty()
  @IsString()
  motherName: string;

  @IsNotEmpty()
  @IsString()
  gender: string;

  @IsNotEmpty()
  @IsDateString()
  dateOfBirth: Date;

  @IsNotEmpty()
  @IsString()
  level: string;

  @IsNotEmpty()
  @IsString()
  department: string;

  @IsNotEmpty()
  @IsNumber()
  mobileNumber: number;
}

export class UpdateStudentDto {
  @IsString()
  studentName?: string;

  @IsEmail()
  email?: string;

  @IsString()
  fatherName?: string;

  @IsString()
  motherName?: string;

  @IsString()
  gender?: string;

  @IsDateString()
  dateOfBirth?: Date;

  @IsString()
  level?: string;

  @IsString()
  department?: string;

  @IsNumber()
  mobileNumber?: number;
}
