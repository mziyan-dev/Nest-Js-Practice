import { Injectable, NotFoundException } from '@nestjs/common';
import { Employee } from './Schemas/employee.Schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Profile } from './Schemas/profile.Schema';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel(Employee.name) private employeeModel: Model<Employee>,
    @InjectModel(Profile.name) private profileModel: Model<Profile>
  ) {}


    async createEmployee(): Promise<Employee> {
    const profile = await new this.profileModel({
      age: 30,
      qualification: 'MBA',
    }) .save();
    const employee = await new this.employeeModel({
      name: 'John Doe',
      profile: profile._id,
    })
    return employee.save();
  }
     async findAll(): Promise<Employee[]> { 
      return this.employeeModel.find().populate('profile').exec();
      }
      

}




  //   getAllEmployees() {
  //     return this.employeeModel.find();
  //   }
  //   // GET by ID
  //   getEmployeeById(id: number) {
  //     const employee = this.employees.find((emp) => emp.id === id);
  //     if (!employee) throw new NotFoundException('Employee not found');
  //     return employee;
  //   }
  //   // POST

  //   this.employees.push(newEmployee);
  //   return newEmployee;
  // }
  // //PUT
  // updateEmployee(id: number, data: { name?: string, position?: string }) {
  //   const index = this.employees.findIndex((emp) => emp.id === id);
  //   if (index === -1) throw new NotFoundException('Employee not found');
  //   this.employees[index] = { ...this.employees[index], ...data };
  //   return this.employees[index];
  // };

  // //PATCH
  // patchEmployee(id: number, data: Partial<{ name?: string, position?: string }>) {
  //   const employee = this.getEmployeeById(id);
  //   Object.assign(employee, data);
  //   return employee;
  // }
  // // DELETE
  // deleteEmployee(id: number) {
  //   const index = this.employees.findIndex((emp) => emp.id === id);
  //   if (index === -1) throw new NotFoundException('Employee not found');
  //   const deletedEmployee = this.employees.splice(index, 1);
  //   return { message: 'Employee deleted successfully', employee: deletedEmployee[0] };
  // }

