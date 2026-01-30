import { Body, Controller, Post } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.Schema';

@Controller('student')
export class StudentController {
    constructor(private studentService: StudentService) {}

    @Post()

    async addStudent(@Body() data: Partial<Student>) {
        return this.studentService.createStudent(data);
    }
}
