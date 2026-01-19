import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Injectable()
export class EmployeeService {
private employees = [
  { id: 1, name: 'John Doe', position: 'Developer' },
  { id: 2, name: 'Jane Smith', position: 'Designer' },
  { id: 3, name: 'Bob Johnson', position: 'Manager' },
  { id: 4, name: 'Alice Brown', position: 'Manager' },
];
getAllEmployees() {
  return this.employees;
}
getEmployeeById(id: number) {
  const employee = this.employees.find(emp => emp.id === id);
  if (!employee) throw new NotFoundException('Employee not found');
  return employee;
}
createEmployee(data:{name:string, position:string}) {
     const newEmployee = {
      id : Date.now(),
      ...data
     };
     this.employees.push(newEmployee);
     return newEmployee;
}

}