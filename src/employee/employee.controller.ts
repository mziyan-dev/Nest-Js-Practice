import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) { }
  @Get()
  GetEmployee() {
    return this.employeeService.getAllEmployees();
  }
  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.employeeService.getEmployeeById(Number(id));
  }
  @Post()
  create(@Body() body: { name: string; position: string }) {
    return this.employeeService.createEmployee(body);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() body: { name?: string; position?: string }) {
    return this.employeeService.updateEmployee(Number(id), body);
  }

  @Patch(':id')
  patch(@Param('id') id: string, @Body() body: Partial<{ name?: string; position?: string }>) {
    return this.employeeService.patchEmployee(Number(id), body);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeeService.deleteEmployee(Number(id));
  }
};
