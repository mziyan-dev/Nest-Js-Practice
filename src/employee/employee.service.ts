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
  // GET all
  getAllEmployees() {
    return this.employees;
  }
  // GET by ID
  getEmployeeById(id: number) {
    const employee = this.employees.find((emp) => emp.id === id);
    if (!employee) throw new NotFoundException('Employee not found');
    return employee;
  }
  // POST
  createEmployee(data: { name: string, position: string }) {
    const newEmployee = {
      id: Date.now(),
      ...data
    };
    this.employees.push(newEmployee);
    return newEmployee;
  }
  //PUT
  updateEmployee(id: number, data: { name?: string, position?: string }) {
    const index = this.employees.findIndex((emp) => emp.id === id);
    if (index === -1) throw new NotFoundException('Employee not found');
    this.employees[index] = { ...this.employees[index], ...data };
    return this.employees[index];
  };

  //PATCH
  patchEmployee(id: number, data: Partial<{ name?: string, position?: string }>) {
    const employee = this.getEmployeeById(id);
    Object.assign(employee, data);
    return employee;
  }
  // DELETE
  deleteEmployee(id: number) {
    const index = this.employees.findIndex((emp) => emp.id === id);
    if (index === -1) throw new NotFoundException('Employee not found');
    const deletedEmployee = this.employees.splice(index, 1);
    return { message: 'Employee deleted successfully', employee: deletedEmployee[0] };
  }

};