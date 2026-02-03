import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Employee } from './entities/employee.entity';
import { Profile, ProfileSchema} from './Schemas/profile.Schema';
import { EmployeeSchema } from './Schemas/employee.Schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Employee.name, schema: EmployeeSchema },
    { name: Profile.name, schema: ProfileSchema },
  ])],
  controllers: [EmployeeController],
  providers: [EmployeeService],
})
export class EmployeeModule {}
